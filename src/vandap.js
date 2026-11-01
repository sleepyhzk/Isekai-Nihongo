// 問答 · Vấn đáp (FE JPD113): có tranh / không tranh, nằm trong mục Shadowing.
import DATA from './vandap_data.json';
import { judgeBest } from './vandap_judge.js';
import { segment } from './gloss.js';

const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const br = s => esc(s).replace(/\n/g, '<br>');
const SR = typeof window != 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
const EXT = ['png', 'jpg', 'jpeg', 'webp'];
const ld = (k, d) => { try { return { ...d, ...JSON.parse(localStorage.getItem(k) || '{}') }; } catch (e) { return d; } };
const num = s => { const m = String(s).match(/(\d+)(?!.*\d)/); return m ? +m[1] : 0; };
const PU = /^[、。！？・「」]$/;
const rom = t => { try { return segment(t).filter(c => !c.sp && !PU.test(c.s)).map(c => c.ro || c.s).join(' '); } catch (e) { return ''; } };
const sv = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } };

// ctx: { $, say, stopSay, toast, BASE, shadow, setExit }
export function vandap(ctx) {
  const { $, say, stopSay, toast, BASE } = ctx;
  const st = ld('vdp', { b: '1', m: 'pic', k: 0 });
  const best = ld('vds', {});
  const O = ld('vdo', { j: 1, r: 0, v: 0, w: 1 });
  if (!DATA.bai[st.b]) st.b = '1';
  let rec = null, groups = [];

  const buildGroups = () => {
    const B = DATA.bai[st.b];
    if (st.m === 'pic') {
      const g = new Map();
      [...B.pic].sort((a, b) => num(a.pic) - num(b.pic) || num(a.id) - num(b.id)).forEach(x => { if (!g.has(x.pic)) g.set(x.pic, []); g.get(x.pic).push(x); });
      groups = [...g].map(([pic, qs]) => ({ pic, qs, label: pic.replace(/^B\d+-/, '') }));
    } else groups = [...B.free].sort((a, b) => num(a.id) - num(b.id)).map((x, i) => ({ pic: null, qs: [x], label: String(i + 1) }));
    st.k = Math.min(Math.max(0, st.k), groups.length - 1);
  };
  const gDone = g => g.qs.every(q => (best[q.id] || 0) >= 15);

  const stopRec = () => { if (rec) { try { rec.abort(); } catch (e) { } rec = null; } };
  ctx.setExit(() => { stopRec(); stopSay(); });

  const modeBtn = (m, ic, t, sm, on) => `<button class="shmb ${on ? 'on' : ''}" data-m="${m}"><span class="shi">${ic}</span><b>${t}</b><small>${sm}</small></button>`;
  function shell() {
    const B = DATA.bai;
    $('#app').innerHTML = `<div style="color:#f59e0b;font-size:12px">問答 · Vấn đáp</div><h1 class="sh-h">Vấn đáp · FE JPD113</h1>
<div class="shm">${modeBtn('d', '🗣', 'Hội thoại 2 người', '会話 · Nghe rồi nói theo vai A / B')}${modeBtn('p', '📖', 'Đoạn văn 1 người', '文章 · Mỗi bài một đoạn văn')}${modeBtn('r', '📝', 'Luyện đọc', '読み物 · Đoạn ngắn theo bài')}${modeBtn('q', '💬', 'Vấn đáp', '問答 · Nghe câu hỏi, tự trả lời (có tranh / không tranh)', 1)}</div>
<div class="sht" id="vdb">${Object.keys(B).map(b => `<button data-b="${b}" class="${b == st.b ? 'on' : ''}"><i>${b}</i>Bài ${b}</button>`).join('')}</div>
<div class="vd-seg" id="vdm"><button data-vm="pic" class="${st.m == 'pic' ? 'on' : ''}">🖼 Có tranh <span id="n-pic"></span></button><button data-vm="free" class="${st.m == 'free' ? 'on' : ''}">💭 Không tranh <span id="n-free"></span></button></div>
<div class="vd-opt" id="vdo"><span>Hiện:</span><button data-o="j">Câu hỏi</button><button data-o="r">Romaji</button><button data-o="v">Nghĩa</button><button data-o="w">Phân tích từ</button></div>
<div class="sht" id="vdk"></div><div class="vd-card" id="vdc"></div>
<div class="vd-nav"><button class="sm2" id="vpv">⏮</button><span id="vpos"></span><button class="sm2" id="vnx">⏭</button></div>
<div class="shhint">Bấm 🎤 để nói (Chrome/Edge, cho phép micro) hoặc gõ câu trả lời vào ô bên dưới. Điểm theo thang FE113: tối đa 15.</div>`;
    const cnt = x => { const b = DATA.bai[st.b]; return x == 'pic' ? new Set(b.pic.map(q => q.pic)).size + ' tranh · ' + b.pic.length + ' câu' : b.free.length + ' câu'; };
    $('#n-pic').textContent = '(' + cnt('pic') + ')'; $('#n-free').textContent = '(' + cnt('free') + ')';
    document.querySelectorAll('#app [data-m]').forEach(b => b.onclick = () => { if (b.dataset.m != 'q') ctx.shadow(b.dataset.m); });
    document.querySelectorAll('#vdb [data-b]').forEach(b => b.onclick = () => { stopRec(); stopSay(); st.b = b.dataset.b; st.k = 0; save(); shell(); });
    document.querySelectorAll('#vdm [data-vm]').forEach(b => b.onclick = () => { stopRec(); stopSay(); st.m = b.dataset.vm; st.k = 0; save(); shell(); });
    document.querySelectorAll('#vdo [data-o]').forEach(b => { b.classList.toggle('on', !!O[b.dataset.o]); b.onclick = () => { O[b.dataset.o] = O[b.dataset.o] ? 0 : 1; sv('vdo', O); b.classList.toggle('on', !!O[b.dataset.o]); stopRec(); card(); }; });
    $('#vpv').onclick = () => go(-1); $('#vnx').onclick = () => go(1);
    buildGroups(); pills(); card();
  }
  const save = () => sv('vdp', st);
  const go = d => { const k = st.k + d; if (k < 0 || k >= groups.length) return; stopRec(); stopSay(); st.k = k; save(); pills(); card(); scrollTo(0, 0); };
  function pills() {
    $('#vdk').innerHTML = groups.map((g, i) => `<button data-k="${i}" class="${i == st.k ? 'on' : ''}"><i>${st.m == 'pic' ? 'tranh' : 'câu'}</i>${esc(g.label)}${gDone(g) ? ' ✓' : ''}</button>`).join('');
    document.querySelectorAll('#vdk [data-k]').forEach(b => b.onclick = () => { stopRec(); stopSay(); st.k = +b.dataset.k; save(); pills(); card(); });
    $('#vpos').textContent = (st.k + 1) + ' / ' + groups.length;
    const on = document.querySelector('#vdk .on'); if (on) on.scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  const hasBlank = t => /[○◯]/.test(t || '');
  function qHTML(x) {
    const pic = st.m === 'pic';
    const qj = pic ? esc(x.disp).replace(/【(.*?)】/g, '<mark>$1</mark>') : esc(x.cau_hoi_doc);
    const ty = pic ? x.type : x.ten_chu_de;
    const vn = pic ? x.vn : x.nghia_vn;
    const A = (t, n) => `<div class="vd-a">${t && !hasBlank(t) ? `<button class="ib" data-a="say" data-t="${esc(t)}" title="Nghe">🔊</button>` : '<span class="ib"></span>'}<div><b>${esc(t)}</b><small>${esc(n)}</small></div></div>`;
    const hint = pic ? `<div class="vd-h"><h5>🎧 Nghe hiểu câu hỏi</h5><p>${br(x.ear)}</p></div>`
      : `<div class="vd-h"><h5>🧩 Mẫu câu</h5><p>${esc(x.cau_truc)}</p><h5>📚 Từ vựng</h5><p>${br(String(x.tu_vung).replace(/；/g, '\n'))}</p><h5>✔ Tự soát</h5><p>${esc(x.tu_soat_thong_tin)}</p></div>`;
    const ans = pic ? `<div class="vd-h"><h5>📝 Các bước làm</h5><p>${br(x.steps)}</p><h5>🧩 Mẫu câu</h5><p>${esc(x.pat)}</p><h5>✅ Đáp án mẫu</h5>${A(x.a1, x.n1)}${A(x.a2, x.n2)}<h5>⚠ Bẫy hay gặp</h5><p>${br(x.trap)}</p><h5>🔤 Phát âm</h5><p>${br(x.pron)}</p></div>`
      : `<div class="vd-h"><h5>✅ Đáp án mẫu</h5>${A(x.tra_loi_1, x.nghia_1)}${A(x.tra_loi_2, x.nghia_2)}<p class="vd-note">Câu hỏi mở: thay ○○ bằng thông tin của chính bạn.</p></div>`;
    return `<div class="vd-q" data-id="${esc(x.id)}">
<div class="vd-qh"><span class="vd-ty">${esc(ty)}</span><span class="vd-bs" data-bs="${esc(x.id)}">${best[x.id] != null ? 'Cao nhất: ' + best[x.id] + '/15' : ''}</span></div>
<div class="vd-qj${O.j ? '' : ' hid'}" data-a="peek"><span class="vd-jt">${qj}</span><span class="vd-hide">🎧 Nghe câu hỏi rồi trả lời… <u>bấm để xem câu hỏi</u></span></div>${O.r ? `<div class="vd-qr">${esc(rom(pic ? x.disp.replace(/[【】]/g, '') : x.cau_hoi_doc))}</div>` : ''}${O.v ? `<div class="vd-qv">${esc(vn)}</div>` : ''}${O.w ? wordsHTML(x) : ''}
<div class="vd-act"><button data-a="hear">🔊 Nghe câu hỏi</button><button data-a="slow">🐢 Nghe chậm</button><button data-a="mic" class="vd-mic"${SR ? '' : ' disabled title="Trình duyệt này chưa hỗ trợ nhận giọng nói — hãy gõ câu trả lời"'}>🎤 Trả lời</button><button data-a="tog" data-for="h">💡 Gợi ý</button><button data-a="tog" data-for="ans">✅ Đáp án</button></div>
<div class="vd-type"><input type="text" lang="ja" autocomplete="off" placeholder="…hoặc gõ câu trả lời (hiragana / kanji)"><button data-a="chk">Chấm</button></div>
<div class="vd-res" aria-live="polite"></div>
<div class="vd-det" data-p="h" hidden>${hint}</div><div class="vd-det" data-p="ans" hidden>${ans}</div></div>`;
  }

  function imgBox(id) {
    return `<div class="vd-pic"><img data-e="0" src="${BASE}vandap/${esc(id)}.${EXT[0]}" alt="Tranh ${esc(id)}"><span class="vd-pid">${esc(id)}</span></div>`;
  }
  function card() {
    const g = groups[st.k]; if (!g) { $('#vdc').innerHTML = ''; return; }
    $('#vdc').innerHTML = (g.pic ? imgBox(g.pic) : '') + `<div class="vd-qs">${g.qs.map(qHTML).join('')}</div>`;
    const im = document.querySelector('.vd-pic img');
    if (im) {
      im.onerror = () => { const e = +im.dataset.e + 1; if (e < EXT.length) { im.dataset.e = e; im.src = `${BASE}vandap/${g.pic}.${EXT[e]}`; } else im.parentElement.innerHTML = `<div class="vd-ph"><b>${esc(g.pic)}</b><small>Chưa có ảnh. Hãy đặt file tranh vào <code>public/vandap/${esc(g.pic)}.png</code> (hoặc .jpg / .webp).</small></div>`; };
      im.onclick = () => im.parentElement.classList.toggle('zoom');
    }
    document.querySelectorAll('#vdc .vd-q').forEach(q => {
      const x = g.qs.find(v => v.id == q.dataset.id);
      q.onclick = e => { const b = e.target.closest('[data-a]'); if (b) act(q, x, b); };
      q.querySelector('input').onkeydown = e => { if (e.key == 'Enter') check(q, x, [e.target.value]); };
    });
    $('#vpv').disabled = st.k == 0; $('#vnx').disabled = st.k >= groups.length - 1;
    if (g.qs[0]) { const t = g.qs[0].read || g.qs[0].cau_hoi_doc; if (t) ctx.warm && ctx.warm(t); }
  }

  // Danh sách từ của câu hỏi (bỏ trùng, bỏ dấu câu) — dùng chung cho hiển thị và xử lý bấm.
  const qSeg = x => st.m === 'pic' ? x.disp.replace(/[【】]/g, '') : x.cau_hoi_doc;
  const wordList = x => { const seen = new Set(), wl = []; try { segment(qSeg(x)).forEach(c => { if (c.sp || PU.test(c.s) || seen.has(c.s)) return; seen.add(c.s); wl.push(c); }); } catch (e) { } return wl; };
  const wordsHTML = x => {
    const wl = wordList(x); if (!wl.length) return '';
    return `<div class="vd-wd"><div class="wd-h">Phân tích từ <span>${wl.length} từ · bấm chữ để nghe, bấm ★ để học</span></div><div class="wd-l">${wl.map((c, k) => `<div class="wd-c${c.m ? '' : ' wd-nm'}${ctx.hs.has(c.s) ? ' wd-st' : ''}"><button class="wd-s" data-a="wstar" data-w="${k}" title="Thêm vào Ghi nhớ">★</button><button class="wd-j" data-a="wsay" data-w="${k}">${esc(c.s)}</button><div class="wd-r">${c.h && c.h != c.s ? esc(c.h) + ' · ' : ''}${esc(c.ro || '')}</div><div class="wd-m">${esc(c.m || 'Chưa có nghĩa')}</div>${c.g && !c.fn ? `<div class="wd-g">${esc(c.g)}</div>` : ''}</div>`).join('')}</div></div>`;
  };
  const qText = x => st.m === 'pic' ? x.read : x.cau_hoi_doc;
  function act(q, x, b) {
    const a = b.dataset.a;
    if (a === 'say') { stopRec(); say(b.dataset.t, 1); return; }
    if (a === 'hear' || a === 'slow') { stopRec(); say(qText(x), a === 'slow' ? .75 : 1); return; }
    if (a === 'wsay') { stopRec(); say(wordList(x)[+b.dataset.w].s, 1); return; }
    if (a === 'wstar') {
      const c = wordList(x)[+b.dataset.w], { hs, SHV, persist } = ctx, card = b.closest('.wd-c');
      if (hs.has(c.s)) { hs.delete(c.s); toast('Đã bỏ khỏi Ghi nhớ'); } else { hs.add(c.s); if (c.m) SHV[c.s] = c.m + (c.g && !c.fn ? ' (' + c.g + ')' : ''); toast('Đã thêm “' + c.s + '” vào Ghi nhớ'); }
      persist(); card.classList.toggle('wd-st', hs.has(c.s)); return;
    }
    if (a === 'peek') { b.classList.toggle('peek'); return; }
    if (a === 'tog') { const el = q.querySelector(`[data-p="${b.dataset.for}"]`); el.hidden = !el.hidden; b.classList.toggle('on', !el.hidden); return; }
    if (a === 'chk') { const v = q.querySelector('input').value.trim(); if (!v) { toast('Hãy gõ câu trả lời trước'); return; } check(q, x, [v]); return; }
    if (a === 'mic') mic(q, x, b);
  }
  function mic(q, x, b) {
    if (rec) { stopRec(); b.classList.remove('rec'); b.textContent = '🎤 Trả lời'; return; }
    stopSay();
    const r = new SR(); r.lang = 'ja-JP'; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false; rec = r;
    const res = q.querySelector('.vd-res');
    const end = () => { if (rec === r) rec = null; b.classList.remove('rec'); b.textContent = '🎤 Trả lời'; };
    r.onstart = () => { b.classList.add('rec'); b.textContent = '⏹ Đang nghe…'; res.innerHTML = '<div class="vd-hear">Hãy nói câu trả lời…</div>'; };
    r.onresult = e => { const alts = [...e.results[0]].map(a => a.transcript); end(); check(q, x, alts); };
    r.onerror = e => { end(); res.innerHTML = `<div class="vd-hear bad">${e.error == 'not-allowed' ? 'Chưa cho phép micro cho trang này.' : e.error == 'no-speech' ? 'Chưa nghe thấy giọng nói — thử lại nhé.' : 'Không nhận được giọng nói (' + esc(e.error) + '). Bạn có thể gõ câu trả lời.'}</div>`; };
    r.onend = end;
    try { r.start(); } catch (e) { end(); toast('Không mở được micro'); }
  }

  function check(q, x, alts) {
    const res = q.querySelector('.vd-res');
    if (st.m === 'pic') {
      const r = judgeBest(x, alts), sc = DATA.scale[r.c];
      const cls = r.s >= 15 ? 'ok' : r.s >= 10 ? 'mid' : 'bad';
      if (!(best[x.id] >= r.s)) { best[x.id] = r.s; sv('vds', best); const bs = q.querySelector('.vd-bs'); bs.textContent = 'Cao nhất: ' + r.s + '/15'; pills(); }
      res.innerHTML = `<div class="vd-r ${cls}"><div class="vd-s"><b>${r.s}</b><small>/15</small></div><div><div class="vd-hear">Máy nghe: <b>「${esc(r.heard)}」</b></div><div class="vd-why">${esc(r.why)}${sc ? ` · <span title="${esc(sc.ex)}">${esc(r.c)} ${esc(sc.name)} (${esc(sc.pen)})</span>` : ''}</div><div class="vd-hint">${esc(r.hint)}</div>${r.s < 15 ? '<small class="vd-tip">Máy nhận giọng có thể nghe sai — đối chiếu với “Đáp án”, hoặc gõ lại để chấm chính xác.</small>' : ''}</div></div>`;
      if (r.s >= 15) toast('Trọn điểm! 🎉');
    } else {
      const h = alts[0] || '', ends = /(です|ます|でした|ました|ません)[。.!！]?$/.test(h.trim());
      res.innerHTML = `<div class="vd-r ${ends ? 'ok' : 'mid'}"><div class="vd-s"><b>${ends ? '✓' : '…'}</b></div><div><div class="vd-hear">Máy nghe: <b>「${esc(h)}」</b></div><div class="vd-why">${ends ? 'Có đuôi です／ます.' : 'Câu cụt: thêm です／ます ở cuối câu.'}</div><div class="vd-hint">Tự soát: ${esc(x.tu_soat_thong_tin)} — rồi so với đáp án mẫu.</div></div></div>`;
      if (ends) { best[x.id] = 15; sv('vds', best); const bs = q.querySelector('.vd-bs'); bs.textContent = 'Đã làm ✓'; pills(); }
    }
  }

  shell();
}
