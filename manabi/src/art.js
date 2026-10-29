// Hình minh họa hoạt hình tự vẽ (SVG + CSS animation) cho thẻ từ vựng.
// Mỗi từ là một "cảnh": nhân vật + đồ vật, có chuyển động riêng. Từ chưa có cảnh sẽ dùng emoji (emoji.js).
const O="#2b2540",SK="#ffd3b0";
const S=(f,x="")=>`fill="${f}" stroke="${O}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" ${x}`;
const N=`fill="none" stroke="${O}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"`;
const R=(x,y,w,h,f,r=3,e="")=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" ${S(f,e)}/>`;
const C=(x,y,r,f,e="")=>`<circle cx="${x}" cy="${y}" r="${r}" ${S(f,e)}/>`;
const E=(x,y,rx,ry,f,e="")=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" ${S(f,e)}/>`;
const P=(d,f,e="")=>`<path d="${d}" ${S(f,e)}/>`;
const L=(d,e="")=>`<path d="${d}" ${N} ${e}/>`;
const T=(x,y,t,sz=14,f=O)=>`<text x="${x}" y="${y}" font-size="${sz}" font-weight="800" text-anchor="middle" fill="${f}" font-family="'Be Vietnam Pro','Noto Sans JP',sans-serif">${t}</text>`;
const G=(inner,x=0,y=0,s=1,cls="",extra="")=>`<g transform="translate(${x} ${y}) scale(${s})"${extra}><g class="${cls}">${inner}</g></g>`;
const spark=(x,y,s=1,d=0)=>G(P("M0 -8Q1 -1 8 0Q1 1 0 8Q-1 1 -8 0Q-1 -1 0 -8Z","#ffd84d"),x,y,s,"a-twinkle",` style="animation-delay:${d}s"`);

/* ---------- Nhân vật ---------- */
const HAIR="#3a2e4a";
function arm(side,ang,col,cls){const sx=side*14;
  return `<g transform="translate(${sx} -58) rotate(${ang})"><g class="${cls||""}"><path d="M0 0V22" stroke="${O}" stroke-width="11" stroke-linecap="round"/><path d="M0 0V22" stroke="${col}" stroke-width="6.4" stroke-linecap="round"/><circle cy="25" r="5" ${S(SK)}/></g></g>`}
function mouth(f){return({
 smile:L("M-5 -75Q0 -70 5 -75"),
 open:P("M-5.5 -76Q0 -65 5.5 -76Z","#c0394f"),
 sad:L("M-5 -71Q0 -77 5 -71"),
 flat:L("M-4 -73H4"),
 happy:P("M-6 -77Q0 -64 6 -77Z","#c0394f"),
 wavy:L("M-6 -73q2-3 4 0t4 0t4 0"),
 shh:L("M-3 -73H3")}[f]||L("M-5 -75Q0 -70 5 -75"))}
function eyes(f){
 if(f==="happy")return L("M-10 -81Q-7 -86 -4 -81")+L("M4 -81Q7 -86 10 -81");
 if(f==="sad"||f==="wavy")return `<g class="a-blink"><ellipse cx="-7" cy="-82" rx="2.3" ry="3" fill="${O}"/><ellipse cx="7" cy="-82" rx="2.3" ry="3" fill="${O}"/></g>`+L("M-11 -88L-4 -86")+L("M11 -88L4 -86");
 return `<g class="a-blink"><ellipse cx="-7" cy="-82" rx="2.3" ry="3" fill="${O}"/><ellipse cx="7" cy="-82" rx="2.3" ry="3" fill="${O}"/></g>`}
function person(o={}){
 const hc=o.hc||HAIR,top=o.top||"#6c8cff",bot=o.bot||"#4b4f7a",out=o.outfit||"plain",hair=o.hair||"short",face=o.face||"smile";
 let torsoCol=top;if(out==="suit")torsoCol="#3d4670";if(out==="coat")torsoCol="#ffffff";if(out==="student")torsoCol="#2f3f87";
 let back="",front="";
 if(hair==="long")back=P("M-21 -84Q-25 -58 -17 -54H17Q25 -58 21 -84Q20 -104 0 -104Q-20 -104 -21 -84Z",hc);
 if(hair==="bob")back=P("M-21 -84Q-23 -70 -18 -66H18Q23 -70 21 -84Q20 -104 0 -104Q-20 -104 -21 -84Z",hc);
 if(hair!=="none")front=P("M-19 -84Q-21 -104 0 -104Q21 -104 19 -84Q11 -95 0 -92Q-11 -95 -19 -84Z",hc);
 if(hair==="spiky")front=P("M-19 -84L-20 -98L-12 -94L-8 -106L-1 -97L6 -107L10 -95L19 -100L19 -84Q11 -93 0 -91Q-11 -93 -19 -84Z",hc);
 if(hair==="bun")front+=C(0,-108,7,hc);
 if(hair==="grey")front=P("M-19 -84Q-21 -102 0 -102Q21 -102 19 -84Q11 -94 0 -92Q-11 -94 -19 -84Z","#d9d6e6");
 let hat="";
 if(o.hat==="grad")hat=P("M-24 -99L0 -109L24 -99L0 -89Z","#2b2540")+R(-12,-98,24,8,"#3d4670",2)+L("M20 -98V-86","stroke=\"#ffd84d\"")+C(20,-85,2.5,"#ffd84d");
 if(o.hat==="hard")hat=P("M-21 -92Q-21 -112 0 -112Q21 -112 21 -92Z","#ffc928")+R(-24,-93,48,6,"#ffc928",3)+L("M0 -112V-100");
 if(o.hat==="nurse")hat=R(-14,-110,28,13,"#fff",4)+L("M0 -108V-99")+L("M-4.5 -103.5H4.5","stroke=\"#e5484d\" stroke-width=\"3\"");
 if(o.hat==="chef")hat=P("M-14 -96Q-24 -104 -14 -112Q-8 -120 0 -114Q8 -120 14 -112Q24 -104 14 -96Z","#fff")+R(-14,-96,28,8,"#fff",2);
 if(o.hat==="cap")hat=P("M-20 -92Q-20 -110 0 -110Q20 -110 20 -92Z","#e5484d")+P("M-2 -93Q18 -97 26 -90Q10 -88 -2 -88Z","#c93a40");
 let ov="";
 if(out==="suit")ov=P("M-7 -64L0 -53L7 -64Z","#fff")+P("M0 -57L-3 -51L0 -38L3 -51Z","#e5484d");
 if(out==="coat")ov=L("M0 -64V-30")+P("M-7 -64L0 -52L7 -64Z","#e6f4ff")+`<path d="M-8 -52Q-8 -40 0 -40" ${N}/><circle cx="-8" cy="-52" r="2.5" ${S("#ffd84d")}/>`;
 if(out==="apron")ov=R(-11,-52,22,24,"#fff3d6",5)+L("M-11 -52L-6 -64M11 -52L6 -64");
 if(out==="student")ov=P("M-7 -64L0 -54L7 -64Z","#fff")+P("M0 -56L-5 -52L-5 -47L0 -52L5 -47L5 -52Z","#e5484d");
 const scarf=o.scarf?R(-18,-68,36,9,"#e5484d",4)+R(8,-62,9,18,"#e5484d",3):"";
 const glasses=o.glasses?`<circle cx="-7" cy="-82" r="6" ${N}/><circle cx="7" cy="-82" r="6" ${N}/><path d="M-1 -82H1" ${N}/>`:"";
 const extra=face==="sweat"?`<path d="M20 -92q3 5 0 8q-3-3 0-8z" ${S("#7ad7ff")} class="a-drip"/>`:face==="cold"?`<path d="M-24 -92l-4 -4M24 -92l4 -4" ${N}/>`:"";
 const blush=`<circle cx="-12.5" cy="-76" r="3.2" fill="#ff8fa3" opacity=".55"/><circle cx="12.5" cy="-76" r="3.2" fill="#ff8fa3" opacity=".55"/>`;
 const skin=face==="sweat"?"#ffb59a":face==="cold"?"#cfe6ff":SK;
 const legs=o.sit?"":`<rect x="-9" y="-31" width="7" height="27" rx="3" ${S(bot)}/><rect x="2" y="-31" width="7" height="27" rx="3" ${S(bot)}/><ellipse cx="-6.5" cy="-3" rx="6.5" ry="3.4" ${S("#2b2540")}/><ellipse cx="6.5" cy="-3" rx="6.5" ry="3.4" ${S("#2b2540")}/>`;
 const body=`${back}${legs}<rect x="-16" y="-66" width="32" height="38" rx="10" ${S(torsoCol)}/>${ov}${arm(-1,o.la??8,torsoCol,o.laCls)}${arm(1,o.ra??-8,torsoCol,o.raCls)}${scarf}<circle cy="-82" r="19.5" ${S(skin)}/>${blush}${eyes(face)}${mouth(face)}${glasses}${front}${hat}${extra}`;
 return G(body,o.x??62,o.y??146,o.s??.95,o.cls||"a-breathe");
}

/* ---------- Đồ vật (vẽ quanh gốc 0,0, cỡ ~±30) ---------- */
const ln=(n,x,y,w,gap=6,e="")=>Array.from({length:n},(_,i)=>L(`M${x} ${y+i*gap}h${w}`,e)).join("");
const OB={
book:(c="#6c8cff")=>R(-17,-24,34,46,c)+R(-17,-24,7,46,"#00000022",3)+R(-4,-14,16,11,"#fff",2)+ln(2,0,8,12,6),
bookOpen:()=>P("M0 -14Q-14 -22 -28 -16V18Q-14 12 0 20Q14 12 28 18V-16Q14 -22 0 -14Z","#fff")+L("M0 -14V20")+ln(3,-22,-6,16,7)+ln(3,6,-6,16,7),
dict:()=>R(-18,-26,36,52,"#b0455b")+R(-18,-26,7,52,"#00000033",3)+T(4,6,"あ",24,"#fff"),
magazine:()=>R(-18,-26,36,52,"#ff8fb1")+R(-12,-20,24,22,"#fff4a8",2)+C(0,-9,6,"#ffd3b0")+ln(3,-12,8,24,6),
news:()=>R(-26,-20,52,40,"#f4f1e6")+R(-21,-15,42,7,O,2)+ln(4,-21,-2,18,6)+R(2,-2,19,16,"#cdd6f5",2),
notebook:()=>R(-18,-26,36,52,"#7be0b0")+[-16,-6,4,14].map(y=>`<circle cx="-18" cy="${y}" r="3" ${S("#fff")}/>`).join("")+R(-8,-14,20,12,"#fff",2)+ln(2,-8,8,20,6),
handbook:()=>R(-14,-24,28,48,"#3d4670")+R(8,-24,5,48,"#e5484d",1)+R(-8,-16,14,10,"#ffd84d",2),
card:()=>R(-26,-16,52,32,"#fff")+C(-14,-4,5,"#6c8cff")+ln(2,-5,-8,22,8)+ln(1,-20,8,28),
pencil:()=>`<g transform="rotate(38)">${R(-6,-30,12,40,"#ffd84d",2)}${R(-6,-30,12,8,"#ff8fa3",2)}${P("M-6 10L0 26L6 10Z","#ffd3b0")}${P("M-2.2 20L0 26L2.2 20Z",O)}</g>`,
pen:()=>`<g transform="rotate(38)">${R(-5,-30,10,42,"#fff",4)}${R(-5,-30,10,12,"#3b82f6",3)}${L("M5 -26V-14")}${P("M-5 12L0 26L5 12Z","#cfd3e8")}</g>`,
clock:(h=3,m=0)=>C(0,0,27,"#fff")+[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>`<path d="M0 -22v${i%3?2:4}" ${N} transform="rotate(${i*30})"/>`).join("")+`<path d="M0 0V-13" ${N} stroke-width="3.6" transform="rotate(${h*30+m/2})"/><path d="M0 0V-19" ${N}><animateTransform attributeName="transform" type="rotate" from="${m*6} 0 0" to="${m*6+360} 0 0" dur="14s" repeatCount="indefinite"/></path>`+C(0,0,2.5,O),
umbrella:(c="#ff6b81")=>P("M-30 0Q-30 -28 0 -30Q30 -28 30 0Q22 -7 15 0Q8 -7 0 0Q-8 -7 -15 0Q-22 -7 -30 0Z",c)+L("M0 0V24Q0 31 -7 29")+L("M0 -30V-34"),
bag:(c="#ff9f43")=>L("M-10 -12Q-10 -28 0 -28Q10 -28 10 -12")+R(-24,-14,48,36,c,8)+R(-5,-6,10,8,"#ffd84d",2)+L("M-24 4H24"),
car:(c="#ff6b6b")=>P("M-35 8V-3Q-35 -8 -29 -9L-18 -23Q-16 -26 -12 -26H12Q16 -26 18 -23L29 -9Q35 -8 35 -3V8Z",c)+P("M-14 -9L-8 -20H8L14 -9Z","#cfeeff")+[-20,20].map(x=>`<g transform="translate(${x} 9)"><g class="a-roll">${C(0,0,8,"#444")}<path d="M-5 0H5M0 -5V5" stroke="#bbb" stroke-width="2"/></g></g>`).join("")+C(31,-1,2.5,"#ffe27a"),
desk:()=>R(-32,-12,64,8,"#c98b4a")+R(-28,-4,6,30,"#a96f35",1)+R(22,-4,6,30,"#a96f35",1)+R(-12,-4,24,12,"#d9a05b",2),
chair:()=>R(-14,-28,28,26,"#c98b4a",4)+R(-18,-4,36,8,"#a96f35",3)+R(-15,4,6,24,"#a96f35",1)+R(9,4,6,24,"#a96f35",1),
gift:(c="#ff6b81")=>R(-22,-6,44,30,c)+R(-26,-16,52,12,c)+R(-4,-16,8,40,"#fff",1)+P("M0 -16Q-14 -34 -16 -22Q-14 -14 0 -16Q14 -14 16 -22Q14 -34 0 -16Z","#ffd84d"),
house:()=>P("M-30 -4L0 -30L30 -4Z","#e5484d")+R(-23,-4,46,32,"#ffe9b8",2)+R(-5,8,11,20,"#c98b4a",2)+R(10,2,10,10,"#aee0ff",1)+R(-20,2,10,10,"#aee0ff",1),
school:()=>R(-34,-8,68,34,"#ffe9b8",2)+P("M-38 -8L0 -26L38 -8Z","#6c8cff")+C(0,-14,6,"#fff")+L("M0 -14V-18M0 -14H3")+R(-6,10,12,16,"#c98b4a",2)+[-24,-17,17,24].map(x=>R(x-4,-1,8,9,"#aee0ff",1)).join("")+L("M30 -30V-12")+P("M30 -30H44L38 -25L44 -20H30Z","#e5484d"),
company:()=>R(-18,-30,36,60,"#7a86b8",2)+[-22,-12,-2,8,18].map(y=>[-11,2].map(x=>R(x,y,9,6,Math.random()>-1?"#ffe27a":"#ffe27a",1)).join("")).join("")+R(-5,20,10,10,"#3d4670",1),
phone:()=>R(-13,-26,26,52,O,7)+R(-10,-20,20,38,"#aee0ff",3)+C(0,22,2.2,"#fff")+`<g class="a-ring">${L("M20 -20q6 6 0 12")}${L("M25 -25q10 11 0 22")}</g>`,
laptop:()=>R(-24,-24,48,32,O,4)+R(-20,-20,40,24,"#aee0ff",2)+P("M-32 14L-26 8H26L32 14Z","#cfd3e8")+L("M-10 -12h14M-10 -6h20","stroke=\"#6c8cff\""),
sun:(r=14)=>`<g class="a-spin">${Array.from({length:8},(_,i)=>`<path d="M0 ${-r-5}v-7" ${N} stroke="#ffb02e" stroke-width="3" transform="rotate(${i*45})"/>`).join("")}</g>`+C(0,0,r,"#ffd84d"),
moon:()=>P("M8 -22A22 22 0 1 0 22 8A17 17 0 0 1 8 -22Z","#ffe9a3"),
cloud:(c="#fff")=>P("M-24 12Q-34 12 -32 2Q-30 -6 -20 -6Q-18 -20 -4 -20Q8 -20 10 -8Q24 -10 26 2Q28 12 18 12Z",c),
rain:()=>OB.cloud("#cfd8ee")+[-16,-4,8,20].map((x,i)=>`<path d="M${x} 20v8" ${N} stroke="#4aa3ff" stroke-width="3" class="a-fall" style="animation-delay:${i*.25}s"/>`).join(""),
snow:()=>OB.cloud("#e6efff")+[-16,-4,8,20].map((x,i)=>`<circle cx="${x}" cy="24" r="2.6" fill="#fff" stroke="${O}" stroke-width="1.6" class="a-fall" style="animation-delay:${i*.3}s"/>`).join(""),
star:()=>P("M0 -24L7 -8L24 -7L11 4L15 22L0 12L-15 22L-11 4L-24 -7L-7 -8Z","#ffd84d"),
heart:(c="#ff5d7a")=>P("M0 22C-34 0 -22 -26 0 -10C22 -26 34 0 0 22Z",c),
tree:(c="#5cc97b")=>R(-5,0,10,28,"#a96f35",2)+C(0,-14,22,c)+C(-14,-4,13,c)+C(14,-4,13,c),
flower:(c="#ff8fb1")=>L("M0 6V28")+P("M0 20Q-14 14 -16 22Q-6 26 0 20Z","#5cc97b")+[0,72,144,216,288].map(a=>`<ellipse cx="0" cy="-12" rx="7" ry="9" ${S(c)} transform="rotate(${a} 0 0)"/>`).join("")+C(0,0,6,"#ffd84d"),
sakura:()=>L("M-28 28Q-12 4 6 -2M-8 10Q4 14 22 4","stroke=\"#8a5a3c\" stroke-width=\"4\"")+[[-10,-10],[8,-14],[22,2],[-22,6],[4,6]].map(([x,y],i)=>`<g class="a-twinkle" style="animation-delay:${i*.3}s">${[0,72,144,216,288].map(a=>`<ellipse cx="${x}" cy="${y-5}" rx="3.5" ry="5" ${S("#ffb3c8","stroke-width=\"1.6\"")} transform="rotate(${a} ${x} ${y})"/>`).join("")}${C(x,y,2.2,"#ffd84d","stroke-width=\"1\"")}</g>`).join(""),
mountain:()=>P("M-36 26L-8 -22L6 -4L14 -14L36 26Z","#6f8fd8")+P("M-8 -22L-18 -6L-12 -9L-8 -4L-2 -9L2 -6Z","#fff")+P("M14 -14L8 -2L12 -5L15 -1L19 -5L22 -2Z","#fff"),
dog:()=>`<g class="a-wag">${P("M24 4Q36 -4 34 -16","none").replace('fill="none"',"fill=\"none\"")}</g>`+E(0,8,24,16,"#e8b480")+E(-10,24,5,6,"#e8b480")+E(10,24,5,6,"#e8b480")+C(-18,-8,15,"#e8b480")+E(-30,-10,6,11,"#a96f35","transform=\"rotate(20 -30 -10)\"")+E(-8,-12,5,9,"#a96f35")+C(-22,-9,2.2,O)+C(-14,-9,2.2,O)+E(-22,-1,5,3.5,"#fff")+C(-24,-2,2,O),
cat:()=>`<g class="a-wag">${L("M22 14Q40 14 36 -6","stroke-width=\"5\"")}</g>`+E(0,10,22,16,"#ffb86b")+P("M-20 -12L-18 -30L-8 -20Z","#ffb86b")+P("M8 -20L18 -30L20 -12Z","#ffb86b")+C(0,-10,18,"#ffb86b")+C(-7,-11,2.6,O)+C(7,-11,2.6,O)+P("M-2 -5L2 -5L0 -2Z","#ff8fa3")+L("M-18 -6H-28M-18 -2L-27 2M18 -6H28M18 -2L27 2")+L("M-8 -26v8M0 -28v9M8 -26v8","stroke=\"#c97a2a\" stroke-width=\"2\""),
fish:()=>`<g class="a-swim">${P("M-28 0Q-8 -22 14 -4L30 -16V16L14 4Q-8 22 -28 0Z","#ff9f43")}${C(-16,-3,2.6,O)}${L("M-4 -8Q0 0 -4 8")}</g>`,
bowl:()=>P("M-26 -2H26Q24 22 0 24Q-24 22 -26 -2Z","#ff8fb1")+P("M-22 -2Q-20 -22 0 -22Q20 -22 22 -2Z","#fff")+`<g class="a-steam">${L("M-8 -28q-4 -5 0 -9t0 -9")}${L("M6 -28q-4 -5 0 -9t0 -9")}</g>`+ln(1,-12,-12,24,0,"stroke=\"#e6e0f0\" stroke-width=\"1.6\""),
cup:(c="#7be0b0")=>P("M-18 -8H14Q14 20 -2 20Q-18 20 -18 -8Z","#fff")+L("M14 -4Q26 -4 24 6Q22 12 14 12")+E(-2,-8,16,4,c)+`<g class="a-steam">${L("M-8 -14q-4 -5 0 -9t0 -9")}${L("M4 -14q-4 -5 0 -9t0 -9")}</g>`,
meat:()=>P("M-26 4Q-30 -18 -6 -22Q20 -26 28 -6Q30 14 8 20Q-20 26 -26 4Z","#b0553a")+P("M-14 2Q-14 -10 0 -12Q12 -12 16 -2Q16 8 4 10Q-12 12 -14 2Z","#e07a5f")+L("M-8 0q6 -6 14 -2"),
veg:()=>P("M-6 -14L10 -14L2 24Z","#ff9f43","transform=\"rotate(-25)\"")+`<g transform="rotate(-25)">${P("M-2 -14Q-10 -28 -4 -32Q0 -22 0 -14Z","#5cc97b")}${P("M2 -14Q2 -30 8 -32Q8 -22 4 -14Z","#5cc97b")}</g>`+C(18,10,11,"#ff5d5d")+P("M14 0Q18 -6 22 0Q18 -2 14 0Z","#5cc97b"),
clap:()=>R(-30,-14,60,38,O,4)+P("M0 0L-10 -8V8Z","#fff")+`<g>${P("M-30 -30H30V-18H-30Z","#fff")}${[-24,-8,8,22].map(x=>P(`M${x} -30l8 0l-6 12l-8 0Z`,O)).join("")}<animateTransform attributeName="transform" type="rotate" values="0 -30 -18;-16 -30 -18;0 -30 -18" dur="1.4s" repeatCount="indefinite"/></g>`,
letter:()=>R(-28,-18,56,38,"#fff")+L("M-28 -18L0 4L28 -18")+C(0,5,6,"#ff5d7a"),
camera:()=>R(-28,-14,56,36,"#4a4f7a",7)+R(-12,-22,24,10,"#4a4f7a",3)+C(0,4,13,"#cfeeff")+C(0,4,7,"#6c8cff")+`<g class="a-twinkle">${R(14,-12,8,5,"#ffd84d",1)}</g>`,
headphone:()=>L("M-22 8V-4Q-22 -24 0 -24Q22 -24 22 -4V8")+R(-28,4,12,22,"#ff6b81",5)+R(16,4,12,22,"#ff6b81",5),
eye:()=>P("M-28 0Q0 -26 28 0Q0 26 -28 0Z","#fff")+`<g class="a-blink">${C(0,0,11,"#6c8cff")}${C(0,0,5,O)}${C(-3,-3,2,"#fff","stroke=\"none\"")}</g>`,
chop:()=>`<g transform="rotate(20)"><rect x="-6" y="-28" width="3.6" height="56" rx="1.6" ${S("#d9a05b")}/><rect x="3" y="-28" width="3.6" height="56" rx="1.6" ${S("#d9a05b")}/></g>`,
spoon:()=>`<g transform="rotate(25)">${E(0,-14,10,14,"#e6e9f5")}${R(-2.5,0,5,30,"#e6e9f5",2)}</g>`,
scissors:()=>`<g>${P("M0 0L22 -26L26 -22Z","#cfd3e8")}${C(-8,14,7,"#ff8fa3")}<animateTransform attributeName="transform" type="rotate" values="0 0 0;-12 0 0;0 0 0" dur="1s" repeatCount="indefinite"/></g><g>${P("M0 0L-22 -26L-26 -22Z","#cfd3e8")}${C(8,14,7,"#ff8fa3")}<animateTransform attributeName="transform" type="rotate" values="0 0 0;12 0 0;0 0 0" dur="1s" repeatCount="indefinite"/></g>`,
coin:(t="¥")=>C(0,0,22,"#ffd84d")+C(0,0,16,"none","stroke-dasharray=\"3 3\"")+T(0,7,t,20,"#b57e00"),
tag:(t="¥")=>P("M-28 -8L-10 -24H26V24H-10Z","#fff")+C(-12,-6,3.6,"#cfd3e8")+T(8,8,t,22,O),
fridge:()=>R(-18,-30,36,60,"#e6f4ff",5)+L("M-18 -6H18")+L("M-12 -20V-12M-12 2V14")+C(4,-20,0.1,O),
window:()=>R(-26,-28,52,56,"#aee0ff",3)+L("M0 -28V28M-26 0H26")+P("M-26 -28Q-14 -20 -22 28L-26 28Z","#ff8fb1")+P("M26 -28Q14 -20 22 28L26 28Z","#ff8fb1"),
box:()=>R(-24,-20,48,40,"#d9a05b",3)+R(-5,-20,10,40,"#f2d9a6",0)+L("M-24 -4H24"),
post:()=>C(0,-4,24,"#e5484d")+T(0,6,"〒",28,"#fff")+R(-4,18,8,12,"#999",1),
stairs:()=>P("M-30 28V16H-18V4H-6V-8H6V-20H18V-32H30V28Z","#cfd3e8")+L("M-30 16H-18M-18 4H-6M-6 -8H6M6 -20H18"),
wc:()=>R(-28,-28,56,56,"#3b82f6",9)+C(-10,-14,4,"#fff")+R(-14,-8,8,16,"#fff",2)+L("M-12 8V20M-8 8V20","stroke=\"#fff\"")+C(10,-14,4,"#fff")+P("M10 -8L18 12H2Z","#fff")+L("M7 12V20M13 12V20","stroke=\"#fff\"")+L("M0 -24V24","stroke=\"#fff\" stroke-width=\"1.5\""),
bank:()=>P("M-32 -8L0 -28L32 -8Z","#6c8cff")+[-22,-8,6,20].map(x=>R(x,-8,8,28,"#fff",1)).join("")+R(-34,20,68,8,"#cfd3e8",1)+C(0,-12,5,"#ffd84d"),
plane:()=>`<g class="a-fly">${P("M-34 0Q-30 -8 -20 -8H14L30 -16Q34 -16 32 -10L24 -2L32 6Q34 12 28 10L14 4H-20Q-30 4 -34 0Z","#fff")}${P("M-6 -6L8 -22L14 -22L8 -6Z","#cfd8ee")}${P("M-6 4L8 18L14 18L8 4Z","#cfd8ee")}${[-16,-8,0].map(x=>C(x,-2,1.8,"#6c8cff")).join("")}</g>`,
train:()=>`<g class="a-move">${R(-34,-18,68,38,"#f4f1e6",9)}${R(-34,-2,68,8,"#3b82f6",0)}${[-26,-10,6].map(x=>R(x,-14,12,12,"#aee0ff",2)).join("")}${R(24,-14,6,12,"#aee0ff",2)}${C(-22,24,5,"#444")}${C(0,24,5,"#444")}${C(22,24,5,"#444")}</g>`,
bus:()=>`<g class="a-move">${R(-36,-20,72,40,"#ffb02e",8)}${[-28,-12,4].map(x=>R(x,-14,12,12,"#cfeeff",2)).join("")}${R(20,-14,12,22,"#cfeeff",2)}${C(-22,22,7,"#444")}${C(20,22,7,"#444")}</g>`,
bike:()=>`<g class="a-move">${[-20,20].map(x=>`<g transform="translate(${x} 10)"><g class="a-roll">${C(0,0,14,"none")}<path d="M-14 0H14M0 -14V14" stroke="#aaa" stroke-width="1.5"/></g></g>`).join("")}${L("M-20 10L-6 -10H14L20 10M-6 -10L2 10H-20")}${L("M14 -10L10 -16H4","stroke-width=\"3\"")}${L("M-8 -14H-2","stroke-width=\"4\"")}</g>`,
cake:()=>R(-26,0,52,24,"#ffb3c8",5)+R(-20,-14,40,16,"#fff3d6",4)+[-10,0,10].map((x,i)=>R(x-2,-26,4,12,["#6c8cff","#ff6b81","#5cc97b"][i],1)+`<path d="M${x} -34q-4 5 0 8q4 -3 0 -8z" ${S("#ffb02e","stroke-width=\"1.4\"")} class="a-flame"/>`).join("")+L("M-26 8q6 6 13 0t13 0t13 0t13 0"),
calendar:(w=-1)=>R(-28,-26,56,54,"#fff",5)+R(-28,-26,56,14,"#e5484d",5)+[-16,16].map(x=>R(x-2,-32,4,10,O,2)).join("")+[0,1,2].map(r=>[0,1,2,3].map(c=>R(-22+c*12,-8+r*12,8,8,r===w?"#ffd84d":"#e6e9f5",1)).join("")).join(""),
flagJP:()=>L("M-22 -30V32","stroke-width=\"3.4\"")+`<g class="a-flag">${R(-20,-28,48,32,"#fff",1)}${C(4,-12,10,"#e5484d")}</g>`,
flagVN:()=>L("M-22 -30V32","stroke-width=\"3.4\"")+`<g class="a-flag">${R(-20,-28,48,32,"#e5484d",1)}${P("M4 -24L7 -15H16L9 -10L12 -1L4 -7L-4 -1L-1 -10L-8 -15H1Z","#ffd84d","stroke-width=\"1.6\"")}</g>`,
nonla:()=>P("M-34 6Q0 -36 34 6Q0 14 -34 6Z","#f2d9a6")+L("M-20 2Q0 -10 20 2M-8 -14L-12 4M8 -14L12 4")+L("M-16 8Q-18 22 -10 24M16 8Q18 22 10 24","stroke=\"#e5484d\" stroke-width=\"3\""),
globe:()=>C(0,0,26,"#6cc4ff")+P("M-14 -14Q-4 -22 4 -12Q-2 -4 -10 -4Q-16 -6 -14 -14Z","#5cc97b")+P("M6 4Q18 2 20 12Q12 20 6 14Z","#5cc97b")+`<ellipse cx="0" cy="0" rx="10" ry="26" ${N} opacity=".5"/>`,
q:(c="#6c8cff")=>T(0,12,"?",40,c),
ex:(c="#ff6b6b")=>T(0,12,"!",40,c),
check:()=>C(0,0,18,"#5cc97b")+L("M-8 0L-2 7L9 -7","stroke=\"#fff\" stroke-width=\"4\""),
zzz:()=>`<g class="a-float">${T(0,0,"Z",16,"#6c8cff")}${T(14,-14,"z",12,"#6c8cff")}${T(24,-26,"z",9,"#6c8cff")}</g>`,
note:()=>`<g class="a-float">${C(-6,12,6,O)}${L("M0 12V-18L14 -12V-6")}${C(14,-2,0.1,O)}</g>`,
bed:()=>R(-34,4,68,14,"#7a86b8",4)+R(-34,-16,6,34,"#a96f35",2)+R(-28,-6,56,12,"#fff",4)+E(-18,-8,10,6,"#fff")+R(-34,18,6,10,"#a96f35",1)+R(28,18,6,10,"#a96f35",1),
sofa:()=>R(-32,-8,64,26,"#ff8fa3",9)+R(-26,-22,52,18,"#ff8fa3",8)+R(-36,-6,10,24,"#e8738a",5)+R(26,-6,10,24,"#e8738a",5),
tray:()=>R(-32,4,64,10,"#c98b4a",4)+P("M-18 -8H-2Q-2 6 -10 6Q-18 6 -18 -8Z","#ff8fb1")+P("M8 -10H24V4Q16 8 8 4Z","#fff")+L("M-2 -22L12 6","stroke=\"#d9a05b\" stroke-width=\"3\""),
cheer:()=>`<g class="a-twinkle">${P("M0 -10L3 -3L10 -3L4 2L6 9L0 5L-6 9L-4 2L-10 -3L-3 -3Z","#ffd84d")}</g>`,
};
Object.assign(OB,{
apple:(c="#ff5d5d")=>P("M0 -14Q-24 -24 -24 0Q-22 24 0 22Q22 24 24 0Q24 -24 0 -14Z",c)+L("M0 -14Q0 -24 6 -28")+P("M2 -20Q12 -30 18 -22Q10 -14 2 -20Z","#5cc97b"),
mikan:()=>C(0,2,20,"#ffa42e")+P("M-3 -18Q0 -26 6 -24Q4 -18 -3 -18Z","#5cc97b")+L("M-8 -6q4 -4 8 0"),
gear:(c="#8a93c9")=>`<g class="a-spin">${Array.from({length:8},(_,i)=>`<rect x="-5" y="-27" width="10" height="12" rx="2" ${S(c)} transform="rotate(${i*45})"/>`).join("")}${C(0,0,19,c)}${C(0,0,7,"#fff")}</g>`,
ball:()=>C(0,0,18,"#fff")+P("M0 -7L7 -2L4 6H-4L-7 -2Z",O)+L("M0 -7V-18M7 -2L17 -5M4 6L10 14M-4 6L-10 14M-7 -2L-17 -5"),
mic:()=>E(0,-12,11,13,"#cfd3e8")+L("M-11 -12H11M-9 -17H9M-9 -7H9")+R(-4,0,8,26,"#4a4f7a",3),
thumb:(c="#ffd3b0",flip=false)=>`<g transform="scale(1 ${flip?-1:1})">${R(-22,0,16,26,"#6c8cff",4)}${P("M-4 2L4 -18Q12 -22 14 -12L12 -4H24Q30 -2 28 4L26 20Q24 26 18 26H-4Z",c)}</g>`,
snail:()=>P("M-30 20Q-30 10 -18 10H24Q32 10 30 18Q28 22 22 22H-24Q-30 22 -30 20Z","#ffd3b0")+L("M-28 10Q-30 -2 -26 -8M-24 8Q-26 -4 -20 -10")+C(6,-2,16,"#e8b480")+`<path d="M6 -2m-9 0a9 9 0 1 1 9 9a5 5 0 1 1 -4 -5" ${N}/>`,
snowman:()=>C(0,14,17,"#fff")+C(0,-10,12,"#fff")+C(-4,-12,1.8,O)+C(4,-12,1.8,O)+P("M0 -8L10 -5L0 -4Z","#ff9f43")+R(-9,-30,18,10,"#4a4f7a",2)+R(-13,-22,26,4,"#4a4f7a",2)+C(0,10,2,O)+C(0,18,2,O),
maple:()=>P("M0 24L0 8M0 -26L6 -14L18 -18L14 -4L26 0L14 8L16 14L2 10L-2 10L-16 14L-14 8L-26 0L-14 -4L-18 -18L-6 -14Z","#ff7a3d"),
lantern:()=>L("M0 -30V-22")+R(-5,-24,10,5,O,1)+E(0,-4,17,22,"#e5484d")+L("M-15 -10H15M-17 -2H17M-15 6H15")+R(-6,16,12,5,O,1)+L("M0 21V28M-3 28H3"),
trophy:()=>P("M-14 -22H14V-6Q14 8 0 10Q-14 8 -14 -6Z","#ffd84d")+L("M-14 -18Q-26 -18 -22 -8Q-18 -2 -13 -3M14 -18Q26 -18 22 -8Q18 -2 13 -3")+R(-3,10,6,8,"#e0b020",1)+R(-12,18,24,6,"#b57e00",2)+T(0,-3,"1",14,"#fff"),
hourglass:()=>R(-16,-28,32,6,"#c98b4a",2)+R(-16,22,32,6,"#c98b4a",2)+P("M-12 -22H12Q12 -4 2 0Q12 4 12 22H-12Q-12 4 -2 0Q-12 -4 -12 -22Z","#e6f4ff")+P("M-9 -20H9Q8 -10 0 -4Q-8 -10 -9 -20Z","#ffd84d","class=\"a-sand\""),
suitcase:()=>L("M-8 -16V-24H8V-16")+R(-24,-16,48,38,"#ff9f43",6)+R(-24,-4,48,6,"#00000022",0)+R(-4,-6,8,8,"#ffd84d",1),
cart:()=>L("M-34 -22H-24L-16 8H22L28 -12H-20")+`<g class="a-move1">${C(-4,-18,6,"#ff5d5d")}${C(10,-17,5,"#ffd84d")}${R(-12,-14,26,5,"#5cc97b",2)}</g>`+C(-10,18,5,"#444")+C(16,18,5,"#444"),
station:()=>R(-34,-8,68,34,"#f4f1e6",3)+P("M-38 -8L0 -26L38 -8Z","#3b82f6")+R(-14,-6,28,12,"#3b82f6",3)+T(0,4,"駅",12,"#fff")+R(-6,12,12,14,"#c98b4a",2)+[-26,20].map(x=>R(x,4,8,10,"#aee0ff",1)).join("")+C(0,-14,5,"#fff"),
board:()=>R(-34,-24,68,46,"#2f7d5b",3,"stroke-width=\"4\"")+T(0,6,"あ い う",16,"#fff")+L("M-26 16H-8","stroke=\"#fff\" stroke-width=\"2\""),
stamp:()=>R(-20,-24,40,48,"#fff4a8",2,"stroke-dasharray=\"4 3\"")+R(-14,-18,28,36,"#ff8fb1",1)+C(0,0,8,"#fff")+T(0,5,"¥",11,"#e5484d"),
glass:()=>P("M-14 -22H14L10 22H-10Z","#ffa42e")+P("M-13 -14H13L12 -8H-12Z","#e6f4ff")+L("M4 -22L12 -34")+C(-18,-18,0.1,O),
gradcap:()=>P("M-26 -6L0 -18L26 -6L0 6Z",O)+R(-12,2,24,10,"#3d4670",3)+L("M20 -4V10","stroke=\"#ffd84d\"")+C(20,12,3,"#ffd84d"),
arrow:(c="#ff6b81",dir="r")=>`<g transform="rotate(${{r:0,l:180,u:-90,d:90}[dir]})">${P("M-22 -7H6V-16L26 0L6 16V7H-22Z",c)}</g>`,
pin:(c="#e5484d")=>P("M0 28C-18 8 -20 -4 -20 -12A20 20 0 0 1 20 -12C20 -4 18 8 0 28Z",c)+C(0,-12,7,"#fff"),
bubble:(t,w=44)=>R(-w/2,-14,w,26,"#fff",12)+P("M-6 12L-12 22L2 12Z","#fff")+T(0,6,t,14),
burst:(t,c="#ffd84d")=>P("M0 -26L7 -16L19 -20L18 -8L28 -2L18 4L20 16L8 14L0 26L-8 14L-20 16L-18 4L-28 -2L-18 -8L-19 -20L-7 -16Z",c)+T(0,5,t,12),
sleeper:()=>OB.bed()+C(-22,-8,11,SK)+L("M-27 -9q2 2 4 0M-20 -9q2 2 4 0")+P("M-12 -12H28Q32 -12 32 -4V4H-12Z","#6c8cff")+L("M-12 -3H32"),
easel:()=>R(-26,-26,52,40,"#fff",2)+P("M-22 10L-8 -8L2 4L10 -4L22 10Z","#7bc67e")+C(12,-16,5,"#ffd84d")+L("M-16 14L-24 30M16 14L24 30M0 14V30"),
paper:(t="あ")=>R(-22,-28,44,56,"#fff",3)+T(0,10,t,34,"#e5484d"),
bulb:()=>`<g class="a-twinkle">${C(0,-4,13,"#ffe27a")}${R(-6,8,12,8,"#cfd3e8",2)}${L("M-5 -4q5 8 10 0")}${L("M-22 -6h-6M22 -6h6M-16 -20l-5 -5M16 -20l5 -5M0 -24V-30")}</g>`,
thought:()=>`<g class="a-float">${[[-8,16,3],[2,8,5]].map(([x,y,r])=>C(x,y,r,"#fff")).join("")}${P("M-2 2Q-22 -4 -14 -20Q-8 -34 10 -30Q28 -32 28 -16Q30 0 10 0Q4 6 -2 2Z","#fff")}</g>`,
});
const sc=(bg,...p)=>`<svg class="art" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="160" rx="22" fill="${bg}"/><ellipse cx="100" cy="151" rx="72" ry="5" fill="#0000001a"/>${p.join("")}</svg>`;
const BG={b:"#e8e3ff",y:"#fff2d1",g:"#dcf5e6",p:"#ffe3ec",s:"#d8eeff",o:"#ffe6d0",n:"#2e2a5a"};
const me=o=>person({x:62,y:148,...o});
const you=o=>person({x:138,y:148,s:.95,hair:"long",hc:"#7a3b2e",top:"#ff8fb1",bot:"#7a86b8",...o});
const ob=(inner,x=142,y=100,s=1.1,cls="a-bob")=>G(inner,x,y,s,cls);
const big=(inner,cls="a-bob",s=1.8,y=84)=>G(inner,100,y,s,cls);
const flip=i=>`<g transform="translate(200 0) scale(-1 1)">${i}</g>`;
const spk=(...a)=>a.map(([x,y,s,d])=>spark(x,y,s,d)).join("");

/* ---------- Từ → cảnh ---------- */
const W={};
const gr=(y)=>`<ellipse cx="100" cy="${y}" rx="120" ry="30" fill="#7bd88f" opacity=".55"/>`;
const hill=()=>`<ellipse cx="100" cy="172" rx="130" ry="46" fill="#7bd88f"/>`;
// Bài 1
W["私"]=()=>sc(BG.b,me({x:92,y:150,s:1.1,face:"happy",ra:-150,raCls:"a-wave",la:150,laCls:"a-wave"}),ob(OB.bubble("私",44),152,44,1,"a-float"));
W["あなた"]=()=>sc(BG.p,me({ra:-92,raCls:"a-point"}),you({face:"happy",la:150,laCls:"a-wave"}),spk([138,38,1.1,0],[170,60,.8,.5]));
W["先生"]=()=>sc(BG.y,me({glasses:1,top:"#7a86b8",hair:"grey",hc:"#9a96b0",ra:-100,raCls:"a-point"}),ob(OB.board(),138,70,1.1,"a-bob"));
W["学生"]=()=>sc(BG.b,me({outfit:"student",hair:"spiky",face:"happy"}),ob(OB.bag("#ff9f43"),142,112,1.1,"a-bob"),ob(OB.book(),120,70,.7,"a-float"));
W["会社員"]=()=>sc(BG.s,me({outfit:"suit",face:"smile"}),ob(OB.company(),144,86,1.15,"a-bob"),ob(OB.bag("#6b5b95"),98,128,.6,"a-hop"));
W["医者"]=()=>sc(BG.g,me({outfit:"coat",hat:"nurse",glasses:1,top:"#fff"}),ob(OB.heart(),142,92,1.1,"a-pulse"),ob(`<path d="M-26 0h12l5 -12l8 24l5 -12h12" ${N} stroke="#e5484d" stroke-width="3"/>`,142,128,.9,"a-twinkle"));
W["エンジニア"]=()=>sc(BG.o,me({hat:"hard",top:"#ff9f43",glasses:1}),ob(OB.laptop(),142,104,1.2,"a-bob"),ob(OB.gear(),168,52,.5,""),ob(OB.gear("#ffb02e"),122,52,.4,""));
W["大学"]=()=>sc(BG.b,big(OB.school(),"a-bob",1.6,92),ob(OB.gradcap(),100,32,1.1,"a-hop"));
W["日本"]=()=>sc(BG.s,ob(OB.mountain(),70,112,1.5,""),ob(OB.flagJP(),142,86,1.6,""),spk([172,34,1,0]));
W["ベトナム人"]=()=>sc(BG.y,me({face:"happy"})+ob(OB.nonla(),62,50,.75,"a-bob"),ob(OB.flagVN(),142,92,1.5,""));
W["日本人"]=()=>sc(BG.p,me({hair:"short",face:"happy",ra:-60}),ob(OB.flagJP(),132,92,1.4,""));
W["何歳"]=()=>sc(BG.p,me({face:"smile"}),ob(OB.cake(),140,112,1.1,"a-bob"),ob(OB.q(),100,46,1,"a-float"));
W["はじめまして"]=()=>sc(BG.p,me({ra:-92,face:"happy"}),you({la:92,face:"happy"}),ob(OB.bubble("はじめまして",86),100,28,.9,"a-float"));
W["どうぞよろしく"]=()=>sc(BG.y,person({x:100,y:150,s:1.1,cls:"a-bow",face:"happy",la:30,ra:-30}),spk([50,60,1,0],[150,50,1,.4],[160,100,.7,.8]));
// Bài 2
const one=(k,bg,cls="a-bob",s=1.8)=>()=>sc(bg,big(k(),cls,s));
W["本"]=one(()=>OB.book(),BG.b);
W["辞書"]=one(()=>OB.dict(),BG.p);
W["雑誌"]=one(()=>OB.magazine(),BG.p);
W["新聞"]=one(()=>OB.news(),BG.y,"a-bob",1.9);
W["ノート"]=one(()=>OB.notebook(),BG.g);
W["手帳"]=one(()=>OB.handbook(),BG.b);
W["名刺"]=()=>sc(BG.s,big(OB.card(),"a-bob",2.2),spk([160,40,1,0]));
W["鉛筆"]=()=>sc(BG.y,ob(OB.pencil(),100,76,2,"a-write"),ob(`<path d="M-30 0q10 -10 20 0t20 0t20 0" ${N} stroke-width="3" stroke="#ff6b81"/>`,100,138,1,"a-twinkle"));
W["ボールペン"]=()=>sc(BG.s,ob(OB.pen(),100,76,2,"a-write"),ob(`<path d="M-30 0q10 -10 20 0t20 0t20 0" ${N} stroke-width="3" stroke="#3b82f6"/>`,100,138,1,"a-twinkle"));
W["時計"]=()=>sc(BG.y,big(OB.clock(3,0),"a-bob",2.2));
W["傘"]=()=>sc(BG.s,ob(OB.rain(),100,40,.9,""),ob(OB.umbrella(),100,100,1.7,"a-sway"));
W["かばん"]=one(()=>OB.bag(),BG.o);
W["車"]=()=>sc(BG.s,big(OB.car(),"a-move",2),`<rect x="10" y="124" width="180" height="4" fill="#8a93c9"/>`);
W["机"]=()=>sc(BG.y,big(OB.desk(),"",1.7,104),ob(OB.bookOpen(),100,62,.9,"a-bob"));
W["椅子"]=one(()=>OB.chair(),BG.o,"a-sway");
W["お土産"]=()=>sc(BG.p,big(OB.gift(),"a-bob",1.8),spk([40,44,1,0],[166,52,.9,.5]));
// Bài 3
const pt=(x,s)=>ob(OB.pin(),x,100,s,"a-hop");
W["ここ"]=()=>sc(BG.g,me({ra:-30,raCls:"a-point"}),pt(112,1.3),ob(OB.bubble("ここ",44),150,44,.9,"a-float"));
W["そこ"]=()=>sc(BG.g,me({ra:-78,raCls:"a-point"}),pt(136,1),ob(OB.bubble("そこ",44),150,36,.9,"a-float"));
W["あそこ"]=()=>sc(BG.g,me({ra:-95,raCls:"a-point"}),pt(172,.6),ob(OB.bubble("あそこ",56),150,36,.9,"a-float"));
W["どこ"]=()=>sc(BG.g,me({face:"smile",ra:-140,raCls:"a-wave"}),ob(OB.pin("#bbb"),140,100,1.3,"a-bob"),ob(OB.q(),142,96,.8,"a-float"));
W["教室"]=()=>sc(BG.y,ob(OB.board(),100,52,1.5,""),ob(OB.desk(),52,124,.6,""),ob(OB.desk(),148,124,.6,""),ob(OB.desk(),100,134,.6,""));
W["食堂"]=()=>sc(BG.o,big(OB.tray(),"a-bob",2));
W["事務所"]=()=>sc(BG.s,me({outfit:"suit"}),ob(OB.desk(),142,124,1,""),ob(OB.laptop(),142,84,.8,"a-bob"));
W["会議室"]=()=>sc(BG.b,person({x:50,y:116,s:.55,outfit:"suit"}),person({x:100,y:112,s:.55,hair:"long",top:"#ff8fb1"}),person({x:150,y:116,s:.55,outfit:"suit",hair:"spiky"}),`<ellipse cx="100" cy="124" rx="78" ry="18" ${S("#c98b4a")}/>`,ob(OB.laptop(),100,114,.45,"a-bob"));
W["受付"]=()=>sc(BG.p,person({x:100,y:130,s:.95,hair:"bob",top:"#3b82f6",face:"happy",ra:-150,raCls:"a-wave"}),R(30,110,140,38,"#c98b4a",6),ob(`${C(0,0,9,"#ffd84d")}${R(-3,-14,6,6,"#ffd84d",2)}`,150,106,1,"a-hop"));
W["トイレ"]=one(()=>OB.wc(),BG.s,"a-bob",1.9);
W["階段"]=()=>sc(BG.o,big(OB.stairs(),"",1.7,92),ob(OB.arrow("#ff6b81","u"),64,58,.6,"a-nudge"));
W["会社"]=()=>sc(BG.s,big(OB.company(),"a-bob",1.9,88),spk([40,44,1,0],[166,36,.8,.4]));
W["国"]=()=>sc(BG.s,ob(OB.globe(),82,86,1.6,"a-bob"),ob(OB.flagJP(),152,92,.9,""));
W["家"]=()=>sc(BG.g,gr(150)+big(OB.house(),"a-bob",1.8,90),person({x:158,y:150,s:.5,face:"happy",ra:-150,raCls:"a-wave"}));
W["電話"]=one(()=>OB.phone(),BG.p,"a-shake",2);
W["いくら"]=()=>sc(BG.y,ob(OB.tag("?"),82,90,1.5,"a-sway"),ob(OB.coin(),152,96,1.1,"a-hop"));
// Bài 4
const night=BG.n;
W["今"]=()=>sc(BG.y,big(OB.clock(3,0),"a-bob",1.9),ob(OB.burst("今"),160,38,1,"a-pulse"));
W["何時"]=()=>sc(BG.y,ob(OB.clock(4,30),78,88,1.8,"a-bob"),ob(OB.q(),160,70,1.3,"a-float"));
W["半"]=()=>sc(BG.y,big(OB.clock(9,30),"a-bob",1.9),ob(OB.burst("30"),160,38,1,"a-pulse"));
W["午前"]=()=>sc("#ffe9c9",ob(OB.sun(16),100,92,1.4,""),hill(),ob(OB.bubble("AM",46),152,36,.9,"a-float"));
W["午後"]=()=>sc("#ffd6d0",ob(OB.sun(16).replace(/#ffd84d/,"#ff8a4d"),100,100,1.4,""),hill(),ob(OB.bubble("PM",46),152,36,.9,"a-float"));
W["朝"]=()=>sc("#ffe9c9",ob(OB.sun(12),150,48,1,""),hill(),me({x:90,y:150,s:1.05,la:150,ra:-150,face:"happy"}));
W["昼"]=()=>sc(BG.s,ob(OB.sun(20),100,70,1.6,""),ob(OB.cloud(),42,50,.6,"a-float"),hill(),ob(OB.bubble("12:00",60),100,134,.8,"a-bob"));
W["晩"]=()=>sc(night,ob(OB.moon(),100,76,1.8,"a-bob"),spk([40,40,1,0],[160,50,1.2,.3],[60,120,.8,.6],[150,118,.8,.9]));
W["起きます"]=()=>sc(BG.o,me({la:150,ra:-150,face:"happy"}),ob(OB.clock(7,0),142,92,1,"a-shake"),spk([142,48,.8,0]));
W["寝ます"]=()=>sc(night,big(OB.sleeper(),"",1.6,100),ob(OB.zzz(),138,60,1.1,""),ob(OB.moon(),40,40,.5,"a-bob"));
W["働きます"]=()=>sc(BG.s,me({outfit:"suit",ra:-40,raCls:"a-write"}),ob(OB.desk(),140,126,1,""),ob(OB.laptop(),140,86,.9,"a-bob"));
W["休みます"]=()=>sc(BG.p,person({x:100,y:124,s:.9,sit:1,face:"happy"}),ob(OB.sofa(),100,122,1.4,""),ob(OB.cup(),158,84,.8,"a-sip"));
W["勉強します"]=()=>sc(BG.y,person({x:100,y:118,s:.95,outfit:"student",sit:1,glasses:1}),ob(OB.desk(),100,128,1.6,""),ob(OB.bookOpen(),100,96,.9,"a-bob"));
W["終わります"]=()=>sc(BG.g,me({x:80,la:150,ra:-150,face:"happy"}),ob(OB.check(),152,70,1.6,"a-pulse"),spk([40,40,1,0],[170,120,.8,.5]));
W["毎日"]=()=>sc(BG.y,ob(OB.calendar(),100,86,1.5,"a-bob"),ob(OB.sun(8),36,46,.8,""),ob(OB.moon(),166,46,.7,"a-bob"));
W["銀行"]=()=>sc(BG.s,big(OB.bank(),"",1.7,92),ob(OB.coin(),100,34,.7,"a-hop"));
// Bài 5
const arrowR=(x=100,y=70)=>ob(OB.arrow("#ff6b81","r"),x,y,.8,"a-nudge");
W["行きます"]=()=>sc(BG.g,gr(150),me({x:50,cls:"a-walk"}),arrowR(104,70),ob(OB.school(),160,106,.7,""));
W["来ます"]=()=>sc(BG.g,gr(150),flip(person({x:62,y:148,cls:"a-walk",face:"happy"})),ob(OB.arrow("#ff6b81","l"),96,70,.8,"a-nudge"),you({x:40,s:.8,la:150,laCls:"a-wave"}));
W["帰ります"]=()=>sc(BG.g,gr(150),me({x:46,cls:"a-walk"}),arrowR(96,72),ob(OB.house(),156,104,1.2,""),ob(OB.heart(),156,46,.4,"a-pulse"));
W["学校"]=one(()=>OB.school(),BG.b,"a-bob",1.9);
W["スーパー"]=one(()=>OB.cart(),BG.o,"a-move",1.9);
W["駅"]=one(()=>OB.station(),BG.s,"a-bob",1.9);
W["飛行機"]=()=>sc("#cfe9ff",big(OB.plane(),"",1.9,80),ob(OB.cloud(),44,128,.6,"a-float"),ob(OB.cloud(),160,118,.5,"a-float"));
W["電車"]=()=>sc(BG.s,big(OB.train(),"",1.8,90),`<rect x="10" y="118" width="180" height="4" fill="#8a93c9"/>`);
W["バス"]=()=>sc(BG.y,big(OB.bus(),"",1.8,90),`<rect x="10" y="118" width="180" height="4" fill="#8a93c9"/>`);
W["自転車"]=()=>sc(BG.g,big(OB.bike(),"",1.9,96));
W["歩いて"]=()=>sc(BG.g,gr(150),me({x:90,s:1.05,cls:"a-walk",la:20,ra:-20}),ob(`<ellipse cx="0" cy="0" rx="5" ry="8" fill="#0003"/>`,152,132,1,"a-twinkle"),ob(`<ellipse cx="0" cy="0" rx="5" ry="8" fill="#0003"/>`,172,122,1,"a-twinkle"));
W["友達"]=()=>sc(BG.p,person({x:82,y:148,s:.95,ra:-60,face:"happy",cls:"a-hop"}),person({x:122,y:148,s:.95,hair:"long",top:"#ff8fb1",la:60,face:"happy",cls:"a-hop"}),ob(OB.heart(),102,44,.5,"a-pulse"));
W["彼"]=()=>sc(BG.s,me({x:100,y:150,s:1.1,hair:"spiky",top:"#3b82f6",face:"happy"}),ob(OB.heart(),150,52,.6,"a-pulse"));
W["彼女"]=()=>sc(BG.p,me({x:100,y:150,s:1.1,hair:"long",hc:"#7a3b2e",top:"#ff8fb1",face:"happy"}),ob(OB.heart(),150,52,.6,"a-pulse"));
W["誕生日"]=()=>sc(BG.p,ob(OB.cake(),100,92,1.6,"a-bob"),ob(OB.gift("#6c8cff"),40,124,.5,"a-bob"),ob(OB.gift("#5cc97b"),162,124,.5,"a-bob"),spk([44,40,1,0],[160,36,1,.4]));
W["先週"]=()=>sc(BG.y,ob(OB.calendar(0),100,88,1.6,"a-bob"),ob(OB.arrow("#ff6b81","l"),40,36,.6,"a-nudge"));
W["来週"]=()=>sc(BG.y,ob(OB.calendar(2),100,88,1.6,"a-bob"),ob(OB.arrow("#5cc97b","r"),160,36,.6,"a-nudge"));
// Bài 6
W["食べます"]=()=>sc(BG.o,me({face:"open",ra:-60}),ob(OB.bowl(),136,104,1.3,"a-sip"),ob(OB.chop(),136,66,.8,"a-write"));
W["飲みます"]=()=>sc(BG.s,me({face:"smile",ra:-50}),ob(OB.glass(),136,102,1.2,"a-sip"));
W["見ます"]=()=>sc(BG.b,big(OB.eye(),"a-bob",2.3),spk([40,40,1,0],[164,44,1,.5]));
W["聞きます"]=()=>sc(BG.p,big(OB.headphone(),"a-bob",1.8,92),ob(OB.note(),160,60,.9,""),ob(OB.note(),42,66,.7,""));
W["読みます"]=()=>sc(BG.y,me({face:"smile",ra:-60}),ob(OB.bookOpen(),138,96,1.3,"a-bob"));
W["書きます"]=()=>sc(BG.g,me({ra:-50}),ob(OB.notebook(),138,110,1,""),ob(OB.pencil(),138,88,.8,"a-write"));
W["買います"]=()=>sc(BG.o,me({face:"happy"}),ob(OB.bag("#ff6b81"),138,108,1.2,"a-bob"),ob(OB.coin(),156,52,.6,"a-hop"));
W["撮ります"]=()=>sc(BG.s,big(OB.camera(),"a-bob",2),spk([160,38,1.1,0],[40,46,.8,.4]));
W["します"]=()=>sc(BG.b,me({face:"happy",ra:-60}),ob(OB.gear(),140,86,1.2,""),ob(OB.gear("#ffb02e"),166,120,.7,""));
W["会います"]=()=>sc(BG.p,me({ra:-150,raCls:"a-wave",face:"happy"}),you({la:150,laCls:"a-wave",face:"happy"}),ob(OB.heart(),100,50,.5,"a-pulse"));
W["ご飯"]=one(()=>OB.bowl(),BG.o,"a-bob",2);
W["お茶"]=one(()=>OB.cup(),BG.g,"a-bob",2);
W["肉"]=one(()=>OB.meat(),BG.o,"a-bob",2);
W["魚"]=one(()=>OB.fish(),BG.s,"a-swim",2);
W["野菜"]=one(()=>OB.veg(),BG.g,"a-bob",2);
W["映画"]=one(()=>OB.clap(),BG.b,"a-bob",1.9);
W["手紙"]=()=>sc(BG.p,big(OB.letter(),"a-bob",1.9),spk([40,40,1,0],[164,50,.8,.4]));
W["一緒に"]=()=>sc(BG.p,person({x:80,y:148,la:30,face:"happy",cls:"a-hop"}),person({x:120,y:148,hair:"long",top:"#ff8fb1",ra:-30,face:"happy",cls:"a-hop"}),spk([100,40,1,0],[40,60,.8,.3],[164,60,.8,.6]));
// Bài 7
W["あげます"]=()=>sc(BG.p,me({ra:-80,face:"happy"}),you({la:80,face:"happy"}),ob(OB.gift(),100,70,.6,"a-hop"),ob(OB.arrow("#ff6b81","r"),100,42,.5,"a-nudge"));
W["もらいます"]=()=>sc(BG.p,me({ra:-80,face:"happy"}),you({la:80,face:"happy"}),ob(OB.gift(),100,70,.6,"a-hop"),ob(OB.arrow("#5cc97b","l"),100,42,.5,"a-nudge"));
W["貸します"]=()=>sc(BG.b,me({ra:-80}),you({la:80,face:"happy"}),ob(OB.book(),100,76,.5,"a-bob"),ob(OB.arrow("#6c8cff","r"),100,42,.5,"a-nudge"));
W["借ります"]=()=>sc(BG.b,me({ra:-80,face:"happy"}),you({la:80}),ob(OB.book(),100,76,.5,"a-bob"),ob(OB.arrow("#ff9f43","l"),100,42,.5,"a-nudge"));
W["教えます"]=()=>sc(BG.y,me({glasses:1,hair:"grey",hc:"#9a96b0",ra:-100,raCls:"a-point"}),ob(OB.board(),140,72,1.05,""),ob(OB.bulb(),100,34,.6,""));
W["習います"]=()=>sc(BG.y,person({x:62,y:148,outfit:"student",hair:"spiky",ra:-40,raCls:"a-write",face:"happy"}),you({x:140,s:.85,glasses:1,hair:"grey",hc:"#9a96b0",la:70}),ob(OB.notebook(),100,120,.5,"a-bob"),ob(OB.bulb(),62,30,.5,""));
W["送ります"]=()=>sc(BG.s,ob(OB.box(),80,92,1.3,"a-move"),ob(`<path d="M-60 0h26M-56 10h20M-60 -10h22" ${N} stroke="#fff" stroke-width="3"/>`,60,96,.9,"a-nudge"),ob(OB.arrow("#6c8cff","r"),160,60,.7,"a-nudge"),ob(OB.post(),160,116,.6,""));
W["切ります"]=()=>sc(BG.p,ob(OB.scissors(),88,70,1.5,""),`<path d="M20 124q40 -14 82 0" ${N} stroke-dasharray="6 5" stroke-width="3"/>`,ob(`<rect x="-30" y="-14" width="60" height="28" rx="3" ${S("#fff")}/>`,100,128,1,""));
W["花"]=()=>sc(BG.p,big(OB.flower(),"a-sway",2.1,90));
W["はし"]=one(()=>OB.chop(),BG.o,"a-sway",2.2);
W["スプーン"]=one(()=>OB.spoon(),BG.s,"a-sway",2.2);
W["はさみ"]=()=>sc(BG.p,ob(OB.scissors(),100,90,2,""));
W["パソコン"]=one(()=>OB.laptop(),BG.s,"a-bob",2);
W["プレゼント"]=()=>sc(BG.p,big(OB.gift(),"a-hop",1.9),spk([40,40,1,0],[166,44,.9,.4]));
W["父"]=()=>sc(BG.s,me({x:100,y:150,s:1.1,outfit:"suit",glasses:1,hair:"short",face:"smile"}),ob(OB.heart(),152,52,.55,"a-pulse"));
W["母"]=()=>sc(BG.p,me({x:100,y:150,s:1.1,outfit:"apron",top:"#ff8fb1",hair:"bun",hc:"#7a3b2e",face:"happy"}),ob(OB.heart(),152,52,.55,"a-pulse"));
// Bài 8
W["大きい"]=()=>sc(BG.g,gr(150),ob(OB.house(),100,86,2.3,"a-bob"),person({x:176,y:150,s:.42,face:"happy"}));
W["小さい"]=()=>sc(BG.g,gr(150),person({x:70,y:150,s:1.1}),ob(OB.house(),142,128,.55,"a-hop"));
W["新しい"]=()=>sc(BG.b,big(OB.phone(),"a-bob",1.7),ob(OB.burst("NEW"),160,46,1.1,"a-pulse"),spk([40,50,1,0],[48,120,.8,.5]));
W["古い"]=()=>sc("#efe6d4",ob(OB.book("#b08a5a"),100,92,1.8,"a-sway"),ob(`<path d="M-20 -22L20 22M20 -22L-20 22" ${N} stroke="#8a6a3a" stroke-width="1.6" opacity=".7"/>`,100,92,1.1,""),ob(`<path d="M0 -18V6" ${N} stroke-width="1.4"/>${C(0,10,5,"#444")}`,160,50,1,"a-sway"));
W["いい"]=()=>sc(BG.g,big(OB.thumb(),"a-hop",2.2),spk([40,44,1,0],[164,44,1,.4]));
W["悪い"]=()=>sc("#ffd9d9",big(OB.thumb(SK,true),"a-bob",2.2),ob(OB.cloud("#9aa0c0"),150,40,.6,"a-float"));
W["暑い"]=()=>sc("#ffe0c2",me({face:"sweat"}),ob(OB.sun(16),146,62,1.5,""),ob(`<path d="M0 -8q5 7 0 12q-5 -5 0 -12z" ${S("#7ad7ff")}/>`,100,60,1,"a-drip"));
W["寒い"]=()=>sc("#d4e8ff",me({face:"cold",scarf:1,top:"#6c8cff",cls:"a-shake"}),ob(OB.snow(),148,66,1.2,""));
W["難しい"]=()=>sc(BG.b,me({face:"sad",ra:-140}),ob(`<path d="M-24 8q8 -26 20 -8t18 -4q-4 24 -22 14q-14 -8 -4 -20" ${N} stroke="#8a93c9" stroke-width="3.5"/>`,142,96,1.4,"a-spin"),ob(OB.q("#e5484d"),142,40,.8,"a-float"));
W["易しい"]=()=>sc(BG.g,me({face:"happy",la:150,ra:-150}),ob(OB.bubble("1+1=2",70),146,44,1,"a-float"),ob(OB.check(),152,104,1.1,"a-pulse"));
W["高い"]=()=>sc(BG.o,ob(OB.tag("¥¥¥"),86,92,1.7,"a-sway"),ob(OB.arrow("#e5484d","u"),160,84,1.1,"a-nudge"));
W["安い"]=()=>sc(BG.g,ob(OB.tag("¥"),86,92,1.7,"a-sway"),ob(OB.arrow("#5cc97b","d"),160,84,1.1,"a-nudge"),ob(OB.burst("SALE","#ff8fa3"),160,38,.7,"a-pulse"));
W["面白い"]=()=>sc(BG.y,me({face:"happy",cls:"a-shake",ra:-30,la:30}),ob(OB.bubble("ハハハ",66),142,50,1,"a-float"),spk([166,106,.9,0]));
W["美味しい"]=()=>sc(BG.o,me({face:"happy",ra:-60}),ob(OB.bowl(),136,106,1.3,"a-bob"),ob(OB.heart(),150,44,.5,"a-pulse"));
W["きれい"]=()=>sc(BG.p,ob(OB.flower("#ffb3c8"),100,86,1.8,"a-sway"),spk([48,50,1.2,0],[156,40,1,.3],[160,110,.8,.6],[44,116,.7,.9]));
W["静か"]=()=>sc(BG.b,me({face:"flat",ra:-165}),ob(OB.moon(),150,50,.7,"a-bob"),ob(OB.zzz(),136,100,.8,""));
W["にぎやか"]=()=>sc(BG.y,person({x:48,y:150,s:.8,face:"happy",la:150,ra:-150,cls:"a-hop"}),person({x:100,y:150,s:.8,hair:"long",top:"#ff8fb1",face:"happy",la:150,ra:-150,cls:"a-hop"}),person({x:152,y:150,s:.8,hair:"spiky",top:"#5cc97b",face:"happy",la:150,ra:-150,cls:"a-hop"}),ob(OB.note(),100,36,.6,""),spk([30,40,1,0],[170,40,1,.4]));
W["有名"]=()=>sc(BG.b,me({x:80,la:150,ra:-150,face:"happy"}),ob(OB.star(),150,54,1.1,"a-pulse"),ob(OB.camera(),150,114,.6,"a-bob"),spk([166,86,1,0],[130,36,.8,.5]));
W["親切"]=()=>sc(BG.p,me({ra:-80,face:"happy"}),you({x:146,s:.85,hair:"grey",hc:"#9a96b0",face:"smile",la:70}),ob(OB.heart(),104,84,.5,"a-pulse"),ob(OB.bag(),172,128,.4,""));
W["元気"]=()=>sc(BG.y,me({x:100,y:150,s:1.1,la:128,ra:-128,face:"happy",cls:"a-hop"}),spk([44,60,1.1,0],[158,56,1.1,.4],[160,112,.8,.8]));
W["山"]=()=>sc(BG.s,ob(OB.sun(8),160,40,.9,""),big(OB.mountain(),"",2.1,96),ob(OB.cloud(),44,44,.6,"a-float"));
W["桜"]=()=>sc(BG.p,big(OB.sakura(),"a-sway",2.2,90));
// Bài 9
W["好き"]=()=>sc(BG.p,me({x:80,face:"happy",la:60,ra:-60}),ob(OB.heart(),146,80,1.7,"a-pulse"));
W["嫌い"]=()=>sc("#e7e6f0",me({x:80,face:"sad",ra:-95}),ob(OB.heart("#9aa0c0"),146,80,1.5,"a-shake"),ob(`<path d="M-20 -20L20 20M20 -20L-20 20" ${N} stroke="#e5484d" stroke-width="6"/>`,146,80,1,"a-pulse"));
W["上手"]=()=>sc(BG.y,me({face:"happy",la:150,ra:-150}),ob(OB.trophy(),146,92,1.5,"a-bob"),spk([166,40,1,0],[120,40,.8,.4]));
W["下手"]=()=>sc(BG.o,me({face:"sweat",ra:-45,raCls:"a-write"}),ob(OB.notebook(),140,104,1.1,""),ob(`<path d="M-14 0q4 -10 8 0t8 0t8 -6" ${N} stroke="#e5484d" stroke-width="2.4"/>`,140,106,1,"a-twinkle"));
W["料理"]=()=>sc(BG.o,me({hat:"chef",outfit:"apron",top:"#fff",face:"happy",ra:-50}),ob(OB.bowl(),140,104,1.4,"a-bob"),spk([166,40,.8,0]));
W["飲み物"]=()=>sc(BG.s,ob(OB.glass(),70,96,1.5,"a-bob"),ob(OB.cup("#ffb02e"),138,100,1.4,"a-bob"));
W["スポーツ"]=()=>sc(BG.g,gr(150),me({x:56,cls:"a-walk",ra:-40,la:40,face:"happy"}),ob(OB.ball(),132,104,1.2,"a-hop"),ob(OB.arrow("#ff6b81","r"),100,60,.5,"a-nudge"));
W["音楽"]=()=>sc(BG.b,ob(OB.headphone(),100,92,1.5,"a-bob"),ob(OB.note(),44,56,.9,""),ob(OB.note(),158,52,.9,""),ob(OB.note(),160,116,.6,""));
W["歌"]=()=>sc(BG.p,me({face:"open",ra:-60}),ob(OB.mic(),132,86,1,"a-bob"),ob(OB.note(),160,46,.8,""),ob(OB.note(),166,104,.6,""));
W["絵"]=()=>sc(BG.y,big(OB.easel(),"a-bob",1.9,92),spk([40,44,1,0],[162,40,.9,.4]));
W["字"]=()=>sc(BG.g,ob(OB.paper("あ"),90,84,1.5,"a-bob"),ob(OB.pencil(),152,92,1.2,"a-write"));
W["漢字"]=()=>sc(BG.y,ob(OB.paper("漢"),90,84,1.5,"a-bob"),ob(OB.pencil(),152,92,1.2,"a-write"));
W["わかります"]=()=>sc(BG.y,me({face:"happy",ra:-120}),ob(OB.bulb(),62,26,1,""),spk([150,50,1,0],[160,100,.8,.5]));
W["あります"]=()=>sc(BG.o,ob(OB.box(),90,100,1.5,"a-bob"),ob(OB.check(),150,60,1.1,"a-pulse"));
W["約束"]=()=>sc(BG.p,ob(OB.calendar(1),82,90,1.5,"a-bob"),ob(OB.heart(),154,70,.8,"a-pulse"),ob(OB.check(),150,120,.7,"a-pulse"));
W["用事"]=()=>sc(BG.o,me({face:"sweat",ra:-50}),ob(OB.notebook(),136,100,1,"a-bob"),ob(OB.clock(5,10),160,44,.6,"a-shake"));
W["日本語"]=()=>sc(BG.p,me({face:"open",ra:-130,raCls:"a-wave"}),ob(OB.bubble("日本語",72),146,48,1,"a-float"));
W["どうして"]=()=>sc(BG.b,me({face:"smile",la:80,ra:-80}),ob(OB.q(),142,66,1.8,"a-float"));
// Bài 10
W["います"]=()=>sc(BG.g,gr(150),me({x:90,s:1.1,ra:-150,raCls:"a-wave",face:"happy"}),ob(OB.pin(),160,60,.55,"a-hop"));
W["犬"]=one(()=>OB.dog(),BG.o,"a-bob",2);
W["猫"]=one(()=>OB.cat(),BG.y,"a-bob",2);
W["木"]=one(()=>OB.tree(),BG.g,"a-sway",1.9);
W["箱"]=one(()=>OB.box(),BG.o,"a-bob",2);
W["上"]=()=>sc(BG.s,ob(OB.box(),100,116,1.2,""),ob(OB.ball(),100,56,1,"a-hop"),ob(OB.arrow("#ff6b81","u"),150,70,.6,"a-nudge"));
W["下"]=()=>sc(BG.s,ob(OB.desk(),100,76,1.5,""),ob(OB.ball(),100,128,1.1,"a-hop"),ob(OB.arrow("#ff6b81","d"),160,112,.6,"a-nudge"));
W["前"]=()=>sc(BG.b,person({x:84,y:138,s:.9,hair:"spiky",top:"#ffb02e"}),person({x:116,y:152,s:.9,face:"happy"}),ob(OB.arrow("#ff6b81","d"),166,104,.6,"a-nudge"));
W["後ろ"]=()=>sc(BG.b,person({x:116,y:138,s:.9,hair:"spiky",top:"#ffb02e"}),person({x:84,y:152,s:.9,face:"happy"}),ob(OB.arrow("#ff6b81","u"),166,70,.6,"a-nudge"));
W["右"]=()=>sc(BG.g,me({x:60,ra:-90,raCls:"a-point"}),ob(OB.arrow("#ff6b81","r"),112,66,.9,"a-nudge"),ob(OB.house(),164,104,.8,""));
W["左"]=()=>sc(BG.g,me({x:140,la:90,laCls:"a-point"}),ob(OB.arrow("#6c8cff","l"),90,66,.9,"a-nudge"),ob(OB.house(),36,104,.8,""));
W["中"]=()=>sc(BG.o,ob(OB.ball(),100,82,1.1,"a-hop"),ob(`<path d="M-30 -16L-24 24H24L30 -16Z" ${S("#d9a05b")}/>${L("M-30 -16H30")}`,100,104,1.5,""),ob(OB.arrow("#ff6b81","d"),160,56,.5,"a-nudge"));
W["外"]=()=>sc(BG.o,ob(OB.box(),70,108,1.1,""),ob(OB.ball(),152,112,1,"a-hop"),ob(OB.arrow("#ff6b81","r"),112,76,.6,"a-nudge"));
W["隣"]=()=>sc(BG.g,gr(150),ob(OB.house(),60,100,1.1,""),ob(OB.house(),146,100,1.1,""),ob(`<path d="M-14 0H14M-8 -6L-14 0L-8 6M8 -6L14 0L8 6" ${N} stroke="#ff6b81" stroke-width="3"/>`,103,44,1,"a-pulse"));
W["近く"]=()=>sc(BG.g,gr(150),me({x:56}),ob(OB.house(),134,104,1,""),ob(`<path d="M-8 0H20M12 -6L20 0L12 6" ${N} stroke="#ff6b81" stroke-width="3"/>`,100,48,1,"a-nudge"));
W["間"]=()=>sc(BG.o,ob(OB.box(),44,110,.9,""),ob(OB.box(),156,110,.9,""),ob(OB.ball(),100,112,1,"a-hop"),ob(`<path d="M-30 0H30M-22 -6L-30 0L-22 6M22 -6L30 0L22 6" ${N} stroke="#ff6b81" stroke-width="3"/>`,100,60,1,"a-pulse"));
W["公園"]=()=>sc(BG.g,gr(150),ob(OB.tree(),60,84,1.4,"a-sway"),ob(OB.sun(10),158,36,.8,""),ob(`${R(-26,-8,52,8,"#c98b4a",2)}${R(-22,0,5,16,"#a96f35",1)}${R(17,0,5,16,"#a96f35",1)}${R(-26,-22,52,8,"#c98b4a",2)}`,142,118,1.2,""));
W["郵便局"]=()=>sc(BG.p,big(OB.post(),"a-bob",1.9));
W["冷蔵庫"]=one(()=>OB.fridge(),BG.s,"a-bob",1.9);
W["窓"]=one(()=>OB.window(),BG.s,"a-bob",1.8);
// Bài 11
const n=(k,x0)=>Array.from({length:k},(_,i)=>ob(OB.mikan(),x0+i*52,96,1.3,"a-bob")).join("");
W["一つ"]=()=>sc(BG.o,ob(OB.mikan(),100,90,2.4,"a-bob"),ob(OB.bubble("1つ",46),152,38,.9,"a-float"));
W["二つ"]=()=>sc(BG.o,n(2,74),ob(OB.bubble("2つ",46),152,38,.9,"a-float"));
W["三つ"]=()=>sc(BG.o,Array.from({length:3},(_,i)=>ob(OB.mikan(),48+i*52,100,1.2,"a-bob")).join(""),ob(OB.bubble("3つ",46),152,34,.9,"a-float"));
W["いくつ"]=()=>sc(BG.o,ob(OB.mikan(),62,100,1,"a-bob"),ob(OB.mikan(),100,74,1,"a-bob"),ob(OB.mikan(),138,104,1,"a-bob"),ob(OB.mikan(),84,126,.9,"a-bob"),ob(OB.q(),160,44,1.2,"a-float"));
W["一人"]=()=>sc(BG.b,person({x:100,y:150,s:1.1,face:"happy"}),ob(OB.bubble("1人",46),152,40,.9,"a-float"));
W["二人"]=()=>sc(BG.b,person({x:74,y:150,s:1,face:"happy"}),person({x:126,y:150,s:1,hair:"long",top:"#ff8fb1",face:"happy"}),ob(OB.bubble("2人",46),100,26,.8,"a-float"));
W["何人"]=()=>sc(BG.b,person({x:50,y:150,s:.8,face:"happy"}),person({x:100,y:150,s:.8,hair:"long",top:"#ff8fb1"}),person({x:150,y:150,s:.8,hair:"spiky",top:"#5cc97b"}),ob(OB.q(),100,28,.8,"a-float"));
W["切手"]=one(()=>OB.stamp(),BG.p,"a-sway",1.9);
W["封筒"]=()=>sc(BG.y,ob(OB.letter(),100,92,2,"a-bob"),ob(OB.stamp(),158,52,.5,"a-sway"));
W["兄弟"]=()=>sc(BG.s,person({x:76,y:150,s:1,hair:"spiky",top:"#3b82f6",face:"happy",ra:-60}),person({x:130,y:150,s:.72,hair:"spiky",top:"#ffb02e",face:"happy",la:60}),ob(OB.heart(),103,50,.45,"a-pulse"));
W["家族"]=()=>sc(BG.p,person({x:52,y:150,s:.82,outfit:"suit",face:"happy"}),person({x:92,y:150,s:.8,hair:"bun",hc:"#7a3b2e",top:"#ff8fb1",face:"happy"}),person({x:126,y:150,s:.58,hair:"spiky",top:"#3b82f6",face:"happy"}),person({x:154,y:150,s:.52,hair:"long",top:"#ffb02e",face:"happy"}),ob(OB.heart(),100,28,.45,"a-pulse"));
W["外国"]=()=>sc(BG.s,ob(OB.globe(),88,92,1.7,"a-bob"),ob(OB.plane(),150,44,.6,""));
W["一週間"]=()=>sc(BG.y,ob(OB.calendar(1),100,88,1.7,"a-bob"),ob(OB.burst("7日"),156,40,.9,"a-pulse"));
W["一か月"]=()=>sc(BG.y,ob(OB.calendar(),100,88,1.7,"a-bob"),ob(OB.burst("30日"),158,40,.9,"a-pulse"));
W["一年"]=()=>sc(BG.y,ob(OB.calendar(),88,90,1.5,"a-bob"),ob(OB.burst("12月"),156,44,1,"a-pulse"),ob(OB.arrow("#6c8cff","r"),160,112,.5,"a-nudge"));
W["全部で"]=()=>sc(BG.y,ob(OB.coin(),50,100,.9,"a-bob"),ob(OB.coin(),100,100,.9,"a-bob"),ob(OB.coin(),150,100,.9,"a-bob"),ob(OB.burst("計","#ff9f43"),100,38,.8,"a-pulse"));
W["時間"]=one(()=>OB.hourglass(),BG.y,"a-sway",1.9);
W["みかん"]=one(()=>OB.mikan(),BG.o,"a-bob",2.4);
// Bài 12
W["簡単"]=()=>sc(BG.g,me({face:"happy",ra:-70,raCls:"a-point"}),ob(`${C(0,0,22,"#5cc97b")}${T(0,7,"OK",18,"#fff")}`,142,96,1.1,"a-pulse"),ob(OB.bubble("1 step",62),146,36,.8,"a-float"));
W["近い"]=()=>sc(BG.g,gr(150),me({x:60}),ob(OB.house(),128,104,1),ob(`<path d="M-10 0H12" ${N} stroke="#ff6b81" stroke-width="3"/>`,100,70,1,"a-nudge"));
W["遠い"]=()=>sc(BG.g,gr(150),me({x:36,s:1}),ob(OB.house(),172,120,.45),`<path d="M70 140H150" ${N} stroke="#8a93c9" stroke-width="3" stroke-dasharray="3 7"/>`,ob(OB.arrow("#ff6b81","r"),110,70,.6,"a-nudge"));
W["速い"]=()=>sc(BG.s,ob(OB.car("#ff5d5d"),112,92,1.7,"a-move"),ob(`<path d="M-30 0h26M-24 10h22M-30 -10h24" ${N} stroke="#fff" stroke-width="3.4"/>`,46,92,1,"a-nudge"));
W["遅い"]=()=>sc(BG.g,gr(150),ob(OB.snail(),100,106,1.8,"a-move"),ob(`<path d="M0 0v8M6 0v8" ${N}/>`,150,70,.5,""));
W["多い"]=()=>sc(BG.o,[[50,110],[90,114],[130,110],[70,86],[110,90],[150,92],[90,64]].map(([x,y],i)=>ob(OB.apple(),x,y,.9,"a-bob")).join(""),ob(`<path d="M-8 0V-14M-14 -8L-8 -14L-2 -8" ${N} stroke="#5cc97b" stroke-width="3"/>`,172,50,1,"a-nudge"));
W["少ない"]=()=>sc(BG.o,ob(OB.apple(),84,104,1.1,"a-bob"),ob(OB.apple(),122,108,1.1,"a-bob"),ob(`<path d="M-8 -14V0M-14 -6L-8 0L-2 -6" ${N} stroke="#e5484d" stroke-width="3"/>`,164,56,1,"a-nudge"));
W["冷たい"]=()=>sc("#d4e8ff",ob(`<path d="M-22 -14L-4 -26L22 -16L24 8L2 24L-22 14Z" ${S("#bfe3ff")}/>${L("M-22 -14L2 -6L24 -16M2 -6V24")}`,100,92,1.9,"a-bob"),ob(OB.snow(),156,40,.5,""));
W["天気"]=()=>sc(BG.s,ob(OB.sun(14),82,76,1.5,""),ob(OB.cloud(),132,100,1.3,"a-float"));
W["雨"]=()=>sc("#c9d6ee",ob(OB.rain(),100,70,2,""),me({x:158,s:.6,top:"#ffb02e"}),ob(OB.umbrella(),158,92,.7,"a-sway"));
W["雪"]=()=>sc("#d8e8ff",ob(OB.snow(),70,64,1.6,""),ob(OB.snowman(),142,102,1.2,"a-sway"));
W["曇り"]=()=>sc("#d7dbe8",ob(OB.cloud("#f1f2f8"),100,86,2.3,"a-float"),ob(OB.cloud("#ffffff"),44,50,.8,"a-float"));
W["季節"]=()=>sc(BG.y,ob(OB.sakura(),62,56,.8,""),ob(OB.sun(8),140,50,.8,""),ob(OB.maple(),62,116,.8,"a-sway"),ob(OB.snowman(),140,116,.7,"a-sway"));
W["春"]=()=>sc(BG.p,big(OB.sakura(),"a-sway",2.2,90));
W["夏"]=()=>sc("#c9ecff",ob(OB.sun(16),150,44,1.3,""),`<path d="M0 130q25 -14 50 0t50 0t50 0t50 0V160H0Z" fill="#4aa3ff"/>`,ob(`<path d="M-24 0A24 24 0 0 0 24 0Z" ${S("#ff5d5d")}/>${L("M-24 0H24")}${C(-8,8,1.6,O)}${C(6,10,1.6,O)}${C(0,16,1.6,O)}`,70,98,1.4,"a-bob"));
W["秋"]=()=>sc("#ffe3c2",ob(OB.maple(),100,86,2,"a-sway"),ob(OB.maple(),40,50,.5,"a-fall"),ob(OB.maple(),164,60,.5,"a-fall"));
W["冬"]=()=>sc("#d8e8ff",ob(OB.snowman(),100,92,1.9,"a-sway"),ob(OB.snow(),46,46,.7,""),ob(OB.snow(),156,52,.6,""));
W["一番"]=()=>sc(BG.y,ob(OB.trophy(),100,86,2.1,"a-bob"),spk([40,44,1,0],[162,40,1,.4]));
W["旅行"]=()=>sc(BG.s,me({x:54,face:"happy",cls:"a-walk"}),ob(OB.suitcase(),108,118,1,"a-bob"),ob(OB.plane(),152,50,.7,""));
W["祭り"]=()=>sc(night,ob(OB.lantern(),56,74,1.5,"a-sway"),ob(OB.lantern(),144,74,1.5,"a-sway"),spk([100,40,1.4,0],[30,40,1,.4],[170,36,1,.8],[100,120,1,.6]));
W["どちら"]=()=>sc(BG.b,ob(OB.apple(),54,100,1.3,"a-bob"),ob(OB.mikan(),146,100,1.5,"a-bob"),ob(OB.q(),100,70,1.6,"a-float"));

export function art(word){const f=W[word];if(!f)return"";try{return f()}catch(e){return""}}
export const ART_WORDS=Object.keys(W);
