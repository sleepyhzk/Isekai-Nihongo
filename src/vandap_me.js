// Thông tin cá nhân của người học → đáp án mẫu tự điền cho các câu hỏi mở (Không tranh).
import { age, month, day, hour, money } from './jpnum.js';

const WD = ['げつようび', 'かようび', 'すいようび', 'もくようび', 'きんようび', 'どようび', 'にちようび'];
export const FIELDS = [
  { k: 'name', l: 'Tên', ph: 'ナム', kana: 1 },
  { k: 'country', l: 'Nước', ph: 'ベトナム', kana: 1 },
  { k: 'job', l: 'Nghề', ph: 'がくせい', kana: 1 },
  { k: 'school', l: 'Trường', ph: 'FPTだいがく' },
  { k: 'age', l: 'Tuổi (số)', ph: '20', num: 1 },
  { k: 'bm', l: 'Sinh nhật: tháng (số)', ph: '10', num: 1 },
  { k: 'bd', l: 'Sinh nhật: ngày (số)', ph: '15', num: 1 },
  { k: 'bw', l: 'Sinh nhật rơi vào thứ', sel: WD },
  { k: 'hobby', l: 'Sở thích', ph: 'えいが', kana: 1 },
  { k: 'brand', l: 'Hãng điện thoại', ph: 'アップル' },
  { k: 'price', l: 'Giá điện thoại (số)', ph: '5000000', num: 1 },
  { k: 'cur', l: 'Đơn vị tiền', sel: ['ドン', 'えん', 'ドル'] },
  { k: 'wake', l: 'Giờ dậy (1–12)', ph: '6', num: 1 },
  { k: 'bplace', l: 'Nơi ăn sáng', ph: 'うち', kana: 1 },
  { k: 'bfood', l: 'Món ăn sáng', ph: 'パン', kana: 1 },
];
const LAB = Object.fromEntries(FIELDS.map(f => [f.k, f.l.replace(/ \(.*?\)/, '')]));
const LATIN = /[A-Za-z]/;
const digits = s => String(s ?? '').replace(/[０-９]/g, d => String.fromCharCode(d.charCodeAt(0) - 65248)).replace(/[^0-9]/g, '');
const CURVI = { ドン: 'đồng', えん: 'yên', ドル: 'đô la' };

// Giá trị đã chuẩn hoá; ô để trống / sai định dạng → '' (coi như chưa nhập).
export function values(P) {
  const t = k => String(P[k] ?? '').trim(), kana = k => { const v = t(k); return LATIN.test(v) ? '' : v; };
  const n = k => digits(P[k]), N = k => n(k) ? +n(k) : 0;
  const V = {
    name: kana('name'), country: kana('country'), job: kana('job'), school: t('school'), hobby: kana('hobby'), brand: t('brand'),
    bplace: kana('bplace'), bfood: kana('bfood'), bw: t('bw'), cur: t('cur') || 'ドン',
    age: age(N('age')) || '', ageN: N('age'), month: month(N('bm')) || '', monthN: N('bm'), day: day(N('bd')) || '', dayN: N('bd'),
    hour: hour(N('wake')) || '', hourN: N('wake'), money: money(N('price')) || '', moneyN: N('price'),
  };
  V.curVi = CURVI[V.cur] || V.cur; V.moneyVi = V.moneyN ? V.moneyN.toLocaleString('vi-VN') : '';
  return V;
}

const R = {
  'KT113-B1-01': [['name'], V => [[`わたしは${V.name}です。`, `Tôi là ${V.name}.`], [`${V.name}です。`, `Là ${V.name}.`]]],
  'KT113-B1-03': [['country'], V => [[`${V.country}です。`, `Là nước ${V.country}.`], [`${V.country}じんです。`, `Là người ${V.country}.`]]],
  'KT113-B1-06': [['job'], V => [[`${V.job}です。`, `Là ${V.job}.`], V.school ? [`${V.school}の${V.job}です。`, `Là ${V.job} của ${V.school}.`] : [`わたしは${V.job}です。`, `Tôi là ${V.job}.`]]],
  'KT113-B1-11': [['age'], V => [[`${V.age}です。`, `${V.ageN} tuổi.`], [`わたしは${V.age}です。`, `Tôi ${V.ageN} tuổi.`]]],
  'KT113-B1-14': [['month', 'day'], V => [[`たんじょうびは${V.month}${V.day}です。`, `Sinh nhật là ngày ${V.dayN} tháng ${V.monthN}.`], [`${V.month}${V.day}です。`, `Ngày ${V.dayN} tháng ${V.monthN}.`]]],
  'KT113-B1-17': [['hobby'], V => [[`しゅみは${V.hobby}です。`, `Sở thích là ${V.hobby}.`], [`わたしのしゅみは${V.hobby}です。`, `Sở thích của tôi là ${V.hobby}.`]]],
  'ON-F01': [['name', 'country'], V => [[`わたしは ${V.name}です。 ${V.country}です。`, `Tôi là ${V.name}. Là nước ${V.country}.`], [`わたしは ${V.name}です。 おくには ${V.country}です。`, `Tôi là ${V.name}. Đất nước của tôi là ${V.country}.`]]],
  'ON-F02': [['school', 'age'], V => [[`わたしは ${V.school}の がくせいです。 ${V.age}です。`, `Tôi là sinh viên ${V.school}. ${V.ageN} tuổi.`], [`${V.school}の がくせいです。 ${V.age}です。`, `Là sinh viên ${V.school}. ${V.ageN} tuổi.`]]],
  'ON-F03': [['month', 'day', 'bw'], V => [[`わたしの たんじょうびは ${V.month} ${V.day}です。 ${V.bw}です。`, `Sinh nhật tôi là ngày ${V.dayN} tháng ${V.monthN}. Là ${V.bw}.`], [`${V.month} ${V.day}です。 ${V.bw}です。`, `Ngày ${V.dayN} tháng ${V.monthN}. Là ${V.bw}.`]]],
  'ON-F05': [['hour', 'bplace'], V => [[`ごぜん ${V.hour}に おきます。 ${V.bplace}で たべます。`, `Tôi dậy lúc ${V.hourN} giờ sáng. Ăn ở ${V.bplace}.`], [`まいあさ ${V.hour}に おきます。 ${V.bplace}で たべます。`, `Mỗi sáng dậy lúc ${V.hourN} giờ. Ăn ở ${V.bplace}.`]]],
  'ON-F09': [['brand', 'money'], V => [[`わたしの スマホは ${V.brand}の スマホです。 ${V.money}${V.cur}です。`, `Điện thoại của tôi là hãng ${V.brand}. Giá ${V.moneyVi} ${V.curVi}.`], [`${V.brand}の スマホです。 ${V.money}${V.cur}です。`, `Là điện thoại ${V.brand}. Giá ${V.moneyVi} ${V.curVi}.`]]],
  'ON-F10': [['bplace', 'bfood'], V => [[`${V.bplace}で たべます。 ${V.bfood}を たべます。`, `Ăn ở ${V.bplace}. Ăn ${V.bfood}.`], [`わたしは ${V.bplace}で ${V.bfood}を たべます。`, `Tôi ăn ${V.bfood} ở ${V.bplace}.`]]],
  'KT113-B3-24': [['bfood'], V => [[`${V.bfood}を たべます。`, `Ăn ${V.bfood}.`], [`まいあさ ${V.bfood}を たべます。`, `Mỗi sáng ăn ${V.bfood}.`]]],
};

// null: câu này không hỏi về bản thân · {ok:false, need:[…]}: còn thiếu thông tin · {ok:true, a:[[jp, vi], [jp, vi]], reg:[[từ, nghĩa]…]}
export function personalize(x, P) {
  const r = R[x.id]; if (!r) return null;
  const V = values(P), miss = r[0].filter(k => !V[k]);
  if (miss.length) return { ok: false, need: miss.map(k => LAB[k === 'month' ? 'bm' : k === 'day' ? 'bd' : k === 'money' ? 'price' : k === 'hour' ? 'wake' : k]) };
  const reg = [];
  if (V.name) reg.push([V.name, 'Tên của bạn']); if (V.country) reg.push([V.country, 'Quốc gia của bạn']);
  if (V.school) reg.push([V.school, 'Trường của bạn']); if (V.brand) reg.push([V.brand, 'Hãng điện thoại của bạn']);
  if (V.money) reg.push([V.money, V.moneyVi, 'số tiền']);
  return { ok: true, a: r[1](V), reg };
}
export const latinHints = P => FIELDS.filter(f => f.kana && LATIN.test(String(P[f.k] ?? ''))).map(f => f.l);
