// Tách public/audio/index.json (định dạng cũ: một file lớn chứa mọi giọng) thành
// index-<giọng>.json cho từng giọng + index.json mới chỉ là danh sách giọng.
// Không đụng tới các file mp3. Chạy:  npm run splitindex
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "audio");
const ip = path.join(dir, "index.json");
if (!fs.existsSync(ip)) { console.log("Không thấy", ip); process.exit(1); }
const j = JSON.parse(fs.readFileSync(ip, "utf8"));
if (j.voices) { console.log("index.json đã ở định dạng mới, không cần tách."); process.exit(0); }
fs.copyFileSync(ip, path.join(dir, "index.old.json.bak"));
const voices = {};
for (const [v, m] of Object.entries(j)) {
  if (!m || typeof m !== "object") continue;
  fs.writeFileSync(path.join(dir, `index-${v}.json`), JSON.stringify(m));
  voices[v] = Object.keys(m).length;
}
fs.writeFileSync(ip, JSON.stringify({ voices }));
console.log("Đã tách:", voices, "\nBản cũ lưu ở index.old.json.bak (xóa được sau khi chạy web ổn).");
