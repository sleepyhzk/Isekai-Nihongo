// Phân tích từ loại, cách đọc, romaji cho mọi câu/từ -> public/analysis.json (chạy tự động trước dev/build)
import kuromoji from "kuromoji";
import fs from "fs"; import path from "path"; import { fileURLToPath } from "url";
import { T } from "../src/data.js"; import { V, V2 } from "../src/vocab.js"; import { GR } from "../src/grammar.js"; import { roma, hira } from "./romaji.mjs";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const texts = new Set();
T.forEach(t => t[1].split("\n").forEach(l => texts.add(l.split("/")[0])));
[...V, ...V2].forEach(t => t[1].split("\n").forEach(l => { const p = l.split("|"); texts.add(p[0]); if (p[3]) texts.add(p[3]); }));
GR.forEach(l => l[1].forEach(p => p[3].forEach(e => texts.add(e[0]))));
const ok = x => x && x !== "*";
const POS = { 助詞:"Trợ từ", 助動詞:"Trợ động từ", 動詞:"Động từ", 形容詞:"Tính từ -i", 副詞:"Phó từ", 連体詞:"Liên thể từ", 接続詞:"Liên từ", 感動詞:"Thán từ", 接頭詞:"Tiền tố", フィラー:"Từ đệm" };
const NOUN = { 代名詞:"Đại từ", 形容動詞語幹:"Tính từ -na", 数:"Số từ", 接尾:"Hậu tố", 副詞可能:"Danh từ (thời gian)" };
const pv = t => POS[t.pos] || (t.pos === "名詞" ? NOUN[t.pos_detail_1] || "Danh từ" : t.pos);
try {
  kuromoji.builder({ dicPath: path.join(ROOT, "node_modules/kuromoji/dict") }).build((err, tk) => {
    if (err) { console.warn("Không tải được từ điển kuromoji:", err.message); return; }
    const out = {};
    for (const x of texts) {
      const toks = tk.tokenize(x).filter(t => t.pos !== "記号").map(t => {
        const rd = ok(t.reading) ? t.reading : t.surface_form, pr = ok(t.pronunciation) ? t.pronunciation : rd;
        const o = { s: t.surface_form, h: hira(rd), r: roma(pr), p: pv(t) };
        if (ok(t.basic_form) && t.basic_form !== t.surface_form) o.b = t.basic_form;
        return o;
      });
      out[x] = { r: toks.map(t => t.r).join(" "), t: toks };
    }
    fs.mkdirSync(path.join(ROOT, "public"), { recursive: true });
    fs.writeFileSync(path.join(ROOT, "public/analysis.json"), JSON.stringify(out));
    console.log(`Đã phân tích ${Object.keys(out).length} mục -> public/analysis.json`);
  });
} catch (e) { console.warn("Bỏ qua phân tích:", e.message); }
