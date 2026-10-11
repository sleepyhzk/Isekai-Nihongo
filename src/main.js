import './style.css';
import './modern.css';
import { T } from './data.js';
import { V, V2, COURSES } from './vocab.js';
import { KH, KD } from './kanji.js';
import { GR } from './grammar.js';
import { SECT, MN } from './kana.js';
let gs=new Set,vs=new Set,ks=new Set,backFn=()=>home();try{ks=new Set(JSON.parse(localStorage.getItem("kk")||"[]"))}catch(e){}try{vs=new Set(JSON.parse(localStorage.getItem("vv3")||"[]"))}catch(e){}try{gs=new Set(JSON.parse(localStorage.getItem("gg")||"[]"))}catch(e){}
const S=[];T.forEach((t,i)=>t[1].split("\n").forEach(l=>{const [j,v]=l.split("/");S.push({j,v,t:i})}));
const G=200;let saved=new Set,topic=-1,q="";
try{saved=new Set(JSON.parse(localStorage.getItem("sv")||"[]"))}catch(e){}
const $=s=>document.querySelector(s),save=()=>{try{localStorage.setItem("sv",JSON.stringify([...saved]))}catch(e){}$("#cnt").textContent=saved.size+vs.size+ks.size+gs.size};
function toast(m){const t=$("#toast");t.textContent=m;t.style.opacity=1;setTimeout(()=>t.style.opacity=0,1600)}
const M=[["入","Làm quen","入門","Làm quen Hiragana & Katakana, xây nền tảng tiếng Nhật.","#4dd0e1"],["漢","Hán tự","漢字","Học chữ Hán qua âm Hán Việt và hình ảnh liên tưởng.","#9b87f5"],["語","Từ vựng","語彙","Học từ theo bài, nghe phát âm và xem ví dụ thật.","#4ade80"],["文","Ngữ pháp","文法","Nắm mẫu câu qua ví dụ, rồi tự ghép lại.","#fbbf24"],["音","Shadowing","音読","Nghe từng câu rồi nói theo ngay, cho quen nhịp điệu.","#818cf8"],["記","Ghi nhớ","記憶","Tập trung những từ chưa nhớ để ôn lại.","#ff7eb6"],["話","Giao tiếp","会話","200 câu giao tiếp cơ bản dùng được ngay mỗi ngày.","#fb923c",1]];
function home(){backFn=home;topic=-1;$("#back").hidden=true;$("#app").innerHTML=`<div style="color:#fbbf24;font-size:12px">まなびあまん</div><h1>Chào bạn,<br><b>hôm nay học gì?</b></h1><p class="sub">Chọn một mục để bắt đầu. Mỗi mục có bài học, thẻ ghi nhớ và bài luyện riêng.</p>`+M.map((m,i)=>`<div class="row" data-i="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><span class="ic" style="color:${m[4]}">${m[0]}</span><div><h3>${m[1]}<small>${m[2]}</small>${m[5]?'<span class="new">MỚI</span>':''}</h3><p>${m[3]}</p></div></div>`).join("")+`<div style="border-top:1px solid var(--ln)"></div>`;
document.querySelectorAll(".row").forEach(r=>r.onclick=()=>{const i=+r.dataset.i;i==6?comm():i==5?memo():i==4?shadow():i==0?kana():i==3?gram():i==2?courses():i==1?courses("h"):toast("Mục này đang được xây dựng")})}
function list(){const f=S.map((s,i)=>({...s,i})).filter(s=>(topic<0||s.t==topic)&&(s.j+s.v).toLowerCase().includes(q));
$("#list").innerHTML=f.map(s=>`<div class="card"><div class="t"><div class="jp">${s.j}</div><div class="vi h" onclick="this.classList.toggle('h')">${s.v}</div></div><button class="ib" data-a="${s.i}" title="Phân tích">🔍</button><button class="ib" data-p="${s.i}">🔊</button><button class="ib ${saved.has(s.i)?'on':''}" data-s="${s.i}">★</button></div>`).join("")||"<p class=sub>Không tìm thấy câu nào.</p>";
document.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>say(S[b.dataset.p].j));
document.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{const k=+b.dataset.s;saved.has(k)?saved.delete(k):saved.add(k);b.classList.toggle("on");save();prog()})}
function prog(){const n=[...saved].length;$("#pg").style.width=Math.min(100,n/G*100)+"%";$("#pt").textContent=`Đã ghi nhớ ${n} · Có sẵn ${S.length} / mục tiêu ${G} câu`}
function comm(){$("#back").hidden=false;$("#app").innerHTML=`<div style="color:#fb923c;font-size:12px">会話</div><h1>Giao tiếp</h1><p class="sub">Mục tiêu: 200 câu giao tiếp cơ bản. Chạm vào nghĩa để hiện/ẩn, 🔊 để nghe, ★ để ghi nhớ.</p><div class="prog"><div id="pg"></div></div><small id="pt" class="sub"></small><input id="q" placeholder="Tìm câu tiếng Nhật hoặc nghĩa…"><div class="chips" id="ch"></div><div id="list"></div>`;
const ch=$("#ch");[["Tất cả",-1],...T.map((t,i)=>[t[0],i])].forEach(([n,i])=>{const b=document.createElement("button");b.className="chip"+(i==topic?" on":"");b.textContent=n;b.onclick=()=>{topic=i;ch.querySelectorAll(".chip").forEach(c=>c.classList.remove("on"));b.classList.add("on");list()};ch.append(b)});
$("#q").oninput=e=>{q=e.target.value.toLowerCase();list()};list();prog()}

const WC=[V,V2].map(c=>c.map(([n,x])=>[n,x.split("\n").map(l=>l.split("|"))]));let W=WC[0],ci=0;
const vw=id=>{const [c,r]=id.includes(":")?id.split(":"):[0,id],[i,j]=r.split("-"),l=WC[c]&&WC[c][i];return l&&l[1][j]};
let AM={},VO=null,au,VC="nanami";try{VC=localStorage.getItem("vc")||VC}catch(e){}const BASE=import.meta.env.BASE_URL;
fetch(BASE+"audio/index.json").then(r=>r.json()).then(j=>AM=j).catch(()=>{});
function pick(){const v=speechSynthesis.getVoices().filter(x=>x.lang.replace("_","-").startsWith("ja"));VO=null;for(const r of[/Natural|Online|Neural/i,/Google/i,/Kyoko|O-Ren|Nanami|Haruka/i]){VO=v.find(x=>r.test(x.name));if(VO)break}VO=VO||v[0]||null}
if("speechSynthesis"in window){pick();speechSynthesis.onvoiceschanged=pick}
let sayGen=0;const stopSay=()=>{sayGen++;if(au){au.pause();au=null}speechSynthesis.cancel()};
function say(t,rate=1,cb){stopSay();const my=sayGen,fin=()=>{if(cb&&my==sayGen){const c=cb;cb=null;c()}};const f=VC=="browser"?0:(AM[VC]||{})[t];let used=0;
const tts=()=>{if(used)return;used=1;const u=new SpeechSynthesisUtterance(t);u.lang="ja-JP";u.rate=.9*rate;if(VO)u.voice=VO;u.onend=fin;u.onerror=fin;speechSynthesis.speak(u)};
if(f){au=new Audio(BASE+"audio/"+f);au.playbackRate=rate;au.onended=fin;au.onerror=tts;au.play().catch(tts)}else tts()}
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
document.addEventListener("click",e=>{const y=e.target.closest("[data-y]");if(y){say(y.dataset.y);return}const b=e.target.closest("[data-a]");if(!b)return;const c=b.closest(".card"),o=c.querySelector(".pn");if(o){o.remove();b.classList.remove("on");return}
const a=b.dataset.a;let tx,vi;if(a[0]=="g"){const x=GX[+a.slice(1)];tx=x.j;vi=x.v}else if(a.includes("-")){[tx,,vi]=vw(a)}else{tx=S[+a].j;vi=S[+a].v}
c.insertAdjacentHTML("beforeend",pnl(tx,vi));b.classList.add("on")});
const KLC=(()=>{const seen=new Set();return WC.map(cs=>cs.map(([,ws])=>{const o=[];ws.forEach(w=>[...w[0]].forEach(c=>{if(KD[c]&&!seen.has(c)&&!o.includes(c))o.push(c)}));o.forEach(c=>seen.add(c));return o}))})();let KL=KLC[0],hc=0;
function hl(c=hc){hc=c;W=WC[c];KL=KLC[c];backFn=()=>courses("h");$("#app").innerHTML=`<div style="color:#9b87f5;font-size:12px">漢字</div><h1>Hán tự <b>${COURSES[c].name} ${COURSES[c].code.split(" · ")[0]}</b></h1><p class="sub">Học chữ Hán qua âm Hán Việt và từ vựng liên quan.</p><button class="pill" id="kq">🧠 Luyện nhớ cả giáo trình</button>`+W.map((l,i)=>!KL[i].length?"":`<div class="row" data-k="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><div><h3>${l[0]}</h3><p>${KL[i].length} chữ Hán · ${l[1].length} từ vựng</p></div></div>`).join("")+`<div style="border-top:1px solid var(--ln)"></div>`;
$("#kq").onclick=()=>kquiz(KLC[c].flat(),{back:()=>hl(c),backLabel:"Về danh sách bài"});document.querySelectorAll("[data-k]").forEach(r=>r.onclick=()=>kl(+r.dataset.k))}
function kl(i){backFn=()=>hl(hc);$("#app").innerHTML=`<h1>${W[i][0]}</h1><p class="sub">${KL[i].length} chữ Hán · chạm vào nghĩa để ẩn/hiện</p><button class="pill" id="kq">🧠 Luyện nhớ</button><div id="list"></div>`;$("#kq").onclick=()=>kquiz(KL[i],{back:()=>kl(i),backLabel:"Về bài học"});
$("#list").innerHTML=KL[i].map(c=>{const [on,kun,mn,tip]=KD[c],ws=W.flatMap(l=>l[1]).filter(w=>w[0].includes(c)).slice(0,3);
return`<div class="card"><div class="jp" style="font-size:44px;min-width:64px;text-align:center">${c}</div><div class="t"><div><b>${(KH[c]||"").toUpperCase()}</b> <span class="vi" onclick="this.classList.toggle('h')">${mn}</span></div><div class="m">Âm On: ${on||"–"} · Âm Kun: ${kun||"–"}</div>${tip?`<div class="m">💡 ${tip}</div>`:""}<div class="m" style="color:var(--tx)">`+ws.map(w=>`${w[0]} (${w[1]}) ${w[2]}`).join("<br>")+`</div></div><button class="ib" data-p="${ws[0]?ws[0][1]:c}">🔊</button><button class="ib ${ks.has(c)?"on":""}" data-s="${c}">★</button></div>`}).join("");
document.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>say(b.dataset.p));
document.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{const k=b.dataset.s;ks.has(k)?ks.delete(k):ks.add(k);b.classList.toggle("on");try{localStorage.setItem("kk",JSON.stringify([...ks]))}catch(e){}$("#cnt").textContent=saved.size+vs.size+ks.size+gs.size})}
const n2=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\s'’]/g,"").toLowerCase();
function prac(i){drill(W[i][1].map(([k,r,v])=>({jp:k,rd:r,vi:v})),{title:W[i][0],back:()=>lesson(i),backLabel:"Về trang bài học"})}
function courses(h){backFn=home;$("#back").hidden=false;$("#app").innerHTML=`${h?'<div style="color:#9b87f5;font-size:12px">漢字</div><h1>Hán tự</h1><p class="sub">Chọn giáo trình để học chữ Hán theo bài.</p>':'<div style="color:#4ade80;font-size:12px">語彙</div><h1>Từ vựng</h1><p class="sub">Chọn giáo trình để học từ theo bài.</p>'}`+COURSES.map((c,i)=>`<div class="row" data-c="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><div><h3>${c.name}<small>${c.code}</small>${c.soon?'<span class="new">SẮP CÓ</span>':''}</h3><p>${c.soon?'Đang cập nhật':h?(KLC[i].filter(l=>l.length).length+' bài · '+KLC[i].reduce((a,l)=>a+l.length,0)+' chữ Hán'):WC[i].length+' bài học · '+WC[i].reduce((a,l)=>a+l[1].length,0)+' từ mới'}</p></div></div>`).join("")+`<div style="border-top:1px solid var(--ln)"></div>`;
document.querySelectorAll("[data-c]").forEach(r=>r.onclick=()=>{const c=+r.dataset.c;if(COURSES[c].soon)return toast("Phần này sắp có");h?hl(c):vocab(c)})}
function vocab(c=ci){ci=c;W=WC[c];backFn=courses;$("#back").hidden=false;$("#app").innerHTML=`<div style="color:#4ade80;font-size:12px">語彙</div><h1>${COURSES[c].name} <b>${COURSES[c].code}</b></h1><p class="sub">Học từ theo bài: nghe phát âm, chạm vào nghĩa để ẩn/hiện, ★ để ghi nhớ.</p>`+W.map((l,i)=>`<div class="row" data-l="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><div><h3>${l[0]}</h3><p>${l[1].length} từ mới</p></div></div>`).join("")+`<div style="border-top:1px solid var(--ln)"></div>`;
document.querySelectorAll("[data-l]").forEach(r=>r.onclick=()=>lesson(+r.dataset.l))}
function lesson(i){W=WC[ci];backFn=()=>vocab(ci);const [n,ws]=W[i];$("#app").innerHTML=`<h1>${n}</h1><p class="sub">${ws.length} từ mới</p><button class="pill" id="pr">✍ Luyện gõ</button><div id="list"></div>`;
$("#pr").onclick=()=>prac(i);$("#list").innerHTML=ws.map(([k,r,v],j)=>{const id=ci+":"+i+"-"+j;return `<div class="card"><div class="t"><div class="jp">${k}</div><div class="sub" style="margin:2px 0">${r}</div><div class="vi h" onclick="this.classList.toggle('h')">${v}</div></div><button class="ib" data-a="${id}" title="Phân tích">🔍</button><button class="ib" data-p="${r}">🔊</button><button class="ib ${vs.has(id)?'on':''}" data-s="${id}">★</button></div>`}).join("");
document.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>say(b.dataset.p));
document.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{const k=b.dataset.s;vs.has(k)?vs.delete(k):vs.add(k);b.classList.toggle("on");try{localStorage.setItem("vv3",JSON.stringify([...vs]))}catch(e){}$("#cnt").textContent=saved.size+vs.size+ks.size+gs.size})}
/* ===== Ghi nhớ (Chữ hay quên) ===== */
const TY={v:["Từ vựng","語彙","#4ade80"],s:["Giao tiếp","会話","#fb923c"],k:["Hán tự","漢字","#9b87f5"],g:["Ngữ pháp","文法","#fbbf24"]};
const persist=()=>{try{localStorage.setItem("sv",JSON.stringify([...saved]));localStorage.setItem("vv3",JSON.stringify([...vs]));localStorage.setItem("kk",JSON.stringify([...ks]));localStorage.setItem("gg",JSON.stringify([...gs]))}catch(e){}$("#cnt").textContent=saved.size+vs.size+ks.size+gs.size};
function items(){const o=[],AW=WC.flat().flatMap(l=>l[1]);
[...saved].forEach(k=>{const s=S[k];if(s)o.push({t:"s",k,jp:s.j,rd:(AN[s.j]||{}).r||"",vi:s.v,say:s.j})});
[...vs].forEach(id=>{const w=vw(id);if(w)o.push({t:"v",k:id,jp:w[0],rd:w[1],vi:w[2],say:w[1]})});
[...ks].forEach(c=>{const d=KD[c];if(!d)return;const [on,kun,mn]=d,ws=AW.filter(w=>w[0].includes(c));o.push({t:"k",k:c,jp:c,rd:`${(KH[c]||"").toUpperCase()} · On: ${on||"–"} · Kun: ${kun||"–"}`,vi:mn,say:ws[0]?ws[0][1]:c})});
[...gs].forEach(key=>{const [i,k]=key.split("-").map(Number),p=GR[i]&&GR[i][1][k];if(p)o.push({t:"g",k:key,jp:p[0],rd:"",vi:`${p[1]} · Ví dụ: ${p[3][0][0]}`,say:p[3][0][0]})});
return o}
function del(it){it.t=="s"?saved.delete(it.k):it.t=="v"?vs.delete(it.k):it.t=="g"?gs.delete(it.k):ks.delete(it.k)}
function memo(){leave();backFn=home;$("#back").hidden=false;const all=items(),nv=all.filter(x=>x.t=="v").length,nq=all.filter(x=>x.t=="k"||x.t=="g").length;
$("#app").innerHTML=`<div class="hero"><span class="wm">記</span><div class="hic">🔖</div><h1>Chữ hay quên</h1><div class="m" style="font-size:14px;margin:0 0 12px">記憶</div><p class="sub" style="max-width:560px;margin:0">Tất cả chữ Hán, từ vựng và câu giao tiếp bạn đã bấm <b style="color:var(--pk)">Ghi nhớ</b>. Nghe phát âm, xem thông tin chi tiết, rồi ôn lại bằng Học nhanh hoặc luyện gõ.</p></div>
<div class="acts"><div class="act a1" id="qk"><span class="ai">🔄</span><div><b>Học nhanh</b><small>Ôn nhanh cả ${all.length} mục</small></div></div><div class="act a2" id="ty"><span class="ai">⌨</span><div><b>Luyện gõ</b><small>Gõ ${nv} từ vựng theo nghĩa</small></div></div><div class="act a3" id="qz"><span class="ai">🧠</span><div><b>Trắc nghiệm</b><small>${nq} chữ Hán và mẫu ngữ pháp đã ★</small></div></div></div>
<input id="mq" placeholder="Tìm chữ, cách đọc hoặc nghĩa…"><div id="ml"></div>`;
$("#qk").onclick=()=>all.length?quick(all):toast("Chưa có mục nào được ghi nhớ");
$("#ty").onclick=()=>nv?drill(all.filter(x=>x.t=="v"),{title:"Chữ hay quên",back:memo,backLabel:"Về Ghi nhớ"}):toast("Chưa có từ vựng nào được ghi nhớ");
$("#qz").onclick=()=>{const ck=all.filter(x=>x.t=="k").map(x=>x.k),gk=all.filter(x=>x.t=="g").map(x=>x.k);const run=()=>{const qs=shuf([...kqs(shuf(ck).slice(0,8)),...gqs(shuf(gk).slice(0,8))]);if(!qs.length)return toast("Chưa có chữ Hán hoặc mẫu ngữ pháp nào được ghi nhớ");mcq(qs,{back:memo,backLabel:"Về Ghi nhớ",again:run})};run()};
let mq="";const draw=()=>{const f=all.filter(x=>!mq||n2(x.jp+x.rd+x.vi).includes(n2(mq)));
if(!all.length){$("#ml").innerHTML=`<p class="sub" style="text-align:center;margin-top:36px">Chưa có gì ở đây. Bấm ★ ở Từ vựng, Hán tự hoặc Giao tiếp để thêm vào Ghi nhớ.</p>`;return}
$("#ml").innerHTML=["v","s","k","g"].map(t=>{const g=f.filter(x=>x.t==t);if(!g.length)return"";const [nm,jk,co]=TY[t];
return`<div class="sec"><span class="si" style="color:${co}">${jk}</span><b>${nm}</b><span class="bd" style="background:${co}">${g.length}</span></div>`+g.map(x=>`<div class="card mc"><div class="mh"><span class="tag">${nm}</span><span class="mb"><button class="ib" data-mp="${f.indexOf(x)}" title="Nghe">🔊</button><button class="ib" data-md="${f.indexOf(x)}" title="Bỏ khỏi Ghi nhớ">🗑</button></span></div><div class="mj ${x.t}">${x.jp}</div>${x.rd?`<div class="mr">${x.rd}</div>`:""}<div class="mv">${x.vi}</div></div>`).join("")}).join("")||`<p class="sub" style="text-align:center;margin-top:36px">Không tìm thấy mục nào.</p>`;
$("#ml").querySelectorAll("[data-mp]").forEach(b=>b.onclick=()=>say(f[b.dataset.mp].say));
$("#ml").querySelectorAll("[data-md]").forEach(b=>b.onclick=()=>{const it=f[b.dataset.md];del(it);persist();all.splice(all.indexOf(it),1);toast("Đã bỏ khỏi Ghi nhớ");memo();if(mq){$("#mq").value=mq;$("#mq").oninput({target:{value:mq}})}})};
$("#mq").oninput=e=>{mq=e.target.value;draw()};draw()}
/* ===== Ngữ pháp ===== */
const GX=[];GR.forEach(l=>l[1].forEach(p=>p[3].forEach(e=>{GX.push({j:e[0],v:e[1]});e[2]=GX.length-1})));
function gram(){leave();backFn=home;$("#back").hidden=false;
$("#app").innerHTML=`<div class="hero"><span class="wm">文</span><div class="hic">📘</div><h1>Ngữ pháp</h1><div class="m" style="font-size:14px;margin:0 0 12px">文法</div><p class="sub" style="max-width:560px;margin:0">Mẫu câu theo từng bài Minna no Nihongo. Mỗi bài có giải thích, ví dụ có phát âm, phân tích câu bằng 🔍 và bài ghép câu để tự luyện.</p></div><div class="acts2" style="justify-content:flex-start;margin:20px 0"><button class="go" id="gq1">🧠 Ôn Sơ cấp 1</button><button class="pill alt" id="gq2">Ôn Sơ cấp 2</button><button class="pill alt" id="gqa">Ôn cả hai</button></div>`+COURSES.map((c,ci)=>`<div class="sec"><span class="si" style="color:#fbbf24">文</span><b>${c.code}</b></div>`+GR.slice(ci*25,ci*25+25).map((l,j)=>{const i=ci*25+j;return`<div class="row" data-g="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><div><h3>${l[0]}</h3><p>${l[1].length} mẫu câu · ${l[1].reduce((a,p)=>a+p[3].length,0)} ví dụ</p></div></div>`}).join("")).join("")+`<div style="border-top:1px solid var(--ln)"></div>`;
[["#gq1",x=>x.i<25],["#gq2",x=>x.i>=25],["#gqa",()=>1]].forEach(([id,f])=>$(id).onclick=()=>gquiz(GP.filter(f).map(x=>x.key),{back:gram,backLabel:"Về Ngữ pháp"}));
document.querySelectorAll("[data-g]").forEach(r=>r.onclick=()=>gt(+r.dataset.g))}
function gt(i){leave();backFn=gram;$("#back").hidden=false;const L=GR[i];
$("#app").innerHTML=`<div style="color:#fbbf24;font-size:12px">文法</div><h1>${L[0]}</h1><p class="sub">Nghe câu ví dụ bằng 🔊, bấm 🔍 để xem phân tích từng từ. Xong thì thử ghép câu ở cuối bài.</p>`+L[1].map((p,k)=>`<div class="gp"><div class="gh2"><div class="gh">${p[0]}</div><button class="ib ${gs.has(i+"-"+k)?"on":""}" data-gs="${i}-${k}" title="Ghi nhớ">★</button></div><div class="gm">${p[1]}</div><div class="m" style="margin-bottom:10px">${p[2]}</div>`+p[3].map(e=>`<div class="card"><div class="t"><div class="jp">${e[0]}</div><div class="vi">${e[1]}</div></div><button class="ib" data-a="g${e[2]}" title="Phân tích">🔍</button><button class="ib" data-y="${e[0]}" title="Nghe">🔊</button></div>`).join("")+`</div>`).join("")+`<div class="acts2" style="justify-content:flex-start;margin:22px 0"><button class="go" id="gpr">✍ Ghép câu</button><button class="pill alt" id="gqz">🧠 Luyện nhớ</button>${i<49?`<button class="pill alt" id="gnx">Bài sau →</button>`:""}</div>`;
$("#gpr").onclick=()=>gprac(i);$("#gqz").onclick=()=>{const kk=L[1].map((_,k)=>i+"-"+k);gquiz(shuf([...kk,...kk]),{back:()=>gt(i),backLabel:"Về bài học"})};document.querySelectorAll("[data-gs]").forEach(b=>b.onclick=()=>{const k=b.dataset.gs;gs.has(k)?gs.delete(k):gs.add(k);b.classList.toggle("on");persist()});if(i<49)$("#gnx").onclick=()=>{gt(i+1);scrollTo(0,0)}}
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
const base={big:c,ex:info,mem:{t:"k",k:c},say:ws[0]?ws[0][1]:""};
if(t==1){const w=pickN(ALL,3,(x,o)=>x!=c&&KH[x]!=KH[c]&&!o.some(y=>KH[y]==KH[x])).map(x=>KH[x].toUpperCase()),r=place(hv,w);return{...base,ask:"Âm Hán Việt của chữ này là gì?",prompt:c,opts:r.opts,a:r.a}}
if(t==2){const w=pickN(ALL,3,(x,o)=>x!=c&&KD[x][2]!=mn&&!o.some(y=>KD[y][2]==KD[x][2])).map(x=>KD[x][2]),r=place(mn,w);return{...base,ask:"Chữ này có nghĩa là gì?",prompt:c,opts:r.opts,a:r.a}}
if(t==3){const w=pickN(ALL,3,x=>x!=c&&KH[x]!=KH[c]),r=place(c,w);return{...base,ask:"Chữ Hán nào có âm và nghĩa này?",prompt:`${hv}<div class="m" style="font-size:18px;font-weight:500">${mn}</div>`,sm:1,optCls:"ko",opts:r.opts,a:r.a}}
const w=shuf(ws)[0],cand=AW.filter(x=>HAN.test(x[0])&&x[1]!=w[1]).sort((a,b)=>Math.abs(a[1].length-w[1].length)-Math.abs(b[1].length-w[1].length)).slice(0,40),
rd=pickN(cand,3,(x,o)=>!o.some(y=>y[1]==x[1])).map(x=>x[1]),r=place(w[1],rd);
return{...base,ask:"Từ này đọc như thế nào?",prompt:w[0],opts:r.opts,a:r.a,say:w[1]}})}
function gqs(keys){return keys.map(key=>GP.find(x=>x.key==key)).filter(Boolean).map(g=>{const {i,p}=g,ex=shuf(p[3])[0],others=GP.filter(x=>x.i!=i),dsc=isDesc(p),t=dsc?1+Math.floor(Math.random()*2):Math.floor(Math.random()*3);
const base={big:p[0],ex:`<b>${p[0]}</b> — ${p[1]}<br>${p[2]}<br>Ví dụ: ${p[3][0][0]} (${p[3][0][1]})`,mem:{t:"g",k:g.key},say:ex[0]};
if(t==0){const w=pickN(others,3,(x,o)=>!isDesc(x.p)&&x.p[1]!=p[1]&&!o.some(y=>y.p[1]==x.p[1])).map(x=>x.p[1]),r=place(p[1],w);return{...base,ask:"Mẫu câu này có nghĩa gì?",prompt:p[0],sm:1,opts:r.opts,a:r.a,col:1}}
if(t==1){const w=pickN(others,3,(x,o)=>isDesc(x.p)==dsc&&x.p[0]!=p[0]&&!clash(x.p[0],p[0])&&!o.some(y=>y.p[0]==x.p[0])).map(x=>x.p[0]),r=place(p[0],w);return{...base,ask:"Câu này dùng mẫu ngữ pháp nào?",prompt:ex[0],sm:1,opts:r.opts,a:r.a,col:1}}
const pool=GP.filter(x=>x.i!=i&&Math.abs(x.i-i)<=4).flatMap(x=>x.p[3]).filter(e=>e[0]!=ex[0]),w=pickN(pool,3,(x,o)=>!o.some(y=>y[0]==x[0])).map(x=>x[0]),r=place(ex[0],w);
return{...base,ask:"Chọn câu tiếng Nhật đúng với nghĩa này:",prompt:ex[1],sm:1,opts:r.opts,a:r.a,col:1}})}
const kquiz=(chars,o)=>{const qs=kqs(shuf(chars).slice(0,15));if(!qs.length)return toast("Chưa có chữ Hán để luyện");mcq(qs,{...o,again:()=>kquiz(chars,o)})};
const gquiz=(keys,o)=>{const qs=gqs(shuf(keys).slice(0,12));if(!qs.length)return toast("Chưa có mẫu ngữ pháp để luyện");mcq(qs,{...o,again:()=>gquiz(keys,o)})};
function mcq(qs,o){leave();backFn=()=>{leave();o.back()};const N=qs.length,t0=Date.now();let n=0,ok=0;const bad=[];
const end=()=>{leave();const mem=bad.filter(q=>q.mem&&!(q.mem.t=="k"?ks:gs).has(q.mem.k));
$("#app").innerHTML=`<div class="intro"><h1>Hoàn thành!</h1><div class="chips2"><span class="c1"><b>${ok}/${N}</b> đúng</span><span class="c2">${mmss(Math.floor((Date.now()-t0)/1000))}</span></div>${bad.length?`<p class="sub" style="margin:18px 0 6px">Cần ôn lại:</p>`+bad.map(q=>`<div class="tk"><div class="tj" style="min-width:0;max-width:44%">${q.big}</div><div class="m" style="color:var(--tx)">${q.ex}</div></div>`).join(""):`<p class="sub" style="margin-top:18px">Không sai câu nào, giỏi quá!</p>`}<div class="acts2" style="justify-content:flex-start;margin-top:22px">${bad.length?`<button class="go" id="rt">Ôn lại ${bad.length} câu sai</button>`:""}<button class="pill alt" id="ag">Làm lại</button>${mem.length?`<button class="pill alt" id="am">★ Thêm ${mem.length} mục sai vào Ghi nhớ</button>`:""}<button class="pill alt" id="bk">${o.backLabel}</button></div></div>`;
if(bad.length)$("#rt").onclick=()=>mcq(bad,o);$("#ag").onclick=()=>o.again?o.again():mcq(qs,o);$("#bk").onclick=()=>{leave();o.back()};
if(mem.length)$("#am").onclick=()=>{mem.forEach(q=>(q.mem.t=="k"?ks:gs).add(q.mem.k));persist();toast("Đã thêm vào Ghi nhớ");$("#am").remove()}};
const show=()=>{if(n>=N)return end();const q=qs[n];let done=false;
$("#app").innerHTML=`<div class="top"><div class="stat"><span class="ai s1">▤</span><div><b>${n+1}/${N}</b><small>câu</small></div></div><div class="stat"><span class="ai g">✓</span><div><b style="color:#16a34a">${ok}</b><small>đúng</small></div></div></div><div class="pbar"><i style="width:${n/N*100}%"></i></div><div class="dw"><div class="m" style="text-align:center">${q.ask}</div><div class="dcard${q.sm?" sm":""}">${q.prompt}</div><div class="opts${q.col?" one":""}">${q.opts.map((t,i)=>`<button class="opt ${q.optCls||""}" data-o="${i}"><kbd>${i+1}</kbd><span>${t}</span></button>`).join("")}</div><div id="fb"></div><button class="chk" id="nx" hidden>Câu tiếp theo →</button></div>`;
const bs=[...document.querySelectorAll("[data-o]")];bs.forEach(noFocus);noFocus($("#nx"));
const nxt=()=>{n++;show()};
const pick=i=>{if(done)return;done=true;const good=i==q.a;good?ok++:bad.push(q);bs[q.a].classList.add("good");if(!good)bs[i].classList.add("bad");
$("#fb").innerHTML=`<div class="fbk ${good?"ok":"no"}">${good?"✓ Đúng!":"✗ Chưa đúng"}<div class="m" style="color:var(--tx);font-weight:400;font-size:16px;margin-top:6px">${q.ex}</div></div>`;
$("#nx").hidden=false;$("#nx").textContent=n+1>=N?"Xem kết quả →":"Câu tiếp theo →";$("#nx").onclick=nxt;if(q.say)say(q.say)};
bs.forEach(b=>b.onclick=()=>pick(+b.dataset.o));
KEY=e=>{if(e.key>="1"&&e.key<=String(q.opts.length)){e.preventDefault();pick(+e.key-1)}else if(e.key=="Enter"||e.key==" "){e.preventDefault();if(done)nxt()}}};
show()}
/* ===== Shadowing ===== */
const SETS=[];
T.forEach((t,i)=>SETS.push({id:"gt"+i,g:"gt",title:t[0],items:S.filter(x=>x.t==i).map(x=>({j:x.j,v:x.v}))}));
GR.forEach((l,i)=>{const seen=new Set,items=[];l[1].forEach(p=>p[3].forEach(e=>{if(!seen.has(e[0])){seen.add(e[0]);items.push({j:e[0],v:e[1]})}}));SETS.push({id:"gp"+i,g:"gp",title:l[0],items})});
WC.forEach((c,ci)=>c.forEach((l,i)=>{const items=l[1].filter(w=>w[3]).map(w=>({j:w[3],v:w[4]}));if(items.length)SETS.push({id:"vc"+ci+"-"+i,g:"vc",title:l[0],sub:COURSES[ci].code.split(" · ")[0],items})}));
let shd=new Set,shg="gt",SHO={j:1,r:1,v:1,sp:1};
try{shd=new Set(JSON.parse(localStorage.getItem("sh")||"[]"))}catch(e){}try{SHO={...SHO,...JSON.parse(localStorage.getItem("shs")||"{}")}}catch(e){}
function shadow(g){leave();stopSay();backFn=home;$("#back").hidden=false;g=g||shg;shg=g;const list=SETS.filter(x=>x.g==g);
$("#app").innerHTML=`<div class="hero"><span class="wm">音</span><div class="hic">🎧</div><h1>Shadowing</h1><div class="m" style="font-size:14px;margin:0 0 12px">音読</div><p class="sub" style="max-width:560px;margin:0">Nghe từng câu rồi nói theo ngay, gần như cùng lúc với giọng đọc, để quen nhịp điệu và ngữ điệu. Chọn một bộ câu rồi bấm nghe. Có chế độ tự động nói theo và ghi âm giọng bạn để so sánh.</p></div><div class="acts2" style="justify-content:flex-start;margin:20px 0">${[["gt","Giao tiếp"],["gp","Ngữ pháp"],["vc","Từ vựng"]].map(([k,n])=>`<button class="${k==g?"go":"pill alt"}" data-g2="${k}">${n}</button>`).join("")}</div>`+list.map((x,i)=>`<div class="row" data-sh="${x.id}"><span class="n">${String(i+1).padStart(2,"0")}</span><div><h3>${x.title}${shd.has(x.id)?" ✓":""}</h3><p>${x.items.length} câu${x.sub?" · "+x.sub:""}</p></div></div>`).join("")+`<div style="border-top:1px solid var(--ln)"></div>`;
document.querySelectorAll("[data-g2]").forEach(b=>b.onclick=()=>shadow(b.dataset.g2));
document.querySelectorAll("[data-sh]").forEach(r=>r.onclick=()=>shplay(r.dataset.sh))}
function shplay(id){leave();stopSay();const set=SETS.find(x=>x.id==id),N=set.items.length;let idx=0,auto=false,tm=0,rec=null,recording=false;const mine={};
const stopAuto=()=>{auto=false;clearTimeout(tm)};
const exit=()=>{stopAuto();stopSay();if(recording&&rec){try{rec.stop()}catch(e){}}Object.values(mine).forEach(u=>URL.revokeObjectURL(u));leave()};
backFn=()=>{exit();shadow(set.g)};
const sv=()=>{try{localStorage.setItem("shs",JSON.stringify(SHO))}catch(e){}};
const mark=()=>{if(!shd.has(id)){shd.add(id);try{localStorage.setItem("sh",JSON.stringify([...shd]))}catch(e){}}};
const cur=()=>set.items[idx];
const play=cb=>{const t0=Date.now();say(cur().j,SHO.sp,()=>cb&&cb(Date.now()-t0))};
const render=()=>{const it=cur(),a=AN[it.j],tg=(k,vals,lab)=>vals.map((v,i)=>`<button data-${k}="${v}" class="${SHO[k]==v?"on":""}">${lab[i]}</button>`).join("");
$("#app").innerHTML=`<div style="color:#818cf8;font-size:12px">音読</div><h1 style="font-size:24px">${set.title}</h1><div class="top"><div class="stat"><span class="ai s1">▤</span><div><b>${idx+1}/${N}</b><small>câu</small></div></div><div class="stat"><span class="ai s1">⏱</span><div><b>${SHO.sp}×</b><small>tốc độ</small></div></div></div><div class="pbar"><i style="width:${(idx+1)/N*100}%"></i></div>
<div class="dw"><div class="dcard sm" id="shj">${SHO.j?it.j:'<span class="m">Nghe rồi nói theo…</span>'}</div><div class="m" style="text-align:center;font-size:17px;min-height:24px">${SHO.r&&a?a.r:""}</div><div class="m" style="text-align:center;font-size:17px;color:var(--tx);min-height:24px;margin-top:6px">${SHO.v?it.v:""}</div><div class="gbar" id="gp"><i></i></div>
<div class="acts2" style="margin-top:12px"><button class="pill alt" id="pv">◀ Trước</button><button class="go" id="pl">🔊 Nghe</button><button class="pill alt" id="nx">Sau ▶</button></div>
<div class="chips3"><span class="tg2">${tg("j",[1],["Chữ Nhật"])}${tg("r",[1],["Romaji"])}${tg("v",[1],["Nghĩa"])}</span><span class="tg2">${tg("sp",[.7,.85,1],["0.7×","0.85×","1×"])}</span></div>
<div class="acts2"><button class="pill alt" id="au">${auto?"⏸ Dừng tự động":"▶ Tự động nói theo"}</button><button class="pill alt" id="rc">${recording?"⏹ Dừng ghi":"🎙 Ghi âm"}</button>${mine[idx]?`<button class="pill alt" id="mp">▶ Giọng bạn</button>`:""}</div>
<p class="m" style="text-align:center;margin-top:14px"><kbd>Space</kbd> nghe · <kbd>←</kbd> <kbd>→</kbd> đổi câu · <kbd>A</kbd> tự động</p></div>`;
document.querySelectorAll(".dw button").forEach(noFocus);
$("#pl").onclick=()=>{stopAuto();render();play()};$("#pv").onclick=()=>go(-1);$("#nx").onclick=()=>go(1);
document.querySelectorAll(".tg2 button").forEach(b=>b.onclick=()=>{const k=Object.keys(b.dataset)[0],v=+b.dataset[k];if(k=="sp")SHO.sp=v;else SHO[k]=SHO[k]?0:1;sv();render()});
$("#au").onclick=toggleAuto;$("#rc").onclick=toggleRec;if($("#mp"))$("#mp").onclick=()=>{stopAuto();stopSay();new Audio(mine[idx]).play()}};
const go=d=>{if(recording&&rec)rec.stop();stopAuto();const n=Math.min(N-1,Math.max(0,idx+d));if(n==idx&&d>0){mark();toast("Đã hết bộ câu");return}idx=n;if(idx==N-1)mark();render();play()};
const step=()=>{if(!auto)return;play(el=>{if(!auto)return;const gap=Math.max(2200,Math.round(el*1.25)+800),b=$("#gp i");if(b){b.style.transition="none";b.style.width="100%";void b.offsetWidth;b.style.transition=`width ${gap}ms linear`;b.style.width="0"}
tm=setTimeout(()=>{if(!auto)return;if(idx<N-1){idx++;render();step()}else{auto=false;mark();toast("Hoàn thành bộ câu");render()}},gap)})};
const toggleAuto=()=>{if(auto){stopAuto();stopSay();render();return}if(recording&&rec)rec.stop();auto=true;render();step()};
const toggleRec=async()=>{if(recording){rec.stop();return}
if(!navigator.mediaDevices||!window.MediaRecorder)return toast("Trình duyệt này không hỗ trợ ghi âm");
try{const st=await navigator.mediaDevices.getUserMedia({audio:true}),ch=[],r=new MediaRecorder(st),k=idx;stopAuto();stopSay();
r.ondataavailable=e=>ch.push(e.data);r.onstop=()=>{st.getTracks().forEach(t=>t.stop());recording=false;if(mine[k])URL.revokeObjectURL(mine[k]);mine[k]=URL.createObjectURL(new Blob(ch,{type:r.mimeType}));render()};
rec=r;r.start();recording=true;render()}catch(e){toast("Không mở được micro. Hãy cho phép quyền micro cho trang này.")}};
KEY=e=>{if(e.key==" "){e.preventDefault();stopAuto();render();play()}else if(e.key=="ArrowRight"){e.preventDefault();go(1)}else if(e.key=="ArrowLeft"){e.preventDefault();go(-1)}else if(e.key=="a"||e.key=="A")toggleAuto()};
render();play()}
/* ===== Làm quen: Hiragana / Katakana ===== */
const KS={h:{name:"Hiragana",jp:"ひらがな",col:"#06b6d4",ic:"あ",samp:"あかさたな",desc:"Từ thuần Nhật, đuôi động từ, trợ từ và furigana chú âm cho Hán tự."},k:{name:"Katakana",jp:"カタカナ",col:"#ec4899",ic:"ア",samp:"アカサタナ",desc:"Từ mượn tiếng nước ngoài, tên riêng, tên khoa học và từ tượng thanh."}};
let KP={};try{KP=JSON.parse(localStorage.getItem("kp")||"{}")}catch(e){}
const kmark=(s,i)=>{KP[s]=KP[s]||[0,0,0];if(KP[s][i])return;KP[s][i]=1;try{localStorage.setItem("kp",JSON.stringify(KP))}catch(e){}};
const kc=(s,c)=>s=="k"?H2K(c):c;
const kchars=(s,secs)=>SECT.filter(x=>!secs||secs.includes(x.id)).flatMap(x=>x.rows.flatMap(r=>r.c.map((c,i)=>({c:kc(s,c),h:c,r:r.r[i],row:r.k,sec:x.id})).filter(q=>q.h!="-")));
const kans=h=>{const o=Object.keys(RT).filter(k=>RT[k]==h&&!/^[xl]/.test(k)),ex={"を":["o"],"ぢ":["ji","zi"],"づ":["zu"],"ん":["n"]}[h]||[];return[...new Set([...o,...ex])]};
function kana(){leave();stopSay();backFn=home;$("#back").hidden=false;const tot=kchars("h").length;
$("#app").innerHTML=`<div style="color:#b45309;font-size:12px;font-weight:600">— Nền tảng chữ Nhật</div><h1>Làm quen <span style="color:#6d55e8;font-size:.8em">入門</span></h1><p class="sub" style="max-width:520px">Học xong hai bảng chữ cái là bạn đọc được tiếng Nhật. Mỗi bảng có 46 chữ thuần, mỗi chữ có một hình ảnh để nhớ. Học đều mỗi ngày thì một tuần là xong.</p><div class="kgrid">`+["h","k"].map(s=>{const o=KS[s],pr=KP[s]||[];return`<div class="kc" style="--kc:${o.col}"><span class="kwm">${o.ic}</span><div class="kic">${o.ic}</div><h2>${o.name}<small>${o.jp}</small></h2><p class="m">${o.desc}</p><div class="kch">${[...o.samp].map(c=>`<span>${c}</span>`).join("")}<small>…46 chữ thuần · ${tot} tổng</small></div><button class="kbtn" data-ks="${s}">Bắt đầu với ${o.name} →</button>${pr.some(x=>x)?`<div class="m" style="margin-top:10px">Đã làm ${pr.filter(x=>x).length}/3 chặng</div>`:""}</div>`}).join("")+`</div><div class="sec"><span class="si" style="color:#9b87f5">練</span><b>Vào thẳng phần luyện tập</b></div><div class="kgrid">`+[["mem","🖼","Nhớ bằng hình ảnh","Mỗi chữ gắn với một hình ảnh liên tưởng. Đối mặt chữ để xem hình ảnh.","#f59e0b"],["type","⌨","Luyện gõ","Nhìn chữ kana, gõ romaji. Có bấm giờ và đếm số lần gõ sai.","#10b981"]].map(([k,ic,t,d,col])=>`<div class="kc kc2" style="--kc:${col}"><div class="kh2"><span class="kic">${ic}</span><div><h3>${t}</h3><p class="m">${d}</p></div></div><div class="kbs"><button class="pill" data-kq="${k}h">Hiragana →</button><button class="pill" data-kq="${k}k">Katakana →</button></div></div>`).join("")+`</div>`;
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
/* ===== Bộ gõ romaji -> kana, Luyện gõ, Học nhanh ===== */
let KEY=null,tmr=0;document.addEventListener("keydown",e=>KEY&&KEY(e));
const leave=()=>{KEY=null;clearInterval(tmr)};
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
$("#app").innerHTML=`<div class="intro"><span class="wm">語</span><div class="ih"><span class="ai g">⌨</span><div><h1 style="margin:0;font-size:30px">Sẵn sàng gõ chưa?</h1><div class="m" style="font-size:14px">${o.title}</div></div></div><div class="chips2"><span class="c1"><b>${N}</b> từ</span><span class="c2">thứ tự xáo trộn mỗi lượt</span></div><p class="sub" style="margin:16px 0">Nhìn nghĩa tiếng Việt và gõ từ tiếng Nhật bằng romaji. Bộ gõ của trang tự đổi romaji sang kana trong lúc bạn gõ.</p><div class="st"><span class="sn">1</span><span>Nhấn <kbd>Enter</kbd> để chấm từ vừa gõ, nhấn lần nữa để sang từ kế tiếp.</span></div><div class="st"><span class="sn">2</span><span>Bấm あ / ア để chọn gõ hiragana hay katakana, đáp án chấp nhận cả hai kiểu.</span></div><div class="wn">⚠ <b>Bấm Thoát &amp; nộp bài giữa chừng là bài kết thúc luôn.</b></div><div class="wn">⚠ <b>Nhớ chuyển bộ gõ của máy về tiếng Anh trước khi bắt đầu.</b></div><div class="acts2" style="justify-content:flex-start;margin-top:22px"><button class="go" id="go">Bắt đầu gõ →</button><button class="pill alt" id="bk3">${o.backLabel}</button></div></div>`;
$("#bk3").onclick=()=>{leave();o.back()};$("#go").onclick=run;
function run(){let n=0,ok=0,done=0,kata=false,raw="",disp="",graded=false;const t0=Date.now(),bad=[];
const tick=()=>{const el=$("#tm");if(el)el.textContent=mmss(Math.floor((Date.now()-t0)/1000))};
tmr=setInterval(tick,500);
const finish=()=>{leave();const s=Math.floor((Date.now()-t0)/1000);
$("#app").innerHTML=`<div class="intro"><h1>Hoàn thành!</h1><div class="chips2"><span class="c1"><b>${ok}/${done}</b> đúng</span><span class="c2">${mmss(s)}</span><span class="c2">${done}/${N} từ đã làm</span></div>${bad.length?`<p class="sub" style="margin:18px 0 6px">Từ gõ sai:</p>`+bad.map(w=>`<div class="tk"><div class="tj">${w.jp}</div><div><div>${w.rd}</div><div class="m">${w.vi}</div></div></div>`).join(""):`<p class="sub" style="margin-top:18px">Không sai từ nào, giỏi quá!</p>`}<div class="acts2" style="justify-content:flex-start;margin-top:22px"><button class="go" id="again">Làm lại</button><button class="pill alt" id="bk4">${o.backLabel}</button></div></div>`;
$("#again").onclick=()=>drill(words,o);$("#bk4").onclick=()=>{leave();o.back()}};
const show=()=>{if(n>=N)return finish();graded=false;raw="";disp="";const w=ws[n];
$("#app").innerHTML=`<div class="top"><div class="stat"><span class="ai s1">▤</span><div><b>${n+1}/${N}</b><small>câu</small></div></div><div class="stat"><span class="ai s1">🕒</span><div><b id="tm">00:00</b><small>thời gian</small></div></div><div class="stat"><span class="ai g">✓</span><div><b id="okc" style="color:#16a34a">${ok}/${done}</b><small>gõ đúng</small></div></div><button class="pill" id="ex">✕ Thoát &amp; nộp bài</button></div>
<div class="pbar"><i style="width:${n/N*100}%"></i></div><div class="dw"><div class="m" style="text-align:center">nghĩa tiếng Việt → <span id="md">hiragana</span></div><div class="dcard">${w.vi}</div>
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
const exp=w.rd.split(/[\/、,]/).map(x=>K2H(x.replace(/[\s・]/g,"")));
const good=exp.includes(val)||val==w.jp;graded=true;done++;if(good)ok++;else bad.push(w);
a.value=kata?H2K(val):val;a.readOnly=true;a.classList.add(good?"good":"wrong");
$("#okc").textContent=ok+"/"+done;
$("#fb").innerHTML=`<div class="fbk ${good?"ok":"no"}">${good?"✓ Đúng!":"✗ Đáp án:"} <b>${w.jp}</b> · ${w.rd}</div>`;
$("#chk").textContent=n+1>=N?"Xem kết quả →":"Từ tiếp theo →";say(w.rd)};
$("#chk").onclick=grade;$("#ex").onclick=finish;
KEY=e=>{if(e.key=="Enter"){e.preventDefault();grade()}}};
show()}}

function quick(all){leave();backFn=()=>{leave();memo()};const q=[...all].sort(()=>Math.random()-.5);let n=0;const ok=[],no=[];
const end=()=>{leave();$("#app").innerHTML=`<div class="intro"><h1>Hoàn thành!</h1><div class="chips2"><span class="c1"><b>${ok.length}</b> thuộc</span><span class="c2">${no.length} chưa thuộc</span></div><div class="acts2" style="justify-content:flex-start;margin-top:22px">${no.length?`<button class="go" id="rn">Ôn ${no.length} mục chưa thuộc</button>`:""}<button class="pill alt" id="ag">Ôn lại tất cả</button>${ok.length?`<button class="pill alt" id="rm">Bỏ ${ok.length} mục đã thuộc khỏi Ghi nhớ</button>`:""}<button class="pill alt" id="bk2">Về Ghi nhớ</button></div></div>`;
if(no.length)$("#rn").onclick=()=>quick(no);$("#ag").onclick=()=>quick(items());$("#bk2").onclick=memo;
if(ok.length)$("#rm").onclick=()=>{ok.forEach(del);persist();toast("Đã cập nhật Ghi nhớ");memo()}};
const show=()=>{if(n>=q.length)return end();const it=q[n];
$("#app").innerHTML=`<div class="top"><div class="stat"><span class="ai s1">▤</span><div><b>${n+1}/${q.length}</b><small>thẻ</small></div></div><div class="stat"><span class="ai g">✓</span><div><b style="color:#16a34a">${ok.length}</b><small>thuộc</small></div></div><div class="stat"><span class="ai r">✗</span><div><b style="color:#e11d48">${no.length}</b><small>chưa thuộc</small></div></div></div>
<div class="pbar"><i style="width:${n/q.length*100}%"></i></div><div class="dw"><div class="fc" id="fc"><span class="tag">${TY[it.t][0]}</span><div class="fj ${it.t}">${it.jp}</div><div id="fb2" hidden>${it.rd?`<div class="mr">${it.rd}</div>`:""}<div class="mv" style="font-size:20px;margin-top:6px">${it.vi}</div></div><p class="m" id="hint">Nhấn <kbd>Space</kbd> để xem nghĩa</p></div>
<div class="acts2"><button class="pill alt" id="no">← Chưa thuộc</button><button class="go" id="yes">Thuộc →</button></div></div>`;
const flip=()=>{const b=$("#fb2");b.hidden=!b.hidden;$("#hint").hidden=!b.hidden;if(!b.hidden)say(it.say)};
const mk=g=>{(g?ok:no).push(it);n++;show()};
["#no","#yes"].forEach(s=>noFocus($(s)));$("#fc").onclick=flip;$("#no").onclick=()=>mk(0);$("#yes").onclick=()=>mk(1);
KEY=e=>{if(e.key==" "){e.preventDefault();flip()}else if(e.key=="ArrowRight"){e.preventDefault();mk(1)}else if(e.key=="ArrowLeft"){e.preventDefault();mk(0)}}};
show()}
$("#back").onclick=()=>backFn();
$("#th").onclick=()=>{const r=document.documentElement,d=r.dataset.theme?r.dataset.theme=="dark":!matchMedia("(prefers-color-scheme:light)").matches;r.dataset.theme=d?"light":"dark"};
const CN={zunko:"東北ずん子",mico:"櫻歌ミコ",sayo:"小夜/SAYO",tsurugi:"中部つるぎ",metan:"四国めたん",rito:"離途",saeha:"黒沢冴白",ryusei:"青山龍星"},cr=()=>{};
if(!CN[VC]&&VC!="nanami"&&VC!="browser")VC="nanami";
const sel=$("#vc");sel.value=VC;cr();sel.onchange=()=>{VC=sel.value;try{localStorage.setItem("vc",VC)}catch(e){}cr();say("こんにちは")};
save();home();
