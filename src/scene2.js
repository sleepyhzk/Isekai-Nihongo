// Tranh riêng cho từng bài hội thoại / đoạn văn (Bài 1–50): bộ biểu tượng SVG tự vẽ + bố cục từng bài.
// Mỗi biểu tượng vẽ quanh gốc (0,0) ở đáy-giữa, cao tối đa ~58, rộng tối đa ~60.
const K = "#2b2230";
const T = (t, y, s = 12, c = K, x = 0) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${s}" font-weight="700" fill="${c}" font-family="'Noto Sans JP','Yu Gothic',sans-serif">${t}</text>`;
const I = {
  card: () => `<rect x="-26" y="-34" width="52" height="34" rx="3" fill="#fff" stroke="${K}" stroke-width="2.5"/><path d="M-17 -23h20M-17 -14h32" stroke="#9aa4b2" stroke-width="3" stroke-linecap="round"/><circle cx="16" cy="-23" r="4.5" fill="#e5483f"/>`,
  sakura: () => `<g class="sw"><path d="M-28 -6Q-8 -22 4 -38Q12 -50 26 -52" stroke="#7a5538" stroke-width="4.5" fill="none" stroke-linecap="round"/><g fill="#f9b4cc" stroke="#e57aa0" stroke-width="1.2"><circle cx="-12" cy="-20" r="7"/><circle cx="2" cy="-36" r="7"/><circle cx="16" cy="-47" r="7"/><circle cx="-22" cy="-10" r="6"/><circle cx="24" cy="-34" r="6"/></g><g fill="#fff3a0"><circle cx="-12" cy="-20" r="2"/><circle cx="2" cy="-36" r="2"/><circle cx="16" cy="-47" r="2"/></g></g>`,
  dict: () => `<rect x="-22" y="-46" width="44" height="46" rx="4" fill="#3f6fb5"/><rect x="-22" y="-8" width="44" height="8" fill="#f4e9c8"/><rect x="-14" y="-40" width="28" height="20" rx="2" fill="#f4e9c8"/>${T("辞書", -25, 13)}`,
  book: () => `<path d="M-26 -42l26 6 26-6v42l-26-6-26 6z" fill="#f4e9c8" stroke="#8a6a3f" stroke-width="2.5" stroke-linejoin="round"/><path d="M0 -36V-6" stroke="#8a6a3f" stroke-width="2.5"/><path d="M-20 -31l14 3M-20 -23l14 3M6 -28l14-3M6 -20l14-3" stroke="#b9a37a" stroke-width="2"/>`,
  mag: () => `<rect x="-19" y="-50" width="38" height="50" rx="3" fill="#f2a65a"/><rect x="-13" y="-44" width="26" height="15" rx="2" fill="#fff"/><path d="M-13 -23h26M-13 -15h26M-13 -7h15" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`,
  umbrella: c => `<path d="M-30 -26Q0 -66 30 -26Q15 -33 0 -26Q-15 -33 -30 -26Z" fill="${c || "#ef6f6c"}"/><path d="M0 -46V-6Q0 2 -7 2" stroke="${K}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`,
  bag: c => `<path d="M-23 -34h46l5 34h-56z" fill="${c || "#c9805a"}" stroke="${K}" stroke-opacity=".35" stroke-width="2"/><path d="M-11 -34q0-16 11-16t11 16" stroke="${K}" stroke-opacity=".6" stroke-width="4" fill="none"/><rect x="-7" y="-25" width="14" height="8" rx="2" fill="#fff" opacity=".55"/>`,
  tag: () => `<path d="M-28 -36h36l20 20-20 20h-36z" transform="translate(0 -4)" fill="#ffd166" stroke="${K}" stroke-width="2.2"/><circle cx="-20" cy="-20" r="3.2" fill="#fff" stroke="${K}"/>${T("¥", -14, 17, K, 2)}`,
  clock: () => `<circle cx="0" cy="-29" r="27" fill="#fff" stroke="${K}" stroke-width="3.5"/><path d="M0 -52v4M0 -10v4M-24 -29h4M20 -29h4" stroke="${K}" stroke-width="2.5"/><path d="M0 -29V-45M0 -29l12 7" stroke="${K}" stroke-width="3.5" stroke-linecap="round"/><circle cx="0" cy="-29" r="2.6" fill="#e5483f"/>`,
  bank: () => `<path d="M-30 -34L0 -56 30 -34z" fill="#b8b2a7"/><circle cx="0" cy="-42" r="6.5" fill="#ffd166"/>${T("¥", -38.5, 9)}<g fill="#e8e2d4"><rect x="-24" y="-32" width="7" height="26"/><rect x="-10" y="-32" width="7" height="26"/><rect x="4" y="-32" width="7" height="26"/><rect x="18" y="-32" width="7" height="26"/></g><rect x="-32" y="-6" width="64" height="6" fill="#9a9488"/>`,
  train: () => `<rect x="-32" y="-42" width="64" height="32" rx="10" fill="#f5f7fa" stroke="#9db0c6" stroke-width="2.5"/><rect x="-32" y="-26" width="64" height="7" fill="#4aa3df"/><g fill="#bfe3ff"><rect x="-25" y="-37" width="13" height="9" rx="2"/><rect x="-6" y="-37" width="13" height="9" rx="2"/><rect x="13" y="-37" width="13" height="9" rx="2"/></g><circle cx="-19" cy="-8" r="5.5" fill="${K}"/><circle cx="19" cy="-8" r="5.5" fill="${K}"/><path d="M-36 0h72" stroke="#7b8794" stroke-width="3"/>`,
  torii: () => `<path d="M-32 -52q32 9 64 0" stroke="#d9402f" stroke-width="7.5" fill="none" stroke-linecap="round"/><path d="M-25 -39h50" stroke="#d9402f" stroke-width="5"/><path d="M-19 -48V0M19 -48V0" stroke="#d9402f" stroke-width="6.5"/><path d="M-32 -58q32 9 64 0" stroke="${K}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
  pagoda: () => `<g fill="#b5503c"><path d="M-14 -50h28l8 8h-44z"/><path d="M-18 -38h36l9 8h-54z"/><path d="M-22 -26h44l10 8h-64z"/></g><rect x="-12" y="-18" width="24" height="18" fill="#e8d3a8"/><path d="M0 -62v12" stroke="${K}" stroke-width="2.5"/>`,
  ramen: () => `<path d="M-32 -24h64q0 24-32 24t-32-24z" fill="#d9402f" stroke="#a82d20" stroke-width="2"/><ellipse cx="0" cy="-24" rx="32" ry="6.5" fill="#f7d58b"/><path d="M-20 -24q6-4 12 0t12 0 12 0" stroke="#e9b24d" stroke-width="2.5" fill="none"/><circle cx="13" cy="-26" r="5.5" fill="#fff"/><circle cx="13" cy="-26" r="2.4" fill="#ffb300"/><rect x="-16" y="-30" width="11" height="5" rx="2" fill="#4f9d3f"/><path d="M28 -50l-26 28M34 -48l-26 28" stroke="#7a4a2f" stroke-width="2.6" stroke-linecap="round"/><g class="wave" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".9"><path d="M-12 -34q-6-8 0-14"/><path d="M0 -34q-6-8 0-14"/></g>`,
  noren: () => `<path d="M-32 -54h64" stroke="#7a4a2f" stroke-width="4" stroke-linecap="round"/><g class="sw"><path d="M-28 -52h18v36h-18zM-9 -52h18v40h-18zM10 -52h18v36h-18z" fill="#c7352b"/>${T("食", -28, 16, "#fff")}</g>`,
  gift: () => `<rect x="-24" y="-30" width="48" height="30" rx="3" fill="#f26d85"/><rect x="-27" y="-40" width="54" height="12" rx="3" fill="#ff8aa0"/><path d="M0 -40V0" stroke="#ffd166" stroke-width="8"/><path d="M0 -40q-14-16-19-5 4 9 19 5zM0 -40q14-16 19-5-4 9-19 5z" fill="#ffd166"/>`,
  watch: () => `<rect x="-8" y="-58" width="16" height="16" fill="#8a6a3f"/><rect x="-8" y="-14" width="16" height="14" fill="#8a6a3f"/><circle cx="0" cy="-30" r="20" fill="#fff" stroke="#c9a227" stroke-width="5"/><path d="M0 -30V-42M0 -30l8 4" stroke="${K}" stroke-width="3" stroke-linecap="round"/>`,
  vase: () => `<path d="M-14 -22h28l-5 22h-18z" fill="#6bb6e6"/><path d="M0 -22V-40M-6 -22L-16 -38M6 -22L16 -38" stroke="#3f8f4f" stroke-width="3" fill="none"/><circle cx="0" cy="-46" r="8" fill="#f7a8c4"/><circle cx="-18" cy="-42" r="7" fill="#ffd166"/><circle cx="18" cy="-42" r="7" fill="#c79bf2"/><circle cx="0" cy="-46" r="3" fill="#fff3a0"/>`,
  fuji: () => `<path d="M-34 0L-7 -46H7L34 0z" fill="#6c86c9"/><path d="M-7 -46H7L13 -34l-5 3-5-5-5 5-5-3z" fill="#fff"/><circle cx="26" cy="-50" r="7" fill="#f26d5b" opacity=".9"/>`,
  city: () => `<rect x="-30" y="-34" width="19" height="34" fill="#8c9bb5"/><rect x="-9" y="-54" width="21" height="54" fill="#6f82a3"/><rect x="14" y="-26" width="17" height="26" fill="#a3b1c9"/><g fill="#ffe9a8"><rect x="-26" y="-28" width="4" height="5"/><rect x="-18" y="-28" width="4" height="5"/><rect x="-26" y="-18" width="4" height="5"/><rect x="-18" y="-18" width="4" height="5"/><rect x="-4" y="-48" width="4" height="5"/><rect x="4" y="-48" width="4" height="5"/><rect x="-4" y="-38" width="4" height="5"/><rect x="4" y="-38" width="4" height="5"/><rect x="-4" y="-28" width="4" height="5"/><rect x="4" y="-28" width="4" height="5"/><rect x="18" y="-20" width="4" height="5"/><rect x="25" y="-20" width="4" height="5"/></g>`,
  clapper: () => `<rect x="-27" y="-30" width="54" height="30" rx="3" fill="#2f3542"/><path d="M-27 -44l54-8v14l-54 8z" fill="#fff" stroke="${K}" stroke-width="2"/><path d="M-16 -42l8-1-7 11-8 1zM4 -45l8-1-7 11-8 1zM24 -48l3 0-3 9-7 1z" fill="${K}"/><path d="M-18 -18h36M-18 -10h24" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>`,
  calendar: () => `<rect x="-24" y="-50" width="48" height="50" rx="5" fill="#fff" stroke="${K}" stroke-width="2.5"/><path d="M-24 -50h48v13h-48z" fill="#e5483f"/><circle cx="-12" cy="-52" r="3" fill="${K}"/><circle cx="12" cy="-52" r="3" fill="${K}"/><g fill="#9aa4b2"><rect x="-17" y="-30" width="8" height="6"/><rect x="-4" y="-30" width="8" height="6"/><rect x="9" y="-30" width="8" height="6"/><rect x="-17" y="-18" width="8" height="6"/><rect x="-4" y="-18" width="8" height="6"/></g><rect x="9" y="-18" width="8" height="6" fill="#e5483f"/>`,
  pin: () => `<path d="M0 0C-18 -22-22 -30-22 -38a22 22 0 0 1 44 0c0 8-4 16-22 38z" fill="#e5483f"/><circle cx="0" cy="-38" r="8" fill="#fff"/>`,
  post: () => `<rect x="-24" y="-46" width="48" height="46" rx="6" fill="#d9402f"/><rect x="-18" y="-40" width="36" height="34" rx="3" fill="#fff"/>${T("〒", -14, 28, "#d9402f")}`,
  store: () => `<rect x="-28" y="-34" width="56" height="34" fill="#f5f7fa" stroke="#9db0c6" stroke-width="2"/><path d="M-30 -34h60l-4-14h-52z" fill="#fff"/><path d="M-26 -48h13v14h-13zM0 -48h13v14h-13zM-13 -48h13v14h-13z" fill="#4aa3df"/><path d="M13 -48h13v14h-13z" fill="#4aa3df"/><path d="M0 -48h13v14h-13z" fill="#e5483f"/><rect x="-10" y="-22" width="20" height="22" fill="#bfe3ff"/>`,
  apple: () => `<path d="M0 -40C-8 -46-26 -42-26 -22-26-8-14 2-6 0Q0-2 6 0C14 2 26-8 26-22 26-42 8-46 0-40z" fill="#e5483f"/><path d="M0 -40q2-8 8-10" stroke="#7a5538" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M4 -46q10-6 16 0-8 6-16 0z" fill="#4f9d3f"/><ellipse cx="-11" cy="-30" rx="4" ry="7" fill="#fff" opacity=".35"/>`,
  banana: () => `<path d="M-26 -34Q-24 -6 18 -2Q-4 -10 -10 -38z" fill="#ffd93b" stroke="#c9a227" stroke-width="2"/><path d="M-12 -36Q-8 -6 26 -8Q4 -14 0 -40z" fill="#ffe66d" stroke="#c9a227" stroke-width="2"/><path d="M-26 -34l4-8M-10 -38l4-8" stroke="#7a5538" stroke-width="4" stroke-linecap="round"/>`,
  egg: () => `<path d="M-30 -8h60v8h-60z" fill="#b87a45"/><g fill="#fff6e0" stroke="#e0c9a0" stroke-width="1.5"><ellipse cx="-18" cy="-20" rx="9" ry="12"/><ellipse cx="0" cy="-20" rx="9" ry="12"/><ellipse cx="18" cy="-20" rx="9" ry="12"/></g>`,
  basket: () => `<path d="M-30 -22h60l-6 22h-48z" fill="#c98f58" stroke="#8a5a2f" stroke-width="2"/><path d="M-24 -12h48M-26 -2h52" stroke="#8a5a2f" stroke-width="2"/><path d="M-26 -22q26-44 52 0" stroke="#8a5a2f" stroke-width="4" fill="none"/><circle cx="-12" cy="-28" r="9" fill="#e5483f"/><circle cx="6" cy="-30" r="9" fill="#8fd16a"/><circle cx="18" cy="-26" r="8" fill="#ffd93b"/>`,
  camera: () => `<rect x="-28" y="-34" width="56" height="34" rx="6" fill="#3a4152"/><path d="M-14 -34l4-8h20l4 8z" fill="#3a4152"/><circle cx="0" cy="-17" r="12" fill="#cfd8e3" stroke="#1f2430" stroke-width="3"/><circle cx="0" cy="-17" r="6" fill="#4a6fa5"/><circle cx="-19" cy="-27" r="3" fill="#ffd166"/>`,
  sun: () => `<g class="sw"><circle cx="0" cy="-34" r="16" fill="#ffd54f"/><g stroke="#ffb300" stroke-width="4" stroke-linecap="round"><path d="M0 -58v-4M0 -10v-4M-24 -34h-4M24 -34h4M-17 -51l-3-3M17 -51l3-3M-17 -17l-3 3M17 -17l3 3"/></g></g>`,
  wave: () => `<g class="wave"><path d="M-34 -14q8-12 17 0t17 0 17 0 17 0v14h-68z" fill="#4aa3df"/><path d="M-34 -4q8-10 17 0t17 0 17 0 17 0v4h-68z" fill="#2f86c8"/></g><path d="M-8 -24q8-14 16 0" stroke="#fff" stroke-width="2.5" fill="none" opacity=".8"/>`,
  taxi: () => `<path d="M-32 -12v-12l8-4 10-12h22l10 12 12 4v12z" fill="#ffd54f" stroke="${K}" stroke-width="2.2" stroke-linejoin="round"/><rect x="-8" y="-52" width="16" height="8" rx="2" fill="#fff" stroke="${K}" stroke-width="1.8"/>${T("TAXI", -45.5, 6)}<path d="M-12 -38l-6 10h14v-10zM-2 -38v10h18l-8-10z" fill="#bfe3ff"/><circle cx="-18" cy="-8" r="7" fill="${K}"/><circle cx="18" cy="-8" r="7" fill="${K}"/><circle cx="-18" cy="-8" r="3" fill="#ccc"/><circle cx="18" cy="-8" r="3" fill="#ccc"/>`,
  signal: () => `<rect x="-10" y="-58" width="20" height="42" rx="8" fill="#3a4152"/><circle cx="0" cy="-47" r="6" fill="#e5483f"/><circle cx="0" cy="-35" r="6" fill="#4a4f5c"/><circle cx="0" cy="-23" r="6" fill="#4ade80"/><path d="M0 -16V0" stroke="#3a4152" stroke-width="5"/>`,
  nophoto: () => `<rect x="-26" y="-40" width="52" height="34" rx="6" fill="#3a4152"/><circle cx="0" cy="-23" r="11" fill="#cfd8e3"/><circle cx="0" cy="-23" r="5" fill="#4a6fa5"/><circle cx="0" cy="-26" r="27" fill="none" stroke="#e5483f" stroke-width="5"/><path d="M-19 -45L19 -7" stroke="#e5483f" stroke-width="5"/>`,
  bench: () => `<rect x="-30" y="-26" width="60" height="7" rx="2" fill="#c9985f"/><rect x="-30" y="-44" width="60" height="7" rx="2" fill="#c9985f"/><rect x="-30" y="-35" width="60" height="7" rx="2" fill="#b8854c"/><path d="M-24 -19V0M24 -19V0M-24 -44V-26M24 -44V-26" stroke="#7a5538" stroke-width="5"/>`,
  brush: () => `<rect x="-10" y="-52" width="20" height="8" rx="3" fill="#fff" stroke="#9db0c6" stroke-width="2"/><rect x="-20" y="-44" width="8" height="44" rx="4" transform="rotate(-8 -16 -22)" fill="#4aa3df"/><rect x="-24" y="-52" width="14" height="14" rx="2" transform="rotate(-8 -16 -45)" fill="#fff" stroke="#4aa3df" stroke-width="2"/><path d="M8 -26h24v26h-24z" fill="#fff" stroke="#9db0c6" stroke-width="2.5"/><path d="M8 -20h24" stroke="#bfe3ff" stroke-width="6"/>`,
  sunrise: () => `<path d="M-34 -8h68" stroke="#7a5538" stroke-width="3"/><path d="M-20 -8a20 20 0 0 1 40 0z" fill="#ffb74d"/><g stroke="#ffb300" stroke-width="3.5" stroke-linecap="round"><path d="M0 -36v-8M-22 -28l-6-6M22 -28l6-6M-30 -14h-6M30 -14h6"/></g>`,
  cross: () => `<rect x="-28" y="-56" width="56" height="56" rx="8" fill="#fff" stroke="#e5483f" stroke-width="3"/><path d="M-6 -48h12v14h14v12h-14v14h-12v-14h-14v-12h14z" fill="#e5483f" transform="translate(0 2)"/>`,
  thermo: () => `<rect x="-6" y="-56" width="12" height="40" rx="6" fill="#fff" stroke="${K}" stroke-width="2.6"/><circle cx="0" cy="-10" r="10" fill="#e5483f" stroke="${K}" stroke-width="2.6"/><rect x="-2.5" y="-46" width="5" height="34" rx="2.5" fill="#e5483f"/><path d="M8 -46h6M8 -38h6M8 -30h6" stroke="${K}" stroke-width="2"/>`,
  pill: () => `<rect x="-14" y="-52" width="28" height="12" rx="3" fill="#fff" stroke="#9db0c6" stroke-width="2"/><rect x="-18" y="-42" width="36" height="42" rx="6" fill="#ffb74d"/><rect x="-14" y="-32" width="28" height="18" rx="2" fill="#fff"/>${T("薬", -18, 14)}`,
  piano: () => `<rect x="-32" y="-30" width="64" height="30" rx="3" fill="#fff" stroke="${K}" stroke-width="2.5"/><path d="M-24 0V-30M-16 0V-30M-8 0V-30M0 0V-30M8 0V-30M16 0V-30M24 0V-30" stroke="${K}" stroke-width="1.5"/><g fill="${K}"><rect x="-27" y="-30" width="6" height="18"/><rect x="-11" y="-30" width="6" height="18"/><rect x="-3" y="-30" width="6" height="18"/><rect x="13" y="-30" width="6" height="18"/><rect x="21" y="-30" width="6" height="18"/></g><rect x="-32" y="-46" width="64" height="16" rx="3" fill="#5a4a42"/>`,
  phones: () => `<path d="M-24 -20V-30a24 24 0 0 1 48 0V-20" stroke="${K}" stroke-width="5" fill="none"/><rect x="-30" y="-26" width="14" height="24" rx="6" fill="#ef6f6c"/><rect x="16" y="-26" width="14" height="24" rx="6" fill="#ef6f6c"/>`,
  cake: () => `<ellipse cx="0" cy="-4" rx="30" ry="5" fill="#e0bf98"/><rect x="-26" y="-26" width="52" height="22" rx="4" fill="#ffd6e0"/><path d="M-26 -26q8 10 13 0t13 0 13 0 13 0v-4h-52z" fill="#fff"/><path d="M-4 -34h8v8h-8z" fill="#ffd166"/><path d="M0 -44q-5 6 0 8 5-2 0-8z" fill="#ff9a3c"/><circle cx="-14" cy="-32" r="4" fill="#e5483f"/><circle cx="14" cy="-32" r="4" fill="#e5483f"/>`,
  cloudrain: () => `<path d="M-24 -26a12 12 0 0 1 4-23 16 16 0 0 1 30-2 11 11 0 0 1 8 25z" fill="#9db0c6"/><g class="rain" stroke="#4aa3df" stroke-width="3.5" stroke-linecap="round"><path d="M-14 -20l-4 12M0 -20l-4 12M14 -20l-4 12"/></g>`,
  cloud: () => `<path d="M-26 -12a13 13 0 0 1 4-25 17 17 0 0 1 32-2 12 12 0 0 1 8 27z" fill="#8795a8"/><path d="M-12 -4a9 9 0 0 1 3-17 12 12 0 0 1 22-1 8 8 0 0 1 4 18z" fill="#a8b4c4" transform="translate(6 2)"/>`,
  tv: () => `<rect x="-30" y="-48" width="60" height="40" rx="5" fill="#3a4152"/><rect x="-25" y="-43" width="50" height="30" rx="3" fill="#bfe3ff"/><path d="M-14 0l4-8h20l4 8z" fill="#3a4152"/><circle cx="0" cy="-28" r="9" fill="#fff" opacity=".6"/>`,
  tvw: () => `<rect x="-30" y="-48" width="60" height="40" rx="5" fill="#3a4152"/><rect x="-25" y="-43" width="50" height="30" rx="3" fill="#8fc8f5"/><circle cx="-8" cy="-32" r="8" fill="#ffd54f"/><path d="M-4 -22a7 7 0 0 1 2-13 9 9 0 0 1 17-1 6 6 0 0 1 4 14z" fill="#fff"/><path d="M-14 0l4-8h20l4 8z" fill="#3a4152"/>`,
  tvnews: () => `<rect x="-30" y="-48" width="60" height="40" rx="5" fill="#3a4152"/><rect x="-25" y="-43" width="50" height="30" rx="3" fill="#eaf0f7"/><rect x="-25" y="-22" width="50" height="9" fill="#d9402f"/>${T("NEWS", -15, 8, "#fff")}<circle cx="-12" cy="-32" r="5" fill="#9aa4b2"/><path d="M-2 -36h18M-2 -29h14" stroke="#9aa4b2" stroke-width="3" stroke-linecap="round"/><path d="M-14 0l4-8h20l4 8z" fill="#3a4152"/>`,
  vend: () => `<rect x="-24" y="-58" width="48" height="58" rx="5" fill="#d9402f"/><rect x="-18" y="-52" width="28" height="30" rx="2" fill="#bfe3ff"/><g fill="#ffd166"><rect x="-15" y="-48" width="7" height="10" rx="2"/><rect x="-5" y="-48" width="7" height="10" rx="2"/><rect x="-15" y="-34" width="7" height="10" rx="2"/><rect x="-5" y="-34" width="7" height="10" rx="2"/></g><circle cx="17" cy="-46" r="3.5" fill="#fff"/><circle cx="17" cy="-37" r="3.5" fill="#fff"/><rect x="12" y="-30" width="8" height="5" fill="#2b2230"/><rect x="-14" y="-14" width="28" height="9" rx="2" fill="#7a1f17"/>`,
  bento: () => `<rect x="-30" y="-26" width="60" height="26" rx="5" fill="#8a4b2f"/><rect x="-26" y="-30" width="52" height="22" rx="4" fill="#f4e9c8"/><path d="M0 -30V-8" stroke="#8a4b2f" stroke-width="3"/><circle cx="-14" cy="-20" r="7" fill="#fff"/><circle cx="-14" cy="-20" r="2" fill="#e5483f"/><rect x="4" y="-27" width="9" height="6" rx="2" fill="#ffb74d"/><rect x="15" y="-27" width="9" height="6" rx="2" fill="#4f9d3f"/><rect x="4" y="-17" width="20" height="6" rx="3" fill="#e5483f"/>`,
  ticket: () => `<path d="M-28 -38h56v12a6 6 0 0 0 0 12v12h-56v-12a6 6 0 0 0 0-12z" transform="translate(0 4)" fill="#ffe08a" stroke="#c9a227" stroke-width="2.4"/><path d="M12 -28v34" stroke="#c9a227" stroke-width="2" stroke-dasharray="3 3"/>${T("★", -12, 20, "#e5483f", -6)}`,
  globe: () => `<circle cx="0" cy="-30" r="26" fill="#4aa3df"/><path d="M-14 -44q10 -2 12 8t-8 12-8-10zM8 -26q10-4 14 6t-8 12-6-8z" fill="#5fbf6a"/><ellipse cx="0" cy="-30" rx="10" ry="26" fill="none" stroke="#fff" stroke-width="1.6" opacity=".6"/><path d="M-26 -30h52" stroke="#fff" stroke-width="1.6" opacity=".6"/><path d="M-12 -2h24" stroke="#7a5538" stroke-width="4" stroke-linecap="round"/>`,
  house: () => `<path d="M-32 -26L0 -54l32 28z" fill="#d9402f"/><rect x="-24" y="-28" width="48" height="28" fill="#f4e9c8"/><rect x="-6" y="-20" width="12" height="20" fill="#8a5a2f"/><rect x="-20" y="-22" width="9" height="9" fill="#bfe3ff"/><rect x="11" y="-22" width="9" height="9" fill="#bfe3ff"/>`,
  paper: () => `<rect x="-24" y="-52" width="48" height="52" rx="3" fill="#fff" stroke="#9db0c6" stroke-width="2.4"/>${T("漢字", -26, 18)}<path d="M-16 -14h32M-16 -7h22" stroke="#9aa4b2" stroke-width="3" stroke-linecap="round"/>`,
  notes: () => `<g fill="${K}"><ellipse cx="-14" cy="-10" rx="8" ry="6" transform="rotate(-20 -14 -10)"/><ellipse cx="16" cy="-16" rx="8" ry="6" transform="rotate(-20 16 -16)"/><path d="M-8 -12V-46l30-8v36" stroke="${K}" stroke-width="3.6" fill="none"/><path d="M-8 -40l30-8" stroke="${K}" stroke-width="5"/></g>`,
  books: () => `<rect x="-28" y="-14" width="56" height="14" rx="2" fill="#3f6fb5"/><rect x="-24" y="-28" width="50" height="14" rx="2" fill="#e5483f"/><rect x="-26" y="-42" width="46" height="14" rx="2" fill="#4f9d3f"/><path d="M-20 -7h24M-16 -21h20M-18 -35h16" stroke="#fff" stroke-width="2.4" opacity=".7"/>`,
  wallet: () => `<rect x="-30" y="-36" width="60" height="36" rx="6" fill="#8a5a2f"/><path d="M-30 -26h60" stroke="#6b4423" stroke-width="2"/><rect x="10" y="-22" width="24" height="14" rx="4" fill="#c9985f" stroke="#6b4423" stroke-width="2"/><circle cx="21" cy="-15" r="2.6" fill="#ffd166"/>`,
  keys: () => `<circle cx="-14" cy="-36" r="12" fill="none" stroke="#c9a227" stroke-width="5"/><path d="M-6 -30L22 -4M12 -14l8-6M18 -8l6-5" stroke="#c9a227" stroke-width="5" stroke-linecap="round"/>`,
  koban: () => `<rect x="-26" y="-34" width="52" height="34" fill="#f5f7fa" stroke="#9db0c6" stroke-width="2.2"/><path d="M-30 -34l30-18 30 18z" fill="#2f5fa8"/><rect x="-5" y="-60" width="10" height="9" rx="3" fill="#e5483f"/><rect x="-18" y="-26" width="14" height="26" fill="#bfe3ff"/>${T("交番", -18, 11, K, 14)}`,
  suitcase: () => `<path d="M-10 -40v-8h20v8" stroke="${K}" stroke-width="4" fill="none"/><rect x="-28" y="-40" width="56" height="38" rx="6" fill="#3f6fb5"/><path d="M-10 -40V-2M10 -40V-2" stroke="#2a4a80" stroke-width="3"/><rect x="-5" y="-24" width="10" height="7" rx="2" fill="#ffd166"/><circle cx="-18" cy="-1" r="3" fill="${K}"/><circle cx="18" cy="-1" r="3" fill="${K}"/>`,
  hotel: () => `<rect x="-24" y="-56" width="48" height="56" fill="#c9b79c"/><rect x="-24" y="-56" width="48" height="8" fill="#a8956f"/>${T("H", -36, 18, "#fff")}<g fill="#ffe9a8"><rect x="-17" y="-26" width="8" height="8"/><rect x="-4" y="-26" width="8" height="8"/><rect x="9" y="-26" width="8" height="8"/></g><rect x="-6" y="-12" width="12" height="12" fill="#7a5538"/>`,
  map: () => `<path d="M-30 -42l20-6 20 6 20-6v42l-20 6-20-6-20 6z" fill="#f4e9c8" stroke="#8a6a3f" stroke-width="2.4" stroke-linejoin="round"/><path d="M-10 -48v42M10 -42v42" stroke="#b9a37a" stroke-width="2"/><path d="M-22 -14q10-12 20-4t18-14" stroke="#4aa3df" stroke-width="3" fill="none"/><circle cx="14" cy="-30" r="5" fill="#e5483f"/>`,
  plane: () => `<g class="sw"><path d="M-34 -20l30-2-18-24h10l28 24 22 1q8 1 8 5t-8 5l-22 1-28 24h-10l18-24-30-2z" fill="#f5f7fa" stroke="#9db0c6" stroke-width="2.4" stroke-linejoin="round" transform="scale(.85) translate(0 -6)"/></g>`,
  cap: () => `<path d="M-32 -30L0 -46l32 16-32 16z" fill="#2f3542"/><path d="M-18 -22v14q18 10 36 0v-14L0 -14z" fill="#3a4152"/><path d="M30 -30v18" stroke="#ffd166" stroke-width="3"/><circle cx="30" cy="-10" r="4" fill="#ffd166"/>`,
  bed: () => `<rect x="-32" y="-12" width="64" height="12" rx="3" fill="#8a5a2f"/><rect x="-32" y="-34" width="8" height="34" rx="2" fill="#8a5a2f"/><rect x="-26" y="-26" width="58" height="14" rx="4" fill="#fff" stroke="#9db0c6" stroke-width="2"/><rect x="-24" y="-34" width="18" height="10" rx="5" fill="#bfe3ff"/><path d="M-4 -26h36v14h-36z" fill="#4aa3df"/>`,
  stop: () => `<path d="M-28 -52h56L0 -2z" fill="#fff" stroke="#d9402f" stroke-width="6" stroke-linejoin="round"/>${T("止まれ", -34, 11, "#d9402f")}<path d="M0 -2V0" stroke="#7b8794" stroke-width="3"/>`,
  nopark: () => `<circle cx="0" cy="-30" r="26" fill="#2f5fa8" stroke="#d9402f" stroke-width="5"/>${T("P", -23, 24, "#fff")}<path d="M-18 -48L18 -12" stroke="#d9402f" stroke-width="6"/>`,
  pot: () => `<path d="M-26 -30h52v22a8 8 0 0 1-8 8h-36a8 8 0 0 1-8-8z" fill="#8795a8"/><rect x="-30" y="-34" width="60" height="6" rx="3" fill="#6f7d91"/><path d="M-30 -22h-8M30 -22h8" stroke="#6f7d91" stroke-width="4" stroke-linecap="round"/><path d="M-16 -30q6-6 12 0t12 0 8 0" stroke="#e8b24d" stroke-width="5" fill="none" opacity=".9"/><g class="wave" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M-8 -40q-6-8 0-14"/><path d="M6 -40q-6-8 0-14"/></g>`,
  carrot: () => `<path d="M-22 -26L24 -6Q26-2 22 0L-18-14Q-26-18-22-26z" fill="#ff8a3d"/><path d="M-22 -26q-6-8-2-14 4 2 4 8 6-8 10-4-2 6-12 10z" fill="#4f9d3f"/><path d="M-4 -18l4 4M8 -12l4 4" stroke="#e46a1c" stroke-width="2"/><path d="M12 -50l16 22" stroke="#cfd8e3" stroke-width="5" stroke-linecap="round"/>`,
  shirt: () => `<path d="M-14 -50l-22 10 8 14 8-4v32h40v-32l8 4 8-14-22-10q-4 8-14 8t-14-8z" fill="#4aa3df" stroke="#2f86c8" stroke-width="2" stroke-linejoin="round"/>`,
  onsen: () => `<g class="wave" fill="none" stroke="#e5483f" stroke-width="4" stroke-linecap="round"><path d="M-14 -34q-8-8 0-16t0-8"/><path d="M0 -34q-8-8 0-16t0-8"/><path d="M14 -34q-8-8 0-16t0-8"/></g><path d="M-28 -26h56q0 26-28 26t-28-26z" fill="#e8d3a8" stroke="#8a6a3f" stroke-width="2.2"/><path d="M-22 -26h44" stroke="#4aa3df" stroke-width="5"/>`,
  notebook: () => `<rect x="-22" y="-46" width="44" height="46" rx="3" fill="#4f9d3f"/><rect x="-14" y="-40" width="32" height="34" rx="2" fill="#fff"/><path d="M-10 -32h24M-10 -24h24M-10 -16h18" stroke="#9db0c6" stroke-width="2.4"/><g fill="#fff"><circle cx="-22" cy="-36" r="2.6"/><circle cx="-22" cy="-24" r="2.6"/><circle cx="-22" cy="-12" r="2.6"/></g><path d="M26 -48l8 34-4 6-4-6z" fill="#ffd166" stroke="#c9a227" stroke-width="1.6"/>`,
  speech: () => `<path d="M-30 -52h40a10 10 0 0 1 10 10v14a10 10 0 0 1-10 10H-14l-12 10v-10h-4a10 10 0 0 1-10-10v-14a10 10 0 0 1 10-10z" transform="translate(6 2)" fill="#fff" stroke="${K}" stroke-width="2.6" stroke-linejoin="round"/>${T("あ", -24, 18, "#d9402f", 0)}<path d="M20 -30h14a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8h-2v8l-8-8h-4a8 8 0 0 1-8-8v-8a8 8 0 0 1 8-8z" transform="translate(-6 12) scale(.7)" fill="#ffd166" stroke="${K}" stroke-width="3"/>`,
  star: () => `<path d="M0 -54l9 20 22 2-17 14 5 22-19-12-19 12 5-22-17-14 22-2z" fill="#ffd54f" stroke="#c9a227" stroke-width="2.2" stroke-linejoin="round" transform="scale(.9) translate(0 4)"/>`,
  tree: () => `<rect x="-5" y="-22" width="10" height="22" fill="#7a5538"/><circle cx="0" cy="-38" r="18" fill="#5fbf6a"/><circle cx="-14" cy="-28" r="12" fill="#4f9d3f"/><circle cx="14" cy="-28" r="12" fill="#4f9d3f"/>`,
  pan: () => `<ellipse cx="-4" cy="-18" rx="26" ry="9" fill="#5a6270"/><ellipse cx="-4" cy="-21" rx="22" ry="6.5" fill="#3a4152"/><path d="M20 -20l22 -6" stroke="#5a6270" stroke-width="6" stroke-linecap="round"/><circle cx="-12" cy="-23" r="3.5" fill="#ffd54f"/><circle cx="-2" cy="-22" r="3" fill="#fff"/><g class="wave" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M-10 -32q-5-7 0-12"/><path d="M4 -32q-5-7 0-12"/></g>`,
  alarm: () => `<circle cx="-16" cy="-52" r="7" fill="#e5483f"/><circle cx="16" cy="-52" r="7" fill="#e5483f"/><circle cx="0" cy="-26" r="24" fill="#fff" stroke="#e5483f" stroke-width="5"/><path d="M0 -26V-40M0 -26l10 5" stroke="${K}" stroke-width="3.2" stroke-linecap="round"/><path d="M-16 0l4-4M16 0l-4-4" stroke="${K}" stroke-width="4" stroke-linecap="round"/>`,
  board: () => `<rect x="-32" y="-52" width="64" height="42" rx="3" fill="#f5f7fa" stroke="#8a6a3f" stroke-width="3"/><g fill="#4aa3df"><rect x="-22" y="-26" width="9" height="12"/><rect x="-8" y="-34" width="9" height="20" fill="#e5483f"/><rect x="6" y="-30" width="9" height="16" fill="#4f9d3f"/></g><path d="M-22 -44h30" stroke="#9aa4b2" stroke-width="3" stroke-linecap="round"/><path d="M-18 -10l-6 10M18 -10l6 10" stroke="#8a6a3f" stroke-width="3"/>`,
  heart: () => `<path d="M0 -4C-34 -26-24 -50-10 -46Q-2 -44 0 -36q2-8 10-10C24 -50 34 -26 0 -4z" fill="#f26d85"/>`,
  glasses: () => `<circle cx="-16" cy="-24" r="14" fill="#bfe3ff" fill-opacity=".5" stroke="${K}" stroke-width="3.5"/><circle cx="16" cy="-24" r="14" fill="#bfe3ff" fill-opacity=".5" stroke="${K}" stroke-width="3.5"/><path d="M-2 -26q2-4 4 0M-30 -26l-6-4M30 -26l6-4" stroke="${K}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
  tap: () => `<path d="M-26 -42h30q10 0 10 10v6" stroke="#9db0c6" stroke-width="8" fill="none" stroke-linecap="round"/><rect x="-30" y="-50" width="14" height="6" rx="2" fill="#e5483f"/><path d="M14 -16q-6 10 0 14 6-4 0-14z" fill="#4aa3df"/><path d="M14 -6q-4 6 0 8 4-2 0-8z" fill="#4aa3df" opacity=".6"/>`,
  lantern: () => `<g class="sw"><path d="M0 -58v8" stroke="${K}" stroke-width="3"/><rect x="-14" y="-52" width="28" height="6" rx="2" fill="${K}"/><ellipse cx="0" cy="-28" rx="17" ry="21" fill="#e5483f"/><path d="M-12 -40q12 4 24 0M-16 -28h32M-12 -16q12-4 24 0" stroke="#a82d20" stroke-width="2" fill="none"/><rect x="-10" y="-8" width="20" height="5" rx="2" fill="${K}"/>${T("祭", -24, 14, "#fff")}</g>`,
  piggy: () => `<ellipse cx="0" cy="-24" rx="28" ry="20" fill="#f7a8c4"/><path d="M-18 -40l-4-10 12 6zM12 -42l6-8 2 10z" fill="#f48fb1"/><ellipse cx="26" cy="-22" rx="7" ry="9" fill="#f48fb1"/><circle cx="26" cy="-25" r="1.8" fill="${K}"/><circle cx="26" cy="-19" r="1.8" fill="${K}"/><circle cx="12" cy="-32" r="2.8" fill="${K}"/><rect x="-14" y="-46" width="14" height="4" rx="2" fill="${K}"/><path d="M-16 -6v6M12 -6v6" stroke="#f48fb1" stroke-width="8" stroke-linecap="round"/><path d="M-28 -26q-8-2-6-8" stroke="#f48fb1" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  coin: () => `<g stroke="#c9a227" stroke-width="2"><ellipse cx="0" cy="-6" rx="24" ry="8" fill="#ffd54f"/><ellipse cx="0" cy="-14" rx="24" ry="8" fill="#ffd54f"/><ellipse cx="0" cy="-22" rx="24" ry="8" fill="#ffd54f"/><ellipse cx="0" cy="-30" rx="24" ry="8" fill="#ffe27a"/></g>${T("¥", -26, 12, "#a07d12")}`,
  sake: () => `<path d="M-12 -34q0-8 4-12v-8h8v8q4 4 4 12v34h-16z" transform="translate(-10 0)" fill="#5a8f6a"/><rect x="-18" y="-24" width="16" height="14" fill="#fff" opacity=".8" transform="translate(-0 0)"/><path d="M8 -26h20l-3 26h-14z" fill="#fff" stroke="#9db0c6" stroke-width="2"/><path d="M10 -18h16" stroke="#f1c27d" stroke-width="10"/>`,
  fire: () => `<g class="sw"><path d="M0 0C-26 0-30-22-16-36-14-26-8-24-8-24-6-40 4-50 6-58 20-44 30-30 26-14 24-4 12 0 0 0z" fill="#ff7a2f"/><path d="M0 0C-12 0-14-12-6-20-4-14 0-12 0-12 2-22 6-26 8-32 16-22 18-12 12-6 10-2 6 0 0 0z" fill="#ffd54f"/></g>`,
  ext: () => `<rect x="-14" y="-40" width="28" height="40" rx="9" fill="#d9402f"/><rect x="-6" y="-48" width="12" height="9" fill="${K}"/><path d="M6 -46q16 0 16 14" stroke="${K}" stroke-width="4" fill="none"/><rect x="-14" y="-22" width="28" height="10" fill="#fff"/>`,
  exit: () => `<rect x="-30" y="-32" width="60" height="30" rx="4" fill="#2e9c5a"/><path d="M-26 -28h52v22h-52z" fill="none" stroke="#fff" stroke-width="1.6" opacity=".6"/>${T("非常口", -12, 15, "#fff")}<path d="M-14 -40h28" stroke="#7b8794" stroke-width="3"/>`,
  phone: () => `<rect x="-17" y="-56" width="34" height="56" rx="7" fill="#3a4152"/><rect x="-13" y="-50" width="26" height="40" rx="2" fill="#bfe3ff"/><circle cx="0" cy="-5" r="2.6" fill="#cfd8e3"/><path d="M-6 -36q6-6 12 0M-3 -30q3-3 6 0" stroke="#4aa3df" stroke-width="2.6" fill="none" stroke-linecap="round"/><circle cx="0" cy="-24" r="2" fill="#4aa3df"/>`,
  news: () => `<rect x="-30" y="-42" width="60" height="42" rx="2" fill="#f5f2ea" stroke="#9a9488" stroke-width="2.2"/><rect x="-24" y="-36" width="26" height="12" fill="${K}"/><path d="M6 -34h18M6 -27h18M-24 -18h48M-24 -11h48M-24 -5h30" stroke="#9a9488" stroke-width="3" stroke-linecap="round"/>`,
  bell: () => `<path d="M-26 -8a26 26 0 0 1 52 0z" fill="#ffd54f" stroke="#c9a227" stroke-width="2.4"/><rect x="-32" y="-8" width="64" height="8" rx="3" fill="#c9985f"/><circle cx="0" cy="-38" r="4" fill="#c9a227"/><rect x="-2.5" y="-36" width="5" height="6" fill="#c9a227"/><ellipse cx="-10" cy="-22" rx="4" ry="8" fill="#fff" opacity=".45"/>`,
  cup: () => `<path d="M-18 -30h32v18a14 14 0 0 1-14 14h-4a14 14 0 0 1-14-14z" transform="translate(0 -2)" fill="#fff" stroke="#9db0c6" stroke-width="2.4"/><path d="M14 -26q14 0 14 10t-14 8" stroke="#9db0c6" stroke-width="3.4" fill="none"/><path d="M-14 -26h28" stroke="#8fd16a" stroke-width="5" transform="translate(0 -2)"/><g class="wave" fill="none" stroke="#9aa4b2" stroke-width="2.6" stroke-linecap="round"><path d="M-6 -36q-4-6 0-10"/><path d="M4 -36q-4-6 0-10"/></g>`,
  door: () => `<rect x="-24" y="-58" width="48" height="58" rx="3" fill="#8a5a2f"/><rect x="-18" y="-52" width="16" height="22" rx="2" fill="#a8713f"/><rect x="2" y="-52" width="16" height="22" rx="2" fill="#a8713f"/><rect x="-18" y="-26" width="16" height="20" rx="2" fill="#a8713f"/><rect x="2" y="-26" width="16" height="20" rx="2" fill="#a8713f"/><circle cx="20" cy="-28" r="2.6" fill="#ffd166"/>`,
  box: () => `<path d="M-30 -34l30-12 30 12v32l-30 12-30-12z" fill="#c9985f" stroke="#8a5a2f" stroke-width="2.2" stroke-linejoin="round"/><path d="M-30 -34l30 12 30-12M0 -22V10" stroke="#8a5a2f" stroke-width="2.2" fill="none" transform="translate(0 0)"/><path d="M-8 -43l30 12v10l-8-3v-6l-22-9z" fill="#e8d3a8" stroke="#8a5a2f" stroke-width="1.4"/>`,
};

// [nền, có bàn (1/0), biển chữ, đồ trên tường/giữa, đồ đặt trước mặt] — đúng thứ tự Bài 1–50
const LESSON = [
  ["meet", 1, "はじめまして", ["sakura"], ["card", "card"]],
  ["office", 1, "これ・それ・あれ", ["dict"], ["mag", "umbrella"]],
  ["shop", 1, "いくらですか", ["tag"], ["bag", "bag#4d7fd8"]],
  ["office", 1, "何時ですか", ["clock", "bank"], ["alarm"]],
  ["station", 0, "京都へ行きます", ["torii"], ["train"]],
  ["cafe", 1, "ランチ", ["noren"], ["ramen"]],
  ["home", 1, "プレゼント", ["vase"], ["gift", "watch"]],
  ["street", 1, "日本の生活", ["fuji", "city"], ["coin"]],
  ["office", 1, "約束", ["calendar"], ["clapper"]],
  ["street", 0, "どこにありますか", ["bank", "post", "store"], ["pin"]],
  ["fruit", 1, "くだもの", ["basket"], ["apple", "banana", "egg"]],
  ["station", 0, "旅行の感想", ["pagoda", "city"], ["train"]],
  ["outdoor", 0, "夏休み", ["sun"], ["camera", "wave"]],
  ["taxi", 0, "タクシー", ["signal"], ["taxi"]],
  ["school", 0, "いいですか", ["nophoto"], ["bench"]],
  ["home", 1, "朝のしたく", ["sunrise"], ["brush"]],
  ["hospital", 1, "病院", ["cross"], ["thermo", "pill"]],
  ["school", 0, "できます", ["phones"], ["piano"]],
  ["outdoor", 1, "〜たことがある", ["fuji"], ["clapper"]],
  ["cafe", 1, "友達と", ["clapper"], ["ticket", "ticket"]],
  ["weather", 0, "天気予報", ["tvw"], ["umbrella", "lantern"]],
  ["office", 1, "あの人は？", ["glasses"], ["cake"]],
  ["office", 1, "使い方", ["vend"], ["tap"]],
  ["home", 1, "〜てくれる", ["heart"], ["bento"]],
  ["weather", 0, "もし〜たら", ["globe"], ["ticket", "house"]],
  ["office", 1, "〜んです", ["thermo"], ["pill"]],
  ["school", 1, "読める・見える", ["paper", "fuji"], ["notebook"]],
  ["school", 1, "〜ながら", ["notes"], ["books", "phones"]],
  ["street", 0, "〜てしまった", ["koban"], ["wallet", "keys"]],
  ["street", 0, "旅行の準備", ["hotel", "map"], ["suitcase"]],
  ["outdoor", 0, "来年の予定", ["plane"], ["cap", "calendar"]],
  ["hospital", 0, "〜たほうがいい", ["cross"], ["bed", "thermo"]],
  ["street", 0, "標識", ["stop", "nopark"], ["signal"]],
  ["cafe", 1, "カレー", ["pan"], ["pot", "carrot"]],
  ["shop", 1, "〜なら", ["shirt", "tag"], ["onsen"]],
  ["school", 1, "〜ようになる", ["speech"], ["notebook"]],
  ["weather", 0, "大変な日", ["cloudrain"], ["umbrella", "star"]],
  ["outdoor", 1, "趣味", ["tree"], ["camera", "pan"]],
  ["office", 0, "遅くなりました", ["alarm"], ["train"]],
  ["office", 1, "会議", ["board", "clock"], ["phone"]],
  ["home", 1, "ありがとう", ["book"], ["gift", "heart"]],
  ["school", 1, "〜ために", ["piggy"], ["dict", "coin"]],
  ["weather", 0, "雨が降りそう", ["cloud"], ["umbrella", "umbrella#4d7fd8"]],
  ["cafe", 1, "飲みすぎ", ["tv"], ["sake", "pill"]],
  ["office", 0, "火事", ["exit", "fire"], ["ext"]],
  ["phone", 0, "もしもし", ["clock"], ["phone"]],
  ["home", 1, "ニュース", ["tvnews"], ["news", "coin"]],
  ["office", 1, "お願いします", ["clock", "cross"], ["calendar"]],
  ["cafe", 1, "いらっしゃいませ", ["door"], ["bell", "cup"]],
  ["office", 1, "申します", ["city", "clock"], ["box", "card"]]
];

const ic = (spec, x, y, s) => {
  const [n, c] = spec.split("#");
  const f = I[n];
  return f ? `<g transform="translate(${x},${y}) scale(${s})">${f(c ? "#" + c : undefined)}</g>` : "";
};
const XS = n => (n == 1 ? [240] : n == 2 ? [206, 274] : [190, 240, 290]);
const plaque = (txt, cx, anchor) => {
  const w = Math.max(70, [...txt].length * 15 + 24), x = anchor == "l" ? cx : cx - w / 2;
  return `<g><rect x="${x}" y="${anchor == "l" ? 14 : 20}" width="${w}" height="26" rx="8" fill="#fff" fill-opacity=".93" stroke="${K}" stroke-width="2"/>${T(txt, (anchor == "l" ? 14 : 20) + 18, 14, K, x + w / 2)}</g>`;
};

// Trả về { bg, back, front } cho bài li (0–49); mode "d" = hội thoại 2 người, "p" = đoạn văn 1 người
export function lesson(li, mode) {
  const L = LESSON[li];
  if (!L) return null;
  const [bg, tbl, sign, wall, tab] = L;
  if (mode !== "d") {
    const all = [...wall, ...tab].slice(0, 4);
    const pos = [[72, 206, 1.15], [408, 206, 1.15], [414, 124, .85], [64, 124, .85]];
    return { bg, back: plaque(sign, 14, "l") + all.map((n, k) => ic(n, ...pos[k])).join(""), front: "" };
  }
  const sw = wall.length > 2 ? .85 : 1.1, st = tab.length > 2 ? .85 : 1.1;
  const back = plaque(sign, 240) + wall.map((n, k) => ic(n, XS(wall.length)[k], 136, sw)).join("");
  const table = tbl ? `<rect x="112" y="232" width="256" height="38" rx="7" fill="#a8713f"/><rect x="112" y="232" width="256" height="8" rx="4" fill="#c98f58"/>` : "";
  const front = table + tab.map((n, k) => ic(n, XS(tab.length)[k], tbl ? 234 : 208, st)).join("");
  return { bg, back, front };
}
