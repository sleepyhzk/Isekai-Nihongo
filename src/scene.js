import { lesson } from "./scene2.js";
// Tranh minh họa Shadowing: tự vẽ bằng SVG. Nhân vật bán thân, người đang nói có miệng cử động và bóng thoại.
const BG = {
  meet: ["#fde7d9", "#f3c3a2"], shop: ["#e3f1ff", "#b6d6f5"], fruit: ["#eaf7e1", "#c3e5aa"], cafe: ["#f7e8d4", "#e0bf98"],
  station: ["#dff0f7", "#b3d8e8"], taxi: ["#fff4cc", "#f0d67a"], hospital: ["#eaf7f4", "#bde4db"], office: ["#e9ebf7", "#c4c9ea"],
  home: ["#fcebf0", "#f1c2d2"], weather: ["#dcebff", "#a7c7f2"], school: ["#e7f1e1", "#b8d4ab"], phone: ["#f0e8fc", "#cbb9ee"],
  street: ["#e9eff3", "#c1cfda"], outdoor: ["#ddf4e2", "#abdfb7"]
};
// Khóa cảnh cho 50 bài hội thoại (đúng thứ tự trong dialogues.js)
export const DSCENE = ["meet","shop","shop","office","station","cafe","home","street","office","street",
  "fruit","station","home","taxi","school","home","hospital","school","outdoor","cafe",
  "weather","office","office","home","weather","office","school","school","street","station",
  "outdoor","hospital","street","cafe","shop","school","weather","outdoor","office","office",
  "home","school","weather","cafe","office","phone","home","office","cafe","office"];

const props = {
  meet: `<rect x="188" y="34" width="104" height="84" rx="8" fill="#bfe3ff" stroke="#fff" stroke-width="7"/><path d="M240 34v84M188 76h104" stroke="#fff" stroke-width="4"/><circle cx="266" cy="56" r="11" fill="#ffd54f"/><g class="sw"><path d="M20 205l8-34h28l8 34z" fill="#c9805a"/><path d="M42 171c-18-8-20-28-6-34 4 14 12 20 6 34zM42 171c16-10 24-26 10-36-6 14-14 22-10 36z" fill="#58b368"/></g>`,
  shop: `<rect x="150" y="50" width="180" height="150" rx="8" fill="#f4f7fb" stroke="#9db8d6" stroke-width="3"/><path d="M150 100h180M150 150h180" stroke="#9db8d6" stroke-width="4"/><g><rect x="162" y="68" width="26" height="30" rx="4" fill="#ef7b6c"/><rect x="196" y="76" width="22" height="22" rx="4" fill="#ffd166"/><rect x="226" y="62" width="30" height="36" rx="4" fill="#6bb6e6"/><rect x="266" y="72" width="26" height="26" rx="4" fill="#8bd17c"/><rect x="298" y="66" width="22" height="32" rx="4" fill="#c79bf2"/><rect x="164" y="118" width="30" height="30" rx="4" fill="#ffb4a2"/><rect x="204" y="124" width="24" height="24" rx="4" fill="#90e0ef"/><rect x="238" y="112" width="32" height="36" rx="4" fill="#ffd166"/><rect x="282" y="120" width="34" height="28" rx="4" fill="#ef7b6c"/></g><g class="sw"><rect x="212" y="14" width="56" height="26" rx="8" fill="#ef6f6c"/><text x="240" y="33" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" font-family="sans-serif">¥ SALE</text></g>`,
  fruit: `<rect x="130" y="150" width="220" height="56" rx="6" fill="#c98f58"/><path d="M130 172h220" stroke="#a8713f" stroke-width="3"/><g fill="#e5483f"><circle cx="160" cy="146" r="14"/><circle cx="188" cy="142" r="14"/><circle cx="216" cy="146" r="14"/></g><g fill="#8fd16a"><circle cx="248" cy="144" r="13"/><circle cx="274" cy="146" r="13"/></g><g fill="#ffd93b"><path d="M296 150c14-26 38-24 46-6-14-6-28-4-46 6z"/><path d="M300 154c14-22 34-20 42-4-12-4-24-2-42 4z"/></g><path d="M170 40h140l-12 34H182z" fill="#f2a65a"/><path d="M182 74h116M170 40l12 34M310 40l-12 34" stroke="#d98a3f" stroke-width="3" fill="none"/><text x="240" y="64" text-anchor="middle" font-size="19" font-weight="700" fill="#fff" font-family="sans-serif">くだもの</text>`,
  cafe: `<rect x="170" y="40" width="140" height="84" rx="8" fill="#5a4a42"/><text x="240" y="70" text-anchor="middle" font-size="18" font-weight="700" fill="#fff" font-family="sans-serif">MENU</text><path d="M188 86h104M188 100h80" stroke="#e8d4bf" stroke-width="4" stroke-linecap="round"/><ellipse cx="240" cy="205" rx="86" ry="12" fill="#a8713f"/>`,
  station: `<rect x="100" y="110" width="280" height="76" rx="16" fill="#f5f7fa" stroke="#9db0c6" stroke-width="3"/><rect x="100" y="150" width="280" height="14" fill="#4b9cd3"/><g fill="#a9d6f5"><rect x="120" y="122" width="40" height="24" rx="4"/><rect x="176" y="122" width="40" height="24" rx="4"/><rect x="232" y="122" width="40" height="24" rx="4"/><rect x="288" y="122" width="40" height="24" rx="4"/></g><rect x="196" y="22" width="88" height="34" rx="8" fill="#2e7d6b"/><text x="240" y="47" text-anchor="middle" font-size="22" font-weight="700" fill="#fff" font-family="sans-serif">駅</text>`,
  taxi: `<path d="M120 190v-34q0-14 14-20l26-8 22-28h116l22 28 26 8q14 6 14 20v34z" fill="#ffc933" stroke="#d9a21b" stroke-width="3"/><path d="M186 128l16-22h76l16 22z" fill="#cfeaff"/><rect x="214" y="92" width="52" height="16" rx="5" fill="#fff" stroke="#d9a21b" stroke-width="2"/><text x="240" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="#333" font-family="sans-serif">TAXI</text><circle cx="168" cy="194" r="18" fill="#333"/><circle cx="312" cy="194" r="18" fill="#333"/><circle cx="168" cy="194" r="7" fill="#bbb"/><circle cx="312" cy="194" r="7" fill="#bbb"/>`,
  hospital: `<rect x="196" y="28" width="88" height="88" rx="14" fill="#fff" stroke="#e55d5d" stroke-width="5"/><path d="M240 46v52M214 72h52" stroke="#e55d5d" stroke-width="16" stroke-linecap="round"/><rect x="34" y="150" width="86" height="40" rx="8" fill="#fff" stroke="#9cc9bf" stroke-width="3"/><rect x="34" y="140" width="30" height="16" rx="8" fill="#cfe9e3"/>`,
  office: `<circle cx="240" cy="76" r="38" fill="#fff" stroke="#6b72b8" stroke-width="5"/><path d="M240 76V52M240 76l18 10" stroke="#3c3f6e" stroke-width="5" stroke-linecap="round" class="hand"/><circle cx="240" cy="76" r="4" fill="#3c3f6e"/><rect x="40" y="38" width="76" height="52" rx="6" fill="#fff" stroke="#a9aedd" stroke-width="3"/><path d="M50 52h56M50 64h40M50 76h48" stroke="#a9aedd" stroke-width="4" stroke-linecap="round"/>`,
  home: `<rect x="190" y="38" width="100" height="74" rx="6" fill="#fff" stroke="#e29bb4" stroke-width="4"/><circle cx="224" cy="70" r="14" fill="#ffd166"/><path d="M196 112l30-26 22 16 18-14 22 24z" fill="#8bd1a0"/><path d="M370 110v78M370 110c-22 0-30-16-30-28h60c0 12-8 28-30 28z" stroke="#e29bb4" stroke-width="5" fill="#ffe08a"/><rect x="36" y="150" width="86" height="42" rx="12" fill="#e8749a"/>`,
  weather: `<g class="sw"><circle cx="150" cy="70" r="26" fill="#ffd54f"/><g stroke="#ffd54f" stroke-width="5" stroke-linecap="round"><path d="M150 28v-10M150 112v10M108 70H98M192 70h10M120 40l-7-7M180 100l7 7M180 40l7-7M120 100l-7 7"/></g></g><g class="sw"><path d="M262 92q-30 0-30-22t28-24q10-22 36-16 22 4 22 26 24 0 24 18t-24 18z" fill="#fff"/></g><g stroke="#6fa8ee" stroke-width="4" stroke-linecap="round" class="rain"><path d="M270 118l-6 14M296 118l-6 14M322 118l-6 14"/></g>`,
  school: `<rect x="120" y="30" width="240" height="110" rx="8" fill="#2f5d50" stroke="#a97c50" stroke-width="7"/><text x="240" y="98" text-anchor="middle" font-size="46" font-weight="700" fill="#fff" font-family="'Noto Sans JP',sans-serif" opacity=".92">あ い う</text><path d="M140 128h40" stroke="#fff" stroke-width="3" opacity=".6" stroke-linecap="round"/>`,
  phone: `<rect x="204" y="28" width="72" height="124" rx="14" fill="#2d2a40"/><rect x="212" y="42" width="56" height="88" rx="6" fill="#bfe3ff"/><circle cx="240" cy="142" r="4" fill="#8f8bb0"/><g stroke="#9b87f5" stroke-width="4" fill="none" stroke-linecap="round" class="wave"><path d="M292 60q14 18 0 36"/><path d="M308 48q24 30 0 60"/><path d="M188 60q-14 18 0 36"/><path d="M172 48q-24 30 0 60"/></g>`,
  street: `<g fill="#a9bccb"><rect x="30" y="80" width="70" height="126"/><rect x="110" y="44" width="60" height="162"/><rect x="310" y="60" width="64" height="146"/><rect x="384" y="96" width="70" height="110"/></g><g fill="#fff" opacity=".85"><rect x="42" y="94" width="14" height="14"/><rect x="68" y="94" width="14" height="14"/><rect x="42" y="124" width="14" height="14"/><rect x="68" y="124" width="14" height="14"/><rect x="122" y="60" width="14" height="14"/><rect x="146" y="60" width="14" height="14"/><rect x="122" y="92" width="14" height="14"/><rect x="146" y="92" width="14" height="14"/><rect x="322" y="76" width="14" height="14"/><rect x="348" y="76" width="14" height="14"/><rect x="322" y="108" width="14" height="14"/><rect x="348" y="108" width="14" height="14"/></g><rect x="236" y="78" width="6" height="128" fill="#7a8c9b"/><circle cx="239" cy="70" r="20" fill="#2e7d6b"/><path d="M229 70h20M243 62l8 8-8 8" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  outdoor: `<circle cx="396" cy="52" r="24" fill="#ffd54f"/><path d="M0 190q70-70 150-20t160-30 170 30v90H0z" fill="#8fd49c"/><g class="sw"><rect x="62" y="116" width="10" height="64" fill="#9b6b43"/><circle cx="67" cy="100" r="34" fill="#4fae6b"/><circle cx="46" cy="116" r="22" fill="#5cc17a"/><circle cx="90" cy="116" r="22" fill="#5cc17a"/></g>`
};
const FG = {
  cafe: `<ellipse cx="240" cy="226" rx="104" ry="14" fill="#8a5a2f"/><rect x="136" y="226" width="208" height="44" fill="#a8713f"/><g><rect x="212" y="206" width="22" height="20" rx="4" fill="#fff"/><path d="M234 211q10 0 10 8t-10 4" stroke="#fff" stroke-width="3" fill="none"/><rect x="258" y="206" width="22" height="20" rx="4" fill="#fff"/></g>`,
  office: `<rect x="110" y="234" width="260" height="36" rx="6" fill="#8b6f4e"/><rect x="214" y="204" width="52" height="32" rx="3" fill="#dfe3f2" stroke="#8a90bd" stroke-width="3"/><rect x="204" y="236" width="72" height="5" fill="#8a90bd"/>`,
  school: `<rect x="120" y="236" width="240" height="34" rx="5" fill="#c9985f"/>`,
  shop: `<rect x="146" y="238" width="188" height="32" rx="5" fill="#e4a46a"/>`,
  fruit: `<rect x="130" y="238" width="220" height="32" rx="5" fill="#b87a45"/>`
};

function person(x, who) {
  const f = who === "A" || who === "S";
  const hair = f
    ? `<path d="M-35 124Q-38 78 0 76Q38 78 35 124L38 170Q0 182-38 170Z" fill="#3a2a25"/>`
    : "";
  const body = f
    ? `<path d="M-56 270Q-54 196-24 188L24 188Q54 196 56 270Z" fill="#ee6f6c"/><path d="M-14 188L0 208L14 188Z" fill="#fff"/>`
    : `<path d="M-60 270Q-58 196-26 188L26 188Q58 196 60 270Z" fill="#4d7fd8"/><path d="M-16 188L0 214L16 188Z" fill="#fff"/><path d="M0 200l-5 8 5 28 5-28z" fill="#e0524f"/>`;
  const top = f
    ? `<path d="M-31 124Q-28 86 0 88Q28 86 31 124Q14 104-4 106Q-18 108-31 124Z" fill="#3a2a25"/>`
    : `<path d="M-31 122Q-34 80-4 80Q10 74 22 82Q36 90 31 122Q22 100 0 100Q-22 100-31 122Z" fill="#2b2c3a"/><path d="M-6 80l6-12 8 12z" fill="#2b2c3a"/>`;
  return `<g transform="translate(${x},0)"><g class="pp" data-p="${who}">
<g class="bub"><rect x="-32" y="14" width="64" height="36" rx="18" fill="#fff" stroke="#2b2230" stroke-width="2.5"/><path d="M-8 49l-8 16 20-16z" fill="#fff" stroke="#2b2230" stroke-width="2.5" stroke-linejoin="round"/><path d="M-10 50h14" stroke="#fff" stroke-width="4"/><circle cx="-12" cy="32" r="3.5" fill="#2b2230"/><circle cx="0" cy="32" r="3.5" fill="#2b2230"/><circle cx="12" cy="32" r="3.5" fill="#2b2230"/></g>
${hair}${body}<rect x="-9" y="164" width="18" height="28" fill="#f2bf96"/>
<ellipse cx="0" cy="128" rx="29" ry="33" fill="#ffdcba"/>${top}
<ellipse cx="-30" cy="130" rx="4" ry="6" fill="#f2bf96"/><ellipse cx="30" cy="130" rx="4" ry="6" fill="#f2bf96"/>
<g class="eye"><ellipse cx="-11" cy="130" rx="3.4" ry="4.6" fill="#2b2230"/><ellipse cx="11" cy="130" rx="3.4" ry="4.6" fill="#2b2230"/><circle cx="-10" cy="128.5" r="1.2" fill="#fff"/><circle cx="12" cy="128.5" r="1.2" fill="#fff"/></g>
<circle cx="-19" cy="141" r="5" fill="#ff9aa2" opacity=".55"/><circle cx="19" cy="141" r="5" fill="#ff9aa2" opacity=".55"/>
<path d="M-15 119q4-3 8 0M7 119q4-3 8 0" stroke="#5a4036" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse class="mo" cx="0" cy="147" rx="5.5" ry="2.6" fill="#c4474f"/></g></g>`;
}

export function scene(key, mode, li) {
  const LS = li != null ? lesson(li, mode) : null;
  if (LS) key = LS.bg;
  const [c1, c2] = BG[key] || BG.street;
  const gid = "g" + Math.random().toString(36).slice(2, 7);
  const people = mode === "d" ? person(118, "A") + person(362, "B") : person(240, "S");
  return `<svg class="sc" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Minh họa"><defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="480" height="270" fill="url(#${gid})"/><rect y="206" width="480" height="64" fill="#000" opacity=".06"/>${LS ? LS.back : props[key] || ""}${people}${LS ? LS.front : FG[key] || ""}</svg>`;
}
