// Shadowing › Ôn tập: ôn từng loại chữ (Hiragana / Katakana / Kanji) trên các đoạn L1–L3 của Luyện đọc và nội dung Vấn đáp.
export const OT = [['hira', 'あ', 'Hiragana'], ['kata', 'ア', 'Katakana'], ['kanji', '漢', 'Kanji']];
export const OTN = { hira: 'Hiragana', kata: 'Katakana', kanji: 'Kanji' };
const HI = /[ぁ-ゖ]/, KA = /[ァ-ヺ]/, KJ = /[㐀-䶿一-鿿々〆]/;

// Loại chữ của một từ: có chữ Hán → kanji; có katakana → kata; còn lại có hiragana → hira; ('' nếu là dấu câu/chữ Latin).
export const kind = s => KJ.test(s) ? 'kanji' : KA.test(s) ? 'kata' : HI.test(s) ? 'hira' : '';
// Câu có chứa loại chữ đang ôn hay không.
export const hasKind = (text, t) => t == 'kanji' ? KJ.test(text) : t == 'kata' ? KA.test(text) : HI.test(text);

const clean = t => String(t || '').replace(/[【】]/g, '').replace(/\s+/g, ' ').trim();

// Nội dung Vấn đáp → các "đoạn" cùng dạng với Luyện đọc: mỗi bài một đoạn gồm câu hỏi rồi các đáp án mẫu (bỏ đáp án còn chỗ trống ○○).
export async function loadVd() {
  const D = (await import('./vandap_data.json')).default, out = [];
  for (const [b, B] of Object.entries(D.bai)) {
    const items = [], seen = new Set(), add = (j, v) => { j = clean(j); if (!j || /[○◯]/.test(j) || seen.has(j)) return; seen.add(j); items.push({ sp: 'S', j, v: v || '' }); };
    for (const x of B.pic || []) { add(x.disp || x.read, x.vn); add(x.a1, x.n1); add(x.a2, x.n2); }
    for (const x of B.free || []) { add(x.cau_hoi_doc, x.nghia_vn); add(x.tra_loi_1, x.nghia_1); add(x.tra_loi_2, x.nghia_2); }
    if (items.length) out.push({ id: 'vd' + b, n: 'VĐ', title: b == 'on' ? 'Vấn đáp · Tự ôn nâng cao' : 'Vấn đáp · Bài ' + b, scene: 'school', items });
  }
  return out;
}

// Danh sách đoạn để ôn một loại chữ: L1–L3 (reading) + Vấn đáp; chỉ giữ câu có loại chữ đó, bỏ đoạn rỗng.
export function buildSets(reading, vd, t) {
  return [...reading.filter(x => /^L/.test(x.n)), ...(vd || [])]
    .map(p => ({ id: 'o' + t + p.id, n: p.n, title: p.title, scene: p.scene, si: null, items: p.items.filter(x => hasKind(x.j, t)) }))
    .filter(p => p.items.length);
}
