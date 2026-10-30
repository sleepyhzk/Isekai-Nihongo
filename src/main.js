import './style.css';
import './modern.css';
import { T } from './data.js';
import { RD } from './reading.js';
import { segment, WORD_MEANING, wordRomaji } from './gloss.js';
import { V, V2, COURSES } from './vocab.js';
import { KH, KD } from './kanji.js';
import { GR } from './grammar.js';
import { SECT, MN } from './kana.js';
import { DL } from './dialogues.js';
import { PH } from './phonetics.js';
import { PS } from './passages.js';
import { scene, DSCENE } from './scene.js';
import { EM, emojiUrl } from './emoji.js';
import { art } from './art.js';
import { VERBS, NUMS, COUNTERS, HOURS, MINUTES, DAYS, MONTHS, WEEKDAYS, SPANS, RELTIME } from './appendix.js';
let gs=new Set,vs=new Set,ks=new Set,hs=new Set,backFn=()=>home();try{ks=new Set(JSON.parse(localStorage.getItem("kk")||"[]"))}catch(e){}try{hs=new Set(JSON.parse(localStorage.getItem("ss")||"[]"))}catch(e){}try{vs=new Set(JSON.parse(localStorage.getItem("vv3")||"[]"))}catch(e){}try{gs=new Set(JSON.parse(localStorage.getItem("gg")||"[]"))}catch(e){}
const S=[];T.forEach((t,i)=>t[1].split("\n").forEach(l=>{const [j,v]=l.split("/");S.push({j,v,t:i})}));
const G=200;let saved=new Set,topic=-1,q="";
try{saved=new Set(JSON.parse(localStorage.getItem("sv")||"[]"))}catch(e){}
const $=s=>document.querySelector(s),save=()=>{try{localStorage.setItem("sv",JSON.stringify([...saved]))}catch(e){}$("#cnt").textContent=saved.size+vs.size+ks.size+gs.size+hs.size};
function toast(m){const t=$("#toast");t.textContent=m;t.style.opacity=1;setTimeout(()=>t.style.opacity=0,1600)}
const M=[["入","Làm quen","入門","Học bảng Hiragana, Katakana từ nền tảng.","#4dd0e1",""],["語","Từ vựng","語彙","Học từ theo bài, nghe phát âm, xem ví dụ.","#4ade80","語彙"],["札","Flashcard","暗記","Ôn thẻ từ, câu và Hán tự theo lịch lặp lại.","#38bdf8",""],["漢","Hán tự","漢字","Học chữ Hán qua âm Hán Việt và hình ảnh.","#9b87f5","漢字"],["記","Ghi nhớ","記憶","Gom mục đã ★ và thẻ chưa thuộc để ôn lại.","#ff7eb6",""],["文","Ngữ pháp","文法","Nắm mẫu câu qua ví dụ, rồi tự ghép lại.","#fbbf24","文法"],["音","Shadowing","音読","Nghe từng câu rồi nói theo, quen nhịp điệu.","#818cf8",""],["話","Giao tiếp","会話","200 câu giao tiếp cơ bản dùng ngay mỗi ngày.","#fb923c","会話"],["付","Phụ lục","付録","Chia động từ, số đếm, giờ giấc để tra nhanh.","#34d399",""],["試","Kiểm tra","テスト","Kiểm tra từng bài: từ vựng, Hán tự, ngữ pháp.","#f87171","試験"]];
function home(){leave();document.body.classList.add("ishome");backFn=home;topic=-1;$("#back").hidden=true;$("#app").innerHTML=`<div class="hw" aria-hidden="true"><span>学</span></div><div class="kn">まなびあまん</div><h1>Chào bạn,<br><b>hôm nay học gì?</b></h1><p class="sub">Chọn một mục để bắt đầu. Mỗi mục có bài học, thẻ ghi nhớ và bài luyện riêng.</p>`+M.map((m,i)=>`<div class="row" data-i="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><span class="ic" style="color:${m[4]}">${m[0]}</span><div><h3>${m[1]}<small>${m[2]}</small></h3><p>${m[3]}</p></div>${m[5]?`<span class="wm" aria-hidden="true">${m[5]}</span>`:""}</div>`).join("")+`<div style="border-top:1px solid var(--ln)"></div>`;
document.querySelectorAll(".row").forEach(r=>r.onclick=()=>{const k=M[+r.dataset.i][1],go={"Làm quen":()=>kana(),"Từ vựng":()=>courses(),"Flashcard":()=>fcard(),"Hán tự":()=>courses("h"),"Ghi nhớ":()=>memo(0),"Ngữ pháp":()=>gram(),"Shadowing":()=>shadow(),"Giao tiếp":()=>comm(),"Phụ lục":()=>appx(),"Kiểm tra":()=>tests()}[k];go?go():toast("Mục này đang được xây dựng")})}
function list(){const f=S.map((s,i)=>({...s,i})).filter(s=>(topic<0||s.t==topic)&&(s.j+s.v).toLowerCase().includes(q));
$("#list").innerHTML=f.map(s=>`<div class="card"><div class="t"><div class="jp">${s.j}</div><div class="vi" onclick="this.classList.toggle('h')">${s.v}</div></div><button class="ib" data-a="${s.i}" title="Phân tích">🔍</button><button class="ib" data-p="${s.i}">🔊</button><button class="ib ${saved.has(s.i)?'on':''}" data-s="${s.i}">★</button></div>`).join("")||"<p class=sub>Không tìm thấy câu nào.</p>";
document.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>say(S[b.dataset.p].j));
document.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{const k=+b.dataset.s;saved.has(k)?saved.delete(k):saved.add(k);b.classList.toggle("on");save();prog()})}
function prog(){const n=[...saved].length;$("#pg").style.width=Math.min(100,n/G*100)+"%";$("#pt").textContent=`Đã ghi nhớ ${n} · Có sẵn ${S.length} / mục tiêu ${G} câu`}
function comm(){leave();$("#back").hidden=false;$("#app").innerHTML=`<div style="color:#fb923c;font-size:12px">会話</div><h1>Giao tiếp</h1><p class="sub">Mục tiêu: 200 câu giao tiếp cơ bản. Nghĩa luôn hiện sẵn; chạm vào nghĩa để ẩn đi khi muốn tự kiểm tra. 🔊 để nghe, ★ để ghi nhớ.</p><div class="prog"><div id="pg"></div></div><small id="pt" class="sub"></small><input id="q" placeholder="Tìm câu tiếng Nhật hoặc nghĩa…"><div class="ccw"><div class="chips cc" id="ch"></div><button class="pill alt" id="cxp" title="Mở hoặc thu gọn danh sách chủ đề">▾ Tất cả chủ đề</button></div><div id="list"></div>`;
const ch=$("#ch");[["Tất cả",-1],...T.map((t,i)=>[t[0],i])].forEach(([n,i])=>{const b=document.createElement("button");b.className="chip"+(i==topic?" on":"");b.textContent=n;b.onclick=()=>{topic=i;ch.querySelectorAll(".chip").forEach(c=>c.classList.remove("on"));b.classList.add("on");list();if(!ch.classList.contains("open"))ch.scrollLeft=b.offsetLeft-ch.offsetLeft-ch.clientWidth/2+b.clientWidth/2};ch.append(b)});
const cx=$("#cxp");noFocus(cx);cx.onclick=()=>{const o=ch.classList.toggle("open");cx.textContent=o?"▴ Thu gọn":"▾ Tất cả chủ đề"};{const a=ch.querySelector(".chip.on");if(a)ch.scrollLeft=a.offsetLeft-ch.offsetLeft-ch.clientWidth/2+a.clientWidth/2}
$("#q").oninput=e=>{q=e.target.value.toLowerCase();list()};list();prog()}

const WC=[V,V2].map(c=>c.map(([n,x])=>[n,x.split("\n").map(l=>l.split("|"))]));let W=WC[0],ci=0;
const vw=id=>{const [c,r]=id.includes(":")?id.split(":"):[0,id],[i,j]=r.split("-"),l=WC[c]&&WC[c][i];return l&&l[1][j]};
/* ===== Âm thanh: cache + nạp trước, chốt giọng A/B một lần, không lẫn giọng khi chuyển nhanh ===== */
let AM={},VO=null,VOB=null,au=null,VC="nanami",VB="auto",BV=null;try{VB=localStorage.getItem("vb")||"auto"}catch(e){}try{VC=localStorage.getItem("vc")||VC}catch(e){}const BASE=import.meta.env.BASE_URL;
let AML=0,AVL={};const LP={};
/* Mỗi giọng một file audio/index-<giọng>.json, chỉ tải khi cần; audio/index.json chỉ là danh sách giọng (nhỏ) */
function ensure(v){if(!v||v=="browser"||!AVL[v]||AM[v])return Promise.resolve();return LP[v]||(LP[v]=fetch(BASE+"audio/index-"+v+".json").then(r=>{if(!r.ok)throw 0;return r.json()}).then(j=>{AM[v]=j}).catch(()=>{AM[v]={}}))}
const needsLoad=v=>!!v&&v!="browser"&&!!AVL[v]&&!AM[v];
const AMR=fetch(BASE+"audio/index.json").then(r=>r.json()).then(j=>{if(j&&j.voices){AVL=j.voices}else if(j){AM=j;for(const k in j)AVL[k]=Object.keys(j[k]).length}BV=null}).catch(()=>{}).then(()=>{AML=1;return Promise.all([ensure(VC),ensure("nanami")])});
const HASTTS="speechSynthesis"in window;
function pick(){if(!HASTTS)return;const v=speechSynthesis.getVoices().filter(x=>x.lang.replace("_","-").startsWith("ja"));if(!v.length)return;let o=null;for(const r of[/Natural|Online|Neural/i,/Google/i,/Kyoko|O-Ren|Nanami|Haruka/i]){o=v.find(x=>r.test(x.name));if(o)break}VO=o||v[0]||null;VOB=v.find(x=>x!==VO&&/Ichiro|Male|Keita|Takumi|Naoki|Daichi|Otoya|Ryusei/i.test(x.name))||null}
if(HASTTS){pick();speechSynthesis.onvoiceschanged=pick}
let sayGen=0;
const stopSay=()=>{sayGen++;if(au){au.onended=au.onerror=null;try{au.pause()}catch(e){}au=null}if(HASTTS&&(speechSynthesis.speaking||speechSynthesis.pending))speechSynthesis.cancel()};
const MALEV=["saeha","rito","keita"],okV=k=>k=="nanami"||!!CN[k];
const AC=new Map();
function getAu(f){let a=AC.get(f);if(a&&a.error){AC.delete(f);a=null}if(!a){a=new Audio();a.preload="auto";a.src=BASE+"audio/"+f;AC.set(f,a);if(AC.size>80){const k=AC.keys().next().value,o=AC.get(k);AC.delete(k);if(o&&o!==au){o.removeAttribute("src");o.load()}}}return a}
/* Giọng vai B được chốt MỘT LẦN cho cả bài (không đổi theo từng câu) */
function voiceB(){if(BV)return BV;const n=p=>AVL[p]|0;let r="browser";if(VB=="browser")r="browser";else if(VB!="auto"&&okV(VB)&&n(VB))r=VB;else{const m=MALEV.filter(p=>p!=VC&&n(p));if(m.length)r=m[0];else{const o=Object.keys(AVL).filter(p=>okV(p)&&p!=VC&&n(p)).sort((a,b)=>n(b)-n(a));if(o.length)r=o[0]}}if(AML)BV=r;return r}
/* Chọn file âm thanh cho câu t theo vai; trả về {f,v} hoặc null (dùng giọng trình duyệt) */
function srcOf(t,role){const ok=p=>p&&p!="browser"&&AM[p]&&AM[p][t];if(role=="B"){for(const p of[voiceB(),...MALEV.filter(p=>p!=VC)])if(ok(p))return{f:AM[p][t],v:p};return null}for(const p of[VC,"nanami"])if(ok(p))return{f:AM[p][t],v:p};return null}
const FBW=new Set();
function warm(t,role){AMR.then(()=>ensure(role=="B"?voiceB():VC)).then(()=>{const s=srcOf(t,role);if(s)getAu(s.f)})}
function say(t,rate=1,cb,role){stopSay();const my=sayGen,alive=()=>my==sayGen,fin=()=>{if(cb&&alive()){const c=cb;cb=null;c()}};
const prim=role=="B"?voiceB():VC;if(!AML||needsLoad(prim)){AMR.then(()=>ensure(role=="B"?voiceB():VC)).then(()=>{if(alive())say(t,rate,cb,role)});return}
const s=srcOf(t,role);let used=0;
const tts=()=>{if(used||!alive()||!HASTTS){fin();return}used=1;const u=new SpeechSynthesisUtterance(t);u.lang="ja-JP";u.rate=.9*rate;if(role=="B"){if(VOB)u.voice=VOB;else{if(VO)u.voice=VO;u.pitch=.7}}else if(VO)u.voice=VO;u.onend=fin;u.onerror=fin;speechSynthesis.speak(u)};
if(s){if(s.v!=(role=="B"?voiceB():VC)&&!FBW.has(s.v)){FBW.add(s.v);toast("Giọng đã chọn chưa có file cho câu này, tạm dùng giọng khác")}
const a=getAu(s.f);au=a;a.playbackRate=rate;a.onended=()=>{a.onended=a.onerror=null;fin()};a.onerror=()=>{if(au===a&&alive())tts()};try{a.currentTime=0}catch(e){}const pr=a.play();if(pr&&pr.catch)pr.catch(e=>{if(e&&e.name=="AbortError")return;if(au===a&&alive())tts()})}
else tts()}
let AN={};fetch(BASE+"analysis.json").then(r=>r.json()).then(j=>AN=j).catch(()=>{});
const EX={};[...V,...V2].forEach(([,x])=>x.split("\n").forEach(l=>{const [k,,,j,v]=l.split("|");if(j)EX[k]={j,v}}));
const GL={};[...V,...V2].forEach(([,x])=>x.split("\n").forEach(l=>{const [k,,v]=l.split("|");GL[k]=v}));
function pnl(tx,vi){const a=AN[tx];if(!a)return`<div class="pn m">Chưa có dữ liệu phân tích. Hãy chạy <b>npm run dev</b> (hoặc <b>npm run analyze</b>) rồi tải lại trang.</div>`;
return`<div class="pn"><div style="color:var(--ac)">${a.r}</div><div class="m" style="margin-bottom:8px">${vi}</div>`+a.t.map(t=>{
const ks=[...t.s].filter(c=>/[\u4e00-\u9fff]/.test(c)),g=GL[t.s]||GL[t.b||""],gr=/Trợ/.test(t.p)||(!ks.length&&t.s.length<2);
const ow=EX[t.s]||EX[t.b||""],ex=gr?[]:[...(ow?[ow]:[]),...S.filter(x=>x.j!==tx&&x.j.includes(t.s))].filter(x=>x.j!==tx).slice(0,2);
return`<div class="tk"><div class="tj">${t.s}</div><div><div>${t.h} · <i>${t.r}</i><span class="tg">${t.p}</span></div>`
+(g?`<div class="m">Nghĩa: ${g}</div>`:"")+(t.b?`<div class="m">Dạng gốc: ${t.b}</div>`:"")
+(ks.length?`<div class="m">Thành phần: ${ks.map(c=>c+(KH[c]?` (${KH[c]})`:"")).join(" + ")}</div>`:"")
+(ex.length?`<div class="m">Ví dụ:</div>`+ex.map(x=>`<div class="m" style="color:var(--tx)">${x.j} <span class="y" data-y="${x.j}">🔊</span><br><i>${(AN[x.j]||{}).r||""}</i> — ${x.v}</div>`).join(""):"")+`</div></div>`}).join("")+`</div>`}
document.addEventListener("click",e=>{const sb=e.target.closest("[data-star]");if(sb){tgCs(sb);return}const y=e.target.closest("[data-y]");if(y){say(y.dataset.y);return}const b=e.target.closest("[data-a]");if(!b)return;const c=b.closest(".card"),o=c.querySelector(".pn");if(o){o.remove();b.classList.remove("on");return}
const a=b.dataset.a;let tx,vi;if(a[0]=="g"){const x=GX[+a.slice(1)];tx=x.j;vi=x.v}else if(a.includes("-")){[tx,,vi]=vw(a)}else{tx=S[+a].j;vi=S[+a].v}
c.insertAdjacentHTML("beforeend",pnl(tx,vi));b.classList.add("on")});
const KLC=(()=>{const seen=new Set();return WC.map(cs=>cs.map(([,ws])=>{const o=[];ws.forEach(w=>[...w[0]].forEach(c=>{if(KD[c]&&!seen.has(c)&&!o.includes(c))o.push(c)}));o.forEach(c=>seen.add(c));return o}))})();let KL=KLC[0],hc=0;
function hl(c=hc){leave();hc=c;W=WC[c];KL=KLC[c];backFn=()=>courses("h");$("#app").innerHTML=`<div style="color:#9b87f5;font-size:12px">漢字</div><h1>Hán tự <b>${COURSES[c].name} ${COURSES[c].code.split(" · ")[0]}</b></h1><p class="sub">Học chữ Hán qua âm Hán Việt và từ vựng liên quan.</p><button class="pill" id="kq">🧠 Luyện nhớ cả giáo trình</button>`+W.map((l,i)=>!KL[i].length?"":`<div class="row" data-k="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><div><h3>${l[0]}</h3><p>${KL[i].length} chữ Hán · ${l[1].length} từ vựng</p></div></div>`).join("")+`<div style="border-top:1px solid var(--ln)"></div>`;
$("#kq").onclick=()=>kquiz(KLC[c].flat(),{back:()=>hl(c),backLabel:"Về danh sách bài"});document.querySelectorAll("[data-k]").forEach(r=>r.onclick=()=>kl(+r.dataset.k))}
function kl(i){leave();backFn=()=>hl(hc);$("#app").innerHTML=`<h1>${W[i][0]}</h1><p class="sub">${KL[i].length} chữ Hán · chạm vào nghĩa để ẩn/hiện</p><button class="pill" id="kq">🧠 Luyện nhớ</button><div id="list"></div>`;$("#kq").onclick=()=>kquiz(KL[i],{back:()=>kl(i),backLabel:"Về bài học"});
$("#list").innerHTML=KL[i].map(c=>{const [on,kun,mn,tip]=KD[c],ws=W.flatMap(l=>l[1]).filter(w=>w[0].includes(c)).slice(0,3);
return`<div class="card"><div class="jp" style="font-size:44px;min-width:64px;text-align:center">${c}</div><div class="t"><div><b>${(KH[c]||"").toUpperCase()}</b> <span class="vi" onclick="this.classList.toggle('h')">${mn}</span></div><div class="m">Âm On: ${on||"–"} · Âm Kun: ${kun||"–"}</div>${tip?`<div class="m">💡 ${tip}</div>`:""}<div class="m" style="color:var(--tx)">`+ws.map(w=>`${w[0]} (${w[1]}) ${w[2]}`).join("<br>")+`</div></div><button class="ib" data-p="${ws[0]?ws[0][1]:c}">🔊</button><button class="ib ${ks.has(c)?"on":""}" data-s="${c}">★</button></div>`}).join("");
document.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>say(b.dataset.p));
document.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{const k=b.dataset.s;ks.has(k)?ks.delete(k):ks.add(k);b.classList.toggle("on");try{localStorage.setItem("kk",JSON.stringify([...ks]))}catch(e){}$("#cnt").textContent=saved.size+vs.size+ks.size+gs.size+hs.size})}
const n2=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\s'’]/g,"").toLowerCase();
function prac(i){drill(W[i][1].map(([k,r,v])=>({jp:k,rd:r,vi:v})),{title:W[i][0],back:()=>lesson(i),backLabel:"Về trang bài học"})}
function courses(h){leave();backFn=home;$("#back").hidden=false;$("#app").innerHTML=`${h?'<div style="color:#9b87f5;font-size:12px">漢字</div><h1>Hán tự</h1><p class="sub">Chọn giáo trình để học chữ Hán theo bài.</p>':'<div style="color:#4ade80;font-size:12px">語彙</div><h1>Từ vựng</h1><p class="sub">Chọn giáo trình để học từ theo bài.</p>'}`+COURSES.map((c,i)=>`<div class="row" data-c="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><div><h3>${c.name}<small>${c.code}</small>${c.soon?'<span class="new">SẮP CÓ</span>':''}</h3><p>${c.soon?'Đang cập nhật':h?(KLC[i].filter(l=>l.length).length+' bài · '+KLC[i].reduce((a,l)=>a+l.length,0)+' chữ Hán'):WC[i].length+' bài học · '+WC[i].reduce((a,l)=>a+l[1].length,0)+' từ mới'}</p></div></div>`).join("")+`<div style="border-top:1px solid var(--ln)"></div>`;
document.querySelectorAll("[data-c]").forEach(r=>r.onclick=()=>{const c=+r.dataset.c;if(COURSES[c].soon)return toast("Phần này sắp có");h?hl(c):vocab(c)})}
function vocab(c=ci){leave();ci=c;W=WC[c];backFn=courses;$("#back").hidden=false;$("#app").innerHTML=`<div style="color:#4ade80;font-size:12px">語彙</div><h1>${COURSES[c].name} <b>${COURSES[c].code}</b></h1><p class="sub">Học từ theo bài: nghe phát âm, chạm vào nghĩa để ẩn/hiện, ★ để ghi nhớ.</p>`+W.map((l,i)=>`<div class="row" data-l="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><div><h3>${l[0]}</h3><p>${l[1].length} từ mới</p></div></div>`).join("")+`<div style="border-top:1px solid var(--ln)"></div>`;
document.querySelectorAll("[data-l]").forEach(r=>r.onclick=()=>lesson(+r.dataset.l))}
function lesson(i){leave();W=WC[ci];backFn=()=>vocab(ci);const [n,ws]=W[i];$("#app").innerHTML=`<h1>${n}</h1><p class="sub">${ws.length} từ mới</p><button class="pill" id="pr">✍ Luyện gõ</button> <button class="pill" id="fcb">🃏 Flashcard</button><div id="list"></div>`;
$("#pr").onclick=()=>prac(i);$("#fcb").onclick=()=>{const b=backFn;fcard({src:"v"+ci,top:i,mode:"all"});backFn=()=>{leave();lesson(i)}};$("#list").innerHTML=ws.map(([k,r,v],j)=>{const id=ci+":"+i+"-"+j;return `<div class="card"><div class="t"><div class="jp">${k}</div><div class="sub" style="margin:2px 0">${r}</div><div class="vi" onclick="this.classList.toggle('h')">${v}</div></div><button class="ib" data-a="${id}" title="Phân tích">🔍</button><button class="ib" data-p="${r}">🔊</button><button class="ib ${vs.has(id)?'on':''}" data-s="${id}">★</button></div>`}).join("");
document.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>say(b.dataset.p));
document.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{const k=b.dataset.s;vs.has(k)?vs.delete(k):vs.add(k);b.classList.toggle("on");try{localStorage.setItem("vv3",JSON.stringify([...vs]))}catch(e){}$("#cnt").textContent=saved.size+vs.size+ks.size+gs.size+hs.size})}
/* ===== Ghi nhớ (Chữ hay quên) ===== */
const TY={v:["Từ vựng","語彙","#4ade80"],s:["Giao tiếp","会話","#fb923c"],k:["Hán tự","漢字","#9b87f5"],g:["Ngữ pháp","文法","#fbbf24"],h:["Shadowing & Số đếm","音読","#818cf8"]};
const persist=()=>{try{localStorage.setItem("sv",JSON.stringify([...saved]));localStorage.setItem("vv3",JSON.stringify([...vs]));localStorage.setItem("kk",JSON.stringify([...ks]));localStorage.setItem("gg",JSON.stringify([...gs]));localStorage.setItem("ss",JSON.stringify([...hs]))}catch(e){}$("#cnt").textContent=saved.size+vs.size+ks.size+gs.size+hs.size};
function items(){const o=[],AW=WC.flat().flatMap(l=>l[1]);
[...saved].forEach(k=>{const s=S[k];if(s)o.push({t:"s",k,jp:s.j,rd:(AN[s.j]||{}).r||"",vi:s.v,say:s.j})});
[...vs].forEach(id=>{const w=vw(id);if(w)o.push({t:"v",k:id,jp:w[0],rd:w[1],vi:w[2],say:w[1]})});
[...ks].forEach(c=>{const d=KD[c];if(!d)return;const [on,kun,mn]=d,ws=AW.filter(w=>w[0].includes(c));o.push({t:"k",k:c,jp:c,rd:`${(KH[c]||"").toUpperCase()} · On: ${on||"–"} · Kun: ${kun||"–"}`,vi:mn,say:ws[0]?ws[0][1]:c})});
[...gs].forEach(key=>{const [i,k]=key.split("-").map(Number),p=GR[i]&&GR[i][1][k];if(p)o.push({t:"g",k:key,jp:p[0],rd:"",vi:`${p[1]} · Ví dụ: ${p[3][0][0]}`,say:p[3][0][0]})});
[...hs].forEach(j=>{o.push({t:"h",k:j,jp:j,rd:wordRomaji(j)||(AN[j]||{}).r||"",vi:SHV[j]||"",say:j})});
return o}
function del(it){it.t=="h"?hs.delete(it.k):it.t=="s"?saved.delete(it.k):it.t=="v"?vs.delete(it.k):it.t=="g"?gs.delete(it.k):ks.delete(it.k)}
let MT=0;
const memHero=()=>`<div class="hero"><span class="wm">記</span><div class="hic">🔖</div><h1>Chữ hay quên</h1><div class="m" style="font-size:14px;margin:0 0 12px">記憶</div><p class="sub" style="max-width:560px;margin:0">Gom các mục bạn đã bấm <b style="color:var(--pk)">★</b> và các thẻ Flashcard đã chấm Chưa thuộc / Thuộc rồi, để nghe lại, ôn nhanh, luyện gõ hoặc làm trắc nghiệm.</p></div>`;
const memTabs=t=>{const fa=fcAll(),n1=fa.filter(c=>fcCls(c)==1).length,n2=fa.filter(c=>fcCls(c)==2).length;return`<div class="fchips rvt" style="margin:16px 0 4px">${[["★ Đã đánh dấu",items().length],["Chưa thuộc",n1],["Thuộc rồi",n2]].map((x,k)=>`<button class="${t==k?"go":"pill alt"}" data-mt="${k}">${x[0]} <small>${x[1]}</small></button>`).join("")}</div>`};
const bindMT=()=>document.querySelectorAll("[data-mt]").forEach(b=>{noFocus(b);b.onclick=()=>memo(+b.dataset.mt)});
const kjAlts=c=>{const d=KD[c];if(!d)return[];const o=new Set;[d[0],d[1]].forEach(t=>(t||"").split(/[,、]/).forEach(x=>{x=x.trim();if(!x||x=="–")return;const a=x.replace(/\(.*?\)/g,""),b=x.replace(/[()]/g,"");[a,b].forEach(y=>{y=K2H(y.replace(/[^\u3041-\u30ffー]/g,""));if(y)o.add(y)})}));return[...o]};
const kjShow=c=>{const d=KD[c]||[],f=t=>(t||"").split(/[,、]/).map(x=>x.trim()).filter(x=>x&&x!="–").join("・");return[f(d[0]),f(d[1])].filter(Boolean).join(" / ")};
const nk=t=>K2H(t).replace(/[^\u3041-\u3096ー]/g,"").replace(/は/g,"わ").replace(/へ/g,"え").replace(/を/g,"お");
const kanaOf=j=>{const a=AN[j];if(a&&a.t&&a.t.length)return a.t.map(t=>t.h||t.s).join("");return /[\u4e00-\u9fff]/.test(j)?"":K2H(j.replace(/[^\u3041-\u30ff]/g,""))};
function memqs(list){const AW=WC.flat().flatMap(l=>l[1]);
return list.flatMap(it=>{const base={big:it.jp,ex:`<b>${it.jp}</b>${it.rd?`<br>${it.rd}`:""}<br>${it.vi}`,mem:{t:it.t,k:it.k},say:it.say};
if(it.t=="k")return kqs([it.k]);if(it.t=="g")return gqs([it.k]);
if(!it.vi)return[];
if(it.t=="v"){const ty=it.rd&&it.rd!=it.jp?Math.floor(Math.random()*3):[0,2][Math.floor(Math.random()*2)];
if(ty==0){const ds=pickN(AW,3,(x,o)=>x[2]!=it.vi&&!o.some(y=>y[2]==x[2])),r=place(it.vi,ds.map(x=>x[2])),why={};ds.forEach(x=>why[x[2]]=`«${x[2]}» là nghĩa của từ <b>${x[0]}</b> (${x[1]}), một từ khác. Còn <b>${it.jp}</b> (${it.rd}) có nghĩa là «${it.vi}».`);return[{...base,ask:"Từ này có nghĩa là gì?",prompt:it.jp,hear:it.rd,why,opts:r.opts,a:r.a}]}
if(ty==1){const ds=pickN(AW,3,(x,o)=>x[1]!=it.rd&&!o.some(y=>y[1]==x[1])),r=place(it.rd,ds.map(x=>x[1])),why={};ds.forEach(x=>why[x[1]]=`${x[1]} là cách đọc của từ <b>${x[0]}</b> (${x[2]}), không phải của <b>${it.jp}</b>. <b>${it.jp}</b> đọc là <b>${it.rd}</b> (${it.vi}).`);return[{...base,ask:"Từ này đọc như thế nào?",prompt:it.jp,why,opts:r.opts,a:r.a}]}
const ds=pickN(AW,3,(x,o)=>x[0]!=it.jp&&!o.some(y=>y[0]==x[0])),r=place(it.jp,ds.map(x=>x[0])),why={};ds.forEach(x=>why[x[0]]=`<b>${x[0]}</b> (${x[1]}) nghĩa là «${x[2]}», không phải «${it.vi}». Từ có nghĩa «${it.vi}» là <b>${it.jp}</b> (${it.rd}).`);return[{...base,ask:"Chọn từ tiếng Nhật đúng với nghĩa này:",prompt:it.vi,sm:1,why,opts:r.opts,a:r.a}]}
const P=it.t=="s"?S.map(x=>[x.j,x.v]):Object.entries(SHV).filter(e=>e[1]);
if(Math.random()<.5){const ds=pickN(P,3,(x,o)=>x[1]!=it.vi&&!o.some(y=>y[1]==x[1])),r=place(it.vi,ds.map(x=>x[1])),why={};ds.forEach(x=>why[x[1]]=`«${x[1]}» là nghĩa của câu <b>${x[0]}</b>, không phải của câu này. Câu <b>${it.jp}</b> nghĩa là «${it.vi}».`);return[{...base,ask:"Câu này có nghĩa là gì?",prompt:it.jp,hear:it.jp,sm:1,col:1,why,opts:r.opts,a:r.a}]}
const ds=pickN(P,3,(x,o)=>x[0]!=it.jp&&!o.some(y=>y[0]==x[0])),r=place(it.jp,ds.map(x=>x[0])),why={};ds.forEach(x=>why[x[0]]=`Câu «${x[0]}» có nghĩa là «${x[1]}», không khớp với «${it.vi}». Câu có nghĩa «${it.vi}» là <b>${it.jp}</b>.`);return[{...base,ask:"Chọn câu tiếng Nhật đúng với nghĩa này:",prompt:it.vi,sm:1,col:1,why,opts:r.opts,a:r.a}]})}
function memo(tab){if(tab!=null)MT=tab;if(MT>0)return review(MT-1);leave();backFn=home;$("#back").hidden=false;const all=items(),nv=all.length,nq=all.length;
$("#app").innerHTML=`${memHero()}${memTabs(0)}
<div class="acts"><div class="act a1" id="qk"><span class="ai">🔄</span><div><b>Học nhanh</b><small>Ôn nhanh cả ${all.length} mục</small></div></div><div class="act a2" id="ty"><span class="ai">⌨</span><div><b>Luyện gõ</b><small>Gõ ${nv} mục: từ, câu, Hán tự, ngữ pháp</small></div></div><div class="act a3" id="qz"><span class="ai">🧠</span><div><b>Trắc nghiệm</b><small>Trắc nghiệm ${nq} mục đã ★ (15 câu mỗi lượt)</small></div></div></div>
<input id="mq" placeholder="Tìm chữ, cách đọc hoặc nghĩa…"><div id="ml"></div>`;
bindMT();$("#qk").onclick=()=>all.length?quick(all):toast("Chưa có mục nào được ghi nhớ");
$("#ty").onclick=()=>{const ws=[];let skip=0;all.forEach(x=>{if(x.t=="v")ws.push({jp:x.jp,rd:x.rd,vi:x.vi});
else if(x.t=="s"||x.t=="h"){const rd=kanaOf(x.jp);if(rd)ws.push({jp:x.jp,rd,vi:x.vi,say:x.jp,loose:1});else skip++}
else if(x.t=="k"){const al=kjAlts(x.k);if(al.length)ws.push({jp:x.k,rd:kjShow(x.k),alts:al,lab:"chữ Hán, gõ một cách đọc On hoặc Kun",card:`<div style="font-size:84px;line-height:1.1;font-weight:700">${x.k}</div><div class="m" style="font-size:15px;margin-top:8px">${(KH[x.k]||"").toUpperCase()}${x.vi?" · "+x.vi:""}</div>`,vi:x.vi,say:x.say});else skip++}
else if(x.t=="g"){const [gi,gk]=x.k.split("-").map(Number),p=GR[gi]&&GR[gi][1][gk],ex=p&&p[3]&&p[3][0],rd=ex?kanaOf(ex[0]):"";if(rd)ws.push({jp:ex[0],rd,vi:ex[1],say:ex[0],loose:1,lab:"ví dụ của mẫu "+p[0],card:`${ex[1]}<div class="m" style="font-size:14px;margin-top:8px">${p[0]} · ${p[1]}</div>`});else skip++}});
if(!ws.length)return toast(nv?"Chưa có dữ liệu cách đọc của câu. Hãy chạy npm run analyze rồi mở lại trang":"Chưa có mục nào được ghi nhớ");
drill(ws,{title:"Chữ hay quên",back:memo,backLabel:"Về Ghi nhớ"});if(skip)toast("Bỏ qua "+skip+" mục chưa có cách đọc")};
$("#qz").onclick=()=>{if(!all.length)return toast("Chưa có mục nào được ghi nhớ");const run=()=>{const qs=memqs(shuf(all).slice(0,15));if(!qs.length)return toast("Chưa tạo được câu hỏi từ các mục đã ghi nhớ");mcq(qs,{back:memo,backLabel:"Về Ghi nhớ",again:run})};run()};
let mq="";const draw=()=>{const f=all.filter(x=>!mq||n2(x.jp+x.rd+x.vi).includes(n2(mq)));
if(!all.length){$("#ml").innerHTML=`<p class="sub" style="text-align:center;margin-top:36px">Chưa có gì ở đây. Bấm ★ ở Từ vựng, Hán tự hoặc Giao tiếp để thêm vào Ghi nhớ.</p>`;return}
$("#ml").innerHTML=["v","s","k","g","h"].map(t=>{const g=f.filter(x=>x.t==t);if(!g.length)return"";const [nm,jk,co]=TY[t];
return`<div class="sec"><span class="si" style="color:${co}">${jk}</span><b>${nm}</b><span class="bd" style="background:${co}">${g.length}</span></div>`+g.map(x=>`<div class="card mc"><div class="mh"><span class="tag">${nm}</span><span class="mb"><button class="ib" data-mp="${f.indexOf(x)}" title="Nghe">🔊</button><button class="ib" data-md="${f.indexOf(x)}" title="Bỏ khỏi Ghi nhớ">🗑</button></span></div><div class="mj ${x.t}">${x.jp}</div>${x.rd?`<div class="mr">${x.rd}</div>`:""}<div class="mv">${x.vi}</div></div>`).join("")}).join("")||`<p class="sub" style="text-align:center;margin-top:36px">Không tìm thấy mục nào.</p>`;
$("#ml").querySelectorAll("[data-mp]").forEach(b=>b.onclick=()=>say(f[b.dataset.mp].say));
$("#ml").querySelectorAll("[data-md]").forEach(b=>b.onclick=()=>{const it=f[b.dataset.md];del(it);persist();all.splice(all.indexOf(it),1);toast("Đã bỏ khỏi Ghi nhớ");memo();if(mq){$("#mq").value=mq;$("#mq").oninput({target:{value:mq}})}})};
$("#mq").oninput=e=>{mq=e.target.value;draw()};draw()}
/* ===== Ngữ pháp ===== */
const GX=[];GR.forEach(l=>l[1].forEach(p=>p[3].forEach(e=>{GX.push({j:e[0],v:e[1]});e[2]=GX.length-1})));
function gram(){leave();backFn=home;$("#back").hidden=false;
$("#app").innerHTML=`<div class="hero"><span class="wm">文</span><div class="hic">📘</div><h1>Ngữ pháp</h1><div class="m" style="font-size:14px;margin:0 0 12px">文法</div><p class="sub" style="max-width:560px;margin:0">Mẫu câu theo từng bài Minna no Nihongo. Mỗi bài có giải thích, ví dụ có phát âm, phân tích câu bằng 🔍 và bài ghép câu để tự luyện.</p></div><div class="acts2" style="justify-content:flex-start;margin:20px 0"><button class="pill alt" id="gq1">🧠 Ôn Sơ cấp 1</button><button class="pill alt" id="gq2">Ôn Sơ cấp 2</button><button class="pill alt" id="gqa">Ôn cả hai</button></div>`+COURSES.map((c,ci)=>`<div class="sec"><span class="si" style="color:#fbbf24">文</span><b>${c.code}</b></div>`+GR.slice(ci*25,ci*25+25).map((l,j)=>{const i=ci*25+j;return`<div class="row" data-g="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><div><h3>${l[0]}</h3><p>${l[1].length} mẫu câu · ${l[1].reduce((a,p)=>a+p[3].length,0)} ví dụ</p></div></div>`}).join("")).join("")+`<div style="border-top:1px solid var(--ln)"></div>`;
[["#gq1",x=>x.i<25],["#gq2",x=>x.i>=25],["#gqa",()=>1]].forEach(([id,f])=>$(id).onclick=()=>gquiz(GP.filter(f).map(x=>x.key),{back:gram,backLabel:"Về Ngữ pháp"}));
document.querySelectorAll("[data-g]").forEach(r=>r.onclick=()=>gt(+r.dataset.g))}
function gt(i){leave();backFn=gram;$("#back").hidden=false;const L=GR[i];
$("#app").innerHTML=`<div style="color:#fbbf24;font-size:12px">文法</div><h1>${L[0]}</h1><p class="sub">Nghe câu ví dụ bằng 🔊, bấm 🔍 để xem phân tích từng từ. Xong thì thử ghép câu ở cuối bài.</p>`+L[1].map((p,k)=>`<div class="gp"><div class="gh2"><div class="gh">${p[0]}</div><button class="ib ${gs.has(i+"-"+k)?"on":""}" data-gs="${i}-${k}" title="Ghi nhớ">★</button></div><div class="gm">${p[1]}</div><div class="m" style="margin-bottom:10px">${p[2]}</div>`+p[3].map(e=>`<div class="card"><div class="t"><div class="jp">${e[0]}</div><div class="vi">${e[1]}</div></div><button class="ib" data-a="g${e[2]}" title="Phân tích">🔍</button><button class="ib" data-y="${e[0]}" title="Nghe">🔊</button></div>`).join("")+`</div>`).join("")+`<div class="acts2" style="justify-content:flex-start;margin:22px 0"><button class="go" id="gpr">✍ Ghép câu</button><button class="pill alt" id="gqz">🧠 Luyện nhớ</button><button class="pill alt" id="ghd">🎧 Hội thoại</button>${i<49?`<button class="pill alt" id="gnx">Bài sau →</button>`:""}</div>`;
$("#gpr").onclick=()=>gprac(i);$("#ghd").onclick=()=>shadow("d",i);$("#gqz").onclick=()=>{const kk=L[1].map((_,k)=>i+"-"+k);gquiz(shuf([...kk,...kk]),{back:()=>gt(i),backLabel:"Về bài học"})};document.querySelectorAll("[data-gs]").forEach(b=>b.onclick=()=>{const k=b.dataset.gs;gs.has(k)?gs.delete(k):gs.add(k);b.classList.toggle("on");persist()});if(i<49)$("#gnx").onclick=()=>{gt(i+1);scrollTo(0,0)}}
function gprac(i){leave();backFn=()=>gt(i);const L=GR[i];
const ex=L[1].flatMap(p=>p[3]).filter(e=>AN[e[0]]&&AN[e[0]].t.length>=3&&AN[e[0]].t.length<=14);
if(!ex.length){toast("Cần chạy npm run dev (hoặc npm run analyze) để tạo dữ liệu phân tích câu");return}
const qs=[...ex].sort(()=>Math.random()-.5).slice(0,10),N=qs.length;let n=0,ok=0;
const end=()=>{leave();$("#app").innerHTML=`<div class="intro"><h1>Hoàn thành!</h1><div class="chips2"><span class="c1"><b>${ok}/${N}</b> câu đúng</span></div><p class="sub" style="margin-top:18px">${L[0]}</p><div class="acts2" style="justify-content:flex-start;margin-top:22px"><button class="go" id="ag">Làm lại</button><button class="pill alt" id="bk">Về bài học</button></div></div>`;$("#ag").onclick=()=>gprac(i);$("#bk").onclick=()=>gt(i)};
const show=()=>{if(n>=N)return end();const [j,v]=qs[n],toks=AN[j].t.map(t=>t.s),right=toks.join("");
let pool=toks.map((s,k)=>({s,k})).sort(()=>Math.random()-.5),ans=[],graded=false;
$("#app").innerHTML=`<div class="top"><div class="stat"><span class="ai s1">▤</span><div><b>${n+1}/${N}</b><small>câu</small></div></div><div class="stat"><span class="ai g">✓</span><div><b style="color:#16a34a">${ok}</b><small>đúng</small></div></div></div><div class="pbar"><i style="width:${n/N*100}%"></i></div><div class="dw"><div class="m" style="text-align:center">Sắp xếp các từ thành câu tiếng Nhật</div><div class="dcard">${v}</div><div class="gbox" id="ga"></div><div class="gbox" id="gb"></div><div id="gf"></div><div class="acts2"><button class="pill alt" id="gr">Xếp lại</button><button class="go" id="gk">Kiểm tra</button></div></div>`;
const draw=()=>{$("#ga").innerHTML=ans.map(x=>`<button class="chip" data-r="${x.k}">${x.s}</button>`).join("");$("#gb").innerHTML=pool.map(x=>`<button class="chip" data-q="${x.k}">${x.s}</button>`).join("");
$("#ga").querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{if(graded)return;const k=+b.dataset.r,x=ans.find(a=>a.k==k);ans=ans.filter(a=>a.k!=k);pool.push(x);draw()});
$("#gb").querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{if(graded)return;const k=+b.dataset.q,x=pool.find(a=>a.k==k);pool=pool.filter(a=>a.k!=k);ans.push(x);draw()})};
draw();[ "#gr","#gk"].forEach(s=>noFocus($(s)));
$("#gr").onclick=()=>{if(graded)return;pool=pool.concat(ans).sort(()=>Math.random()-.5);ans=[];draw()};
const check=()=>{if(graded){n++;show();return}
if(!ans.length){toast("Hãy chọn các từ để ghép câu");return}
graded=true;const good=ans.map(x=>x.s).join("")==right;if(good)ok++;
$("#gf").innerHTML=`<div class="fbk ${good?"ok":"no"}">${good?"✓ Đúng!":"✗ Đáp án:"} <b>${j}</b><br><span class="m">${AN[j].r}</span></div>`;
$("#gk").textContent=n+1>=N?"Xem kết quả →":"Câu tiếp theo →";say(j)};
$("#gk").onclick=check;KEY=e=>{if(e.key=="Enter"){e.preventDefault();check()}}};
show()}
/* ===== Luyện nhớ: trắc nghiệm Hán tự & Ngữ pháp ===== */
const shuf=a=>[...a].sort(()=>Math.random()-.5);
const pickN=(pool,n,ok)=>{const o=[];for(const x of shuf(pool)){if(o.length>=n)break;if(ok(x,o))o.push(x)}return o};
const place=(right,wrong)=>{const opts=shuf([right,...wrong]);return{opts,a:opts.indexOf(right)}};
const GP=[];GR.forEach((l,i)=>l[1].forEach((p,k)=>GP.push({i,k,key:i+"-"+k,p})));
const jtok=t=>t.match(/[\u3041-\u30ff\u4e00-\u9fff]{2,}/g)||[];
const isDesc=p=>!/[\u3041-\u30ff\u4e00-\u9fff]/.test(p[0]);
const clash=(a,b)=>jtok(a).some(x=>jtok(b).some(y=>x.includes(y)||y.includes(x)));
function kqs(chars){const AW=WC.flat().flatMap(l=>l[1]),ALL=Object.keys(KD).filter(c=>KH[c]),HAN=/[\u4e00-\u9fff]/;
return chars.filter(c=>KD[c]&&KH[c]).map(c=>{const [on,kun,mn,tip]=KD[c],hv=KH[c].toUpperCase(),ws=AW.filter(w=>w[0].includes(c));
const info=`<b>${c}</b> · ${hv} · On: ${on||"–"} · Kun: ${kun||"–"}<br>${mn}${tip?`<br>💡 ${tip}`:""}`;
const types=[1,2,3];if(ws.length)types.push(4);const t=types[Math.floor(Math.random()*types.length)];
const base={big:c,ex:info,mem:{t:"k",k:c},say:ws[0]?ws[0][1]:""},hw=ws[0]?ws[0][1]:"";
if(t==1){const ds=pickN(ALL,3,(x,o)=>x!=c&&KH[x]!=KH[c]&&!o.some(y=>KH[y]==KH[x])),r=place(hv,ds.map(x=>KH[x].toUpperCase())),why={};ds.forEach(x=>why[KH[x].toUpperCase()]=`${KH[x].toUpperCase()} là âm Hán Việt của chữ <b>${x}</b> (${KD[x][2]}), không phải của <b>${c}</b>. <b>${c}</b> là <b>${hv}</b>: ${mn}.${tip?` 💡 ${tip}`:""}`);return{...base,ask:"Âm Hán Việt của chữ này là gì?",prompt:c,hear:hw,why,opts:r.opts,a:r.a}}
if(t==2){const ds=pickN(ALL,3,(x,o)=>x!=c&&KD[x][2]!=mn&&!o.some(y=>KD[y][2]==KD[x][2])),r=place(mn,ds.map(x=>KD[x][2])),why={};ds.forEach(x=>why[KD[x][2]]=`«${KD[x][2]}» là nghĩa của chữ <b>${x}</b> (${KH[x].toUpperCase()}), không phải của <b>${c}</b>. <b>${c}</b> (${hv}) nghĩa là «${mn}».${tip?` 💡 ${tip}`:""}`);return{...base,ask:"Chữ này có nghĩa là gì?",prompt:c,hear:hw,why,opts:r.opts,a:r.a}}
if(t==3){const ds=pickN(ALL,3,x=>x!=c&&KH[x]!=KH[c]),r=place(c,ds),why={};ds.forEach(x=>why[x]=`<b>${x}</b> là âm ${KH[x].toUpperCase()} (${KD[x][2]}), không phải ${hv}. Chữ có âm <b>${hv}</b> và nghĩa «${mn}» là <b>${c}</b>.${tip?` 💡 ${tip}`:""}`);return{...base,ask:"Chữ Hán nào có âm và nghĩa này?",prompt:`${hv}<div class="m" style="font-size:18px;font-weight:500">${mn}</div>`,sm:1,optCls:"ko",why,opts:r.opts,a:r.a}}
const w=shuf(ws)[0],cand=AW.filter(x=>HAN.test(x[0])&&x[1]!=w[1]).sort((a,b)=>Math.abs(a[1].length-w[1].length)-Math.abs(b[1].length-w[1].length)).slice(0,40),
ds=pickN(cand,3,(x,o)=>!o.some(y=>y[1]==x[1])),r=place(w[1],ds.map(x=>x[1])),why={};ds.forEach(x=>why[x[1]]=`${x[1]} là cách đọc của từ <b>${x[0]}</b> (${x[2]}), không phải của <b>${w[0]}</b>. <b>${w[0]}</b> đọc là <b>${w[1]}</b>, trong đó chữ <b>${c}</b> có âm On: ${on||"–"}, Kun: ${kun||"–"}.`);
return{...base,ask:"Từ này đọc như thế nào?",prompt:w[0],why,opts:r.opts,a:r.a,say:w[1]}})}
function gqs(keys){return keys.map(key=>GP.find(x=>x.key==key)).filter(Boolean).map(g=>{const {i,p}=g,ex=shuf(p[3])[0],others=GP.filter(x=>x.i!=i),dsc=isDesc(p),t=dsc?1+Math.floor(Math.random()*2):Math.floor(Math.random()*3);
const base={big:p[0],ex:`<b>${p[0]}</b> — ${p[1]}<br>${p[2]}<br>Ví dụ: ${p[3][0][0]} (${p[3][0][1]})`,mem:{t:"g",k:g.key},say:ex[0]};
if(t==0){const ds=pickN(others,3,(x,o)=>!isDesc(x.p)&&x.p[1]!=p[1]&&!o.some(y=>y.p[1]==x.p[1])),r=place(p[1],ds.map(x=>x.p[1])),why={};ds.forEach(x=>why[x.p[1]]=`«${x.p[1]}» là nghĩa của mẫu <b>${x.p[0]}</b>, không phải của <b>${p[0]}</b>. Mẫu <b>${p[0]}</b> nghĩa là «${p[1]}»: ${p[2]}`);return{...base,ask:"Mẫu câu này có nghĩa gì?",prompt:p[0],sm:1,why,opts:r.opts,a:r.a,col:1}}
if(t==1){const ds=pickN(others,3,(x,o)=>isDesc(x.p)==dsc&&x.p[0]!=p[0]&&!clash(x.p[0],p[0])&&!o.some(y=>y.p[0]==x.p[0])),r=place(p[0],ds.map(x=>x.p[0])),why={};ds.forEach(x=>why[x.p[0]]=`Mẫu <b>${x.p[0]}</b> (${x.p[1]}) không phải là mẫu được dùng trong câu «${ex[0]}». Câu này dùng <b>${p[0]}</b> (${p[1]}): ${p[2]}`);return{...base,ask:"Câu này dùng mẫu ngữ pháp nào?",prompt:ex[0],hear:ex[0],sm:1,why,opts:r.opts,a:r.a,col:1}}
const pool=GP.filter(x=>x.i!=i&&Math.abs(x.i-i)<=4).flatMap(x=>x.p[3]).filter(e=>e[0]!=ex[0]),ds=pickN(pool,3,(x,o)=>!o.some(y=>y[0]==x[0])),r=place(ex[0],ds.map(x=>x[0])),why={};ds.forEach(x=>why[x[0]]=`Câu «${x[0]}» có nghĩa là «${x[1]}», không khớp với nghĩa «${ex[1]}». Câu đúng là «${ex[0]}», dùng mẫu <b>${p[0]}</b> (${p[1]}).`);
return{...base,ask:"Chọn câu tiếng Nhật đúng với nghĩa này:",prompt:ex[1],sm:1,why,opts:r.opts,a:r.a,col:1}})}
const kquiz=(chars,o)=>{const qs=kqs(shuf(chars).slice(0,15));if(!qs.length)return toast("Chưa có chữ Hán để luyện");mcq(qs,{...o,again:()=>kquiz(chars,o)})};
const gquiz=(keys,o)=>{const qs=gqs(shuf(keys).slice(0,12));if(!qs.length)return toast("Chưa có mẫu ngữ pháp để luyện");mcq(qs,{...o,again:()=>gquiz(keys,o)})};
const MS=t=>t=="k"?ks:t=="v"?vs:t=="s"?saved:t=="h"?hs:gs;
function mcq(qs,o){leave();backFn=()=>{leave();o.back()};const N=qs.length,t0=Date.now();let n=0,ok=0;const bad=[];
const end=()=>{leave();const mem=bad.filter(q=>q.mem&&!MS(q.mem.t).has(q.mem.k));
$("#app").innerHTML=`<div class="intro"><h1>Hoàn thành!</h1><div class="chips2"><span class="c1"><b>${ok}/${N}</b> đúng</span><span class="c2">${mmss(Math.floor((Date.now()-t0)/1000))}</span></div>${o.onEnd?o.onEnd(ok,N,bad):""}${bad.length?`<p class="sub" style="margin:18px 0 6px">Cần ôn lại:</p>`+bad.map(q=>`<div class="tk"><div class="tj" style="min-width:0;max-width:44%">${q.big}</div><div class="m" style="color:var(--tx)">${q.ex}</div></div>`).join(""):`<p class="sub" style="margin-top:18px">Không sai câu nào, giỏi quá!</p>`}<div class="acts2" style="justify-content:flex-start;margin-top:22px">${bad.length?`<button class="go" id="rt">Ôn lại ${bad.length} câu sai</button>`:""}<button class="pill alt" id="ag">Làm lại</button>${mem.length?`<button class="pill alt" id="am">★ Thêm ${mem.length} mục sai vào Ghi nhớ</button>`:""}<button class="pill alt" id="bk">${o.backLabel}</button></div></div>`;
if(bad.length)$("#rt").onclick=()=>mcq(bad,o);$("#ag").onclick=()=>o.again?o.again():mcq(qs,o);$("#bk").onclick=()=>{leave();o.back()};
if(mem.length)$("#am").onclick=()=>{mem.forEach(q=>MS(q.mem.t).add(q.mem.k));persist();toast("Đã thêm vào Ghi nhớ");$("#am").remove()}};
const show=()=>{if(n>=N)return end();const q=qs[n];let done=false;
$("#app").innerHTML=`<div class="top"><div class="stat"><span class="ai s1">▤</span><div><b>${n+1}/${N}</b><small>câu</small></div></div><div class="stat"><span class="ai g">✓</span><div><b style="color:#16a34a">${ok}</b><small>đúng</small></div></div></div><div class="pbar"><i style="width:${n/N*100}%"></i></div><div class="dw"><div class="m" style="text-align:center">${q.ask}</div><div class="dcard${q.sm?" sm":""}">${q.prompt}<button class="qsp" id="qsp" title="Nghe lại" hidden>🔊</button></div><div class="opts${q.col?" one":""}">${q.opts.map((t,i)=>`<button class="opt ${q.optCls||""}" data-o="${i}"><kbd>${i+1}</kbd><span>${t}</span></button>`).join("")}</div><div id="fb"></div><button class="chk" id="nx" hidden>Câu tiếp theo →</button></div>`;
const bs=[...document.querySelectorAll("[data-o]")];bs.forEach(noFocus);noFocus($("#nx"));
const hr=q.hear||q.listen||"",qs2=$("#qsp");noFocus(qs2);let sp=hr;if(hr&&!q.listen)qs2.hidden=false;qs2.onclick=e=>{e.stopPropagation();if(sp)say(sp)};
const nxt=()=>{n++;show()};
const pick=i=>{if(done)return;done=true;const good=i==q.a;good?ok++:bad.push(q);bs[q.a].classList.add("good");if(!good)bs[i].classList.add("bad");
sp=q.say||hr;if(sp)qs2.hidden=false;
const ans=q.opts[q.a],pk=q.opts[i],wy=!good&&((q.why&&q.why[pk])||"Đây không phải là đáp án đúng cho câu hỏi này."),tx="color:var(--tx);font-weight:400;font-size:16px;margin-top:6px";
$("#fb").innerHTML=`<div class="fbk ${good?"ok":"no"}">${good?"✓ Đúng!":"✗ Chưa đúng"}${good?"":`<div class="m" style="${tx}">Bạn chọn: <b>${pk}</b></div><div class="m why" style="${tx}"><b>Vì sao sai:</b> ${wy}</div><div class="m" style="${tx}">Đáp án đúng: <b>${ans}</b></div>`}<div class="m" style="${tx}">${good?"":"<b>Ghi nhớ:</b><br>"}${q.ex}</div></div>`;
$("#nx").hidden=false;$("#nx").textContent=n+1>=N?"Xem kết quả →":"Câu tiếp theo →";$("#nx").onclick=nxt;if(q.say)say(q.say)};
bs.forEach(b=>b.onclick=()=>pick(+b.dataset.o));if(q.listen)setTimeout(()=>say(q.listen),300);
KEY=e=>{if(e.key>="1"&&e.key<=String(q.opts.length)){e.preventDefault();pick(+e.key-1)}else if(e.key=="Enter"||e.key==" "){e.preventDefault();if(done)nxt()}}};
show()}
/* ===== Shadowing: hội thoại 2 người + đoạn văn 1 người ===== */
const SHD=DL.map((d,i)=>{const m=d[0].match(/^Bài\s*(\d+)\s*[–-]\s*(.*)$/);return{id:"d"+i,n:m?m[1]:String(i+1),title:m?m[2]:d[0],scene:DSCENE[i]||"street",si:i,items:d[1].map(x=>({sp:x[0],j:x[1],v:x[2]}))}});
const SHP=PS.map((p,i)=>({id:"p"+i,n:String(i+1),title:p[0],scene:DSCENE[i]||p[1]||"street",si:i,items:p[2].map(x=>({sp:"S",j:x[0],v:x[1]}))}));
const SHR=RD.map((p,i)=>({id:"r"+i,n:p[0],title:p[1],scene:p[2],si:null,items:p[3].map(x=>({sp:"S",j:x[0],v:x[1]}))}));
const RG=[["Tất cả",()=>1],["L1–L3 (file của bạn)",x=>/^L/.test(x.n)],["Bài 4–10",x=>{const m=/^B(\d+)/.exec(x.n);return m&&m[1]>=4&&m[1]<=10}],["Bài 11–20",x=>{const m=/^B(\d+)/.exec(x.n);return m&&m[1]>=11&&m[1]<=20}],["Bài 21–30",x=>{const m=/^B(\d+)/.exec(x.n);return m&&m[1]>=21&&m[1]<=30}],["Bài 31–40",x=>{const m=/^B(\d+)/.exec(x.n);return m&&m[1]>=31&&m[1]<=40}],["Bài 41–50",x=>{const m=/^B(\d+)/.exec(x.n);return m&&m[1]>=41&&m[1]<=50}]];let rg=0;
const SHV={};[...SHD,...SHP,...SHR].forEach(s=>s.items.forEach(x=>{SHV[x.j]=x.v}));
S.forEach(x=>{if(!SHV[x.j])SHV[x.j]=x.v});GR.forEach(l=>l[1].forEach(p=>p[3].forEach(e=>{if(!SHV[e[0]])SHV[e[0]]=e[1]})));WC.flat().forEach(l=>l[1].forEach(w=>{if(w[3]&&!SHV[w[3]])SHV[w[3]]=w[4]||""}));
let shd=new Set,SHO={j:1,r:1,v:1,w:1,sp:1,loop:0,role:0,cont:0,pv:0},shm="d",shi={d:0,p:0,r:0},shExit=null;
try{shd=new Set(JSON.parse(localStorage.getItem("sh")||"[]"))}catch(e){}
try{SHO={...SHO,...JSON.parse(localStorage.getItem("shs")||"{}")}}catch(e){}
try{const z=JSON.parse(localStorage.getItem("shp")||"{}");if(z.m==="p"||z.m==="d"||z.m==="r")shm=z.m;if(z.i)shi={...shi,...z.i}}catch(e){}
if(![.5,.75,1].includes(SHO.sp))SHO.sp=1;
hs.forEach(j=>{if(!SHV[j]){const m=WORD_MEANING(j);if(m)SHV[j]=m}});
let CM={};try{CM=JSON.parse(localStorage.getItem("cmx")||"{}")}catch(e){}Object.keys(CM).forEach(k=>{if(hs.has(k))SHV[k]=CM[k]});
function shadow(m,i){
leave();stopSay();backFn=home;$("#back").hidden=false;
if(m)shm=m;if(i!=null)shi[shm]=i;
const L=shm=="d"?SHD:shm=="r"?SHR:SHP,dlg=shm=="d",li=Math.min(Math.max(0,shi[shm]||0),L.length-1);shi[shm]=li;
try{localStorage.setItem("shp",JSON.stringify({m:shm,i:shi}))}catch(e){}
const set=L[li],N=set.items.length,id=set.id;
let idx=0,auto=false,tm=0,rec=null,recording=false,speaking=false,done=false;const mine={};
const cur=()=>set.items[idx],myTurn=()=>dlg&&SHO.role&&cur().sp==SHO.role;
const sv=()=>{try{localStorage.setItem("shs",JSON.stringify(SHO))}catch(e){}};
const mark=()=>{if(!shd.has(id)){shd.add(id);try{localStorage.setItem("sh",JSON.stringify([...shd]))}catch(e){}const t=document.querySelector('#sht [data-t="'+li+'"]');if(t&&!t.textContent.includes("✓"))t.append(" ✓")}};
const tgStar=()=>{const j=cur().j;hs.has(j)?hs.delete(j):hs.add(j);persist();paint();toast(hs.has(j)?"Đã thêm vào Ghi nhớ":"Đã bỏ khỏi Ghi nhớ")};
const talk=()=>document.querySelectorAll(".sc .pp").forEach(g=>g.classList.toggle("talk",speaking&&g.dataset.p==cur().sp));
const stopAll=()=>{stopSay();speaking=false;talk()};
const stopAuto=()=>{auto=false;clearTimeout(tm);const g=$("#gp i");if(g){g.style.transition="none";g.style.width="0"}};
const exit=()=>{stopAuto();stopAll();if(recording&&rec){try{rec.stop()}catch(e){}}Object.values(mine).forEach(u=>URL.revokeObjectURL(u))};
shExit=exit;set.items.slice(0,2).forEach(x=>warm(x.j,dlg&&x.sp=="B"?"B":undefined));
const warmNext=()=>{for(const k of[idx+1,idx+2]){const n=set.items[k];if(n)warm(n.j,dlg&&n.sp=="B"?"B":undefined)}};
const play=cb=>{const t0=Date.now(),it=cur();speaking=true;talk();say(it.j,SHO.sp,()=>{speaking=false;talk();cb&&cb(Date.now()-t0)},dlg&&it.sp=="B"?"B":undefined);warmNext()};
const gapThen=(ms,fn)=>{const g=$("#gp i");if(g){g.style.transition="none";g.style.width="0";void g.offsetWidth;g.style.transition="width "+ms+"ms linear";g.style.width="100%"}tm=setTimeout(()=>{if(g){g.style.transition="none";g.style.width="0"}fn()},ms)};
const step=()=>{if(!auto)return;const after=()=>{if(!auto)return;if(SHO.loop){step();return}if(idx<N-1){idx++;paint();step()}else{auto=false;done=true;mark();paint();toast("Đã nghe hết bài 🎉")}};if(myTurn()){gapThen(Math.max(3000,cur().j.length*380),after);return}play(el=>{if(!auto)return;gapThen(SHO.cont?350:Math.max(2200,Math.round(el*1.25)+800),after)})};
const startAuto=()=>{if(recording)return;if(done){idx=0;done=false}auto=true;paint();step()};
const toggleAuto=()=>{if(auto){stopAuto();stopAll();paint()}else startAuto()};
const pickIdx=(k,pl)=>{if(recording&&rec)rec.stop();stopAuto();stopAll();idx=Math.min(N-1,Math.max(0,k));done=false;if(idx==N-1)mark();paint();if(pl){if(SHO.loop)startAuto();else if(!myTurn())play()}};
const go=d=>{if(idx+d>N-1){stopAuto();stopAll();mark();paint();toast("Đã hết bài. Chọn bài khác ở thanh trên nhé");return}pickIdx(idx+d,1)};
const replay=()=>pickIdx(idx,1);
const toggleRec=async()=>{if(recording){try{rec.stop()}catch(e){}return}stopAuto();stopAll();const k=idx;try{const st=await navigator.mediaDevices.getUserMedia({audio:true}),ch=[];rec=new MediaRecorder(st);rec.ondataavailable=e=>ch.push(e.data);rec.onstop=()=>{st.getTracks().forEach(t=>t.stop());recording=false;if(mine[k])URL.revokeObjectURL(mine[k]);mine[k]=URL.createObjectURL(new Blob(ch));paint()};rec.start();recording=true;paint()}catch(e){toast("Không mở được micro. Hãy cho phép quyền micro cho trang này.")}};
const tg=(k,v,lab)=>`<button data-${k}="${v}" class="${SHO[k]==v?"on":""}">${lab}</button>`;
$("#app").innerHTML=`<div style="color:#818cf8;font-size:12px">音読 · Shadowing</div><h1 class="sh-h">${shm=="r"?"":"Bài "}${set.n} · ${set.title}</h1>
<div class="shm"><button class="shmb ${dlg?"on":""}" data-m="d"><span class="shi">🗣</span><b>Hội thoại 2 người</b><small>会話 · Nghe rồi nói theo vai A / B</small></button><button class="shmb ${shm=="p"?"on":""}" data-m="p"><span class="shi">📖</span><b>Đoạn văn 1 người</b><small>文章 · Mỗi bài một đoạn văn theo từ vựng và Hán tự của bài</small></button><button class="shmb ${shm=="r"?"on":""}" data-m="r"><span class="shi">📝</span><b>Luyện đọc</b><small>読み物 · 138 đoạn ngắn: L1–L3 của bạn và 94 đoạn theo từ vựng, chữ Hán từng bài (Bài 4–50)</small></button></div>
${shm=="r"?`<div class="rgp" id="rgp">${RG.map((g,k)=>`<button class="${k==rg?"on":""}" data-g="${k}">${g[0]}</button>`).join("")}</div>`:""}<div class="sht" id="sht">${L.map((x,k)=>`<button class="${k==li?"on":""}" data-t="${k}"${shm=="r"&&!RG[rg][1](x)?" hidden":""}><i>${x.n}</i>${x.title}${shd.has(x.id)?" ✓":""}</button>`).join("")}</div>
<div class="shw"><div class="shl"><div class="shs">${scene(set.scene,shm,set.si)}</div><div class="shc">
<div id="shmeta"></div><div class="shsj"><button class="ib sst" id="shst" title="Ghi nhớ câu này (↓)">★</button><div id="shj"></div></div><div id="shr"></div><div id="shv"></div><div id="shwd"></div><div class="shturn" id="shturn" hidden>🎤 Đến lượt bạn: hãy nói câu này</div>
<div class="gbar" id="gp"><i></i></div>
<input type="range" class="shrg" id="shrg" min="0" max="${Math.max(0,N-1)}" value="0" aria-label="Chọn câu">
<div class="shctl"><button class="big" id="au" title="Tự động nghe và nói theo (Space)">▶</button><button class="sm2" id="pv" title="Câu trước (←)">⏮</button><button class="sm2" id="nx" title="Câu sau (→)">⏭</button><button class="sm2" id="rp" title="Nghe lại câu này (R)">🔊</button><button class="sm2" id="rc" title="Ghi âm giọng bạn">🎤</button><button class="sm2" id="mp" title="Nghe lại giọng bạn" hidden>▶︎</button><span class="sp">${[.5,.75,1].map(v=>tg("sp",v,v+"×")).join("")}<button id="lp" class="${SHO.loop?"on":""}" title="Lặp lại câu hiện tại (L)">⟳ Lặp câu</button><button id="ct" class="${SHO.cont?"on":""}" title="Đọc liền một mạch đến hết đoạn, không dừng chờ bạn nói theo (C)">▶▶ Đọc liền</button></span></div>
<div class="shopt"><span class="tg2">${tg("tg","j","Chữ Nhật")}${tg("tg","r","Romaji")}${tg("tg","v","Nghĩa")}${tg("tg","w","Từ")}</span>${dlg?`<span class="tg2">${[0,"A","B"].map(r=>`<button data-role="${r}" class="${(SHO.role||0)==r?"on":""}">${r==0?"Nghe cả hai vai":"Tôi nói vai "+r}</button>`).join("")}</span><select class="pill" id="vbs" title="Giọng vai B"><option value="auto">Giọng B: tự chọn (ưu tiên nam)</option>${Object.keys(AVL).filter(okV).map(k=>`<option value="${k}">${k=="nanami"?"Nanami (nữ)":CN[k]||k}</option>`).join("")}<option value="browser">Giọng trình duyệt</option></select>`:""}</div>
<div class="shhint">Space: tự động nghe/nói · ←/→: đổi câu · R: nghe lại · L: lặp · C: đọc liền · ↓: ★ ghi nhớ</div></div></div>
<div class="shr2"><h4>${dlg?"Hội thoại":"Nội dung đoạn văn"} <span>${N} câu</span></h4>${dlg?"":`<div class="pvt"><button data-pv="0">Từng câu</button><button data-pv="1">Cả đoạn</button></div>`}<div id="shli"></div></div></div>`;
function paint(){const it=cur(),a=AN[it.j];
$("#shmeta").innerHTML=`<span>▤ câu ${idx+1}/${N}</span>${dlg?`<span class="spk ${it.sp}">${it.sp}</span>`:""}`;
const sg=segment(it.j),PU=/^[、。！？・「」]$/;
$("#shj").innerHTML=SHO.j?sg.map(c=>c.sp?" ":`<span class="tk"${c.ro&&c.ro!=c.s&&/[a-z]/i.test(c.ro)?` data-r="${c.ro}"`:""}>${c.s}</span>`).join(""):'<span class="m" style="font-size:20px">Nghe rồi nói theo…</span>';
$("#shr").textContent=SHO.r?sg.filter(c=>!c.sp&&!PU.test(c.s)).map(c=>c.ro||c.s).join(" "):"";document.querySelectorAll("#shj .tk").forEach(k=>k.onclick=()=>{document.querySelectorAll("#shj .tk.on").forEach(x=>x.classList.remove("on"));k.classList.add("on");clearTimeout(window._tkT);window._tkT=setTimeout(()=>k.classList.remove("on"),1500);const wt=k.textContent.trim();if(!wt||PU.test(wt))return;if(recording&&rec)return;stopAuto();stopAll();say(wt,SHO.sp)});$("#shv").textContent=SHO.v?it.v:"";
const wl=[],ws=new Set();sg.forEach(c=>{if(c.sp||PU.test(c.s)||ws.has(c.s))return;ws.add(c.s);wl.push(c)});wl.forEach(c=>warm(c.s));
$("#shwd").innerHTML=SHO.w?`<div class="wd-h">Phân tích từ <span>${wl.length} từ · bấm chữ để nghe, bấm ★ để học</span></div><div class="wd-l">${wl.map((c,k)=>`<div class="wd-c${c.m?"":" wd-nm"}${hs.has(c.s)?" wd-st":""}"><button class="wd-s" data-w="${k}" title="Thêm vào Ghi nhớ">★</button><button class="wd-j" data-wp="${k}">${c.s}</button><div class="wd-r">${c.h&&c.h!=c.s?c.h+" · ":""}${c.ro||""}</div><div class="wd-m">${c.m||"Chưa có nghĩa"}</div>${c.g&&!c.fn?`<div class="wd-g">${c.g}</div>`:""}</div>`).join("")}</div>`:"";
document.querySelectorAll("#shwd [data-wp]").forEach(b=>b.onclick=()=>{stopAuto();stopAll();say(wl[+b.dataset.wp].s,SHO.sp);paint()});
document.querySelectorAll("#shwd [data-w]").forEach(b=>b.onclick=()=>{const c=wl[+b.dataset.w];if(hs.has(c.s)){hs.delete(c.s);toast("Đã bỏ khỏi Ghi nhớ")}else{hs.add(c.s);if(c.m)SHV[c.s]=c.m+(c.g&&!c.fn?" ("+c.g+")":"");toast("Đã thêm “"+c.s+"” vào Ghi nhớ")}persist();paint()});
$("#shturn").hidden=!myTurn();$("#shst").classList.toggle("on",hs.has(it.j));
const rg=$("#shrg");rg.value=idx;
document.querySelectorAll(".sl,.psn").forEach((r,k)=>{r.classList.toggle("on",k==idx);r.classList.toggle("st",hs.has(set.items[k].j));const pl=r.querySelector(".pl");if(pl)pl.textContent=k==idx&&auto?"⏸":"▶"});document.querySelectorAll(".slv").forEach((r,k)=>r.classList.toggle("on",k==idx));document.querySelectorAll("[data-pv]").forEach(b=>b.classList.toggle("on",(SHO.pv?1:0)==+b.dataset.pv));
const on=document.querySelector(".sl.on,.psn.on"),bx=$("#shli");if(on&&bx)bx.scrollTop=on.offsetTop-bx.offsetTop-bx.clientHeight/2+on.clientHeight/2;
$("#au").textContent=auto?"⏸":"▶";$("#rc").classList.toggle("rec",recording);$("#rc").textContent=recording?"⏹":"🎤";$("#mp").hidden=!mine[idx];
document.querySelectorAll("[data-tg]").forEach(b=>b.classList.toggle("on",!!SHO[b.dataset.tg]));
document.querySelectorAll("[data-sp]").forEach(b=>b.classList.toggle("on",SHO.sp==+b.dataset.sp));
$("#lp").classList.toggle("on",!!SHO.loop);
document.querySelectorAll("[data-role]").forEach(b=>b.classList.toggle("on",(SHO.role||0)==b.dataset.role));
talk()}
document.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>shadow(b.dataset.m));
document.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>shadow(shm,+b.dataset.t));
const drawList=()=>{const bx=$("#shli"),pv=!dlg&&SHO.pv;bx.className=pv?"para":"";
bx.innerHTML=pv?`<p class="pj">${set.items.map((x,k)=>`<span class="psn" data-k="${k}">${x.j}</span>`).join(" ")}</p>${SHO.v?`<p class="pm">${set.items.map((x,k)=>`<span class="slv" data-k="${k}">${x.v}</span>`).join(" ")}</p>`:""}`:set.items.map((x,k)=>`<div class="sl" data-k="${k}"><span class="pl">▶</span><div><b>${dlg?x.sp+"：":""}${x.j}</b><small>${x.v}</small></div></div>`).join("");
bx.querySelectorAll(".sl,.psn,.slv").forEach(r=>r.onclick=()=>{if(auto&&+r.dataset.k==idx){toggleAuto();return}pickIdx(+r.dataset.k,1)});paint()};
drawList();
document.querySelectorAll("[data-pv]").forEach(b=>b.onclick=()=>{SHO.pv=+b.dataset.pv;sv();drawList()});
$("#au").onclick=toggleAuto;$("#pv").onclick=()=>go(-1);$("#nx").onclick=()=>go(1);$("#rp").onclick=replay;$("#rc").onclick=toggleRec;$("#shst").onclick=tgStar;
$("#mp").onclick=()=>{stopAuto();stopAll();const u=mine[idx];if(u)new Audio(u).play()};
$("#shrg").oninput=e=>pickIdx(+e.target.value,0);$("#shrg").onchange=e=>{if(!myTurn())play()};
document.querySelectorAll("[data-tg]").forEach(b=>b.onclick=()=>{SHO[b.dataset.tg]=SHO[b.dataset.tg]?0:1;sv();paint();if(b.dataset.tg=="v"&&!dlg&&SHO.pv)drawList()});
document.querySelectorAll("[data-sp]").forEach(b=>b.onclick=()=>{SHO.sp=+b.dataset.sp;sv();paint()});
const toggleCont=()=>{SHO.cont=SHO.cont?0:1;sv();$("#ct").classList.toggle("on",!!SHO.cont);toast(SHO.cont?"Đọc liền: đọc một mạch đến hết, không dừng chờ bạn nói theo":"Đã tắt Đọc liền: có khoảng nghỉ để bạn nói theo")};
$("#lp").onclick=()=>{SHO.loop=SHO.loop?0:1;sv();paint()};
$("#ct").onclick=()=>toggleCont();
document.querySelectorAll("[data-role]").forEach(b=>b.onclick=()=>{SHO.role=b.dataset.role==0?0:b.dataset.role;sv();stopAuto();stopAll();paint()});
const vb=$("#vbs");if(vb){vb.value=VB;if(vb.value!=VB)vb.value="auto";vb.onchange=()=>{VB=vb.value;BV=null;try{localStorage.setItem("vb",VB)}catch(e){}}}
document.querySelectorAll("#rgp [data-g]").forEach(b=>b.onclick=()=>{rg=+b.dataset.g;document.querySelectorAll("#rgp [data-g]").forEach(x=>x.classList.toggle("on",x==b));document.querySelectorAll("#sht [data-t]").forEach(t=>{t.hidden=!RG[rg][1](L[+t.dataset.t])});const cur=document.querySelector("#sht [data-t=\""+li+"\"]");if(cur&&cur.hidden){const f=document.querySelector("#sht [data-t]:not([hidden])");if(f)f.click()}else{const ta=document.querySelector("#sht .on"),sb=document.querySelector("#sht");if(ta&&sb)sb.scrollLeft=ta.offsetLeft-sb.clientWidth/2+ta.clientWidth/2}});
document.querySelectorAll(".shm button,.sht button,.shl button,.shopt button,.rgp button").forEach(noFocus);
const ta=$("#sht .on"),sb=$("#sht");if(ta&&sb)sb.scrollLeft=ta.offsetLeft-sb.clientWidth/2+ta.clientWidth/2;
KEY=e=>{if(e.target&&/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)&&e.key!="ArrowDown"&&e.key!=" ")return;if(e.key==" "){e.preventDefault();toggleAuto()}else if(e.key=="ArrowRight"){e.preventDefault();go(1)}else if(e.key=="ArrowLeft"){e.preventDefault();go(-1)}else if(e.key=="ArrowDown"){e.preventDefault();tgStar()}else if(e.key=="r"||e.key=="R")replay();else if(e.key=="l"||e.key=="L"){SHO.loop=SHO.loop?0:1;sv();paint()}else if(e.key=="c"||e.key=="C")toggleCont()};
paint()}
/* ===== Làm quen: Hiragana / Katakana ===== */
const KS={h:{name:"Hiragana",jp:"ひらがな",col:"#06b6d4",ic:"あ",samp:"あかさたな",desc:"Từ thuần Nhật, đuôi động từ, trợ từ và furigana chú âm cho Hán tự."},k:{name:"Katakana",jp:"カタカナ",col:"#ec4899",ic:"ア",samp:"アカサタナ",desc:"Từ mượn tiếng nước ngoài, tên riêng, tên khoa học và từ tượng thanh."}};
let KP={};try{KP=JSON.parse(localStorage.getItem("kp")||"{}")}catch(e){}
const kmark=(s,i)=>{KP[s]=KP[s]||[0,0,0];if(KP[s][i])return;KP[s][i]=1;try{localStorage.setItem("kp",JSON.stringify(KP))}catch(e){}};
const kc=(s,c)=>s=="k"?H2K(c):c;
const kchars=(s,secs)=>SECT.filter(x=>!secs||secs.includes(x.id)).flatMap(x=>x.rows.flatMap(r=>r.c.map((c,i)=>({c:kc(s,c),h:c,r:r.r[i],row:r.k,sec:x.id})).filter(q=>q.h!="-")));
const kans=h=>{const o=Object.keys(RT).filter(k=>RT[k]==h&&!/^[xl]/.test(k)),ex={"を":["o"],"ぢ":["ji","zi"],"づ":["zu"],"ん":["n"]}[h]||[];return[...new Set([...o,...ex])]};
function kana(){leave();stopSay();backFn=home;$("#back").hidden=false;const tot=kchars("h").length;
$("#app").innerHTML=`<div style="color:#b45309;font-size:12px;font-weight:600">— Nền tảng chữ Nhật</div><h1>Làm quen <span style="color:#6d55e8;font-size:.8em">入門</span></h1><p class="sub" style="max-width:520px">Học xong hai bảng chữ cái là bạn đọc được tiếng Nhật. Mỗi bảng có 46 chữ thuần, mỗi chữ có một hình ảnh để nhớ. Học đều mỗi ngày thì một tuần là xong.</p><div class="kgrid">`+["h","k"].map(s=>{const o=KS[s],pr=KP[s]||[];return`<div class="kc" style="--kc:${o.col}"><span class="kwm">${o.ic}</span><div class="kic">${o.ic}</div><h2>${o.name}<small>${o.jp}</small></h2><p class="m">${o.desc}</p><div class="kch">${[...o.samp].map(c=>`<span>${c}</span>`).join("")}<small>…46 chữ thuần · ${tot} tổng</small></div><button class="kbtn" data-ks="${s}">Bắt đầu với ${o.name} →</button>${pr.some(x=>x)?`<div class="m" style="margin-top:10px">Đã làm ${pr.filter(x=>x).length}/3 chặng</div>`:""}</div>`}).join("")+`</div><div class="sec"><span class="si" style="color:#9b87f5">練</span><b>Vào thẳng phần luyện tập</b></div><div class="kgrid">`+[["mem","🖼","Nhớ bằng hình ảnh","Mỗi chữ gắn với một hình ảnh liên tưởng. Đối mặt chữ để xem hình ảnh.","#f59e0b"],["type","⌨","Luyện gõ","Nhìn chữ kana, gõ romaji. Có bấm giờ và đếm số lần gõ sai.","#10b981"]].map(([k,ic,t,d,col])=>`<div class="kc kc2" style="--kc:${col}"><div class="kh2"><span class="kic">${ic}</span><div><h3>${t}</h3><p class="m">${d}</p></div></div><div class="kbs"><button class="pill" data-kq="${k}h">Hiragana →</button><button class="pill" data-kq="${k}k">Katakana →</button></div></div>`).join("")+`</div><div class="sec"><span class="si" style="color:#f59e0b">音</span><b>Phát âm cơ bản</b><span class="bd">${PH.length}</span></div><p class="m" style="margin:0 0 10px">Nhịp, trường âm, âm ngắt っ, âm mũi ん và cao độ. Có luyện nghe để phân biệt các cặp từ dễ nhầm.</p>`+PH.map((l,i)=>`<div class="row" data-ph="${i}"><span class="n">${l.jp}</span><div><h3>${l.title}</h3><p>${l.words.length} từ · ${l.pairs.length} cặp từ dễ nhầm</p></div></div>`).join("")+`<div class="acts2" style="justify-content:flex-start;margin:16px 0"><button class="pill alt" id="phall">🎧 Ôn tất cả phần phát âm</button></div>`;
document.querySelectorAll("[data-ph]").forEach(r=>r.onclick=()=>phlesson(+r.dataset.ph));noFocus($("#phall"));$("#phall").onclick=()=>phquiz(PH,kana,"Về Làm quen");
document.querySelectorAll("[data-ks]").forEach(b=>b.onclick=()=>kscript(b.dataset.ks));
document.querySelectorAll("[data-kq]").forEach(b=>b.onclick=()=>{const v=b.dataset.kq;v.startsWith("mem")?kmem(v.slice(3)):ktype(v.slice(4))})}
function kscript(s){leave();stopSay();backFn=kana;$("#back").hidden=false;const o=KS[s],cnt=SECT.map(x=>x.rows.reduce((a,r)=>a+r.c.filter(c=>c!="-").length,0)),pr=KP[s]||[0,0,0];
const steps=[["Nhận mặt chữ","字形",`Lướt hết ${cnt[0]+cnt[1]+cnt[2]} chữ xếp theo hàng, nghe phát âm từng chữ. Chặng này chỉ cần nhìn quen, chưa cần thuộc.`,"Mở bảng chữ","#06b6d4","⊞"],["Nhớ bằng hình ảnh","語呂合わせ","Mỗi chữ gắn với một hình ảnh liên tưởng. Đối mặt chữ xem liên tưởng rồi tự kiểm tra.","Mở hình ảnh liên tưởng","#f59e0b","🖼"],["Luyện gõ phản xạ","タイピング","Nhìn mặt chữ, gõ romaji, có bấm giờ và đếm số lần gõ sai. Đây là chặng biến nhận ra thành phản xạ, thứ duy nhất giúp bạn đọc trôi chảy về sau.","Vào luyện gõ","#10b981","⌨"]];
$("#app").innerHTML=`<div class="khead"><div><div style="color:#b45309;font-size:12px;font-weight:600">— Bảng chữ nhập môn</div><h1>${o.name}</h1><div style="color:#6d55e8;font-size:20px;margin-bottom:8px">${o.jp}</div><p class="sub" style="max-width:420px">${o.desc}</p><div class="kst"><span>Chữ thuần <b>${cnt[0]}</b></span><span>Âm đục <b>${cnt[1]}</b></span><span>Âm ghép <b>${cnt[2]}</b></span><span>tổng <b>${cnt[0]+cnt[1]+cnt[2]}</b></span></div><div class="kst"><span>Các hàng</span>${SECT[0].rows.map(r=>`<i>${r.k.toUpperCase()}</i>`).join("")}</div></div><div class="kbig">${o.ic}<div class="kvs">${SECT[0].rows[0].c.map((c,i)=>`<span style="--kc:${["#6d55e8","#ec4899","#10b981","#f59e0b","#8b5cf6"][i]}">${kc(s,c)}</span>`).join("")}</div></div></div><div class="sec" style="margin-top:34px"><span class="si" style="color:#9b87f5">道</span><b>Lộ trình ba chặng</b></div><p class="m">Đi lần lượt từ trên xuống. Chặng nào cũng quay lại được bất cứ lúc nào.</p>`+steps.map((t,i)=>`<div class="step"><div class="sn" style="--kc:${t[4]}">${i+1}</div><div class="sb"><h3>${t[0]} <small>${t[1]}</small>${pr[i]?`<span class="kdone">✓ Đã làm</span>`:""}</h3><p class="m">${t[2]}</p><button class="kbtn2" data-st="${i}" style="--kc:${t[4]}"><span class="kic">${t[5]}</span>${t[3]} →</button></div></div>`).join("");
document.querySelectorAll("[data-st]").forEach(b=>b.onclick=()=>[kchart,kmem,ktype][+b.dataset.st](s))}
function kchart(s){leave();stopSay();backFn=()=>kscript(s);kmark(s,0);let hide=false,last=null;const o=KS[s];
const draw=()=>{$("#app").innerHTML=`<div style="color:#06b6d4;font-size:12px;font-weight:600">字形</div><h1>Bảng chữ ${o.name}</h1><p class="sub">Chạm vào một chữ để nghe phát âm. Bật “Ẩn romaji” để tự kiểm tra.</p><div class="acts2" style="justify-content:flex-start;margin:6px 0 16px"><button class="${hide?"go":"pill alt"}" id="hr">${hide?"Hiện romaji":"Ẩn romaji"}</button></div>`+SECT.map(x=>`<div class="sec"><span class="si" style="color:${o.col}">${x.jp[0]}</span><b>${x.name}</b><span class="bd">${x.rows.reduce((a,r)=>a+r.c.filter(c=>c!="-").length,0)}</span></div>`+x.rows.map(r=>`<div class="kr" style="--cols:${r.c.length}"><span class="kl">${r.k.toUpperCase()}</span>${r.c.map((c,i)=>c=="-"?`<span></span>`:`<button class="kce${last==c?" on":""}" data-c="${c}"><b>${kc(s,c)}</b><small>${hide&&last!=c?"·":r.r[i]}</small></button>`).join("")}</div>`).join("")).join("");
$("#hr").onclick=()=>{hide=!hide;draw()};noFocus($("#hr"));
document.querySelectorAll(".kce").forEach(b=>{noFocus(b);b.onclick=()=>{last=b.dataset.c;say(kc(s,last));draw()}})};
draw()}
function kmem(s,rowSel="all",shuffle=false){const all=kchars(s,["base"]),p0=rowSel=="all"?all:all.filter(x=>x.row==rowSel);kdeck(s,shuffle?shuf(p0):p0,rowSel)}
function kdeck(s,pool,rowSel){leave();stopSay();backFn=()=>kscript(s);const N=pool.length;let n=0,flip=false;const ok=[],no=[];
const chips=`<div class="kchips">`+[["all","Tất cả"],...SECT[0].rows.map(r=>[r.k,r.k.toUpperCase()])].map(([k,l])=>`<button class="pill ${k==rowSel?"on":""}" data-row="${k}">${l}</button>`).join("")+`<button class="pill" id="shf">🔀 Xáo trộn</button></div>`;
const bind=()=>{document.querySelectorAll("[data-row]").forEach(b=>{noFocus(b);b.onclick=()=>kmem(s,b.dataset.row)});noFocus($("#shf"));$("#shf").onclick=()=>kmem(s,rowSel,true)};
const end=()=>{leave();kmark(s,1);$("#app").innerHTML=`<div class="intro"><h1>Hoàn thành!</h1><div class="chips2"><span class="c1"><b>${ok.length}</b> nhớ rồi</span><span class="c2"><b>${no.length}</b> chưa nhớ</span></div><div class="acts2" style="justify-content:flex-start;margin-top:22px">${no.length?`<button class="go" id="rt">Ôn ${no.length} chữ chưa nhớ</button>`:""}<button class="pill alt" id="ag">Học lại</button><button class="pill alt" id="bk">Về lộ trình</button></div></div>`;
if(no.length)$("#rt").onclick=()=>kdeck(s,no,rowSel);$("#ag").onclick=()=>kmem(s,rowSel);$("#bk").onclick=()=>kscript(s)};
const show=()=>{if(!N)return toast("Không có chữ nào để học");if(n>=N)return end();const q=pool[n],m=MN[s][q.c]||["",""];flip=false;
$("#app").innerHTML=chips+`<div class="top"><div class="stat"><span class="ai s1">▤</span><div><b>${n+1}/${N}</b><small>chữ</small></div></div><div class="stat"><span class="ai g">✓</span><div><b style="color:#16a34a">${ok.length}</b><small>nhớ rồi</small></div></div></div><div class="pbar"><i style="width:${n/N*100}%"></i></div><div class="dw"><div class="fc" id="fc"><span class="tag">${KS[s].name}</span><div class="fj">${q.c}</div><div id="kb" hidden><div class="kem">${m[0]}</div><div style="font-size:19px;line-height:1.5;max-width:520px;margin:10px auto">${m[1]}</div><div class="mr" style="font-size:24px">${q.r}</div></div><p class="m" id="hint">Nhấn <kbd>Space</kbd> hoặc chạm vào thẻ để xem hình ảnh liên tưởng</p></div><div class="acts2"><button class="pill alt" id="no">← Chưa nhớ</button><button class="go" id="yes">Nhớ rồi →</button></div></div>`;
bind();[$("#no"),$("#yes")].forEach(noFocus);
const rv=()=>{flip=!flip;$("#kb").hidden=!flip;$("#hint").hidden=flip;if(flip)say(q.c)};
$("#fc").onclick=rv;const nx=g=>{(g?ok:no).push(q);n++;show()};$("#no").onclick=()=>nx(0);$("#yes").onclick=()=>nx(1);
KEY=e=>{if(e.key==" "){e.preventDefault();rv()}else if(e.key=="ArrowLeft"){e.preventDefault();nx(0)}else if(e.key=="ArrowRight"){e.preventDefault();nx(1)}}};
show()}
function ktype(s,sel=["base"]){leave();stopSay();backFn=()=>kscript(s);const o=KS[s],cnt=id=>kchars(s,[id]).length;
$("#app").innerHTML=`<div class="intro"><div style="color:#10b981;font-size:12px;font-weight:600">タイピング</div><h1>Luyện gõ phản xạ ${o.name}</h1><p class="sub">Nhìn chữ kana, gõ romaji. Gõ đúng là tự sang chữ kế, gõ sai thì bị đếm lỗi. Nhớ chuyển bộ gõ về tiếng Anh (không dùng Telex).</p><div class="m" style="margin:18px 0 8px">Chọn phạm vi luyện</div><div class="kchips">${SECT.map(x=>`<button class="pill ${sel.includes(x.id)?"on":""}" data-sc="${x.id}">${x.name} · ${cnt(x.id)}</button>`).join("")}</div><div class="acts2" style="justify-content:flex-start;margin-top:22px"><button class="go" id="st">Bắt đầu gõ (${sel.reduce((a,id)=>a+cnt(id),0)} chữ)</button></div></div>`;
document.querySelectorAll("[data-sc]").forEach(b=>{noFocus(b);b.onclick=()=>{const id=b.dataset.sc,n=sel.includes(id)?sel.filter(x=>x!=id):[...sel,id];ktype(s,n.length?n:sel)}});
noFocus($("#st"));$("#st").onclick=()=>krun(s,sel);KEY=e=>{if(e.key=="Enter")krun(s,sel)}}
function krun(s,sel){leave();stopSay();backFn=()=>ktype(s,sel);const qs=shuf(kchars(s,sel)),N=qs.length,t0=Date.now();let n=0,wrong=0;const bad={};
tmr=setInterval(()=>{const el=$("#tm");if(el)el.textContent=mmss(Math.floor((Date.now()-t0)/1000))},500);
const end=()=>{const sec=Math.floor((Date.now()-t0)/1000);leave();kmark(s,2);const top=Object.entries(bad).sort((a,b)=>b[1]-a[1]).slice(0,12);
$("#app").innerHTML=`<div class="intro"><h1>Hoàn thành!</h1><div class="chips2"><span class="c1"><b>${N}</b> chữ</span><span class="c2"><b>${mmss(sec)}</b> thời gian</span><span class="c3"><b>${wrong}</b> lần gõ sai</span></div>${top.length?`<p class="sub" style="margin:18px 0 6px">Chữ hay gõ sai:</p><div class="kchips">${top.map(([c,k])=>`<span class="pill alt" style="cursor:default">${c} × ${k}</span>`).join("")}</div>`:`<p class="sub" style="margin-top:18px">Không gõ sai chữ nào, quá đỉnh!</p>`}<div class="acts2" style="justify-content:flex-start;margin-top:22px"><button class="go" id="ag">Gõ lại</button><button class="pill alt" id="ch">Đổi phạm vi</button><button class="pill alt" id="bk">Về lộ trình</button></div></div>`;
$("#ag").onclick=()=>krun(s,sel);$("#ch").onclick=()=>ktype(s,sel);$("#bk").onclick=()=>kscript(s)};
const show=()=>{if(n>=N)return end();const q=qs[n],A=kans(q.h);
$("#app").innerHTML=`<div class="top"><div class="stat"><span class="ai s1">▤</span><div><b>${n+1}/${N}</b><small>chữ</small></div></div><div class="stat"><span class="ai s1">⏱</span><div><b id="tm">${mmss(Math.floor((Date.now()-t0)/1000))}</b><small>thời gian</small></div></div><div class="stat"><span class="ai g" style="background:rgba(225,29,72,.15);color:#e11d48">✗</span><div><b id="wr" style="color:#e11d48">${wrong}</b><small>gõ sai</small></div></div></div><div class="pbar"><i style="width:${n/N*100}%"></i></div><div class="dw"><div class="m" style="text-align:center">Gõ romaji của chữ này</div><div class="dcard kk">${q.c}</div><input id="ans" class="kin" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="romaji…"><div id="fb"></div></div>`;
const a=$("#ans");a.focus();
const bump=()=>{wrong++;bad[q.c]=(bad[q.c]||0)+1;$("#wr").textContent=wrong;a.value="";a.classList.add("shake");setTimeout(()=>a.classList.remove("shake"),350);$("#fb").innerHTML=`<div class="fbk no">✗ Đáp án: <b>${q.r}</b></div>`};
a.addEventListener("input",e=>{if(e.isComposing)return;const v=a.value.trim().toLowerCase();if(!v)return;if(A.includes(v)){n++;show()}else if(!A.some(x=>x.startsWith(v)))bump()});
KEY=e=>{if(e.key=="Enter"){e.preventDefault();const v=a.value.trim().toLowerCase();if(v&&!A.includes(v))bump()}}};
show()}
/* ===== Phụ lục tra cứu ===== */
const VL=VERBS.trim().split("\n").map(l=>{const [d,r,m,g]=l.split("|");return{d,r,m,g:+g}});
const U9={う:"いわえお",く:"きかけこ",ぐ:"ぎがげご",す:"しさせそ",つ:"ちたてと",ぬ:"になねの",ぶ:"びばべぼ",む:"みまめも",る:"りられろ"};
const TE1={う:"って",つ:"って",る:"って",む:"んで",ぶ:"んで",ぬ:"んで",く:"いて",ぐ:"いで",す:"して"};
const taOf=t=>t.replace(/て$/,"た").replace(/で$/,"だ");
function conjForms(d,r,g){
if(g==3&&(d=="来る"||d=="くる")){const T=[["Từ điển (辞書形)","来る","くる"],["Lịch sự (ます)","来ます","きます"],["Phủ định lịch sự (ません)","来ません","きません"],["Quá khứ lịch sự (ました)","来ました","きました"],["Thể て","来て","きて"],["Thể ない","来ない","こない"],["Quá khứ phủ định (なかった)","来なかった","こなかった"],["Thể た","来た","きた"],["Muốn (たい)","来たい","きたい"],["Khả năng (可能形)","来られる","こられる"],["Ý chí (意向形)","来よう","こよう"],["Điều kiện ば","来れば","くれば"],["Điều kiện たら","来たら","きたら"],["Bị động (受身形)","来られる","こられる"],["Sai khiến (使役形)","来させる","こさせる"],["Mệnh lệnh (命令形)","来い","こい"],["Cấm (V るな)","来るな","くるな"]];return T.map(([l,k,h])=>({l,k:d=="くる"?h:k,h}))}
const out=[],add=(l,f)=>out.push({l,k:f(d),h:f(r)});
if(g==3){if(!d.endsWith("する"))return[];const b=x=>x.slice(0,-2);
add("Từ điển (辞書形)",x=>x);add("Lịch sự (ます)",x=>b(x)+"します");add("Phủ định lịch sự (ません)",x=>b(x)+"しません");add("Quá khứ lịch sự (ました)",x=>b(x)+"しました");add("Thể て",x=>b(x)+"して");add("Thể ない",x=>b(x)+"しない");add("Quá khứ phủ định (なかった)",x=>b(x)+"しなかった");add("Thể た",x=>b(x)+"した");add("Muốn (たい)",x=>b(x)+"したい");add("Khả năng (可能形)",x=>b(x)+"できる");add("Ý chí (意向形)",x=>b(x)+"しよう");add("Điều kiện ば",x=>b(x)+"すれば");add("Điều kiện たら",x=>b(x)+"したら");add("Bị động (受身形)",x=>b(x)+"される");add("Sai khiến (使役形)",x=>b(x)+"させる");add("Mệnh lệnh (命令形)",x=>b(x)+"しろ");add("Cấm (V るな)",x=>x+"な");return out}
const st=x=>x.slice(0,-1);
if(g==2){if(!d.endsWith("る"))return[];const nop=["できる","みえる","きこえる"].includes(r);
add("Từ điển (辞書形)",x=>x);add("Lịch sự (ます)",x=>st(x)+"ます");add("Phủ định lịch sự (ません)",x=>st(x)+"ません");add("Quá khứ lịch sự (ました)",x=>st(x)+"ました");add("Thể て",x=>st(x)+"て");add("Thể ない",x=>st(x)+"ない");add("Quá khứ phủ định (なかった)",x=>st(x)+"なかった");add("Thể た",x=>st(x)+"た");add("Muốn (たい)",x=>st(x)+"たい");
if(!nop)add("Khả năng (可能形)",x=>st(x)+"られる");add("Ý chí (意向形)",x=>st(x)+"よう");add("Điều kiện ば",x=>st(x)+"れば");add("Điều kiện たら",x=>st(x)+"たら");
if(!nop){add("Bị động (受身形)",x=>st(x)+"られる");add("Sai khiến (使役形)",x=>st(x)+"させる")}add("Mệnh lệnh (命令形)",x=>st(x)+"ろ");add("Cấm (V るな)",x=>x+"な");return out}
const L=d.slice(-1),u=U9[L];if(!u)return[];const aru=r=="ある",te=d.endsWith("行く")?"って":TE1[L];
add("Từ điển (辞書形)",x=>x);add("Lịch sự (ます)",x=>st(x)+u[0]+"ます");add("Phủ định lịch sự (ません)",x=>st(x)+u[0]+"ません");add("Quá khứ lịch sự (ました)",x=>st(x)+u[0]+"ました");add("Thể て",x=>st(x)+te);add("Thể ない",x=>aru?"ない":st(x)+u[1]+"ない");add("Quá khứ phủ định (なかった)",x=>aru?"なかった":st(x)+u[1]+"なかった");add("Thể た",x=>taOf(st(x)+te));
if(!aru){add("Muốn (たい)",x=>st(x)+u[0]+"たい");add("Khả năng (可能形)",x=>st(x)+u[2]+"る");add("Ý chí (意向形)",x=>st(x)+u[3]+"う")}
add("Điều kiện ば",x=>st(x)+u[2]+"ば");add("Điều kiện たら",x=>taOf(st(x)+te)+"ら");
if(!aru){add("Bị động (受身形)",x=>st(x)+u[1]+"れる");add("Sai khiến (使役形)",x=>st(x)+u[1]+"せる");add("Mệnh lệnh (命令形)",x=>st(x)+u[2]);add("Cấm (V るな)",x=>x+"な")}
return out}
const vcard=v=>{const fs=conjForms(v.d,v.r,v.g);if(!fs.length)return`<p class="sub">Không chia được từ này theo nhóm ${v.g}.</p>`;
return`<div class="vcard"><div class="vh"><span class="vd">${v.d}</span>${v.r!=v.d?`<span class="m">${v.r}</span>`:""}<span class="pill alt" style="cursor:default">Nhóm ${["","I","II","III"][v.g]}</span></div><p class="m" style="margin:4px 0 10px">${v.m}</p><div class="apt-w"><table class="apt"><tr><th>Dạng</th><th>Kết quả</th><th></th></tr>${fs.map(f=>`<tr><td>${f.l}</td><td><b>${f.k}</b>${f.h!=f.k?`<small>${f.h}</small>`:""}</td><td><button class="ib" data-y="${f.h}" title="Nghe">🔊</button></td></tr>`).join("")}</table></div></div>`};
const VRULES=`<div class="sec" style="margin-top:30px"><span class="si" style="color:#34d399">則</span><b>Quy tắc chia theo nhóm</b></div><div class="apt-w"><table class="apt rules"><tr><th>Dạng</th><th>Nhóm I (書く)</th><th>Nhóm II (食べる)</th><th>Nhóm III</th></tr>
<tr><td>Nhận biết</td><td>Đuôi う, く, ぐ, す, つ, ぬ, ぶ, む, る</td><td>る sau âm え hoặc い (phần lớn)</td><td>する, 来る và N + する</td></tr>
<tr><td>ます</td><td>Đổi sang cột い: 書きます</td><td>Bỏ る: 食べます</td><td>します, 来ます (きます)</td></tr>
<tr><td>て</td><td>う つ る→って, む ぶ ぬ→んで, く→いて (行く→行って), ぐ→いで, す→して</td><td>Bỏ る: 食べて</td><td>して, 来て</td></tr>
<tr><td>ない</td><td>Cột あ (う→わ): 書かない</td><td>Bỏ る: 食べない</td><td>しない, 来ない (こない)</td></tr>
<tr><td>た</td><td>Như て, đổi て→た, で→だ: 書いた</td><td>食べた</td><td>した, 来た</td></tr>
<tr><td>Khả năng</td><td>Cột え + る: 書ける</td><td>られる: 食べられる</td><td>できる, 来られる</td></tr>
<tr><td>Ý chí</td><td>Cột お + う: 書こう</td><td>よう: 食べよう</td><td>しよう, 来よう</td></tr>
<tr><td>ば</td><td>Cột え + ば: 書けば</td><td>れば: 食べれば</td><td>すれば, 来れば</td></tr>
<tr><td>Bị động</td><td>Cột あ + れる: 書かれる</td><td>られる: 食べられる</td><td>される, 来られる</td></tr>
<tr><td>Sai khiến</td><td>Cột あ + せる: 書かせる</td><td>させる: 食べさせる</td><td>させる, 来させる</td></tr>
<tr><td>Mệnh lệnh</td><td>Cột え: 書け</td><td>ろ: 食べろ</td><td>しろ, 来い</td></tr></table></div><p class="m" style="margin-top:12px">Chú ý: 帰る, 入る, 走る, 切る, 知る, 要る, 減る, 参る trông như nhóm II nhưng thuộc nhóm I. Động từ 行く có て là 行って (không phải 行いて). ある có thể phủ định là ない.</p>`;
const escA=x=>String(x).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
const stB=(r,m)=>{const k=r.split("・")[0];return`<button class="cst${hs.has(k)?" on":""}" data-star="${escA(k)}" data-sm="${escA(m)}" title="Ghi nhớ để luyện gõ" aria-label="Ghi nhớ">★</button>`};
const RELM={"一昨日":"hôm kia","昨日":"hôm qua","今日":"hôm nay","明日":"ngày mai","明後日":"ngày kia","毎日":"mỗi ngày","先々週":"tuần trước nữa","先週":"tuần trước","今週":"tuần này","来週":"tuần sau","再来週":"tuần sau nữa","毎週":"mỗi tuần","先々月":"tháng trước nữa","先月":"tháng trước","今月":"tháng này","来月":"tháng sau","再来月":"tháng sau nữa","毎月":"mỗi tháng","一昨年":"năm kia","去年":"năm ngoái","今年":"năm nay","来年":"năm sau","再来年":"năm sau nữa","毎年":"mỗi năm","今朝":"sáng nay","午前":"buổi sáng (AM)","午後":"buổi chiều (PM)","今晩":"tối nay","毎朝":"mỗi sáng","毎晩":"mỗi tối"};
function tgCs(b){const k=b.dataset.star,m=b.dataset.sm;if(hs.has(k)){hs.delete(k);delete CM[k];toast("Đã bỏ khỏi Ghi nhớ")}else{hs.add(k);if(m){SHV[k]=m;CM[k]=m}toast("Đã thêm “"+k+"” vào Ghi nhớ")}try{localStorage.setItem("cmx",JSON.stringify(CM))}catch(e){}persist();document.querySelectorAll("[data-star]").forEach(x=>{if(x.dataset.star==k)x.classList.toggle("on",hs.has(k))})}
const chip=(t,r,irr,m)=>`<span class="nchw"><button class="nchip${irr?" irr":""}" data-y="${r.split("・")[0]}"><b>${t}</b><small>${r}</small></button>${stB(r,m||"Số "+t)}</span>`;
const cellY=(r,m)=>`<td class="py" data-y="${r.split("・")[0]}">${r.replace(/・/g,"・<wbr>")}${m?stB(r,m):""}</td>`;
const rowsT=(head,rows,lastH)=>`<div class="apt-w"><table class="apt"><tr>${head.map(h=>`<th>${h}</th>`).join("")}</tr>${rows}</table></div>`;
function apV(){const nrm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").toLowerCase();
$("#ap").innerHTML=`<div class="m" style="margin:4px 0 8px">Tra cứu chia động từ (${VL.length} động từ có sẵn)</div><input id="vs" class="kin vin" autocomplete="off" placeholder="Gõ động từ: 食べる, たべる hoặc nghĩa tiếng Việt, ví dụ: ăn"><div class="kchips" id="vr"></div><div id="vcd"></div>`+VRULES;
const show=v=>{$("#vcd").innerHTML=vcard(v)};show(VL.find(x=>x.d=="食べる"));
const upd=()=>{const raw=$("#vs").value.trim(),q=nrm(raw),f=q?VL.filter(x=>nrm(x.d+" "+x.r+" "+x.m).includes(q)):[];
$("#vr").innerHTML=!q?"":f.length?f.slice(0,16).map(x=>`<button class="pill alt" data-v="${VL.indexOf(x)}">${x.d} · ${x.m}</button>`).join(""):`<span class="m">Không có trong danh sách. Thử chia theo nhóm:</span>${[1,2,3].map(g=>`<button class="pill alt" data-man="${g}">Nhóm ${["","I","II","III"][g]}</button>`).join("")}`;
document.querySelectorAll("[data-v]").forEach(b=>{noFocus(b);b.onclick=()=>show(VL[+b.dataset.v])});
document.querySelectorAll("[data-man]").forEach(b=>{noFocus(b);b.onclick=()=>{const g=+b.dataset.man,v={d:raw,r:raw,m:"Động từ bạn nhập (giả định cách đọc giống chữ gõ vào)",g};if(!conjForms(v.d,v.r,g).length)return toast("Từ này không chia được theo nhóm đã chọn");show(v)}})};
$("#vs").addEventListener("input",upd)}
function apN(){$("#ap").innerHTML=`<div class="m" style="margin:4px 0 10px">Số cơ bản. Màu hồng là cách đọc đặc biệt, cần nhớ riêng. Chạm để nghe.</div><div class="nchips">${NUMS.map(([n,r,i])=>chip(n.toLocaleString("en-US"),r,i)).join("")}</div><div class="sec" style="margin-top:30px"><span class="si" style="color:#34d399">数</span><b>Trợ từ đếm</b></div>`+rowsT(["Đếm","Dùng cho",...Array.from({length:10},(_,i)=>i+1),"Hỏi mấy"],COUNTERS.map(c=>`<tr><td class="ct"><b>${c[0]}</b></td><td class="us">${c[2]}</td>${c[3].map((r,i)=>cellY(r,`${i+1} ${c[0]} (${c[2]})`)).join("")}${cellY(c[4],`Hỏi “mấy” với ${c[0]} (${c[2]})`)}</tr>`).join(""))+`<p class="m" style="margin-top:12px">Số 4 thường đọc よん (し và よ ít dùng hơn), số 7 là なな hoặc しち, số 9 là きゅう hoặc く. Biến âm ở 1, 3, 6, 8, 10 hay gặp với 本, 杯, 匹 (ぽん ぼん ぱい ばい ぴき びき), vì vậy cần học theo bảng. Trong bảng, chữ được phát âm khi chạm là cách đọc đầu tiên.</p>`}
function apT(){const g=(t,a)=>`<div class="m" style="margin:22px 0 8px">${t}</div><div class="nchips">${a.map(([k,r,i])=>chip(k,r,i,k+" · "+t)).join("")}</div>`;
$("#ap").innerHTML=`<div class="m" style="margin:4px 0 0">Màu hồng là cách đọc đặc biệt. Chạm vào chữ để nghe.</div>`+g("Giờ (〜時)",HOURS)+g("Phút (〜分)",MINUTES)+g("Ngày trong tháng (〜日)",DAYS)+g("Tháng (〜月)",MONTHS)+g("Thứ trong tuần (〜曜日)",WEEKDAYS)+`<div class="sec" style="margin-top:30px"><span class="si" style="color:#34d399">間</span><b>Khoảng thời gian</b></div>`+rowsT(["Đếm","Nghĩa",...Array.from({length:10},(_,i)=>i+1),"Hỏi mấy"],SPANS.map(c=>`<tr><td class="ct"><b>${c[0]}</b></td><td class="us">${c[1]}</td>${c[2].map((r,i)=>cellY(r,`${i+1} ${c[0]} (${c[1]})`)).join("")}${cellY(c[3],`Hỏi “mấy” với ${c[0]} (${c[1]})`)}</tr>`).join(""))+`<div class="sec" style="margin-top:30px"><span class="si" style="color:#34d399">時</span><b>Từ chỉ thời điểm</b></div>`+rowsT(["Nhóm","","","","","",""],RELTIME.map(([n,a])=>`<tr><td class="ct"><b>${n}</b></td>${a.map(([k,r])=>`<td class="py" data-y="${r}"><b>${k}</b><small>${r}</small>${stB(r,(RELM[k]||n)+" ("+k+")")}</td>`).join("")}</tr>`).join(""))}
function appx(tab="v"){leave();stopSay();backFn=home;$("#back").hidden=false;const TB=[["v","Chia động từ"],["n","Số đếm"],["t","Giờ & ngày tháng"]];
$("#app").innerHTML=`<div style="color:#34d399;font-size:12px;font-weight:600">付録</div><h1>Phụ lục tra cứu</h1><p class="sub">Bảng chia động từ, số đếm, giờ giấc và ngày tháng để tra nhanh. Chạm vào chữ hoặc nút 🔊 để nghe đọc.</p><div class="kchips">${TB.map(([k,n])=>`<button class="${k==tab?"go":"pill alt"}" data-tab="${k}">${n}</button>`).join("")}</div><div id="ap"></div>`;
document.querySelectorAll("[data-tab]").forEach(b=>{noFocus(b);b.onclick=()=>appx(b.dataset.tab)});
({v:apV,n:apN,t:apT})[tab]()}
/* ===== Kiểm tra theo cụm bài ===== */
let KT={};try{KT=JSON.parse(localStorage.getItem("kt")||"{}")}catch(e){}
const CL=[...Array.from({length:50},(_,i)=>({id:"b"+i,t:`Bài ${i+1}`,from:i,to:i,all:1})),{id:"s1",t:"Tổng hợp Sơ cấp 1",sub:"Bài 1–25",from:0,to:24,n:40},{id:"s2",t:"Tổng hợp Sơ cấp 2",sub:"Bài 26–50",from:25,to:49,n:40}];
const ALLW=WC.flatMap((c,ci)=>c.flatMap((l,li)=>l[1].map((w,wj)=>({w,ci,li,wj,g:ci*25+li}))));
function vqs(items){const HAN=/[\u4e00-\u9fff]/;return items.map(it=>{const w=it.w,[k,r,v,j,vi]=w,id=`${it.ci}:${it.li}-${it.wj}`,base={big:k,ex:`<b>${k}</b> (${r}) · ${v}${j?`<br>${j}<br>${vi}`:""}`,mem:{t:"v",k:id},say:j||r,les:it.g},others=ALLW.filter(x=>x.w[0]!=k&&x.w[1]!=r),types=[1,2];
if(HAN.test(k)&&r!=k)types.push(3);if(j&&k.length>=2&&j.includes(k))types.push(4);const t=types[Math.floor(Math.random()*types.length)];
if(t==1){const ds=pickN(others,3,(x,o)=>x.w[2]!=v&&!o.some(y=>y.w[2]==x.w[2])),q=place(v,ds.map(x=>x.w[2])),why={};ds.forEach(x=>why[x.w[2]]=`«${x.w[2]}» là nghĩa của từ <b>${x.w[0]}</b> (${x.w[1]}), một từ khác. Còn <b>${k}</b> (${r}) có nghĩa là «${v}».`);return{...base,ask:"Từ này có nghĩa là gì?",prompt:k,hear:r,why,opts:q.opts,a:q.a,col:q.opts.some(x=>x.length>24)?1:0}}
if(t==2){const ds=pickN(others,3,(x,o)=>!o.some(y=>y.w[0]==x.w[0])),q=place(k,ds.map(x=>x.w[0])),why={};ds.forEach(x=>why[x.w[0]]=`<b>${x.w[0]}</b> (${x.w[1]}) nghĩa là «${x.w[2]}», không phải «${v}». Từ có nghĩa «${v}» là <b>${k}</b> (${r}).`);return{...base,ask:"Chọn từ tiếng Nhật đúng với nghĩa này:",prompt:v,sm:1,why,opts:q.opts,a:q.a}}
if(t==3){const cand=others.filter(x=>HAN.test(x.w[0])).sort((a,b)=>Math.abs(a.w[1].length-r.length)-Math.abs(b.w[1].length-r.length)).slice(0,40),ds=pickN(cand,3,(x,o)=>!o.some(y=>y.w[1]==x.w[1])),q=place(r,ds.map(x=>x.w[1])),why={};ds.forEach(x=>why[x.w[1]]=`${x.w[1]} là cách đọc của từ <b>${x.w[0]}</b> (${x.w[2]}), không phải của <b>${k}</b>. <b>${k}</b> đọc là <b>${r}</b> (${v}).`);return{...base,ask:"Từ này đọc như thế nào?",prompt:k,why,opts:q.opts,a:q.a,say:r}}
const isM=k.endsWith("ます"),ds=pickN(others,3,(x,o)=>x.w[0].endsWith("ます")==isM&&!j.includes(x.w[0])&&!o.some(y=>y.w[0]==x.w[0])),q=place(k,ds.map(x=>x.w[0])),why={};ds.forEach(x=>why[x.w[0]]=`<b>${x.w[0]}</b> nghĩa là «${x.w[2]}», không hợp với nghĩa của câu «${vi}». Chỗ trống cần từ <b>${k}</b> (${v}).`);
return{...base,ask:"Điền từ thích hợp vào chỗ trống:",prompt:`${j.replace(k,"＿＿＿")}<div class="m" style="font-size:17px;font-weight:500;margin-top:8px">${vi}</div>`,sm:1,why,opts:q.opts,a:q.a}})}

function ktest(cl){const nV=Math.round((cl.n||0)*.5),nG=Math.round((cl.n||0)*.25),nK=(cl.n||0)-nV-nG,lw=g=>[Math.floor(g/25),g%25],lim=(a,n)=>cl.all?a:a.slice(0,n);
const wi=lim(shuf(ALLW.filter(x=>x.g>=cl.from&&x.g<=cl.to)),nV);
const kk=[];for(let g=cl.from;g<=cl.to;g++){const [c,l]=lw(g);(KLC[c][l]||[]).forEach(ch=>kk.push({ch,g}))}
const chars=lim(shuf(kk),nK),lm=Object.fromEntries(chars.map(x=>[x.ch,x.g])),kq=kqs(chars.map(x=>x.ch));kq.forEach(q=>q.les=lm[q.big]);
const keys=GP.filter(x=>x.i>=cl.from&&x.i<=cl.to).map(x=>x.key);let gq;if(cl.all){const seen=new Set;gq=gqs([...keys,...keys]).filter(q=>{const k=q.mem.k+"|"+q.ask+"|"+(q.prompt||q.big);if(seen.has(k))return false;seen.add(k);return true})}else gq=gqs(shuf(keys).slice(0,nG));gq.forEach(q=>q.les=+q.mem.k.split("-")[0]);
const qs=shuf([...vqs(wi),...kq,...gq]);if(!qs.length)return toast("Chưa có nội dung để kiểm tra");
mcq(qs,{back:tests,backLabel:"Về danh sách kiểm tra",again:()=>ktest(cl),onEnd:(ok,N,bad)=>{const pc=Math.round(ok/N*100),b=KT[cl.id]||{best:0,tries:0};KT[cl.id]={best:Math.max(b.best,pc),tries:b.tries+1,last:pc};try{localStorage.setItem("kt",JSON.stringify(KT))}catch(e){}
const les=[...new Set(bad.map(q=>q.les).filter(x=>x!=null))].sort((a,b)=>a-b),vd=pc>=90?["Xuất sắc","#16a34a"]:pc>=80?["Đạt","#16a34a"]:pc>=60?["Cần ôn thêm","#f59e0b"]:["Nên học lại","#e11d48"];
return`<div class="kres"><div class="kpc" style="color:${vd[1]}">${pc}%</div><div><b style="color:${vd[1]}">${vd[0]}</b><div class="m">Cao nhất: ${KT[cl.id].best}% · đã làm ${KT[cl.id].tries} lần</div>${les.length?`<div class="m" style="margin-top:6px">Nên xem lại: ${les.map(g=>`Bài ${g+1}`).join(", ")}</div>`:""}</div></div>`}})}
const lessonCount=i=>{const w=ALLW.filter(x=>x.g==i).length,[c,l]=[Math.floor(i/25),i%25],k=(KLC[c][l]||[]).length,g=GP.filter(x=>x.i==i).length;return{w,k,g}};
function tests(){leave();stopSay();backFn=home;$("#back").hidden=false;
const row=(c,i)=>{const b=KT[c.id],ttl=c.all?(GR[c.from]?GR[c.from][0].replace(/^Bài\s*\d+\s*[–-]\s*/,""):""):c.t,n=c.all?lessonCount(c.from):null;return`<div class="row" data-ct="${i}"><span class="n">${c.all?String(c.from+1).padStart(2,"0"):"★"}</span><div><h3>${c.all?"Bài "+(c.from+1):c.t}${c.all?`<small>${ttl}</small>`:""}${b&&b.best>=80?" ✓":""}</h3><p>${c.all?`${n.w} từ · ${n.k} chữ Hán · ${n.g} mẫu câu`:`${c.n} câu${c.sub?" · "+c.sub:""}`}${b?` · cao nhất ${b.best}%`:""}</p></div></div>`};
const part=(from,to,label)=>`<h2 class="kh">${label}</h2><div class="tgrid">${CL.map((c,i)=>c.all&&c.from>=from&&c.from<=to?row(c,i):"").join("")}</div>`;
$("#app").innerHTML=`<div style="color:#f87171;font-size:12px;font-weight:600">テスト</div><h1>Kiểm tra</h1><p class="sub" style="max-width:640px">Mỗi bài kiểm tra bao quát toàn bộ từ vựng, chữ Hán và mẫu ngữ pháp của đúng bài đó, không giới hạn số câu. Có điểm số, danh sách câu sai và gợi ý phần cần xem lại. Đạt từ 80%.</p>`+part(0,24,"Sơ cấp 1 · Bài 1–25")+part(25,49,"Sơ cấp 2 · Bài 26–50")+`<h2 class="kh">Tổng hợp nhiều bài</h2><div class="tgrid">${CL.map((c,i)=>c.all?"":row(c,i)).join("")}</div>`;
document.querySelectorAll("[data-ct]").forEach(r=>r.onclick=()=>ktest(CL[+r.dataset.ct]))}
/* ===== Phát âm cơ bản ===== */
const moraSplit=s=>{const o=[];for(const ch of s){if(/[ゃゅょャュョぁぃぅぇぉァィゥェォ]/.test(ch)&&o.length)o[o.length-1]+=ch;else o.push(ch)}return o};
const moraBox=(w,kind)=>`<span class="mbx">${moraSplit(w).map((c,i)=>{let hl=kind=="choyon"?i>0&&/^[あいうえおー]$/.test(c):kind=="sokuon"?/^[っッ]$/.test(c):kind=="hatsuon"?/^[んン]$/.test(c):/^[っッんンー]$/.test(c);return`<i class="mo${hl?" L":""}">${c}</i>`}).join("")}</span>`;
const pitchBox=(w,pat)=>`<span class="mbx">${moraSplit(w).map((c,i)=>`<i class="mo ${pat[i]=="H"?"H":"Lo"}">${c}</i>`).join("")}</span>`;
const pitchSet=n=>[`L${"H".repeat(n-1)}`,`H${"L".repeat(n-1)}`,...Array.from({length:Math.max(0,n-2)},(_,k)=>`L${"H".repeat(k+1)}${"L".repeat(n-2-k)}`)];
function phqs(ls){return ls.flatMap(L=>{const o=[];
if(L.kind=="mora")L.words.forEach(w=>{const n=moraSplit(w[0]).length,c=[n-2,n-1,n+1,n+2,n+3].filter(x=>x>=1).sort((a,b)=>Math.abs(a-n)-Math.abs(b-n)).slice(0,3),q=place(n+" nhịp",c.map(x=>x+" nhịp"));o.push({big:w[0],ask:"Từ này có mấy nhịp?",prompt:`${w[0]}<div class="m" style="font-size:17px;font-weight:500">${w[2]}</div>`,opts:q.opts,a:q.a,ex:`<b>${w[0]}</b> = ${moraSplit(w[0]).join("・")} → ${n} nhịp`,say:w[0]})});
if(L.kind=="accent"){L.words.forEach(w=>{const pat=w[3],ps=pitchSet(pat.length),wr=ps.filter(x=>x!=pat).slice(0,3),q=place(pat.split("").join(" "),wr.map(x=>x.split("").join(" ")));o.push({big:w[0],ask:"Cao độ của từ này (giọng Tokyo) là gì? H là cao, L là thấp",prompt:`${w[1]||w[0]}<div class="m" style="font-size:17px;font-weight:500">${w[0]} · ${w[2]}</div>`,opts:q.opts,a:q.a,ex:`<b>${w[0]}</b>: ${pat.split("").join(" ")}`,say:w[0]})});
L.pairs.forEach(p=>{[0,2].forEach(x=>{const q=place(p[x+2>3?5:4],[p[x==0?5:4]]);o.push({big:p[x],ask:"Từ này có cao độ nào?",prompt:`${p[x]}<div class="m" style="font-size:17px;font-weight:500">${p[x+1]}</div>`,opts:q.opts.map(z=>z.split("").join(" ")),a:q.a,ex:`${p[0]} (${p[1]}): ${p[4].split("").join(" ")}<br>${p[2]} (${p[3]}): ${p[5].split("").join(" ")}`,say:p[x]})})})}
else L.pairs.forEach(p=>{const sd=Math.random()<.5?0:2,q=place(`${p[sd]} · ${p[sd+1]}`,[`${p[2-sd]} · ${p[3-sd]}`]),ex=`<b>${p[0]}</b> = ${p[1]}<br><b>${p[2]}</b> = ${p[3]}`;
o.push({big:p[sd],ask:"Bạn nghe thấy từ nào?",prompt:`<button class="go" data-y="${p[sd]}">🔊 Nghe lại</button>`,listen:p[sd],opts:q.opts,a:q.a,col:1,ex,say:p[sd]});
const sd2=Math.random()<.5?0:2,q2=place(p[sd2],[p[2-sd2]]);o.push({big:p[sd2],ask:"Chọn từ đúng với nghĩa này:",prompt:p[sd2+1],sm:1,opts:q2.opts,a:q2.a,ex,say:p[sd2]})});
return o})}
function phquiz(ls,back,label){const qs=shuf(phqs(ls)).slice(0,10);if(!qs.length)return toast("Chưa có câu hỏi");mcq(qs,{back,backLabel:label,again:()=>phquiz(ls,back,label)})}
function phlesson(i){leave();stopSay();backFn=kana;$("#back").hidden=false;const L=PH[i];
$("#app").innerHTML=`<div style="color:#f59e0b;font-size:12px;font-weight:600">発音 · Bài ${i+1}/${PH.length}</div><h1>${L.title}</h1>`+L.intro.map(t=>`<p class="sub" style="max-width:640px">${t}</p>`).join("")+`<div class="sec"><span class="si" style="color:#f59e0b">則</span><b>Quy tắc</b></div><ul class="rl">${L.rules.map(r=>`<li>${r}</li>`).join("")}</ul><div class="sec"><span class="si" style="color:#f59e0b">例</span><b>Ví dụ</b></div><div class="wlist">${L.words.map(w=>`<div class="wr" data-y="${w[0]}"><div class="wt"><b>${w[1]||w[0]}</b>${w[1]?`<small>${w[0]}</small>`:""}<span class="m">${w[2]}</span></div>${L.kind=="accent"?pitchBox(w[0],w[3]):moraBox(w[0],L.kind)}<span class="ib">🔊</span></div>`).join("")}</div><div class="sec"><span class="si" style="color:#f59e0b">比</span><b>Cặp từ dễ nhầm</b></div>${L.kind=="accent"?`<p class="m">Giọng đọc tổng hợp có thể không phân biệt được hai từ này. Hãy nghe nhiều nguồn và đối chiếu từ điển.</p>`:""}`+L.pairs.map((p,k)=>`<div class="pcard"><div class="pc">${[0,2].map(x=>`<div class="pw" data-y="${p[x]}"><b>${p[x]}</b><span class="m">${p[x+1]}</span>${L.kind=="accent"?pitchBox(p[x],p[x==0?4:5]):moraBox(p[x],L.kind)}</div>`).join("")}</div><button class="pill alt" data-cmp="${k}">▶ So sánh hai từ</button></div>`).join("")+`<div class="acts2" style="justify-content:flex-start;margin:24px 0"><button class="go" id="phq">🎧 Luyện nghe</button>${i<PH.length-1?`<button class="pill alt" id="phn">Bài sau →</button>`:""}</div>`;
document.querySelectorAll("[data-cmp]").forEach(b=>{noFocus(b);b.onclick=()=>{const p=L.pairs[+b.dataset.cmp];say(p[0],1,()=>setTimeout(()=>say(p[2]),500))}});
$("#phq").onclick=()=>phquiz([L],()=>phlesson(i),"Về bài học");if(i<PH.length-1)$("#phn").onclick=()=>{phlesson(i+1);scrollTo(0,0)}}
/* ===== Flashcard ===== */
let FC={};try{FC=JSON.parse(localStorage.getItem("fc")||"{}")}catch(e){}
let FS={src:"v0",top:-1,mode:"all",eye:0,shuf:0};try{FS.eye=JSON.parse(localStorage.getItem("fcs")||"{}").eye?1:0}catch(e){}
const FIV=[0,1,3,7,14,30,60];
const fcSave=()=>{try{localStorage.setItem("fc",JSON.stringify(FC));localStorage.setItem("fcs",JSON.stringify({eye:FS.eye}))}catch(e){}};
const fcUpd=(r,g,now)=>{r=r?{...r}:{b:0,n:0};if(g){r.b=Math.min((r.b||0)+1,6);r.d=now+FIV[r.b]*864e5}else{r.b=0;r.d=now+6e5}r.n=(r.n||0)+1;return r};
const fcDue=(c,now,F)=>{const r=F[c.id];return!!r&&r.d<=now},fcNew=(c,F)=>!F[c.id];
const fcCls=c=>{const r=FC[c.id];return!r?0:(r.b>=1?2:1)};
const fcBase=(all,o)=>{let p=o.src=="all"?all:o.src=="star"?all.filter(c=>fcSet(c).has(c.k)):o.src=="no"?all.filter(c=>fcCls(c)==1):o.src=="ok"?all.filter(c=>fcCls(c)==2):all.filter(c=>c.src==o.src);if(o.top>=0)p=p.filter(c=>c.top==o.top);return p};
const fcMode=(p,mode,F,now)=>mode=="due"?p.filter(c=>fcDue(c,now,F)):mode=="new"?p.filter(c=>fcNew(c,F)):p;
let FCA=null;
const fcAll=()=>{if(FCA)return FCA;const o=[],AW=WC.flat().flatMap(l=>l[1]);
WC.forEach((c,ci)=>c.forEach((l,li)=>l[1].forEach((w,wj)=>o.push({id:`v${ci}:${li}-${wj}`,src:"v"+ci,top:li,topN:l[0],t:"v",k:`${ci}:${li}-${wj}`,jp:w[0],rd:w[1],vi:w[2],ex:w[3]||"",exv:w[4]||"",say:w[1]}))));
S.forEach((x,i)=>o.push({id:"s"+i,src:"s",top:x.t,topN:T[x.t][0],t:"s",k:i,jp:x.j,rd:"",vi:x.v,ex:"",exv:"",say:x.j}));
let g=0;WC.forEach((c,ci)=>c.forEach((l,li)=>{(KLC[ci][li]||[]).forEach(ch=>{const d=KD[ch];if(!d)return;const ws=AW.filter(w=>w[0].includes(ch));o.push({id:"k"+ch,src:"k",top:ci*25+li,topN:l[0],t:"k",k:ch,jp:ch,rd:`${(KH[ch]||"").toUpperCase()} · On: ${d[0]||"–"} · Kun: ${d[1]||"–"}`,vi:d[2],ex:d[3]?"💡 "+d[3]:"",exv:"",say:ws[0]?ws[0][1]:ch})})}));
return FCA=o};
const fcSet=c=>c.t=="s"?saved:c.t=="v"?vs:ks;
function fcard(o){leave();stopSay();backFn=home;$("#back").hidden=false;if(o)Object.assign(FS,o);
const all=fcAll(),now=Date.now(),dueAll=all.filter(c=>fcDue(c,now,FC)).length;
const SR=[["v0","Sơ cấp 1"],["v1","Sơ cấp 2"],["s","Giao tiếp"],["k","Hán tự"],["star","★ Đã đánh dấu"]];if(FS.src=="no")SR.push(["no","Chưa thuộc"]);if(FS.src=="ok")SR.push(["ok","Thuộc rồi"]);const isMix=["all","star","no","ok"].includes(FS.src);
const base=fcBase(all,FS),inSrc=fcBase(all,{src:FS.src,top:-1});
const tops=[...new Map(inSrc.map(c=>[c.top,c.topN])).entries()],cnt=t=>inSrc.filter(c=>c.top==t).length;
const rk=c=>{const r=FC[c.id];return r?(r.d<=now?0:2):1};
let pool=FS.shuf?shuf(base):[...base];pool.sort((x,y)=>rk(x)-rk(y)||(rk(x)==0?FC[x.id].d-FC[y.id].d:0));
$("#app").innerHTML=`<div class="fchips">${SR.map(([k,n])=>`<button class="${k==FS.src?"go":"pill alt"}" data-fs="${k}">${n} <small>${fcBase(all,{src:k,top:-1}).length}</small></button>`).join("")}<select class="pill" id="ftp"${isMix?" hidden":""}><option value="-1">Tất cả chủ đề</option>${isMix?"":tops.map(([t,n])=>`<option value="${t}">${n} (${cnt(t)})</option>`).join("")}</select><button class="${FS.shuf?"go":"pill alt"}" id="fsh" title="Xáo trộn">🔀</button><button class="pill alt" id="frv" title="Xem thẻ chưa thuộc và thuộc rồi trong Ghi nhớ">📋 Ghi nhớ</button><span class="fdue" title="Thẻ đến hạn được xếp lên đầu">${dueAll?`${dueAll} đến hạn`:"Chưa có thẻ đến hạn"}</span></div><div id="fcc"></div><p class="m" style="text-align:center;margin-top:10px;font-size:12px">Phím tắt: Space xem/ẩn nghĩa, ← chưa thuộc, → thuộc rồi, ↓ đánh dấu, E nghe câu ví dụ</p>`;
$("#ftp").value=String(FS.top);if($("#ftp").value!==String(FS.top)){FS.top=-1;$("#ftp").value="-1"}
document.querySelectorAll("[data-fs]").forEach(b=>{noFocus(b);b.onclick=()=>fcard({src:b.dataset.fs,top:-1})});
noFocus($("#frv"));$("#frv").onclick=()=>memo(RV?2:1);noFocus($("#fsh"));$("#fsh").onclick=()=>fcard({shuf:FS.shuf?0:1});$("#ftp").onchange=()=>{const v=+$("#ftp").value;$("#ftp").blur();fcard({top:v})};
let i=0,sh=!!FS.eye;const okc=[],no=[];
const end=()=>{KEY=null;$("#fcc").innerHTML=`<div class="fcard" style="align-items:center;justify-content:center;text-align:center"><h2 style="margin:0 0 10px">Hết thẻ!</h2><div class="chips2"><span class="c1"><b>${okc.length}</b> thuộc rồi</span><span class="c2"><b>${no.length}</b> chưa thuộc</span></div><div class="acts2" style="margin-top:22px">${no.length?`<button class="go" id="fre">Ôn ${no.length} thẻ chưa thuộc</button>`:""}<button class="pill alt" id="fag">Học lại bộ này</button></div></div>`;
if(no.length)$("#fre").onclick=()=>{pool=no.slice();no.length=0;okc.length=0;i=0;sh=!!FS.eye;draw()};$("#fag").onclick=()=>fcard()};
const grade=g=>{const c=pool[i];FC[c.id]=fcUpd(FC[c.id],g,Date.now());fcSave();(g?okc:no).push(c);i++;sh=!!FS.eye;draw()};
const star=c=>{const st=fcSet(c);st.has(c.k)?st.delete(c.k):st.add(c.k);persist();return st.has(c.k)};
const pic=c=>{if(c.t!="v")return"";const sv=art(c.jp);if(sv)return`<div class="fpic svg">${sv}</div>`;const e=EM[c.jp];if(!e)return"";const k=/ます$|します$/.test(c.jp)?"act":/い$/.test(c.jp)&&c.jp.length>1?"adj":"";return`<div class="fpic ${k}"><img src="${emojiUrl(e)}" alt="${e}" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'${e}'}))"></div>`};
const back=c=>`<div class="fvi">${c.vi}</div>${c.ex?`<div class="fex">${c.ex}${c.t=="v"?` <button class="fib fxs" id="fxs" title="Nghe câu ví dụ (E)">🔊</button>`:""}${c.exv?`<br><span class="m">${c.exv}</span>`:""}</div>`:""}${pic(c)}`;
const draw=()=>{if(!$("#fcc")){KEY=null;return}if(!pool.length){KEY=null;$("#fcc").innerHTML=`<div class="fcard" style="align-items:center;justify-content:center;text-align:center"><p class="sub">Không có thẻ nào trong bộ lọc này.</p><button class="go" id="fall">Xem tất cả thẻ</button></div>`;$("#fall").onclick=()=>fcard({src:"v0",top:-1});return}
if(i>=pool.length)return end();const c=pool[i],rd=c.t=="s"?(AN[c.jp]||{}).r||"":c.rd,N=pool.length;
$("#fcc").innerHTML=`<div class="pbar"><i style="width:${i/N*100}%"></i></div><div class="fcard"><div class="fch"><span>${i+1} / ${N} <span class="ftag">${c.topN}</span></span><span class="fci"><button class="fib ${fcSet(c).has(c.k)?"on":""}" id="fst" title="Ghi nhớ (↓)">★</button><button class="fib ${FS.eye?"on":""}" id="fey" title="Luôn hiện nghĩa">👁</button></span></div><div class="fcb"><div class="fjw${c.t=="s"?" sen":""}">${c.jp}</div><div class="frd">${rd}<button class="fib" id="fsy" title="Nghe">🔊</button></div><div class="fback" id="fbk"${sh?"":" hidden"}>${back(c)}</div><div class="m" id="fhint">Nhấn <kbd>Space</kbd> hoặc chạm vào thẻ để ${sh?"ẩn":"xem"} nghĩa</div></div></div><div class="fgr"><button class="fno" id="fn">← Chưa thuộc</button><button class="fyes" id="fy">Thuộc rồi →</button></div>`;
document.querySelectorAll("#fcc button").forEach(noFocus);
$("#fsy").onclick=()=>say(c.say);if($("#fxs"))$("#fxs").onclick=()=>say(c.ex.replace(/<[^>]*>/g,""));$("#fst").onclick=()=>{$("#fst").classList.toggle("on",star(c))};
$("#fey").onclick=()=>{FS.eye=FS.eye?0:1;fcSave();sh=!!FS.eye||sh;draw()};
const flip=()=>{sh=!sh;if(sh)say(c.say);draw()};
$("#fn").onclick=()=>grade(0);$("#fy").onclick=()=>grade(1);$("#fcc .fcard").onclick=e=>{if(!e.target.closest("button"))flip()}
KEY=e=>{if(e.key==" "||e.key=="Enter"){e.preventDefault();flip()}else if(e.key=="ArrowLeft"){e.preventDefault();grade(0)}else if(e.key=="ArrowRight"){e.preventDefault();grade(1)}else if(e.key=="ArrowDown"){e.preventDefault();$("#fst").classList.toggle("on",star(c))}else if((e.key=="e"||e.key=="E")&&$("#fxs")&&sh){e.preventDefault();$("#fxs").click()}}};
draw()}
let RV=0;
function review(tab){leave();stopSay();backFn=home;$("#back").hidden=false;if(tab!=null)RV=tab;
const all=fcAll(),no=all.filter(c=>fcCls(c)==1),ok=all.filter(c=>fcCls(c)==2),cur=RV?ok:no,now=Date.now();
const when=c=>{const d=Math.ceil((FC[c.id].d-now)/864e5);return d<=0?"đến hạn ôn":"ôn lại sau "+d+" ngày"};
$("#app").innerHTML=`${memHero()}${memTabs(1+RV)}<p class="sub" style="margin:8px 0 0">${RV?"Thẻ bấm <b>Thuộc rồi →</b> trong Flashcard nằm ở đây.":"Thẻ bấm <b>← Chưa thuộc</b> trong Flashcard nằm ở đây."} Học lại trực tiếp hoặc nghe từng thẻ.</p>${cur.length?`<div class="acts2" style="justify-content:flex-start;margin:12px 0 14px"><button class="go" id="rvgo">🃏 Học lại ${cur.length} thẻ này</button></div>`:""}<div id="rvl">${cur.length?cur.map((c,i)=>`<div class="card"><div class="t"><div class="jp">${c.jp}</div>${c.t=="s"?"":`<div class="m">${c.rd}</div>`}<div class="vi">${c.vi}</div>${RV?`<div class="m" style="font-size:11.5px">${when(c)}</div>`:""}</div><button class="ib" data-p="${i}" title="Nghe">🔊</button><button class="ib ${fcSet(c).has(c.k)?"on":""}" data-s="${i}" title="Ghi nhớ">★</button></div>`).join(""):`<p class="sub">${RV?"Chưa có thẻ nào thuộc rồi. Học Flashcard và bấm “Thuộc rồi →” để thẻ xuất hiện ở đây.":"Chưa có thẻ nào chưa thuộc. Học Flashcard và bấm “← Chưa thuộc” để thẻ xuất hiện ở đây."}</p>`}</div>`;
document.querySelectorAll("#app button").forEach(noFocus);
bindMT();
if($("#rvgo"))$("#rvgo").onclick=()=>fcard({src:RV?"ok":"no",top:-1});
document.querySelectorAll("#rvl [data-p]").forEach(b=>b.onclick=()=>say(cur[+b.dataset.p].say));
document.querySelectorAll("#rvl [data-s]").forEach(b=>b.onclick=()=>{const c=cur[+b.dataset.s],st=fcSet(c);st.has(c.k)?st.delete(c.k):st.add(c.k);persist();b.classList.toggle("on",st.has(c.k))})}
/* ===== Bộ gõ romaji -> kana, Luyện gõ, Học nhanh ===== */
let KEY=null,tmr=0;document.addEventListener("keydown",e=>KEY&&KEY(e));
const leave=()=>{document.body.classList.remove("ishome");KEY=null;clearInterval(tmr);if(shExit){const f=shExit;shExit=null;f()}};
const H2K=s=>s.replace(/[\u3041-\u3096]/g,c=>String.fromCharCode(c.charCodeAt(0)+96));
const K2H=s=>s.replace(/[\u30A1-\u30F6]/g,c=>String.fromCharCode(c.charCodeAt(0)-96));
const RT={};("a あ i い u う e え o お ka か ki き ku く ke け ko こ sa さ shi し si し su す se せ so そ ta た chi ち ti ち tsu つ tu つ te て to と na な ni に nu ぬ ne ね no の ha は hi ひ fu ふ hu ふ he へ ho ほ ma ま mi み mu む me め mo も ya や yu ゆ yo よ ra ら ri り ru る re れ ro ろ wa わ wo を ga が gi ぎ gu ぐ ge げ go ご za ざ ji じ zi じ zu ず ze ぜ zo ぞ da だ di ぢ du づ de で do ど ba ば bi び bu ぶ be べ bo ぼ pa ぱ pi ぴ pu ぷ pe ぺ po ぽ kya きゃ kyu きゅ kyo きょ sha しゃ shu しゅ sho しょ sya しゃ syu しゅ syo しょ cha ちゃ chu ちゅ cho ちょ tya ちゃ tyu ちゅ tyo ちょ cya ちゃ cyu ちゅ cyo ちょ nya にゃ nyu にゅ nyo にょ hya ひゃ hyu ひゅ hyo ひょ mya みゃ myu みゅ myo みょ rya りゃ ryu りゅ ryo りょ gya ぎゃ gyu ぎゅ gyo ぎょ ja じゃ ju じゅ jo じょ jya じゃ jyu じゅ jyo じょ zya じゃ zyu じゅ zyo じょ bya びゃ byu びゅ byo びょ pya ぴゃ pyu ぴゅ pyo ぴょ fa ふぁ fi ふぃ fe ふぇ fo ふぉ xa ぁ xi ぃ xu ぅ xe ぇ xo ぉ la ぁ li ぃ lu ぅ le ぇ lo ぉ xya ゃ xyu ゅ xyo ょ lya ゃ lyu ゅ lyo ょ xtsu っ ltsu っ xtu っ ltu っ").split(" ").forEach((x,i,a)=>{if(i%2==0)RT[x]=a[i+1]});
function conv(s){let o="",i=0;s=s.toLowerCase();
while(i<s.length){const c=s[i];
if(c=="-"){o+="ー";i++;continue}
let hit=0;for(let L=4;L>=1;L--){const k=s.substr(i,L);if(k.length==L&&RT[k]){o+=RT[k];i+=L;hit=1;break}}
if(hit)continue;
if(c=="n"&&s[i+1]=="n"){if(i+2<s.length&&"aiueoy".includes(s[i+2])){o+="ん";i++}else{o+="ん";i+=2}continue}
if(c=="n"&&i+1<s.length&&!"aiueoy".includes(s[i+1])){o+="ん";i+=s[i+1]=="'"?2:1;continue}
if(/[bcdfghjkmpqrstvwxyz]/.test(c)&&s[i+1]==c){o+="っ";i++;continue}
o+=c;i++}
return o}
const mmss=s=>String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");
const noFocus=el=>{if(el)el.onmousedown=e=>e.preventDefault()};

function drill(words,o){leave();backFn=()=>{leave();o.back()};
const ws=[...words].sort(()=>Math.random()-.5),N=ws.length;
$("#app").innerHTML=`<div class="intro"><span class="wm">語</span><div class="ih"><span class="ai g">⌨</span><div><h1 style="margin:0;font-size:30px">Sẵn sàng gõ chưa?</h1><div class="m" style="font-size:14px">${o.title}</div></div></div><div class="chips2"><span class="c1"><b>${N}</b> mục</span><span class="c2">thứ tự xáo trộn mỗi lượt</span></div><p class="sub" style="margin:16px 0">Nhìn nghĩa tiếng Việt và gõ từ hoặc câu tiếng Nhật bằng romaji (với câu dài, gõ liền một mạch, không cần dấu câu). Bộ gõ của trang tự đổi romaji sang kana trong lúc bạn gõ.</p><div class="st"><span class="sn">1</span><span>Nhấn <kbd>Enter</kbd> để chấm từ vừa gõ, nhấn lần nữa để sang từ kế tiếp.</span></div><div class="st"><span class="sn">2</span><span>Bấm あ / ア để chọn gõ hiragana hay katakana, đáp án chấp nhận cả hai kiểu.</span></div><div class="wn">⚠ <b>Bấm Thoát &amp; nộp bài giữa chừng là bài kết thúc luôn.</b></div><div class="wn">⚠ <b>Nhớ chuyển bộ gõ của máy về tiếng Anh trước khi bắt đầu.</b></div><div class="acts2" style="justify-content:flex-start;margin-top:22px"><button class="go" id="go">Bắt đầu gõ →</button><button class="pill alt" id="bk3">${o.backLabel}</button></div></div>`;
$("#bk3").onclick=()=>{leave();o.back()};$("#go").onclick=run;
function run(){let n=0,ok=0,done=0,kata=false,raw="",disp="",graded=false;const t0=Date.now(),bad=[];
const tick=()=>{const el=$("#tm");if(el)el.textContent=mmss(Math.floor((Date.now()-t0)/1000))};
tmr=setInterval(tick,500);
const finish=()=>{leave();const s=Math.floor((Date.now()-t0)/1000);
$("#app").innerHTML=`<div class="intro"><h1>Hoàn thành!</h1><div class="chips2"><span class="c1"><b>${ok}/${done}</b> đúng</span><span class="c2">${mmss(s)}</span><span class="c2">${done}/${N} mục đã làm</span></div>${bad.length?`<p class="sub" style="margin:18px 0 6px">Mục gõ sai:</p>`+bad.map(w=>`<div class="tk"><div class="tj">${w.jp}</div><div><div>${w.rd}</div><div class="m">${w.vi}</div></div></div>`).join(""):`<p class="sub" style="margin-top:18px">Không sai từ nào, giỏi quá!</p>`}<div class="acts2" style="justify-content:flex-start;margin-top:22px"><button class="go" id="again">Làm lại</button><button class="pill alt" id="bk4">${o.backLabel}</button></div></div>`;
$("#again").onclick=()=>drill(words,o);$("#bk4").onclick=()=>{leave();o.back()}};
const show=()=>{if(n>=N)return finish();graded=false;raw="";disp="";const w=ws[n];
$("#app").innerHTML=`<div class="top"><div class="stat"><span class="ai s1">▤</span><div><b>${n+1}/${N}</b><small>câu</small></div></div><div class="stat"><span class="ai s1">🕒</span><div><b id="tm">00:00</b><small>thời gian</small></div></div><div class="stat"><span class="ai g">✓</span><div><b id="okc" style="color:#16a34a">${ok}/${done}</b><small>gõ đúng</small></div></div><button class="pill" id="ex">✕ Thoát &amp; nộp bài</button></div>
<div class="pbar"><i style="width:${n/N*100}%"></i></div><div class="dw"><div class="m" style="text-align:center">${w.lab||"nghĩa tiếng Việt"} → <span id="md">hiragana</span></div><div class="dcard">${w.card||w.vi}</div>
<div class="kt"><span class="m">bộ gõ của trang</span><span class="tg2"><button id="kh" class="on">あ</button><button id="kk2">ア</button></span></div>
<input id="ans" class="big" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="ひらがな"><div id="fb"></div><button class="chk" id="chk">Chấm từ này</button><p class="m" style="text-align:center;margin-top:12px">Nhấn <kbd>Enter</kbd> để chấm từ đã gõ</p></div>`;
tick();const a=$("#ans");a.focus();["#chk","#kh","#kk2","#ex"].forEach(s=>noFocus($(s)));
const render=()=>{const h=conv(raw);disp=kata?H2K(h):h;a.value=disp};
const onin=e=>{if(e.isComposing||graded)return;const v=a.value;
if(v.length>disp.length&&v.startsWith(disp))raw+=v.slice(disp.length);
else if(v.length<disp.length){let L=raw.length-1;for(;L>=0;L--){const h=conv(raw.slice(0,L));if((kata?H2K(h):h)==v)break}raw=L>=0?raw.slice(0,L):""}
else raw=v;render()};
a.addEventListener("input",onin);a.addEventListener("compositionend",onin);
const setK=k=>{if(graded)return;kata=k;$("#kh").classList.toggle("on",!k);$("#kk2").classList.toggle("on",k);$("#md").textContent=k?"katakana":"hiragana";a.placeholder=k?"カタカナ":"ひらがな";render();a.focus()};
$("#kh").onclick=()=>setK(false);$("#kk2").onclick=()=>setK(true);
const grade=()=>{if(graded){n++;show();return}
const val=K2H(conv(raw).replace(/n$/,"ん"));if(!val.trim()){toast("Hãy gõ đáp án trước");return}
const exp=w.alts?w.alts.map(x=>K2H(x)):w.rd.split(/[\/、,]/).map(x=>K2H(x.replace(/[\s・]/g,"")));
const good=w.loose?nk(val)==nk(w.rd):(exp.includes(val)||val==w.jp);graded=true;done++;if(good)ok++;else bad.push(w);
a.value=kata?H2K(val):val;a.readOnly=true;a.classList.add(good?"good":"wrong");
$("#okc").textContent=ok+"/"+done;
$("#fb").innerHTML=`<div class="fbk ${good?"ok":"no"}">${good?"✓ Đúng!":"✗ Đáp án:"} <b>${w.jp}</b> · ${w.rd}</div>`;
$("#chk").textContent=n+1>=N?"Xem kết quả →":"Từ tiếp theo →";say(w.say||w.rd)};
$("#chk").onclick=grade;$("#ex").onclick=finish;
KEY=e=>{if(e.key=="Enter"){e.preventDefault();grade()}}};
show()}}

function quick(all){leave();backFn=()=>{leave();memo()};const q=[...all].sort(()=>Math.random()-.5);let n=0;const ok=[],no=[];
const end=()=>{leave();$("#app").innerHTML=`<div class="intro"><h1>Hoàn thành!</h1><div class="chips2"><span class="c1"><b>${ok.length}</b> thuộc</span><span class="c2">${no.length} chưa thuộc</span></div><div class="acts2" style="justify-content:flex-start;margin-top:22px">${no.length?`<button class="go" id="rn">Ôn ${no.length} mục chưa thuộc</button>`:""}<button class="pill alt" id="ag">Ôn lại tất cả</button>${ok.length?`<button class="pill alt" id="rm">Bỏ ${ok.length} mục đã thuộc khỏi Ghi nhớ</button>`:""}<button class="pill alt" id="bk2">Về Ghi nhớ</button></div></div>`;
if(no.length)$("#rn").onclick=()=>quick(no);$("#ag").onclick=()=>quick(items());$("#bk2").onclick=memo;
if(ok.length)$("#rm").onclick=()=>{ok.forEach(del);persist();toast("Đã cập nhật Ghi nhớ");memo()}};
const show=()=>{if(n>=q.length)return end();const it=q[n];
$("#app").innerHTML=`<div class="top"><div class="stat"><span class="ai s1">▤</span><div><b>${n+1}/${q.length}</b><small>thẻ</small></div></div><div class="stat"><span class="ai g">✓</span><div><b style="color:#16a34a">${ok.length}</b><small>thuộc</small></div></div><div class="stat"><span class="ai r">✗</span><div><b style="color:#e11d48">${no.length}</b><small>chưa thuộc</small></div></div></div>
<div class="pbar"><i style="width:${n/q.length*100}%"></i></div><div class="dw"><div class="fc" id="fc"><span class="tag">${TY[it.t][0]}</span><div class="fj ${it.t} ${(it.t=="s"||it.t=="h"||(it.t!="k"&&it.jp.length>10))?"s":""} ${it.jp.length>26?"l":""}">${it.jp}</div><div id="fb2" hidden>${it.rd?`<div class="mr">${it.rd}</div>`:""}<div class="mv" style="font-size:20px;margin-top:6px">${it.vi}</div></div><p class="m" id="hint">Nhấn <kbd>Space</kbd> để xem nghĩa</p></div>
<div class="acts2"><button class="pill alt" id="no">← Chưa thuộc</button><button class="go" id="yes">Thuộc →</button></div></div>`;
const flip=()=>{const b=$("#fb2");b.hidden=!b.hidden;$("#hint").hidden=!b.hidden;if(!b.hidden)say(it.say)};
const mk=g=>{(g?ok:no).push(it);n++;show()};
["#no","#yes"].forEach(s=>noFocus($(s)));$("#fc").onclick=flip;$("#no").onclick=()=>mk(0);$("#yes").onclick=()=>mk(1);
KEY=e=>{if(e.key==" "){e.preventDefault();flip()}else if(e.key=="ArrowRight"){e.preventDefault();mk(1)}else if(e.key=="ArrowLeft"){e.preventDefault();mk(0)}}};
show()}
$("#back").onclick=()=>backFn();
/* ===== Đèn lồng, con bướm nhắn nhủ ===== */
const buildLan=()=>{const el=$("#lan"),n=Math.ceil(innerWidth/132)+2;if(el.childElementCount==n)return;el.innerHTML=Array.from({length:n},(_,i)=>`<i><b style="--d:${((i*.83)%4).toFixed(2)}s"><s></s></b></i>`).join("")};
buildLan();let lanT=0;addEventListener("resize",()=>{clearTimeout(lanT);lanT=setTimeout(buildLan,150)});
const MSG=["Hôm nay bạn đến rồi — coi như thắng một nửa.","Mỗi ngày một chút, tiếng Nhật sẽ tự thấm vào.","Chỉ cần 10 phút hôm nay cũng đủ rồi.","Quên cũng không sao, ôn lại là nhớ.","Thử nghe một đoạn Shadowing nhé?","Đánh dấu ★ những từ hay quên để ôn sau.","Chậm mà chắc, từng chữ một thôi."];
let mi=Math.floor(Math.random()*MSG.length);const showMsg=()=>{$("#mtx").textContent=MSG[mi];$("#mbub").classList.remove("off");try{sessionStorage.removeItem("mxd")}catch(e){}};
$("#mx").onclick=()=>{$("#mbub").classList.add("off");try{sessionStorage.setItem("mxd","1")}catch(e){}};
$("#mbf").onclick=()=>{mi=(mi+1)%MSG.length;showMsg()};
$("#mtx").textContent=MSG[mi];try{if(sessionStorage.getItem("mxd"))$("#mbub").classList.add("off")}catch(e){}
/* ===== Thanh trên: độ sáng chỉnh được, tên hiển thị, nút Trang chủ, nút Back của trình duyệt ===== */
const DEFAULT_NAME="Võ Nguyễn Anh Tài";
const hx=c=>[1,3,5].map(i=>parseInt(c.slice(i,i+2),16)),mixc=(a,b,t)=>{const x=hx(a),y=hx(b);return"#"+x.map((v,i)=>Math.round(v+(y[i]-v)*t).toString(16).padStart(2,"0")).join("")};
const lumc=c=>{const q=hx(c).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*q[0]+.7152*q[1]+.0722*q[2]};
const ctr=(a,b)=>{const x=lumc(a),y=lumc(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const PD={bg:"#0e0c18",card:"#181527",card2:"#211d37",ln:"#2b2745"},PL={bg:"#f4f2fb",card:"#ffffff",card2:"#f1eefb",ln:"#e6e2f4"};
let BR={m:"auto",v:50};try{BR={...BR,...JSON.parse(localStorage.getItem("br")||"{}")}}catch(e){}
const mqL=matchMedia("(prefers-color-scheme:light)"),lvl=()=>BR.m=="auto"?(mqL.matches?100:0):Math.min(100,Math.max(0,+BR.v||0));
function applyBr(){const v=lvl(),t=v/100,r=document.documentElement,c={};for(const k in PD)c[k]=mixc(PD[k],PL[k],t);
const light=ctr(c.bg,"#1d1a30")>=ctr(c.bg,"#f4f2fc"),st=r.style;r.dataset.theme=light?"light":"dark";
st.setProperty("--bg",c.bg);st.setProperty("--card",c.card);st.setProperty("--card2",c.card2);st.setProperty("--ln",c.ln);
const tx=light?"#1d1a30":"#f4f2fc";let mu=tx;for(let q=.4;q>=0;q-=.04){const m2=mixc(tx,c.bg,q);if(ctr(m2,c.bg)>=4.5||q<.05){mu=m2;break}}st.setProperty("--tx",tx);st.setProperty("--mu",mu);
const m=document.querySelector('meta[name="theme-color"]');if(m)m.content=c.bg;
$("#th").textContent=light?"☀":"☾";$("#brr").value=v;
document.querySelectorAll("[data-br]").forEach(b=>b.classList.toggle("on",BR.m!="auto"&&+b.dataset.br==Math.round(v)));$("#bra").classList.toggle("on",BR.m=="auto")}
const saveBr=()=>{try{localStorage.setItem("br",JSON.stringify(BR))}catch(e){}};
const POPS=["usp","brp"],closePops=()=>POPS.forEach(i=>$("#"+i).hidden=true);
const togglePop=(id,btn)=>{const open=$("#"+id).hidden;closePops();$("#"+id).hidden=!open;if(open){const bar=$(".bar").getBoundingClientRect(),b=btn.getBoundingClientRect();$("#"+id).style.right=Math.max(8,bar.right-b.right)+"px"}};
$("#th").onclick=e=>{e.stopPropagation();togglePop("brp",$("#th"))};$("#usr").onclick=e=>{e.stopPropagation();togglePop("usp",$("#usr"))};
document.addEventListener("click",e=>{if(!e.target.closest(".pop"))closePops()});document.addEventListener("keydown",e=>{if(e.key=="Escape")closePops()});
$("#brr").oninput=e=>{BR={m:"manual",v:+e.target.value};saveBr();applyBr()};
document.querySelectorAll("[data-br]").forEach(b=>b.onclick=()=>{BR={m:"manual",v:+b.dataset.br};saveBr();applyBr()});
$("#bra").onclick=()=>{BR={m:"auto",v:BR.v};saveBr();applyBr()};
mqL.addEventListener&&mqL.addEventListener("change",()=>{if(BR.m=="auto")applyBr()});
let UN=DEFAULT_NAME;try{UN=localStorage.getItem("un")||UN}catch(e){}
const showUN=()=>{$("#un").textContent=UN;$("#un2").textContent=UN;const a=(UN.trim()[0]||"?").toUpperCase();$("#av").textContent=a;$("#av2").textContent=a};
$("#unm").onclick=()=>{const n=prompt("Tên hiển thị của bạn:",UN);if(n&&n.trim()){UN=n.trim().slice(0,40);try{localStorage.setItem("un",UN)}catch(e){}showUN()}};
$("#hm").onclick=()=>home();$("#stp").onclick=()=>memo(0);
applyBr();showUN();
/* Nút Back của trình duyệt: lùi một màn hình trong app thay vì thoát ra trang trước đó */
let hp=!!(history.state&&history.state.a);
new MutationObserver(()=>{const vis=!$("#back").hidden;if(vis&&!hp){hp=true;history.pushState({a:1},"")}}).observe($("#back"),{attributes:true,attributeFilter:["hidden"]});
addEventListener("popstate",e=>{if(e.state&&e.state.a){hp=true;return}if(!hp)return;hp=false;closePops();if($("#back").hidden){history.back();return}backFn();if(!$("#back").hidden){hp=true;history.pushState({a:1},"")}});

const CN={zunko:"東北ずん子",sayo:"小夜/SAYO",tsurugi:"中部つるぎ",metan:"四国めたん",rito:"離途",saeha:"黒沢冴白",keita:"Keita (nam)"},cr=()=>{};
if(!CN[VC]&&VC!="nanami"&&VC!="browser")VC="nanami";
const sel=$("#vc");sel.value=VC;cr();sel.onchange=()=>{VC=sel.value;BV=null;FBW.clear();ensure(VC);try{localStorage.setItem("vc",VC)}catch(e){}cr();say("こんにちは")};
save();home();
