const M={};"あa いi うu えe おo かka きki くku けke こko さsa しshi すsu せse そso たta ちchi つtsu てte とto なna にni ぬnu ねne のno はha ひhi ふfu へhe ほho まma みmi むmu めme もmo やya ゆyu よyo らra りri るru れre ろro わwa をo んn がga ぎgi ぐgu げge ごgo ざza じji ずzu ぜze ぞzo だda ぢji づzu でde どdo ばba びbi ぶbu べbe ぼbo ぱpa ぴpi ぷpu ぺpe ぽpo ぁa ぃi ぅu ぇe ぉo ゔvu".split(" ").forEach(x=>M[x[0]]=x.slice(1));
export const hira=s=>[...s].map(c=>c>="ァ"&&c<="ヶ"?String.fromCharCode(c.charCodeAt(0)-96):c).join("");
export function roma(p){const h=[...hira(p)];let o="",i=0,dbl=false;
while(i<h.length){const c=h[i],n=h[i+1];
if(c=="っ"){dbl=true;i++;continue}
if(c=="ー"){o=o.replace(/([aiueo])$/,m=>({a:"ā",i:"ī",u:"ū",e:"ē",o:"ō"})[m]);i++;continue}
let b=M[c];if(!b){o+=c;i++;continue}
if(c=="ん"){const nb=M[n];b=nb&&/^[aiueoy]/.test(nb)?"n'":"n"}
else if(n&&"ゃゅょ".includes(n)){const v={ゃ:"a",ゅ:"u",ょ:"o"}[n];let st=b.slice(0,-1);if(!["sh","ch","j"].includes(st))st+="y";b=st+v;i++}
else if(n&&"ぁぃぅぇぉ".includes(n)){const v=M[n];b=b=="u"?"w"+v:b.slice(0,-1)+v;i++}
if(dbl){b=b.startsWith("ch")?"t"+b:b[0]+b;dbl=false}
o+=b;i++}
return o}
