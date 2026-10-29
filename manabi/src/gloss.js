// Phân tích từ cho Shadowing: tách câu thành từng từ, kèm cách đọc, romaji, nghĩa tiếng Việt.
// Dùng từ điển tự soạn (vocab.js + bảng trợ từ/đuôi động từ bên dưới + EXTRA), không phụ thuộc kuromoji
// (kuromoji tách rất sai chữ kana thuần như かぞく → か·ぞ·く).
import { V, V2 } from "./vocab.js";
import { roma, hira } from "../scripts/romaji.mjs";
import { EXTRA_TEXT } from "./gloss_extra.js";

// [chữ, cách đọc (kana hoặc romaji khi ro=1), nghĩa / công dụng]
const FN = [
  ["は", "wa", "Trợ từ chủ đề: “thì, là” (đọc wa)", 1], ["が", "ga", "Trợ từ chỉ chủ ngữ; hoặc “nhưng”", 1], ["を", "o", "Trợ từ chỉ tân ngữ (đọc o)", 1],
  ["に", "ni", "Trợ từ: vào, ở, lúc (thời điểm, nơi tồn tại, đích đến)", 1], ["で", "de", "Trợ từ: ở (nơi làm việc gì), bằng (phương tiện)", 1], ["へ", "e", "Trợ từ chỉ hướng: đến (đọc e)", 1],
  ["と", "to", "Và, cùng với", 1], ["の", "no", "Của (nối hai danh từ)", 1], ["も", "mo", "Cũng", 1], ["や", "ya", "Và (liệt kê vài thứ tiêu biểu)", 1],
  ["から", "kara", "Từ (mốc bắt đầu); vì", 1], ["まで", "made", "Đến (mốc kết thúc)", 1], ["か", "ka", "Trợ từ nghi vấn: biến câu thành câu hỏi", 1],
  ["ね", "ne", "Nhỉ, nhé (tìm sự đồng ý)", 1], ["よ", "yo", "Đấy, nhé (nhấn mạnh thông tin)", 1], ["だけ", "dake", "Chỉ", 1], ["しか", "shika", "Chỉ (đi với phủ định)", 1],
  ["より", "yori", "Hơn, so với", 1], ["ぐらい", "gurai", "Khoảng", 1], ["くらい", "kurai", "Khoảng", 1], ["ずつ", "zutsu", "Mỗi… (chia đều)", 1], ["でも", "demo", "Nhưng; hoặc “chẳng hạn”", 1],
  ["ので", "node", "Vì (nêu lý do)", 1], ["けど", "kedo", "Nhưng", 1], ["けれど", "keredo", "Nhưng", 1], ["ながら", "nagara", "Vừa… vừa…", 1], ["など", "nado", "Vân vân", 1], ["とか", "toka", "Chẳng hạn như… (liệt kê)", 1],
  ["ば", "ba", "Nếu (thể điều kiện)", 1], ["たら", "tara", "Nếu / sau khi (thể điều kiện)", 1], ["なら", "nara", "Nếu là… thì", 1], ["ため", "tame", "Để, vì", 1], ["こと", "koto", "Việc, điều (danh từ hóa)", 1], ["の", "no", "Của", 1],
  ["です", "desu", "Là (đuôi câu lịch sự)", 1], ["でした", "deshita", "Đã là (quá khứ của です)", 1], ["でしょう", "deshou", "Có lẽ, đúng không?", 1], ["だ", "da", "Là (dạng thường)", 1], ["だった", "datta", "Đã là (dạng thường)", 1],
  ["じゃ", "ja", "Vậy thì (khẩu ngữ); = では", 1], ["では", "dewa", "Vậy thì; ở/ về mặt…", 1], ["じゃありません", "ja arimasen", "Không phải là (phủ định của です)", 1], ["ではありません", "dewa arimasen", "Không phải là (phủ định của です)", 1],
  ["じゃない", "janai", "Không phải là (thân mật)", 1], ["んです", "n desu", "Giải thích / nhấn mạnh lý do", 1], ["ん", "n", "Dạng rút gọn của の (giải thích)", 1], ["て", "te", "Thể て (nối câu, nhờ vả…)", 1], ["た", "ta", "Thể quá khứ", 1],
  ["ない", "nai", "Không (phủ định thân mật)", 1], ["なかった", "nakatta", "Đã không (quá khứ phủ định)", 1], ["ください", "kudasai", "Xin hãy, cho tôi…", 1], ["ませんか", "masen ka", "…không? (lời mời)", 1],
  ["ましょう", "mashou", "Cùng… nhé (rủ rê)", 1], ["ましょうか", "mashou ka", "… nhé? (đề nghị giúp)", 1],
  ["よう", "you", "Giống như, có vẻ (…ようです)", 1], ["ようです", "you desu", "Có vẻ, hình như", 1], ["だったら", "dattara", "Nếu là…", 1], ["ましたら", "mashitara", "Nếu… (lịch sự)", 1], ["でしたら", "deshitara", "Nếu là… (lịch sự)", 1],
  ["し", "shi", "Vừa… vừa… (liệt kê lý do)", 1], ["ところ", "tokoro", "Lúc, nơi; sắp/đang/vừa… (với ところです)", 1], ["ほう", "hou", "Phía, bên (…のほうが: …thì hơn)", 1], ["つもり", "tsumori", "Dự định", 1], ["ばかり", "bakari", "Chỉ toàn; vừa mới", 1], ["らしい", "rashii", "Có vẻ, nghe nói", 1], ["ほど", "hodo", "Đến mức; càng… càng…", 1],
  ["ありません", "arimasen", "Không có / không phải (phủ định lịch sự của あります・です)", 1], ["いけません", "ikemasen", "Không được (cấm đoán)", 1], ["かもしれません", "kamoshiremasen", "Có thể là…", 1], ["なりません", "narimasen", "(…ばなりません) Phải…", 1], ["やすい", "yasui", "Dễ…", 1], ["にくい", "nikui", "Khó…", 1], ["すぎ", "sugi", "Quá… (làm quá mức)", 1], ["すぎる", "sugiru", "Quá…", 1], ["な", "na", "Đuôi -な của tính từ khi bổ nghĩa danh từ", 1],
  ["たり", "tari", "…, … (liệt kê hành động)", 1], ["お", "o", "Tiền tố lịch sự (お～)", 1], ["ご", "go", "Tiền tố lịch sự (ご～)", 1], ["ご覧", "goran", "Xem (kính ngữ)", 1], ["とき", "toki", "Khi, lúc", 1], ["という", "to iu", "Gọi là, có nghĩa là", 1], ["ように", "you ni", "Để, sao cho", 1], ["ように", "you ni", "Để, sao cho", 1], ["たばかり", "ta bakari", "Vừa mới…", 1], ["たいです", "tai desu", "Muốn…", 1], ["も", "mo", "Cũng", 1],
  ["、", "", "", 1], ["。", "", "", 1], ["！", "", "", 1], ["？", "", "", 1], ["・", "", "", 1]
];
// Đuôi dùng để sinh dạng chia từ động từ ます và tính từ い
const MASU = [["ます", "lịch sự"], ["ません", "phủ định lịch sự"], ["ました", "quá khứ lịch sự"], ["ませんでした", "phủ định quá khứ lịch sự"], ["ましょう", "cùng… nhé"], ["ましょうか", "… nhé?"], ["ませんか", "… không? (mời)"], ["たいです", "muốn…"], ["たい", "muốn…"], ["ながら", "vừa… vừa…"]];
const I_ROW = { い: "い", き: "き", ぎ: "ぎ", し: "し", じ: "じ", ち: "ち", ぢ: "ぢ", に: "に", ひ: "ひ", び: "び", ぴ: "ぴ", み: "み", り: "り" };
const E_ROW = "えけげせぜてでねへべぺめれ";
const A_ROW = { い: "わ", き: "か", ぎ: "が", し: "さ", ち: "た", に: "な", び: "ば", み: "ま", り: "ら" };
const U_ROW = { い: "う", き: "く", ぎ: "ぐ", し: "す", ち: "つ", に: "ぬ", び: "ぶ", み: "む", り: "る" };
const TE = { い: ["って", "った"], ち: ["って", "った"], り: ["って", "った"], き: ["いて", "いた"], ぎ: ["いで", "いだ"], に: ["んで", "んだ"], び: ["んで", "んだ"], み: ["んで", "んだ"], し: ["して", "した"] };

const D = new Map(); let MAXL = 1;
const put = (s, e, over) => { if (!s) return; if (!over && D.has(s)) return; D.set(s, e); if (s.length > MAXL) MAXL = s.length; };
const rm = h => roma(hira(h));

const ICHI_STEM = new Set(["い", "み", "おき", "かり", "おり", "き", "でき", "あび", "たり", "おち", "しんじ", "すぎ", "あき"]);
const NOT_SURU = new Set(["おもいだします", "とおします", "もどします", "かえします", "のこします", "はなします", "おとします", "ころします", "なおします", "あそびます", "とおります", "ひっこします", "きをつけます"]);
const E_MAP = { い: "え", き: "け", ぎ: "げ", し: "せ", ち: "て", に: "ね", び: "べ", み: "め", り: "れ" };
const O_MAP = { い: "お", き: "こ", ぎ: "ご", し: "そ", ち: "と", に: "の", び: "ぼ", み: "も", り: "ろ" };
const PASS = [["れる", ""], ["れます", ""], ["れません", ""], ["れました", ""], ["れて", ""], ["れた", ""]];
const CAUS = [["せる", ""], ["せます", ""], ["せません", ""], ["せました", ""], ["せて", ""], ["せた", ""]];
function addForms(k, r, m) {
  const stemK = k.slice(0, -2), stemR = r.slice(0, -2), last = stemR.slice(-1);
  const add = (sK, sR, g) => { put(sK, { h: sR, m, g }); if (sK != sR) put(sR, { h: sR, m, g }); };
  for (const [suf, note] of MASU) add(stemK + suf, stemR + suf, note);
  if (stemK.length >= 2 || stemR.length >= 2) add(stemK, stemR, "thân động từ (bỏ ます)");
  add(stemK + "方", stemR + "かた", "cách làm");
  let cls = "";
  if (r.endsWith("します") && (r.length >= 6 || r == "します") && !NOT_SURU.has(r)) cls = "suru";
  else if (r == "きます" && k == "来ます") cls = "kuru";
  else if (E_ROW.includes(last)) cls = "ichi";
  else if (I_ROW[last]) cls = ICHI_STEM.has(stemR) && !(stemR == "おき" && !/^(起|お)/.test(k)) ? "ichi" : "godan";
  const many = (pK, pR, list, g) => { for (const [e, g2] of list) add(pK + e, pR + e, g2 || g); };
  if (cls == "ichi") {
    many(stemK, stemR, [["る", "thể từ điển"], ["ない", "phủ định"], ["なかった", "quá khứ phủ định"], ["なければ", "nếu không…"], ["なくて", "không… nên"], ["ないで", "đừng / mà không"], ["て", "thể て"], ["た", "quá khứ"], ["たら", "nếu / sau khi (たら)"], ["ている", "đang…"], ["れば", "nếu (thể ば)"], ["よう", "định làm (ý chí)"], ["たく", "muốn…"], ["たくない", "không muốn…"], ["たり", "…, … (liệt kê hành động)"]]);
    many(stemK + "られ", stemR + "られ", [["る", ""], ["ます", ""], ["ません", ""], ["ました", ""], ["て", ""], ["た", ""]], "bị động / khả năng");
    many(stemK + "させ", stemR + "させ", CAUS, "sai khiến (bắt, cho phép làm)");
  } else if (cls == "suru") {
    const nK = stemK.slice(0, -1), nR = stemR.slice(0, -1);
    many(nK, nR, [["する", "thể từ điển"], ["しない", "phủ định"], ["しなかった", "quá khứ phủ định"], ["しなければ", "nếu không…"], ["しなくて", "không… nên"], ["しないで", "đừng / mà không"], ["して", "thể て"], ["した", "quá khứ"], ["したら", "nếu / sau khi (たら)"], ["したり", "…, … (liệt kê hành động)"], ["している", "đang…"], ["すれば", "nếu (thể ば)"], ["しよう", "định làm (ý chí)"], ["しよう", "định làm (ý chí)"], ["できる", "có thể…"], ["できます", "có thể…"], ["できません", "không thể…"], ["できました", "đã có thể…"], ["できない", "không thể…"], ["しません", "phủ định lịch sự"]]);
    many(nK + "さ", nR + "さ", PASS.slice(0, 6).map(x => ["れ" + x[0].slice(1), ""]).map(x => [x[0], ""]), "bị động");
    many(nK + "さ", nR + "さ", CAUS, "sai khiến (bắt, cho phép làm)");
  } else if (cls == "kuru") {
    many("来", "こ", [["ない", "phủ định"], ["なかった", "quá khứ phủ định"], ["なければ", "nếu không…"], ["られる", "có thể đến"], ["られます", "có thể đến"]], "");
    for (const [a, b, g] of [["来る", "くる", "thể từ điển"], ["来て", "きて", "thể て"], ["来た", "きた", "quá khứ"], ["来れば", "くれば", "nếu (thể ば)"], ["来たら", "きたら", "nếu / sau khi (たら)"]]) add(a, b, g);
  } else if (cls == "godan" && U_ROW[last]) {
    const bK = stemK.slice(0, -1), bR = stemR.slice(0, -1), iku = r == "いきます", A = A_ROW[last], E = E_MAP[last], O = O_MAP[last];
    let te, ta;
    if (last == "し") { te = "して"; ta = "した"; } else if (iku) { te = "って"; ta = "った"; } else { [te, ta] = TE[last]; }
    const bT = last == "し" ? bK : bK, bTR = bR;
    many(bK, bR, [[U_ROW[last], "thể từ điển"], [A + "ない", "phủ định"], [A + "なかった", "quá khứ phủ định"], [A + "なければ", "nếu không…"], [A + "なくて", "không… nên"], [A + "ないで", "đừng / mà không"], [E + "ば", "nếu (thể ば)"], [te, "thể て"], [ta, "quá khứ"], [ta + "ら", "nếu / sau khi (たら)"], [ta + "り", "…, … (liệt kê hành động)"], [te + "いる", "đang…"], [O + "う", "định làm (ý chí)"], [E + "る", "có thể…"], [E + "ます", "có thể…"], [E + "ません", "không thể…"], [E + "ない", "không thể…"]]);
    many(bK + A, bR + A, PASS, "bị động");
    many(bK + A, bR + A, CAUS, "sai khiến (bắt, cho phép làm)");
  }
}
function addAdj(k, r, m) {
  if (k == "いい" || r == "いい") { for (const [e, g] of [["くない", "phủ định"], ["くて", "nối câu"], ["かった", "quá khứ"], ["くないです", "phủ định lịch sự"], ["ければ", "nếu"], ["く", "dạng trạng từ"]]) put("よ" + e, { h: "よ" + e, m, g }); return; }
  const sk = k.slice(0, -1), sr = r.slice(0, -1);
  for (const [e, g] of [["くない", "phủ định"], ["くないです", "phủ định lịch sự"], ["くありません", "phủ định lịch sự"], ["くて", "nối câu"], ["かった", "quá khứ"], ["かったです", "quá khứ lịch sự"], ["く", "dạng trạng từ"], ["ければ", "nếu"], ["そう", "có vẻ…"], ["さ", "danh từ hóa"]]) { put(sk + e, { h: sr + e, m, g }); if (sk != sr) put(sr + e, { h: sr + e, m, g }); }
}

let BUILT = false;
function build() {
  if (BUILT) return; BUILT = true;
  for (const [s, h, m, ro] of FN) put(s, { h, m, ro, fn: 1 }, true);
  const all = [...V, ...V2];
  const words = [];
  const extra = EXTRA_TEXT.split("\n").map(l => l.split("|")).filter(p => p[0] && p[1] && p[2]).map(p => [p[0], p[1], p[2]]);
  for (const lesson of all) for (const line of lesson[1].split("\n")) { const p = line.split("|"); if (p[0] && p[1] && p[2]) words.push([p[0], p[1], p[2]]); }
  for (const [k, r, m] of words) { put(k, { h: r, m }); if (k != r) put(r, { h: r, m }); }
  for (const [k, r, m] of extra) { put(k, { h: r, m }); if (k != r) put(r, { h: r, m }); }
  for (const [k, r, m] of [...words, ...extra]) {
    if (k.endsWith("ます") && r.endsWith("ます")) addForms(k, r, m);
    else if (k.endsWith("い") && r.endsWith("い") && !/[ぁ-ん]い$/.test("") ) addAdj(k, r, m);
  }
}
const NUM = { 〇: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
function kanjiNum(s) {
  let tot = 0, cur = 0, man = 0;
  for (const c of s) {
    if (c in NUM) cur = cur * 10 + NUM[c];
    else if (c == "十") { tot += (cur || 1) * 10; cur = 0; }
    else if (c == "百") { tot += (cur || 1) * 100; cur = 0; }
    else if (c == "千") { tot += (cur || 1) * 1000; cur = 0; }
    else if (c == "万") { man = (tot + cur || 1) * 10000; tot = 0; cur = 0; }
  }
  return man + tot + cur;
}
const CRO = { 才: "sai", 歳: "sai", 円: "en", 年: "nen", 時: "ji", 月: "gatsu", 階: "kai", 人: "nin", 時間: "jikan", 週間: "shuukan", ドル: "doru", ユーロ: "yuuro", 回: "kai", 枚: "mai", 冊: "satsu", 台: "dai", 個: "ko", 本: "hon", 年生: "nensei", 秒: "byou", 分: "fun" };
const CNT = [["ぐらい", ""], ["歳", "tuổi"], ["才", "tuổi"], ["人", "người"], ["日", "ngày"], ["月", "tháng"], ["年生", "sinh viên năm thứ"], ["年", "năm"], ["円", "yên"], ["ドル", "đô la"], ["ユーロ", "euro"], ["時間", "tiếng"], ["時", "giờ"], ["分", "phút"], ["秒", "giây"], ["週間", "tuần"], ["階", "tầng"], ["枚", "tờ/tấm"], ["冊", "quyển"], ["台", "chiếc (máy)"], ["個", "cái"], ["回", "lần"], ["本", "cây/chai"], ["つ", "cái (đếm chung)"], ["番", "số"], ["日間", "ngày"], ["歳", "tuổi"]].sort((a, b) => b[0].length - a[0].length);
const NUMRE = /^([0-9０-９]+|[〇一二三四五六七八九十百千万]+)/;
const KATA = /^[ァ-ヶー]+/;

// Trả về mảng { s: chữ, h: kana, ro: romaji, m: nghĩa, g: ghi chú ngữ pháp, fn: trợ từ }; { sp:1 } là dấu cách.
// Tách bằng quy hoạch động (ít ký tự lạ nhất, ít từ nhất) nên “はいくら” → は + いくら chứ không phải はい + くら.
export function segment(text) {
  build();
  const out = [];
  for (const part of text.split(/([ 　])/)) {
    if (part == " " || part == "　") { out.push({ sp: 1 }); continue; }
    if (part) segRun(part, out);
  }
  const res = [];
  for (const t of out) { const p = res[res.length - 1]; if (p && !p.sp && !t.sp && !p.m && !t.m && !p.fn && !t.fn && p.g == "" && t.g == "" && p.s.length < 6) { p.s += t.s; p.h += t.h; p.ro = p.h ? rm(p.h) : ""; } else res.push(t); }
  return res;
}
function segRun(w, out) {
  const n = w.length, INF = 1e9, cost = new Array(n + 1).fill(INF), back = new Array(n + 1).fill(null);
  cost[0] = 0;
  for (let i = 0; i < n; i++) {
    if (cost[i] >= INF) continue;
    const rest = w.slice(i);
    const relax = (L, c, mk) => { if (cost[i] + c < cost[i + L]) { cost[i + L] = cost[i] + c; back[i + L] = [i, mk]; } };
    for (let L = Math.min(MAXL, rest.length); L >= 1; L--) { const e = D.get(rest.slice(0, L)); if (e) relax(L, 1 - L * .001 + (e.fn && i == 0 ? .05 : 0), () => ({ s: rest.slice(0, L), h: e.ro ? "" : e.h || "", ro: e.ro ? e.h : (e.h ? rm(e.h) : ""), m: e.m || "", g: e.g || "", fn: e.fn })); }
    const nm = rest.match(NUMRE);
    if (nm) {
      const n0 = /^[0-9０-９]/.test(nm[0]) ? nm[0].replace(/[０-９]/g, d => String(d.charCodeAt(0) - 65248)) : String(kanjiNum(nm[0]));
      const after = rest.slice(nm[0].length); let cu = null;
      for (const [u, vi] of CNT) if (after.startsWith(u)) { cu = [u, vi]; break; }
      if (cu && cu[1]) relax(nm[0].length + cu[0].length, 1.05, () => ({ s: nm[0] + cu[0], h: "", ro: "", m: `${n0} ${cu[1]}`, ro: CRO[cu[0]] ? `${n0} ${CRO[cu[0]]}` : "", rawro: 1, g: "số + đơn vị đếm" }));
      relax(nm[0].length, 1.1, () => ({ s: nm[0], h: "", ro: "", m: n0, g: "số" }));
    }
    const km = rest.match(KATA);
    if (km) relax(km[0].length, 3, () => ({ s: km[0], h: km[0], ro: rm(km[0]), m: "", g: "từ mượn / tên riêng (katakana)" }));
    const c = rest[0];
    relax(1, 6, () => ({ s: c, h: /[ぁ-ん]/.test(c) ? c : "", ro: /[ぁ-ん]/.test(c) ? rm(c) : "", m: "", g: "" }));
  }
  const seq = []; let k = n;
  while (k > 0) { const [i, mk] = back[k]; seq.push(mk()); k = i; }
  seq.reverse().forEach(x => out.push(x));
}
export const WORD_MEANING = s => { build(); const e = D.get(s); return e && e.m ? e.m + (e.g && !e.fn ? " (" + e.g + ")" : "") : ""; };
export const wordRomaji = s => { build(); const e = D.get(s); return e && e.h ? (e.ro ? e.h : rm(e.h)) : ""; };
