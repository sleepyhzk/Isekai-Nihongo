// Bảng chữ cái Hiragana/Katakana: hàng, romaji và hình ảnh liên tưởng (tự soạn).
// Mỗi hàng: tên hàng | chữ hiragana (dấu - là ô trống) | romaji. Katakana được suy ra từ hiragana.
const rows = t => t.trim().split("\n").map(l => { const [k, c, r] = l.split("|"); return { k, c: c.split(" "), r: r.split(" ") }; });
export const SECT = [
  { id: "base", name: "Chữ thuần", jp: "清音", rows: rows(`
a|あ い う え お|a i u e o
ka|か き く け こ|ka ki ku ke ko
sa|さ し す せ そ|sa shi su se so
ta|た ち つ て と|ta chi tsu te to
na|な に ぬ ね の|na ni nu ne no
ha|は ひ ふ へ ほ|ha hi fu he ho
ma|ま み む め も|ma mi mu me mo
ya|や - ゆ - よ|ya - yu - yo
ra|ら り る れ ろ|ra ri ru re ro
wa|わ - - - を|wa - - - wo
n|ん - - - -|n - - - -`) },
  { id: "dak", name: "Âm đục", jp: "濁音", rows: rows(`
ga|が ぎ ぐ げ ご|ga gi gu ge go
za|ざ じ ず ぜ ぞ|za ji zu ze zo
da|だ ぢ づ で ど|da ji zu de do
ba|ば び ぶ べ ぼ|ba bi bu be bo
pa|ぱ ぴ ぷ ぺ ぽ|pa pi pu pe po`) },
  { id: "yoon", name: "Âm ghép", jp: "拗音", rows: rows(`
kya|きゃ きゅ きょ|kya kyu kyo
sha|しゃ しゅ しょ|sha shu sho
cha|ちゃ ちゅ ちょ|cha chu cho
nya|にゃ にゅ にょ|nya nyu nyo
hya|ひゃ ひゅ ひょ|hya hyu hyo
mya|みゃ みゅ みょ|mya myu myo
rya|りゃ りゅ りょ|rya ryu ryo
gya|ぎゃ ぎゅ ぎょ|gya gyu gyo
ja|じゃ じゅ じょ|ja ju jo
bya|びゃ びゅ びょ|bya byu byo
pya|ぴゃ ぴゅ ぴょ|pya pyu pyo`) },
];

const parse = t => Object.fromEntries(t.trim().split("\n").map(l => { const [c, e, x] = l.split("|"); return [c, [e, x]]; }));
const MNH = `
あ|🐟|Con cá bị cây kiếm đâm trúng, đau quá kêu 'A!'.
い|🐛|Hai con sâu đứng cạnh nhau, ngứa ngáy rên 'i i'.
う|😭|Người cúi đầu khóc nức nở, tiếng nghe như 'ư ư'.
え|🦜|Chú vẹt lạ xòe cánh, ai nhìn cũng kêu 'Ê!'.
お|😮|Cậu bé há miệng 'Ô!' khi thấy quả bóng bay cạnh bên.
か|🔪|Con dao thái cá, miếng cá dính bên cạnh: 'ca' (cá).
き|🔑|Chiếc chìa khóa (key) có hai răng: đọc 'ki'.
く|🐦|Mỏ chim cu há ra, kêu 'cu cu'.
け|🍺|Thùng bia (keg) có vòi: 'ke' như keg.
こ|🐍|Hai con rắn nhỏ nằm chồng lên nhau, co ro 'co'.
さ|🤺|Võ sĩ múa kiếm, tiếng kiếm vút 'xa'.
し|🎣|Lưỡi câu móc cá: suỵt, im lặng 'shi' kẻo cá sợ.
す|🪙|Đồng xu buộc dây treo lủng lẳng: 'su' như 'xu'.
せ|🐌|Con sên mang vỏ nghiêng, bò chậm: 'se' như 'sên'.
そ|🧵|Sợi chỉ zigzag đang may vá: 'so' như sew (may).
た|✍️|Chữ た giống chữ t ghép với a viết tay: 'ta'.
ち|🐭|Con chuột nhỏ chít chít, đuôi uốn cong: 'chi'.
つ|🌊|Con sóng lớn cuộn lên: tsu-nami!
て|✋|Cánh tay duỗi ngang, bàn tay (te = tay) giơ ra.
と|🦶|Ngón chân cái (toe) bị đinh đâm kêu 'tô'.
な|🍈|Quả na (mãng cầu) có cuống cong: 'na'.
に|🧥|Áo nỉ có hai chiếc khuy bên phải: 'ni' (nỉ).
ぬ|🍜|Sợi mì (noodle) cuộn tròn trong tô: 'nu'.
ね|🐱|Con mèo cuộn đuôi, kêu 'ne-o' (meo).
の|🙅|Dấu xoáy ngăn lại: 'No!' (không).
は|😆|Cười 'ha ha' há miệng to bên phải.
ひ|🤭|Che miệng cười khúc khích 'hi hi'.
ふ|🗻|Núi Phú Sĩ (Fuji) có mây vắt quanh sườn: 'fu'.
へ|⛰️|Sườn đồi thoai thoải, leo lên kêu 'hê'.
ほ|🎅|Ông già Noel bụng bự cười 'hô hô hô'.
ま|👻|Con ma giơ hai tay hù: 'ma'.
み|🎵|Nốt nhạc Mi (Đô Rê Mi) uốn lượn.
む|🐮|Con bò rống 'mooo', đuôi cong lên: 'mu'.
め|👁️|Con mắt có lông mi: 'me' nghĩa là mắt (目).
も|🪱|Lưỡi câu có hai con giun làm mồi: 'mo' (mồi).
や|🐃|Con trâu rừng yak sừng cong: 'ya' (yak).
ゆ|🐠|Con cá bơi trong bể tròn, bơi 'yu' (du) dương.
よ|🪀|Chiếc yo-yo đung đưa trên sợi dây: 'yo'.
ら|🐰|Con thỏ (rabbit) tai cong: 'ra'.
り|🌿|Hai cọng liễu rủ xuống, gió thổi rì rì: 'ri'.
る|🪢|Sợi dây thắt nút tròn, kéo ru ru: 'ru'.
れ|➡️|Người đứng ở ngã ba rẽ (re) sang phải.
ろ|🛣️|Con đường ngoằn ngoèo (road): 'ro'.
わ|👶|Em bé khóc 'oa oa': 'wa'.
を|😲|Người thốt lên 'Wô!' ngạc nhiên; trợ từ を đọc là 'o'.
ん|🤔|Giống chữ n viết thảo: đọc 'n'.`;
const MNK = `
ア|🪓|Lưỡi rìu (axe) chặt xuống: 'a'.
イ|🧊|Cây băng (ice) nhọn chĩa xuống: 'i'.
ウ|☂️|Cái ô (umbrella) có cán: 'u'.
エ|👷|Thanh dầm chữ I của kỹ sư (engineer): 'e'.
オ|🐙|Con bạch tuộc (octopus) cầm gậy: 'o'.
カ|🥋|Võ sĩ karate chém tay: 'ka'.
キ|🔑|Chìa khóa (key) hai răng: 'ki'.
ク|🐦|Chim cu gáy (cuckoo) há mỏ: 'cu'.
ケ|🍰|Miếng bánh (cake) cắm cờ: 'ke'.
コ|🥛|Cái cốc nằm nghiêng: 'ko' (cốc).
サ|🏜️|Sa mạc có hai cây xương rồng: 'sa'.
シ|😊|Hai mắt híp và miệng cười khúc khích: 'shi'.
ス|🤼|Võ sĩ sumo dang chân: 'su'.
セ|7️⃣|Giống số 7 bị uốn: 'se' (seven).
ソ|🧵|Kim chỉ may vá (sew): 'so'.
タ|🚕|Chiếc taxi: 'ta'.
チ|🧀|Miếng phô mai (cheese): 'chi'.
ツ|☔|Giọt mưa rơi thẳng xuống: mưa 'tsu tsu'.
テ|📺|Ăng-ten tivi (television): 'te'.
ト|🍅|Quả cà chua (tomato) cắm que: 'to'.
ナ|🍴|Cái nĩa ngược: 'na' (nĩa).
ニ|2️⃣|Hai vạch ngang: số 2 (二) đọc 'ni'.
ヌ|🍜|Mì sợi (noodle) quấn nĩa: 'nu'.
ネ|🥅|Tấm lưới (net) có cột: 'ne'.
ノ|📝|Nét xiên như tờ ghi chú (note): 'no'.
ハ|🎩|Chiếc mũ (hat) hai vành xòe: 'ha'.
ヒ|👠|Gót giày cao gót (heel): 'hi'.
フ|🌬️|Chiếc quạt (fan) quạt gió: 'fu'.
ヘ|🐔|Gà mái (hen) mào nhọn: 'he'.
ホ|🏠|Ngôi nhà (home) có mái và hàng rào: 'ho'.
マ|👩|Mẹ (mama) cúi đầu: 'ma'.
ミ|🐱|Ba sợi râu mèo meo (meow): 'mi'.
ム|🐮|Đầu bò có sừng, rống 'moo': 'mu'.
メ|🥩|Miếng thịt (meat) bị rạch chéo: 'me'.
モ|🌙|Mặt trăng (moon) khuyết: 'mo'.
ヤ|🏹|Mũi tên (矢 đọc là ya) lao vút.
ユ|👉|Chữ U vuông chỉ vào bạn (you): 'yu'.
ヨ|🍦|Hộp sữa chua (yogurt) ba ngăn: 'yo'.
ラ|📻|Chiếc radio: 'ra'.
リ|🌾|Hai cây sậy (reed) đứng cạnh: 'ri'.
ル|🌱|Rễ cây (root) hai nhánh: 'ru'.
レ|🎶|Nốt nhạc Rê: 're'.
ロ|🤖|Robot đầu vuông: 'ro'.
ワ|🍷|Ly rượu vang (wine): 'wa'.
ヲ|😲|Há hốc 'wow': 'wo' (ít dùng, chủ yếu thấy ở hiragana).
ン|🙂|Chấm và nét xiên như người gật đầu 'ừn': 'n'.`;
export const MN = { h: parse(MNH), k: parse(MNK) };
const h2k = s => s.replace(/[\u3041-\u3096]/g, c => String.fromCharCode(c.charCodeAt(0) + 96));
export const ALLK = [...new Set(SECT.flatMap(x => x.rows.flatMap(r => r.c.filter(c => c !== "-")))).values()].flatMap(c => [c, h2k(c)]);
