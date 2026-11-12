// Cách đọc số trong tiếng Nhật: tuổi, tháng, ngày, giờ, phút, số tiền. Trả về kana (hiragana) hoặc null nếu số không hợp lệ.
const D1 = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
const int = n => { n = Math.floor(+n); return Number.isFinite(n) ? n : NaN; };

export function age(n) {
  n = int(n); if (!(n >= 1 && n <= 99)) return null;
  if (n == 20) return 'はたち';
  const t = Math.floor(n / 10), o = n % 10, tens = t == 0 ? '' : t == 1 ? 'じゅう' : D1[t] + 'じゅう';
  if (o == 0) return tens.replace(/じゅう$/, 'じゅっ') + 'さい';
  return tens + ({ 1: 'いっ', 2: 'に', 3: 'さん', 4: 'よん', 5: 'ご', 6: 'ろく', 7: 'なな', 8: 'はっ', 9: 'きゅう' })[o] + 'さい';
}

const MONTH = ['', 'いちがつ', 'にがつ', 'さんがつ', 'しがつ', 'ごがつ', 'ろくがつ', 'しちがつ', 'はちがつ', 'くがつ', 'じゅうがつ', 'じゅういちがつ', 'じゅうにがつ'];
export const month = n => MONTH[int(n)] || null;

const DAY = ['', 'ついたち', 'ふつか', 'みっか', 'よっか', 'いつか', 'むいか', 'なのか', 'ようか', 'ここのか', 'とおか'];
export function day(n) {
  n = int(n); if (!(n >= 1 && n <= 31)) return null;
  if (n <= 10) return DAY[n];
  if (n == 14) return 'じゅうよっか';
  if (n == 20) return 'はつか';
  if (n == 24) return 'にじゅうよっか';
  const t = Math.floor(n / 10), o = n % 10, tens = t == 1 ? 'じゅう' : D1[t] + 'じゅう';
  const ones = { 0: '', 1: 'いち', 2: 'に', 3: 'さん', 5: 'ご', 6: 'ろく', 7: 'しち', 8: 'はち', 9: 'く' }[o];
  return tens + ones + 'にち';
}

export function hour(n) {
  n = int(n); if (!(n >= 1 && n <= 12)) return null;
  return ({ 1: 'いち', 2: 'に', 3: 'さん', 4: 'よ', 5: 'ご', 6: 'ろく', 7: 'しち', 8: 'はち', 9: 'く', 10: 'じゅう', 11: 'じゅういち', 12: 'じゅうに' })[n] + 'じ';
}

export function minute(n) {
  n = int(n); if (!(n >= 1 && n <= 59)) return null;
  const t = Math.floor(n / 10), o = n % 10, tens = t == 0 ? '' : t == 1 ? 'じゅう' : D1[t] + 'じゅう';
  if (o == 0) return tens.replace(/じゅう$/, 'じゅっ') + 'ぷん';
  return tens + ({ 1: 'いっぷん', 2: 'にふん', 3: 'さんぷん', 4: 'よんぷん', 5: 'ごふん', 6: 'ろっぷん', 7: 'ななふん', 8: 'はっぷん', 9: 'きゅうふん' })[o];
}

const below1e4 = n => {
  const th = Math.floor(n / 1000), h = Math.floor(n / 100) % 10, t = Math.floor(n / 10) % 10, o = n % 10; let s = '';
  if (th) s += th == 1 ? 'せん' : ({ 2: 'にせん', 3: 'さんぜん', 4: 'よんせん', 5: 'ごせん', 6: 'ろくせん', 7: 'ななせん', 8: 'はっせん', 9: 'きゅうせん' })[th];
  if (h) s += ({ 1: 'ひゃく', 2: 'にひゃく', 3: 'さんびゃく', 4: 'よんひゃく', 5: 'ごひゃく', 6: 'ろっぴゃく', 7: 'ななひゃく', 8: 'はっぴゃく', 9: 'きゅうひゃく' })[h];
  if (t) s += t == 1 ? 'じゅう' : D1[t] + 'じゅう';
  if (o) s += D1[o];
  return s;
};
// Số tiền: 1 … 99.999.999 (không kèm đơn vị えん/ドン/ドル)
export function money(n) {
  n = int(n); if (!(n >= 1 && n < 1e8)) return null;
  const man = Math.floor(n / 10000), r = n % 10000;
  return (man ? (man == 1 ? 'いち' : below1e4(man)) + 'まん' : '') + (r ? below1e4(r) : '');
}

// Danh sách [chữ, cách đọc, nghĩa] để nạp sẵn vào từ điển phân tích từ.
export function staticWords() {
  const L = [];
  for (let n = 1; n <= 99; n++) { const k = age(n); L.push([k, k, n + ' tuổi']); }
  for (let n = 1; n <= 12; n++) { const k = month(n); L.push([k, k, 'Tháng ' + n]); const h = hour(n); L.push([h, h, n + ' giờ']); }
  for (let n = 1; n <= 31; n++) { const k = day(n); L.push([k, k, 'Ngày ' + n]); }
  for (let n = 1; n <= 59; n++) { const k = minute(n); L.push([k, k, n + ' phút']); }
  // Trăm, nghìn, vạn… (kể cả cách đọc đặc biệt: さんびゃく, ろっぴゃく, はっぴゃく, さんぜん, はっせん)
  const big = [];
  for (let h = 1; h <= 9; h++) big.push(h * 100, h * 1000);
  big.push(10000, 100000, 1000000, 10000000);
  for (const n of big) { const k = money(n); L.push([k, k, n.toLocaleString('vi-VN')]); }
  L.push(['いちおく', 'いちおく', '100.000.000']);
  return L;
}
