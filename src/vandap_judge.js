// Chấm câu trả lời vấn đáp (JPD113): đổi lời nói/chữ gõ về cách đọc hiragana rồi so với bảng điểm `lad` trong file dữ liệu.
import { segment } from './gloss.js';

const D1 = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
function under10k(n) {
  let s = '';
  const th = Math.floor(n / 1000), hu = Math.floor(n / 100) % 10, te = Math.floor(n / 10) % 10, un = n % 10;
  if (th) s += th == 1 ? 'せん' : th == 3 ? 'さんぜん' : th == 8 ? 'はっせん' : D1[th] + 'せん';
  if (hu) s += hu == 1 ? 'ひゃく' : hu == 3 ? 'さんびゃく' : hu == 6 ? 'ろっぴゃく' : hu == 8 ? 'はっぴゃく' : D1[hu] + 'ひゃく';
  if (te) s += te == 1 ? 'じゅう' : D1[te] + 'じゅう';
  if (un) s += D1[un];
  return s;
}
export function numJa(n) {
  if (n === 0) return 'れい';
  if (n >= 1e8) return String(n);
  const man = Math.floor(n / 1e4), rest = n % 1e4;
  return (man ? under10k(man) + 'まん' : '') + under10k(rest);
}
const HOUR = ['', 'いち', 'に', 'さん', 'よ', 'ご', 'ろく', 'しち', 'はち', 'く', 'じゅう', 'じゅういち', 'じゅうに'];
const PUN = ['じゅっ', 'いっ', 'に', 'さん', 'よん', 'ご', 'ろっ', 'なな', 'はっ', 'きゅう'];
const FUN_P = [1, 3, 4, 6, 8, 10];
function minute(n) {
  if (n === 0) return 'れい';
  const u = n % 10, t = n - u;
  if (u === 0) return numJa(t).replace(/じゅう$/, 'じゅっ') + 'ぷん';
  return (t ? numJa(t) : '') + (u == 1 ? 'いっ' : u == 3 ? 'さん' : u == 4 ? 'よん' : u == 6 ? 'ろっ' : u == 8 ? 'はっ' : D1[u]) + (FUN_P.includes(u) ? 'ぷん' : 'ふん');
}
const DAYS = { 1: 'ついたち', 2: 'ふつか', 3: 'みっか', 4: 'よっか', 5: 'いつか', 6: 'むいか', 7: 'なのか', 8: 'ようか', 9: 'ここのか', 10: 'とおか', 14: 'じゅうよっか', 20: 'はつか', 24: 'にじゅうよっか' };
const MON = ['', 'いち', 'に', 'さん', 'し', 'ご', 'ろく', 'しち', 'はち', 'く', 'じゅう', 'じゅういち', 'じゅうに'];
const KAI = ['', 'いっかい', 'にかい', 'さんがい', 'よんかい', 'ごかい', 'ろっかい', 'ななかい', 'はっかい', 'きゅうかい', 'じゅっかい'];
function day(n) {
  if (DAYS[n]) return DAYS[n];
  let s = numJa(n); if (n % 10 === 7) s = s.replace(/なな$/, 'しち'); if (n % 10 === 9) s = s.replace(/きゅう$/, 'く');
  return s + 'にち';
}
const k2h = s => s.replace(/[\u30a1-\u30f6]/g, c => String.fromCharCode(c.charCodeAt(0) - 96));
export const nm = s => k2h(String(s).normalize('NFKC').toLowerCase()).replace(/[\s、。！？!?,.「」『』〜~・()（）…:：;；"'“”]/g, '');

const KN = { '〇': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9 };
function kan2n(s) {
  let tot = 0, sec = 0, cur = 0;
  for (const ch of s) {
    if (ch in KN) cur = cur * 10 + KN[ch];
    else if (ch === '十') { sec += (cur || 1) * 10; cur = 0; }
    else if (ch === '百') { sec += (cur || 1) * 100; cur = 0; }
    else if (ch === '千') { sec += (cur || 1) * 1000; cur = 0; }
    else if (ch === '万') { tot += (sec + cur || 1) * 1e4; sec = 0; cur = 0; }
  }
  return tot + sec + cur;
}
// Chuyển câu (có thể lẫn kanji / số Ả Rập) về cách đọc hiragana đã chuẩn hoá.
export function rd(raw) {
  let s = String(raw || '').normalize('NFKC');
  s = s.replace(/([〇一二三四五六七八九十百千万]+)(?=時|分|月|日|階|円|ドル|ドン)/g, m => String(kan2n(m)));
  s = s.replace(/(\d+)\s*(時|分|月|日|階|円|ドル|ドン)?/g, (m, d, u) => {
    const n = +d;
    if (u === '時') return (HOUR[n] ?? numJa(n)) + 'じ';
    if (u === '分') return minute(n);
    if (u === '月') return (MON[n] ?? numJa(n)) + 'がつ';
    if (u === '日') return day(n);
    if (u === '階') return KAI[n] ?? numJa(n) + 'かい';
    return numJa(n) + (u || '');
  });
  let out = s;
  try { out = segment(s).map(c => c.sp ? '' : (c.h || c.s)).join(''); } catch (e) { }
  return nm(out);
}

function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let p = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) { const c = [i]; for (let j = 1; j <= n; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = c; }
  return p[n];
}
export const sim = (a, b) => { const L = Math.max(a.length, b.length); return L ? 1 - lev(a, b) / L : 1; };

const ENDS = /(です|ます|でした|ました|ません|ありません|ですか)$/;
// x: một mục "pic". Trả về {s, c, why, hint, heard} (s = điểm /15).
export function judgeOne(x, raw) {
  const t = rd(raw), j = x.j || {}, lad = x.lad || [];
  const byCode = c => lad.find(e => e.c === c);
  const out = (e, extra) => ({ s: e.s, c: e.c, why: e.why, hint: e.hint, a: e.a, ...extra });
  if (!t) { const e = lad[lad.length - 1] || { s: 0, c: 'R0', why: 'Chưa nghe được gì', hint: '' }; return out(e, { empty: 1 }); }
  // 1) khớp (gần như) đúng với một câu trong bảng điểm
  let best = null, bs = 0;
  for (const e of lad) { if (/^\(/.test(e.a)) continue; const sc = sim(t, nm(e.a)); if (sc > bs) { bs = sc; best = e; } }
  if (best && bs >= 0.88) return out(best, { how: 'khớp mẫu' });
  if ((j.accept || []).some(a => { const n = nm(a); return t === n || sim(t, n) >= 0.9; })) return out(lad.find(e => e.s === 15) || { s: 15, c: null, why: 'Đủ ý, đúng mẫu câu', hint: '' }, { how: 'khớp đáp án' });
  const yes = /^(はい|ええ)/.test(t), no = /^(いいえ|ううん)/.test(t);
  // 2) câu hỏi có/không
  if (j.kind === 'YN') {
    if (!yes && !no) return out(byCode('R3') || lad[lad.length - 1], { how: 'thiếu はい/いいえ' });
    const want = j.truth === 'yes';
    if (yes !== want) return out(byCode('R2') || lad[lad.length - 1], { how: 'ngược với tranh' });
    const needOk = (j.need || []).every(g => g.some(w => t.includes(nm(w))));
    if (!needOk) return out(byCode('R2b') || byCode('R4') || lad[0], { how: 'đúng はい/いいえ nhưng thiếu ý' });
    return ENDS.test(t) ? out(lad.find(e => e.s === 15) || lad[0], { how: 'đủ ý' }) : out(byCode('R4') || lad[0], { how: 'câu cụt' });
  }
  // 3) câu hỏi mở: kiểm từ khoá bắt buộc
  const needOk = (j.need || []).every(g => g.some(w => t.includes(nm(w))));
  if (needOk) return ENDS.test(t) ? out(lad.find(e => e.s === 15) || lad[0], { how: 'đủ ý' }) : out(byCode('R4') || lad[0], { how: 'câu cụt' });
  return out(byCode('R2') || byCode('R1') || lad[lad.length - 1], { how: 'chưa đúng ý' });
}
export function judgeBest(x, alts) {
  let b = null; for (const a of alts) { const r = judgeOne(x, a); r.heard = a; if (!b || r.s > b.s) b = r; } return b;
}
