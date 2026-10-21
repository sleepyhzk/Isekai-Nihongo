// Âm Hán Việt của các chữ Hán hay gặp (thêm chữ mới: ký tự + âm, cách nhau bằng dấu cách)
export const KH=Object.fromEntries("私tư 先tiên 生sinh 学học 会hội 社xã 員viên 医y 者giả 大đại 校hiệu 高cao 専chuyên 攻công 名danh 前tiền 何hà 歳tuế 年niên 日nhật 本bản 人nhân 友hữu 達đạt 留lưu 一nhất 二nhị 三tam 四tứ 五ngũ 六lục 七thất 八bát 九cửu 十thập 百bách 千thiên 万vạn 円viên 安an 鉛duyên 筆bút 財tài 布bố 時thời 分phân 半bán 今kim 午ngọ 後hậu 朝triều 昼trú 夜dạ 明minh 昨tạc 毎mỗi 月nguyệt 火hỏa 水thủy 木mộc 金kim 土thổ 曜diệu 週chu 末mạt 休hưu 起khởi 寝tẩm 働động 勉miễn 強cường 始thủy 元nguyên 気khí 家gia 族tộc 父phụ 母mẫu 兄huynh 姉tỷ 弟đệ 妹muội 子tử 供cung 国quốc 駅dịch 右hữu 左tả 来lai 行hành 見kiến 食thực 飲ẩm 話thoại 書thư 読độc 聞văn 持trì 買mãi 言ngôn 思tư 手thủ 目mục 口khẩu 電điện 車xa".split(" ").map(x=>[x[0],x.slice(1)]));
// Chữ Hán: ký tự|âm On|âm Kun|nghĩa|mẹo nhớ
export const KD=Object.fromEntries(`私|シ|わたし|Riêng tư; tôi|Cây lúa 禾 của riêng mình (厶): riêng tư, tôi.
先|セン|さき|Trước; đi trước|Người 儿 bước chân 土 lên trước: đi trước.
生|セイ, ショウ|い(きる), う(まれる), なま|Sống; sinh ra; tươi|Mầm cây nhú lên từ mặt đất: sống, sinh ra.
学|ガク|まな(ぶ)|Học|Đứa trẻ 子 dưới mái nhà học bài: học.
会|カイ, エ|あ(う)|Gặp; hội|Mọi người 人 tụ lại thành một nhóm: gặp, hội họp.
社|シャ|やしろ|Công ty; đền thờ|Bàn thờ 示 trên nền đất 土: đền, nơi tụ họp (công ty).
員|イン||Thành viên, nhân viên|Cái miệng 口 và vỏ sò 貝 (tiền): thành viên lo quỹ, nhân viên.
医|イ||Y học|Hộp 匚 đựng mũi tên 矢 chữa vết thương: y học.
者|シャ|もの|Người|Ông già 耂 dưới mặt trời 日: người làm một nghề.
大|ダイ, タイ|おお(きい)|To, lớn|Người dang rộng tay chân: to lớn.
校|コウ||Trường học|Cây 木 và sự giao lưu 交: nơi học trò tụ lại, trường học.
高|コウ|たか(い)|Cao; đắt|Hình tòa tháp có mái cao: cao.
留|リュウ, ル|と(まる)|Lưu lại|Giữ chân ở ruộng 田: ở lại, lưu lại.
専|セン|もっぱ(ら)|Chuyên|Bàn tay 寸 nắm chặt một việc: chuyên.
攻|コウ|せ(める)|Công kích; nghiên cứu sâu|Thợ 工 cầm gậy 攵 tiến lên: tấn công, đào sâu nghiên cứu.
名|メイ, ミョウ|な|Tên; danh|Buổi tối 夕 mở miệng 口 xưng tên: tên.
前|ゼン|まえ|Trước|Dao 刂 rẽ lối phía trước: trước.
何|カ|なに, なん|Gì; cái gì|Người 亻 hỏi 可 (được không?): cái gì.
歳|サイ||Tuổi|Bước chân 止 đi qua năm tháng: tuổi.
年|ネン|とし|Năm; tuổi|Mùa gặt lúa, mỗi năm một lần: năm.
日|ニチ, ジツ|ひ, か|Ngày; mặt trời|Hình mặt trời: ngày, mặt trời.
本|ホン|もと|Sách; gốc; Nhật Bản|Cây 木 có vạch ở gốc: gốc; sách; Nhật Bản.
人|ジン, ニン|ひと|Người|Hình người đang bước đi: người.
友|ユウ|とも|Bạn|Hai bàn tay 又 nắm lấy nhau: bạn.
達|タツ||Đạt; số nhiều (友達)|Con đường 辶 đi mãi đến đích: đạt; 友達 = bạn bè.
一|イチ, イツ|ひと(つ)|Một|Một nét ngang: 1.
二|ニ|ふた(つ)|Hai|Hai nét ngang: 2.
三|サン|みっ(つ)|Ba|Ba nét ngang: 3.
四|シ|よん, よっ(つ)|Bốn|Ô vuông 囗 với hai chân 儿: 4.
五|ゴ|いつ(つ)|Năm|Hai nét ngang nối nhau như bàn tay năm ngón: 5.
六|ロク|むっ(つ)|Sáu|Mái nhà 亠 với hai chân 八: 6.
七|シチ|なな(つ)|Bảy|Dấu cộng bị cắt nghiêng: 7.
八|ハチ|やっ(つ)|Tám|Hai nét xòe ra như số 8 mở rộng: 8.
九|キュウ, ク|ここの(つ)|Chín|Nét cong gập lại như cánh tay co: 9.
十|ジュウ|とお|Mười|Dấu cộng: 10.
百|ヒャク||Trăm|Một 一 phủ lên chữ trắng 白: trăm.
千|セン|ち|Nghìn|Nét phẩy 丿 đặt trên chữ 十: nghìn.
万|マン, バン||Vạn (10.000)|Dạng giản của 萬 (vạn): 10.000.
円|エン|まる(い)|Yên; hình tròn|Đồng xu tròn đặt trong khung: yên, hình tròn.
安|アン|やす(い)|Rẻ; yên ổn|Người phụ nữ 女 dưới mái nhà 宀: yên ổn, nên rẻ.
鉛|エン|なまり|Chì|Kim loại 金 mềm: chì, ruột bút chì.
筆|ヒツ|ふで|Bút|Ống tre 竹 cầm trong tay 聿: cây bút.
財|ザイ, サイ||Tài sản|Vỏ sò 貝 (tiền) cộng tài 才: tài sản.
布|フ|ぬの|Vải|Chiếc khăn 巾 trải ra: tấm vải.
時|ジ|とき|Giờ; thời gian|Mặt trời 日 và ngôi chùa 寺 gõ chuông báo giờ: giờ.
分|フン, ブン|わ(ける)|Phút; phân chia|Dao 刀 chia vật làm hai nửa 八: phân chia, phút.
半|ハン|なか(ば)|Nửa; rưỡi|Vật bị chia đôi ở giữa: một nửa.
今|コン, キン|いま|Bây giờ|Dưới mái che, khoảnh khắc hiện tại: bây giờ.
午|ゴ||Giữa trưa|Cây chày dựng thẳng giữa trưa: giữa trưa.
後|ゴ, コウ|あと, のち|Sau|Bước chân 彳 đi chậm 幺 ở phía sau 夂: sau.
朝|チョウ|あさ|Buổi sáng|Mặt trời và mặt trăng 月 cùng hiện lúc rạng đông: buổi sáng.
昼|チュウ|ひる|Buổi trưa|Mặt trời 日 ở giữa bầu trời: buổi trưa.
夜|ヤ|よる|Buổi tối; đêm|Buổi tối 夕 dưới mái nhà: đêm.
明|メイ, ミョウ|あか(るい), あ(ける)|Sáng; ngày mai|Mặt trời 日 cộng mặt trăng 月: sáng, sáng sủa.
昨|サク||Hôm qua|Mặt trời 日 đã trôi qua: hôm qua.
毎|マイ||Mỗi|Người mẹ 母 chăm sóc con ngày nào cũng vậy: mỗi.
月|ゲツ, ガツ|つき|Tháng; mặt trăng|Hình vầng trăng khuyết: tháng, mặt trăng.
火|カ|ひ|Lửa|Hình ngọn lửa bùng lên: lửa.
水|スイ|みず|Nước|Dòng nước chảy tỏa ra: nước.
木|モク, ボク|き|Cây; gỗ|Cây có cành và rễ: cây, gỗ.
金|キン, コン|かね|Vàng; tiền|Kim loại quý ẩn dưới lòng đất: vàng, tiền.
土|ド, ト|つち|Đất|Mầm cây nhô lên từ mặt đất: đất.
曜|ヨウ||Ngày trong tuần|Có chữ 日 vì chỉ các ngày trong tuần: 月曜日, 火曜日.
週|シュウ||Tuần|Con đường 辶 đi một vòng 周: một tuần.
末|マツ|すえ|Cuối|Cây 木 có nét dài ở ngọn: cuối cùng.
休|キュウ|やす(む)|Nghỉ|Người 亻 tựa vào gốc cây 木: nghỉ ngơi.
起|キ|お(きる)|Thức dậy|Chạy 走 người mình 己 bật dậy: thức dậy.
寝|シン|ね(る)|Ngủ|Nằm trên giường dưới mái nhà 宀: ngủ.
働|ドウ|はたら(く)|Làm việc|Người 亻 chuyển động 動: làm việc.
勉|ベン||Cố gắng|Dùng sức 力 cố gắng; 勉強 = học.
強|キョウ, ゴウ|つよ(い)|Mạnh|Cây cung 弓 căng hết cỡ: mạnh.
始|シ|はじ(まる)|Bắt đầu|Người phụ nữ 女 sinh ra một đời mới 台: bắt đầu.`.split("\n").map(l=>{const [c,...r]=l.split("|");return [c,r]}));

// Bổ sung dữ liệu cho các chữ Hán còn thiếu (tự soạn; mẹo nhớ mang tính gợi nhớ, không phải từ nguyên học chính xác)
Object.assign(KH,Object.fromEntries("手thủ 行hành 事sự 子tử 来lai 見kiến 切thiết 気khí 物vật 書thư 車xa 食thực 所sở 付phó 家gia 電điện 話thoại 歩bộ 習tập 料liệu 理lý 間gian 旅lữ 出xuất 着trước 辞từ 新tân 聞văn 教giáo 室thất 議nghị 階giai 国quốc 転chuyển 彼bỉ 飲ẩm 買mãi 母mẫu 味vị 山sơn 上thượng 下hạ 音âm 歌ca 字tự 約ước 外ngoại 近cận 冷lãnh 番phiên 海hải 持trì 道đạo 住trú 立lập 使sử 乗thừa 換hoán 入nhập 足túc 無vô 業nghiệp 病bệnh 風phong 洗tẩy 調điều 館quán 変biến 引dẫn 連liên 雑tạp 誌chí 帳trướng 刺thích 計kế 傘tản 机kỷ 椅ỷ 産sản 堂đường 務vụ 受thụ 段đoạn 晩vãn 終chung 銀ngân 帰quy 駅dịch 飛phi 機cơ 自tự 女nữ 誕đản 読độc 撮toát 飯phạn 茶trà 肉nhục 魚ngư 野dã 菜thái 映ánh 画họa 紙chỉ 緒tự 貸thải 借tá 送tống 花hoa 父phụ 小tiểu 古cổ 悪ác 暑thử 寒hàn 難nan 易dị 面diện 白bạch 美mỹ 静tĩnh 有hữu 親thân 元nguyên 桜anh 好hảo 嫌hiềm 楽lạc 絵hội 漢hán 束thúc 用dụng 語ngữ 犬khuyển 猫miêu 箱tương 右hữu 左tả 中trung 隣lân 公công 園viên 郵bưu 便tiện 局cục 蔵tàng 庫khố 窓song 封phong 筒đồng 兄huynh 弟đệ 族tộc 全toàn 部bộ 簡giản 単đơn 遠viễn 速tốc 遅trì 多đa 少thiểu 天thiên 雨vũ 雪tuyết 曇đàm 季quý 節tiết 春xuân 夏hạ 秋thu 冬đông 祭tế 欲dục 遊du 泳vịnh 迎nghênh 疲bì 結kết 婚hôn 散tán 池trì 空không 港cảng 仕sĩ 消tiêu 開khai 閉bế 急cấp 待đãi 止chỉ 曲khúc 伝truyền 呼hô 信tín 号hiệu 地địa 図đồ 座tọa 置trí 作tác 売mại 知tri 研nghiên 究cứu 資tư 製chế 品phẩm 刻khắc 表biểu 服phục 靴ngoa 独độc 身thân 降giáng 浴dục 若nhược 長trường 短đoản 暗ám 背bối 頭đầu 体thể 顔nhan 髪phát 目mục 覚giác 忘vong 払phất 返phản 脱thoát 心tâm 配phối 残tàn 薬dược 院viện 熱nhiệt 邪tà 喉hầu 呂lữ 宿túc 題đề 試thí 験nghiệm 弾đạn 集tập 捨xả 運vận 予dự 趣thú 記ký 現hiện 慣quán 登đăng 泊bạc 掃tảo 除trừ 濯trạc 練luyện 眠miên 弱nhược 相tương 撲phác 度độ 北bắc 富phú 士sĩ 要yếu 直trực 修tu 僕bộc 君quân 主chủ 奥áo 夫phu 妻thê 思tư 言ngôn 勝thắng 負phụ 役dịch 動động 政chính 治trị 経kinh 済tế 選tuyển 挙cử 組tổ 意ý 普phổ 通thông 履lý 被bị 帽mạo 眼nhãn 鏡kính 賃nhẫm 台đài 回hồi 押áp 触xúc 渡độ 橋kiều 交giao 差sai 点điểm 角giác 釣điếu 紹thiệu 介giới 案án 内nội 説thuyết 弁biện 当đương 越việt 片phiến 祝chúc 荷hà 葉diệp 礼lễ 考khảo 田điền 舎xá 暇hạ 取thủ 故cố 宝bảo 将tướng 夢mộng 給cấp 卒tốt 願nguyện 授thụ 東đông 京kinh 写tả 真chân 問vấn 店điếm 町đinh 姉tỷ 庭đình 屋ốc 牛ngưu 乳nhũ 枚mai 幹cán 線tuyến 客khách 暖noãn 涼lương 痛thống 健kiện 康khang 工công 場trường 早tảo 力lực 合hợp 械giới 興hưng 赤xích 黒hắc 広quảng 方phương 暮mộ".split(" ").map(x=>[x[0],x.slice(1)])));
Object.assign(KD,Object.fromEntries(`手|シュ|て|Tay|Hình bàn tay xòe năm ngón: tay.
行|コウ, ギョウ|い(く), おこな(う)|Đi; tiến hành|Hình ngã tư đường: đi, thực hiện.
事|ジ|こと|Việc, sự việc|Tay cầm bút ghi lại công việc: sự việc.
子|シ, ス|こ|Con; đứa trẻ|Hình em bé dang hai tay: con.
来|ライ|く(る), きた(る)|Đến|Cây lúa mạch mọc lên rồi đến mùa gặt: đến.
見|ケン|み(る)|Nhìn, thấy|Mắt 目 đặt trên đôi chân 儿: đi và nhìn.
切|セツ, サイ|き(る)|Cắt; thiết tha|Dao 刀 chém bảy 七 nhát: cắt.
気|キ, ケ||Khí; tinh thần|Hơi bốc lên từ nồi cơm: khí, tinh thần.
物|ブツ, モツ|もの|Vật, đồ|Con bò 牜 và thứ gì đó 勿: đồ vật.
書|ショ|か(く)|Viết|Tay cầm bút ghi chữ lên giấy: viết.
車|シャ|くるま|Xe|Chiếc xe nhìn từ trên: bánh xe và trục.
食|ショク|た(べる), く(う)|Ăn|Nắp đậy trên bát cơm: ăn.
所|ショ|ところ|Nơi chốn|Cửa 戸 và cái rìu 斤: nơi chốn.
付|フ|つ(く), つ(ける)|Gắn, dính|Người 亻 đưa tay 寸 gắn vào: dính, gắn.
家|カ, ケ|いえ, うち|Nhà|Con heo 豕 dưới mái nhà 宀: nhà.
電|デン||Điện|Mưa 雨 kèm tia sét: điện.
話|ワ|はな(す), はなし|Nói chuyện|Lời nói 言 và cái lưỡi 舌: nói chuyện.
歩|ホ, ブ|ある(く), あゆ(む)|Đi bộ|Hai dấu chân nối nhau: đi bộ.
習|シュウ|なら(う)|Học, luyện tập|Chim non vỗ cánh 羽 tập bay mỗi ngày: luyện tập.
料|リョウ||Nguyên liệu; phí|Gạo 米 được đong bằng cái đấu 斗: nguyên liệu.
理|リ||Lý lẽ; sắp xếp|Ngọc 王 mài giũa ở làng 里: lý lẽ, sắp xếp.
間|カン, ケン|あいだ, ま|Khoảng giữa|Mặt trời 日 lọt qua khe cổng 門: khoảng giữa.
旅|リョ|たび|Du lịch|Đoàn người dưới lá cờ 方 đi xa: lữ hành.
出|シュツ, スイ|で(る), だ(す)|Ra, xuất|Cây mọc chồi chồng lên chồi: đi ra.
着|チャク, ジャク|き(る), つ(く)|Mặc; đến|Mặc đồ lên người rồi đến nơi: mặc, đến.
辞|ジ|や(める)|Từ; từ chức|Lời nói và nét cay đắng 辛: lời từ biệt, từ chức.
新|シン|あたら(しい)|Mới|Cây 木 vừa bị rìu 斤 chặt, dựng 立 mới tinh: mới.
聞|ブン, モン|き(く)|Nghe|Tai 耳 áp vào cửa 門: nghe.
教|キョウ|おし(える), おそ(わる)|Dạy|Thầy cầm roi 攵 dạy trẻ con 孝: dạy.
室|シツ|むろ|Phòng|Mái nhà 宀 và nơi đến 至: phòng.
議|ギ||Bàn bạc|Lời nói 言 bàn về nghĩa 義: nghị luận, họp.
階|カイ||Tầng; bậc|Gò đất 阝 xếp từng bậc: tầng, bậc thang.
国|コク|くに|Nước|Biên giới 囗 bao quanh vùng đất 玉: quốc gia.
転|テン|ころ(ぶ), ころ(がる)|Xoay, lăn|Bánh xe 車 lăn tròn: chuyển, xoay.
彼|ヒ|かれ, かの|Anh ấy; kia|Bước đi 彳 sang phía kia: anh ấy.
飲|イン|の(む)|Uống|Há miệng 欠 trước đồ ăn 食: uống.
買|バイ|か(う)|Mua|Lưới 罒 bắt lấy vỏ sò 貝 (tiền): mua.
母|ボ|はは|Mẹ|Người phụ nữ 女 có hai chấm là bầu sữa: mẹ.
味|ミ|あじ|Vị|Miệng 口 nếm thử quả chưa 未 chín: vị.
山|サン|やま|Núi|Hình ba ngọn núi.
上|ジョウ|うえ, あ(げる), のぼ(る)|Trên|Nét ngắn nằm trên đường nền: trên.
下|カ, ゲ|した, くだ(さる), お(りる)|Dưới|Nét ngắn nằm dưới đường nền: dưới.
音|オン, イン|おと, ね|Âm thanh|Đứng 立 nói 日 thành tiếng: âm thanh.
歌|カ|うた, うた(う)|Hát|Há miệng 欠 cất tiếng 哥: ca hát.
字|ジ|あざ|Chữ|Đứa con 子 nở ra dưới mái nhà 宀: chữ.
約|ヤク||Hẹn; ước chừng|Sợi chỉ 糸 buộc lời hẹn: hẹn ước.
外|ガイ, ゲ|そと, ほか|Ngoài|Buổi tối 夕 bói 卜 phải ra ngoài: ngoài.
近|キン|ちか(い)|Gần|Đi 辶 tới gần cái rìu 斤: gần.
冷|レイ|つめ(たい), ひ(える)|Lạnh|Băng 冫 theo lệnh 令: lạnh.
番|バン||Số thứ tự; lượt|Dấu chân thú in trên ruộng 田 theo lượt: lượt, số.
海|カイ|うみ|Biển|Nước 氵 mẹ 毎 của muôn loài: biển.
持|ジ|も(つ)|Cầm, mang|Tay 扌 giữ ở chùa 寺: cầm.
道|ドウ|みち|Đường; đạo|Bước đi 辶 theo hướng cái đầu 首: con đường.
住|ジュウ|す(む)|Sống, ở|Người 亻 làm chủ 主 ngôi nhà: ở.
立|リツ|た(つ)|Đứng|Người dang chân đứng trên mặt đất.
使|シ|つか(う)|Dùng; sứ|Người 亻 làm việc 吏 được sai dùng: sử dụng.
乗|ジョウ|の(る)|Cưỡi, đi (xe)|Người trèo lên ngồi trên cây 木: cưỡi, đi xe.
換|カン|か(える)|Đổi|Tay 扌 trao đổi 奐: đổi.
入|ニュウ|い(る), はい(る)|Vào|Hình mũi nhọn đâm vào: vào.
足|ソク|あし, た(りる)|Chân; đủ|Hình bắp chân và bàn chân: chân, đủ.
無|ム, ブ|な(い)|Không|Rừng rậm bị cháy hết, không còn gì: không.
業|ギョウ, ゴウ|わざ|Nghề; nghiệp|Hàng cọc dựng nền để xây: nghề nghiệp.
病|ビョウ, ヘイ|や(む), やまい|Bệnh|Người nằm giường bệnh 疒 vì sốt 丙: bệnh.
風|フウ, フ|かぜ, かざ|Gió|Con sâu 虫 trong bao 几 bay theo gió: gió.
洗|セン|あら(う)|Rửa|Nước 氵 đi trước 先: rửa.
調|チョウ|しら(べる), ととの(う)|Điều tra; điều chỉnh|Lời nói 言 điều hòa khắp vòng 周: tra xét, điều chỉnh.
館|カン||Tòa nhà; quán|Ăn 食 ở nhà công 官: tòa nhà, hội quán.
変|ヘン|か(わる), か(える)|Thay đổi; lạ|Sợi tơ rối được đổi thay: biến, lạ.
引|イン|ひ(く)|Kéo|Cây cung 弓 và dây kéo ｜: kéo.
連|レン|つ(れる), つら(なる)|Nối; dẫn theo|Xe 車 đi 辶 nối đuôi nhau: liền, dẫn theo.
雑|ザツ, ゾウ||Tạp; lẫn lộn|Nhiều loại cây 木 và áo 衣 trộn lẫn: tạp.
誌|シ||Ghi chép|Lời 言 ghi nhớ trong lòng 志: tạp chí.
帳|チョウ||Sổ; màn|Tấm khăn 巾 dài 長 làm màn, sổ: sổ tay.
刺|シ|さ(す)|Đâm; châm|Bó gai 朿 và dao 刂: đâm.
計|ケイ|はか(る)|Tính; đo|Lời nói 言 đếm đến mười 十: tính, đo.
傘|サン|かさ|Ô, dù|Hình cái ô có nan và người đứng bên dưới: ô.
机|キ|つくえ|Bàn|Cây 木 làm cái bàn nhỏ 几: bàn.
椅|イ||Ghế|Gỗ 木 lạ 奇 làm thành cái ghế: 椅子 (いす).
産|サン|う(む), うぶ|Sinh; sản xuất|Người đứng 立 sinh con bên sườn núi 厂: sinh, sản xuất.
堂|ドウ||Sảnh; nhà lớn|Đất 土 trước ngôi nhà lớn: sảnh, 食堂 nhà ăn.
務|ム|つと(める)|Nhiệm vụ|Cầm giáo 矛 gắng sức 力: nhiệm vụ.
受|ジュ|う(ける)|Nhận|Một tay trao, một tay 又 nhận: nhận.
段|ダン||Bậc; giai đoạn|Tay cầm gậy 殳 gõ từng bậc: 階段 cầu thang.
晩|バン||Buổi tối|Mặt trời 日 tránh 免 đi: buổi tối.
終|シュウ|お(わる)|Kết thúc|Sợi chỉ 糸 đến mùa đông 冬: kết thúc.
銀|ギン||Bạc|Kim loại 金 rất bền 艮: bạc, 銀行 ngân hàng.
帰|キ|かえ(る)|Về|Cầm chổi 帚 quét nhà đón về: về.
駅|エキ||Ga|Ngựa 馬 dừng nghỉ ở trạm: ga.
飛|ヒ|と(ぶ)|Bay|Hình chim giang đôi cánh bay: bay.
機|キ|はた|Máy; cơ hội|Cây 木 dệt cửi 幾: máy móc.
自|ジ, シ|みずか(ら)|Tự mình|Hình cái mũi, chỉ vào mũi là chỉ mình: tự.
女|ジョ, ニョ|おんな, め|Phụ nữ|Hình người phụ nữ quỳ gối.
誕|タン||Sinh ra|Lời 言 kéo dài 延 đến ngày sinh: 誕生日 sinh nhật.
読|ドク, トク|よ(む)|Đọc|Lời 言 rao 売 thành tiếng: đọc.
撮|サツ|と(る)|Chụp (ảnh)|Tay 扌 chụp nhanh nhất 最: chụp ảnh.
飯|ハン|めし|Cơm|Đồ ăn 食 làm lại 反: cơm, bữa ăn.
茶|チャ, サ||Trà|Cỏ 艹 trong nhà 人 trên cây 木: trà.
肉|ニク||Thịt|Hình miếng thịt có thớ: thịt.
魚|ギョ|さかな, うお|Cá|Hình con cá có đầu, vảy, đuôi: cá.
野|ヤ|の|Cánh đồng|Làng 里 mở rộng ra ngoài đồng 予: cánh đồng.
菜|サイ|な|Rau|Cỏ 艹 hái 采 về: rau.
映|エイ|うつ(る), は(える)|Chiếu; phản chiếu|Mặt trời 日 chiếu giữa 央: chiếu hình.
画|ガ, カク||Tranh; nét|Dùng nét vẽ khung ruộng 田: tranh, 映画 phim.
紙|シ|かみ|Giấy|Sợi 糸 ép thành tờ 氏: giấy.
緒|ショ, チョ|お|Đầu mối; dây|Sợi chỉ 糸 buộc người 者 lại: 一緒 cùng nhau.
貸|タイ|か(す)|Cho mượn|Thay 代 vỏ sò 貝 (tiền) cho người: cho mượn.
借|シャク|か(りる)|Mượn|Người 亻 xưa 昔 đi mượn: mượn.
送|ソウ|おく(る)|Gửi; tiễn|Đi 辶 mang theo đồ: gửi, tiễn.
花|カ|はな|Hoa|Cỏ 艹 biến hóa 化 thành bông: hoa.
父|フ|ちち|Cha|Bàn tay cầm rìu đi làm: cha.
小|ショウ|ちい(さい), こ, お|Nhỏ|Ba chấm nhỏ li ti: nhỏ.
古|コ|ふる(い)|Cũ|Mười 十 đời truyền miệng 口: xưa, cũ.
悪|アク, オ|わる(い)|Xấu|Trái tim 心 đứng sau 亜 xấu xa: xấu, ác.
暑|ショ|あつ(い)|Nóng (thời tiết)|Mặt trời 日 gắt trên đầu người 者: nóng.
寒|カン|さむ(い)|Lạnh (thời tiết)|Dưới mái nhà, cỏ quấn quanh người, băng 冫 giá: lạnh.
難|ナン|むずか(しい), かた(い)|Khó|Chim 隹 mắc kẹt giữa lửa: khó khăn.
易|イ, エキ|やさ(しい)|Dễ|Hình con tắc kè đổi màu dễ dàng: dễ.
面|メン|おも, おもて, つら|Mặt; bề mặt|Hình khuôn mặt trong khung: mặt. Trong 面白い (thú vị).
白|ハク, ビャク|しろ(い)|Trắng|Tia sáng mặt trời lúc bình minh: trắng.
美|ビ|うつく(しい)|Đẹp|Con dê 羊 to 大 béo tốt: đẹp.
静|セイ, ジョウ|しず(か)|Yên tĩnh|Màu xanh 青 và tranh giành 争 lắng xuống: yên tĩnh.
有|ユウ, ウ|あ(る)|Có|Tay cầm miếng thịt 月: có.
親|シン|おや, した(しい)|Cha mẹ; thân|Đứng 立 cạnh cây 木 nhìn 見 con: cha mẹ.
元|ゲン, ガン|もと|Gốc; ban đầu|Hai nét 二 trên người 儿: đầu, gốc.
桜|オウ|さくら|Hoa anh đào|Cây 木 dưới mái 冖 có cô gái 女: hoa anh đào.
好|コウ|す(き), この(む)|Thích|Người phụ nữ 女 ôm con 子: yêu thích.
嫌|ケン, ゲン|きら(い), いや|Ghét|Người phụ nữ 女 chê bai 兼: ghét.
楽|ガク, ラク|たの(しい)|Vui; nhạc|Cái trống nhỏ đặt trên giá gỗ 木: âm nhạc, vui.
絵|カイ, エ||Tranh|Sợi chỉ 糸 hội tụ 会 thành bức tranh: tranh.
漢|カン||Hán|Nước 氵 sông Hán: Hán, 漢字.
束|ソク|たば|Bó; hẹn|Bó gỗ 木 buộc quanh 口: bó, 約束 lời hẹn.
用|ヨウ|もち(いる)|Dùng|Cái thùng có đòn xách: dùng.
語|ゴ|かた(る)|Ngôn ngữ|Lời nói 言 của tôi 吾: ngôn ngữ, từ.
犬|ケン|いぬ|Chó|Hình con chó có chấm nhỏ là cái tai: chó.
猫|ビョウ|ねこ|Mèo|Thú 犭 kêu meo meo giữa ruộng mạ 苗: mèo.
箱|ソウ|はこ|Hộp|Tre 竹 đan thành hộp, nhìn nhau 相: hộp.
右|ウ, ユウ|みぎ|Phải|Tay 𠂇 cầm bát đưa lên miệng 口: bên phải.
左|サ|ひだり|Trái|Tay 𠂇 cầm thước của thợ 工: bên trái.
中|チュウ|なか|Giữa; trong|Mũi tên xuyên giữa hồng tâm: giữa.
隣|リン|とな(り), となる|Hàng xóm|Gò đất 阝 sát cạnh nhau: nhà bên cạnh.
公|コウ|おおやけ|Công cộng|Chia 八 phần riêng 厶 ra: chung, công.
園|エン|その|Vườn|Khung 囗 bao quanh khu vườn xanh 袁: vườn.
郵|ユウ||Bưu điện|Ấp 阝 có trạm chuyển thư: bưu điện.
便|ベン, ビン|たよ(り)|Tiện lợi; thư|Người 亻 sửa 更 cho thuận tiện: tiện lợi, thư.
局|キョク||Cục; sở|Thân người ngồi trong ô làm việc: cục, sở.
蔵|ゾウ|くら|Kho; giấu|Cỏ 艹 phủ lên kho chứa: kho, 冷蔵庫 tủ lạnh.
庫|コ, ク||Kho|Mái nhà 广 che chiếc xe 車: nhà kho.
窓|ソウ|まど|Cửa sổ|Lỗ 穴 trên tường nhìn thấy cả tâm 心: cửa sổ.
封|フウ, ホウ||Niêm phong|Đất 土 phủ kín cùng bàn tay 寸: phong, 封筒 phong bì.
筒|トウ|つつ|Ống|Tre 竹 rỗng, cùng 同 một dạng: ống.
兄|ケイ, キョウ|あに|Anh trai|Miệng 口 trên đôi chân 儿: anh lớn nói nhiều.
弟|テイ, ダイ, デ|おとうと|Em trai|Sợi dây quấn quanh cọc từng vòng thấp dần: em.
族|ゾク||Gia tộc|Cờ 方 và mũi tên 矢 của một dòng họ: tộc, 家族 gia đình.
全|ゼン|すべ(て), まった(く)|Toàn bộ|Người 人 đội ngọc 王 nguyên vẹn: toàn.
部|ブ||Bộ phận|Vùng đất 阝 chia ra từng phần: bộ phận.
簡|カン||Giản đơn|Thẻ tre 竹 ngắn gọn: đơn giản.
単|タン||Đơn lẻ|Hình cây vợt đơn lẻ: đơn giản, một mình.
遠|エン, オン|とお(い)|Xa|Đi 辶 xa trong chiếc áo dài 袁: xa.
速|ソク|はや(い), すみ(やか)|Nhanh|Đi 辶 gom lại 束 cho nhanh: nhanh.
遅|チ|おそ(い), おく(れる)|Chậm, muộn|Đi 辶 nặng nề như con tê giác 犀: chậm.
多|タ|おお(い)|Nhiều|Hai buổi tối 夕 chồng lên nhau: nhiều.
少|ショウ|すく(ない), すこ(し)|Ít|Hạt nhỏ 小 bớt đi một nét: ít.
天|テン|あめ, あま|Trời|Người 大 và nét ngang 一 trên đầu: trời.
雨|ウ|あめ|Mưa|Mái trời và những giọt mưa rơi: mưa.
雪|セツ|ゆき|Tuyết|Mưa 雨 đọng thành bông trắng: tuyết.
曇|ドン|くも(る)|Có mây|Mặt trời 日 bị đám mây 雲 che: nhiều mây.
季|キ||Mùa|Lúa 禾 và đứa trẻ 子 theo mùa: mùa, 季節.
節|セツ, セチ|ふし|Đốt; tiết|Cây tre 竹 có đốt: tiết, 季節 mùa.
春|シュン|はる|Mùa xuân|Mặt trời 日 sưởi cỏ cây nảy mầm: xuân.
夏|カ, ゲ|なつ|Mùa hè|Người đội nón bước chậm dưới nắng: hè.
秋|シュウ|あき|Mùa thu|Lúa 禾 chín vàng như lửa 火: thu.
冬|トウ|ふゆ|Mùa đông|Nước đóng băng 冫 cuối năm: đông.
祭|サイ|まつ(り)|Lễ hội|Tay dâng thịt lên bàn thờ 示: tế lễ, lễ hội.
欲|ヨク|ほ(しい), ほっ(する)|Muốn|Há miệng 欠 trước thung lũng 谷 đầy ắp: ham muốn.
遊|ユウ, ユ|あそ(ぶ)|Chơi|Đi 辶 phất cờ 方 cùng trẻ nhỏ 子: chơi.
泳|エイ|およ(ぐ)|Bơi|Nước 氵 dài 永 vô tận: bơi.
迎|ゲイ|むか(える)|Đón|Đi 辶 ra gặp người ngẩng đầu: đón.
疲|ヒ|つか(れる)|Mệt|Bệnh 疒 trên da 皮: mệt.
結|ケツ|むす(ぶ), ゆ(う)|Kết; thắt|Sợi chỉ 糸 buộc chặt 吉: kết.
婚|コン||Kết hôn|Người phụ nữ 女 lúc hoàng hôn 昏: hôn lễ, 結婚 kết hôn.
散|サン|ち(る), ち(らかす)|Rải; tản|Tay cầm gậy 攵 đánh hoa rụng tản ra: tản, rải.
池|チ|いけ|Ao|Nước 氵 ngoằn ngoèo như rắn 也: ao.
空|クウ|そら, あ(く), から|Bầu trời; trống|Cái hang 穴 do thợ 工 đào rỗng: không, trời.
港|コウ|みなと|Cảng|Nước 氵 và con đường chung 巷: cảng.
仕|シ, ジ|つか(える)|Làm việc|Người 亻 làm quan 士: làm việc, 仕事.
消|ショウ|き(える), け(す)|Tắt; xóa|Nước 氵 làm nhỏ 肖 dần: tắt, xóa.
開|カイ|ひら(く), あ(ける)|Mở|Hai tay kéo then cài cổng 門: mở.
閉|ヘイ|し(める), と(じる)|Đóng|Cổng 門 cài then 才: đóng.
急|キュウ|いそ(ぐ)|Vội|Tay đuổi theo người, lòng 心 nôn nóng: vội.
待|タイ|ま(つ)|Đợi|Bước 彳 chờ ở chùa 寺: đợi.
止|シ|と(まる), と(める)|Dừng|Hình bàn chân đứng lại: dừng.
曲|キョク|ま(がる)|Cong; bản nhạc|Hình cái ống cong: cong, khúc nhạc.
伝|デン|つた(える), つた(わる)|Truyền đạt|Người 亻 chuyển lời 云: truyền.
呼|コ|よ(ぶ)|Gọi|Miệng 口 thở ra 乎: gọi.
信|シン||Tin|Người 亻 giữ lời 言: tin, tín.
号|ゴウ||Số; tín hiệu|Miệng 口 kêu to 丂: hiệu, số.
地|チ, ジ||Đất|Đất 土 ngoằn ngoèo như rắn 也: địa, 地図 bản đồ.
図|ズ, ト|はか(る)|Bản vẽ|Khung 囗 vẽ lại cảnh vật: bản đồ, hình.
座|ザ|すわ(る)|Ngồi|Hai người ngồi trên đất 土 dưới mái 广: ngồi.
置|チ|お(く)|Đặt|Lưới 罒 đặt thẳng 直 xuống: đặt.
作|サク, サ|つく(る)|Làm|Người 亻 làm ra 乍: làm.
売|バイ|う(る)|Bán|Người sĩ 士 mở miệng rao bán: bán.
知|チ|し(る)|Biết|Miệng 口 nói nhanh như mũi tên 矢: biết.
研|ケン|と(ぐ)|Mài; nghiên cứu|Đá 石 mài cho phẳng: nghiên cứu.
究|キュウ|きわ(める)|Cùng cực; nghiên cứu|Hang 穴 chui sâu đến chín 九 tầng: nghiên cứu.
資|シ||Tài nguyên|Vỏ sò 貝 (tiền) xếp thứ hai 次: tài sản, tư liệu.
製|セイ||Chế tạo|Cắt 制 vải thành áo 衣: chế tạo.
品|ヒン|しな|Hàng; phẩm|Ba cái miệng 口 nếm thử hàng: sản phẩm.
刻|コク|きざ(む)|Khắc; thời khắc|Dao 刂 khắc lên khúc xương 亥: khắc, 時刻表 bảng giờ.
表|ヒョウ|おもて, あらわ(す)|Bảng; mặt ngoài|Áo 衣 phô ra ngoài: biểu, bảng.
服|フク||Quần áo|Mặc lên thân thể 月 theo lệnh 卩: quần áo.
靴|カ|くつ|Giày|Da thuộc 革 biến hóa 化 thành đôi giày: giày.
独|ドク|ひと(り)|Một mình|Con chó 犭 và con sâu 虫 sống đơn độc: một mình.
身|シン|み|Thân; cơ thể|Hình người có bụng to: thân thể.
降|コウ|お(りる), ふ(る)|Xuống; rơi|Bậc thang 阝 và bước chân đi xuống: xuống, rơi.
浴|ヨク|あ(びる)|Tắm|Nước 氵 đổ vào thung lũng 谷: tắm.
若|ジャク, ニャク|わか(い)|Trẻ|Cỏ 艹 non bên bàn tay phải 右: trẻ.
長|チョウ|なが(い)|Dài; trưởng|Ông già tóc dài chống gậy: dài, trưởng.
短|タン|みじか(い)|Ngắn|Mũi tên 矢 và hạt đậu 豆 đều ngắn nhỏ: ngắn.
暗|アン|くら(い)|Tối|Mặt trời 日 khuất, chỉ còn nghe tiếng 音: tối.
背|ハイ|せ, せい|Lưng; chiều cao|Hai người quay lưng 北 vào nhau, thịt 月: lưng.
頭|トウ, ズ|あたま, かしら|Đầu|Cái đậu 豆 đặt trên trang 頁: đầu.
体|タイ|からだ|Cơ thể|Người 亻 và gốc 本: cơ thể.
顔|ガン|かお|Mặt|Trang 頁 mặt có vẻ đẹp 彦: khuôn mặt.
髪|ハツ|かみ|Tóc|Phần tóc 髟 dài rũ xuống: tóc.
目|モク, ボク|め|Mắt|Hình con mắt dựng đứng: mắt.
覚|カク|おぼ(える), さ(める)|Nhớ; tỉnh|Học 学 rồi nhìn 見 lại: nhớ, thức tỉnh.
忘|ボウ|わす(れる)|Quên|Lòng 心 đã mất 亡: quên.
払|フツ|はら(う)|Trả tiền; quét|Tay 扌 đưa tiền ra: trả tiền.
返|ヘン|かえ(す), かえ(る)|Trả lại|Đi 辶 quay trở lại 反: trả lại.
脱|ダツ|ぬ(ぐ)|Cởi|Thịt 月 thoát ra khỏi áo: cởi.
心|シン|こころ|Tim; lòng|Hình trái tim: tâm.
配|ハイ|くば(る)|Chia; lo|Rượu 酉 chia cho từng người 己: phân phát, lo lắng.
残|ザン|のこ(る)|Còn lại|Xương 歹 còn sót lại: còn lại.
薬|ヤク|くすり|Thuốc|Cỏ 艹 mang lại niềm vui 楽: thuốc.
院|イン||Viện|Gò 阝 có tường bao quanh: viện, 病院 bệnh viện.
熱|ネツ|あつ(い)|Nóng; sốt|Lửa 灬 nung nấu: nhiệt, sốt.
邪|ジャ||Tà; ác|Răng 牙 nhọn ở làng 阝: tà, 風邪 cảm lạnh.
喉|コウ|のど|Cổ họng|Miệng 口 và 侯: họng.
呂|ロ, リョ||Sống lưng (風呂)|Hai khoanh xương sống nối nhau: dùng trong 風呂 bồn tắm.
宿|シュク|やど, やど(る)|Trọ; nghỉ|Người 亻 nghỉ dưới mái 宀 trên chiếu 百: trọ, 宿題 bài tập.
題|ダイ||Đề|Trang 頁 chỉ đúng 是: đề bài.
試|シ|ため(す), こころ(みる)|Thử|Lời 言 theo mẫu 式: thử, thi.
験|ケン, ゲン||Nghiệm|Ngựa 馬 đem ra thử nghiệm: kiểm tra, 試験 kỳ thi.
弾|ダン|ひ(く), はず(む)|Đàn; đạn|Cung 弓 bật dây: gảy đàn.
集|シュウ|あつ(まる), あつ(める)|Tập hợp|Chim 隹 đậu trên cây 木: tập hợp.
捨|シャ|す(てる)|Vứt|Tay 扌 buông bỏ nhà 舎: vứt.
運|ウン|はこ(ぶ)|Vận chuyển; vận|Xe 軍 đi 辶: vận chuyển, vận may.
予|ヨ||Trước; dự|Hình cái thoi dệt đưa sẵn: dự định, trước.
趣|シュ|おもむき|Sở thích; vẻ|Chạy 走 theo cái mình lấy 取: thú vui, 趣味 sở thích.
記|キ|しる(す)|Ghi|Lời 言 của bản thân 己 ghi lại: ghi chép.
現|ゲン|あらわ(れる)|Hiện ra|Ngọc 王 hiện ra khi nhìn 見: hiện.
慣|カン|な(れる), な(らす)|Quen|Lòng 忄 xuyên suốt 貫: quen.
登|トウ, ト|のぼ(る)|Leo|Hai chân 癶 bước lên cái bát 豆: leo.
泊|ハク|と(まる), と(める)|Trọ lại|Nước 氵 trắng 白 xóa, ghé lại: ngủ trọ.
掃|ソウ|は(く)|Quét|Tay 扌 cầm chổi 帚: quét.
除|ジョ, ジ|のぞ(く)|Trừ; bỏ|Gò đất 阝 dọn sạch: loại bỏ, 掃除 dọn dẹp.
濯|タク||Giặt|Nước 氵 gột sạch: giặt, 洗濯 giặt giũ.
練|レン|ね(る)|Rèn luyện|Sợi chỉ 糸 chọn lọc 柬: luyện tập.
眠|ミン|ねむ(る), ねむ(い)|Ngủ|Mắt 目 nhắm lại, người dân 民 nằm xuống: ngủ.
弱|ジャク|よわ(い)|Yếu|Hai cây cung 弓 gập mềm: yếu.
相|ソウ, ショウ|あい|Nhau|Mắt 目 nhìn cây 木: nhìn nhau, tương.
撲|ボク|なぐ(る)|Đập|Tay 扌 đập mạnh: dùng trong 相撲 sumo.
度|ド, ト, タク|たび|Lần; mức độ|Mái 广 và bàn tay đo đạc: độ, lần.
北|ホク|きた|Bắc|Hai người quay lưng vào nhau: bắc.
富|フ, フウ|と(む), とみ|Giàu|Mái nhà 宀 đầy rượu 畐: giàu, 富士山 núi Phú Sĩ.
士|シ||Kẻ sĩ|Người đứng thẳng trên đất: sĩ, 富士山.
要|ヨウ|い(る), かなめ|Cần; cốt yếu|Người phụ nữ 女 chống tay vào eo: cần, cốt yếu.
直|チョク, ジキ|なお(す), ただ(ちに)|Thẳng; sửa|Mười 十 con mắt 目 nhìn thẳng: thẳng, sửa.
修|シュウ, シュ|おさ(める)|Sửa; tu|Người 亻 gột rửa sạch sẽ: sửa, tu.
僕|ボク||Tôi (nam)|Người 亻 hầu cận: cách nam giới xưng tôi.
君|クン|きみ|Bạn; vua|Miệng 口 của người cai trị 尹: bạn, quân.
主|シュ|ぬし, おも|Chủ|Ngọn đèn đứng yên một chỗ: chủ.
奥|オウ|おく|Bên trong|Sâu trong nhà: bên trong, 奥さん vợ người khác.
夫|フ, フウ|おっと|Chồng|Người 大 cài trâm 一: chồng.
妻|サイ|つま|Vợ|Tay cầm chổi bên người nữ 女: vợ.
思|シ|おも(う)|Nghĩ|Ruộng 田 trong tim 心: suy nghĩ.
言|ゲン, ゴン|い(う), こと|Nói|Lời từ miệng 口 thốt ra: nói.
勝|ショウ|か(つ), まさ(る)|Thắng|Sức 力 vượt lên trên: thắng.
負|フ|ま(ける), お(う)|Thua; gánh|Người cõng vỏ sò 貝 (nợ): thua, gánh.
役|ヤク, エキ||Vai trò|Bước 彳 cầm gậy 殳: vai trò, phục dịch.
動|ドウ|うご(く)|Động|Dùng sức 力 chuyển vật nặng 重: động.
政|セイ, ショウ|まつりごと|Chính trị|Cầm roi 攵 chỉnh cho đúng 正: chính trị.
治|ジ, チ|おさ(める), なお(る)|Cai trị; chữa|Nước 氵 và công cụ 台: trị, chữa.
経|ケイ|へ(る)|Kinh; trải qua|Sợi chỉ 糸 dọc xuyên qua: kinh tế, trải qua.
済|サイ|す(む), す(ます)|Xong; cứu giúp|Nước 氵 giúp cho đủ đầy: cứu, xong.
選|セン|えら(ぶ)|Chọn|Đi 辶 chọn trong một nhóm: chọn.
挙|キョ|あ(げる)|Nêu; giơ|Nhiều tay cùng giơ lên: nêu, giơ, 選挙 bầu cử.
組|ソ|く(む), くみ|Nhóm; lắp|Sợi chỉ 糸 xếp từng tầng: nhóm, tổ.
意|イ||Ý|Tiếng 音 trong lòng 心: ý.
普|フ||Phổ biến|Mặt trời 日 chiếu khắp nơi: phổ biến.
通|ツウ, ツ|とお(る), かよ(う)|Thông; đi qua|Đi 辶 xuyên qua: thông, đi lại.
履|リ|は(く)|Mang (giày); lý lịch|Thân người 尸 bước đi, xỏ giày: mang.
被|ヒ|こうむ(る)|Bị; mặc|Áo 衤 phủ lên da 皮: bị, mặc.
帽|ボウ||Mũ|Khăn 巾 trùm lên đầu: mũ.
眼|ガン|め|Mắt|Mắt 目 vững chắc 艮: nhãn, 眼鏡 kính mắt.
鏡|キョウ|かがみ|Gương|Kim loại 金 soi cảnh vật: gương, kính.
賃|チン||Tiền công|Nhận việc 任 bằng tiền 貝: tiền thuê, 家賃 tiền nhà.
台|ダイ, タイ||Đài; bệ|Miệng 口 đứng trên bệ cao: đài, bệ; đếm máy móc, xe.
回|カイ|まわ(る)|Lần; vòng|Hình xoáy tròn: vòng, lần.
押|オウ|お(す)|Ấn|Tay 扌 ấn xuống: ấn.
触|ショク|ふ(れる)|Chạm|Sừng 角 chạm vào con sâu 虫: chạm.
渡|ト|わた(る), わた(す)|Qua|Nước 氵 bước qua 度: sang sông.
橋|キョウ|はし|Cầu|Cây 木 cao 喬 bắc ngang: cầu.
交|コウ|まじ(わる)|Giao nhau|Người bắt chéo hai chân: giao nhau.
差|サ|さ(す)|Sai; chênh|Hai thứ chênh nhau, tay cầm dụng cụ 工 đo: sai khác.
点|テン||Điểm|Bói 占 và lửa 灬 chấm điểm: điểm.
角|カク|かど, つの|Góc; sừng|Hình cái sừng nhọn: sừng, góc.
釣|チョウ|つ(る)|Câu cá|Kim loại 金 móc mồi: câu cá.
紹|ショウ||Giới thiệu|Sợi chỉ 糸 nối kết 召: giới thiệu.
介|カイ||Môi giới|Người 人 đứng giữa hai bên: giới thiệu.
案|アン||Phương án|Cây 木 dưới mái 安: phương án, 案内 hướng dẫn.
内|ナイ|うち|Trong|Người 人 vào trong khung 冂: bên trong.
説|セツ|と(く)|Giải thích|Lời 言 nói vui vẻ 兑: giải thích, thuyết.
弁|ベン||Biện; cơm hộp|Hai tay 廾 cầm cái riêng 厶: biện, 弁当 cơm hộp.
当|トウ|あ(たる)|Đúng; trúng|Trên ruộng 田 nhỏ trúng đích: đương, trúng.
越|エツ|こ(す), こ(える)|Vượt|Chạy 走 vượt qua cây rìu 戉: vượt.
片|ヘン|かた|Một bên; mảnh|Nửa chữ gỗ 木: mảnh, một bên.
祝|シュク|いわ(う)|Chúc mừng|Bàn thờ 示 và người anh 兄 cầu khấn: chúc mừng.
荷|カ|に|Hành lý|Cỏ 艹 mang vác 何 theo: hành lý.
葉|ヨウ|は|Lá|Cỏ 艹 trên cây 木 giữa đời 世: lá.
礼|レイ||Lễ|Bàn thờ 示 và người cúi chào: lễ nghi.
考|コウ|かんが(える)|Nghĩ|Ông già 耂 cúi người suy nghĩ: khảo, nghĩ.
田|デン|た|Ruộng|Hình thửa ruộng chia ô: ruộng.
舎|シャ||Nhà; trọ|Mái nhà trên nền đất: nhà, 田舎 miền quê.
暇|カ|ひま|Rảnh|Mặt trời 日 nghỉ ngơi: rảnh rỗi.
取|シュ|と(る)|Lấy|Tay 又 nắm lấy cái tai 耳: lấy.
故|コ|ゆえ|Cũ; cố ý|Gậy 攵 và xưa 古: cố, lý do.
宝|ホウ|たから|Báu|Mái nhà 宀 giấu ngọc 玉: bảo vật.
将|ショウ||Tướng; sắp|Tay 寸 cầm quân kỳ: tướng, sắp.
夢|ム|ゆめ|Giấc mơ|Đêm 夕 mắt mờ phủ cỏ: mộng, giấc mơ.
給|キュウ||Cấp; lương|Sợi chỉ 糸 hợp 合 lại: cấp, lương.
卒|ソツ||Tốt nghiệp|Áo 衣 thêm chữ 十: tốt nghiệp.
願|ガン|ねが(う)|Cầu mong; xin|Đầu 頁 hướng về nguồn 原 mà cầu xin: nguyện, お願いします.
授|ジュ|さず(ける)|Trao; truyền dạy|Tay 扌 trao 受 cho người khác: trao, 授業 giờ học.
東|トウ|ひがし|Đông|Mặt trời 日 mọc sau cành cây 木: hướng đông.
京|キョウ, ケイ||Kinh đô|Hình tòa lầu cao ở kinh đô: 東京 Tokyo.
写|シャ|うつ(す)|Chụp; sao chép|Mái nhà 冖 phản chiếu hình ảnh: chụp, 写真 ảnh.
真|シン|ま|Thật|Muỗng 匕 và đỉnh 鼎 thật sự: chân thật, 写真 ảnh.
問|モン|と(う), とん|Hỏi|Miệng 口 hỏi trước cổng 門: hỏi, 質問 câu hỏi.
店|テン|みせ|Cửa hàng|Mái 广 che chỗ chiếm 占 để bán hàng: cửa hàng.
町|チョウ|まち|Phố; thị trấn|Ruộng 田 và con đường 丁: phố, thị trấn.
姉|シ|あね|Chị gái|Người nữ 女 đi chợ 市 trước: chị.
庭|テイ|にわ|Vườn; sân|Mái 广 che khoảng sân triều đình 廷: sân vườn.
屋|オク|や|Nhà; cửa hiệu|Thân người 尸 đến ở 至 trên đất: nhà, 部屋 phòng.
牛|ギュウ|うし|Bò|Hình đầu con bò có hai sừng: bò.
乳|ニュウ|ちち, ち|Sữa|Tay mẹ bế đứa trẻ bú: sữa, 牛乳 sữa bò.
枚|マイ||Tờ; tấm (đếm vật mỏng)|Cây 木 gõ nhẹ 攵 từng tấm mỏng: đếm tờ, tấm.
幹|カン|みき|Thân cây; trục chính|Thân cây vươn lên xuyên qua: trục chính, 新幹線 tàu Shinkansen.
線|セン||Đường; tuyến|Sợi chỉ 糸 uốn thành suối 泉: đường, tuyến.
客|キャク, カク||Khách|Dưới mái nhà 宀 đón mỗi người 各: khách.
暖|ダン|あたた(かい)|Ấm|Mặt trời 日 giúp 爰 sưởi ấm: ấm áp.
涼|リョウ|すず(しい)|Mát|Nước 氵 ở kinh đô 京 trời mát: mát mẻ.
痛|ツウ|いた(い)|Đau|Bệnh 疒 đi qua người 甬: đau.
健|ケン|すこ(やか)|Khỏe mạnh|Người 亻 dựng 建 nên thân thể: khỏe, 健康.
康|コウ||Bình an|Mái nhà 广 yên ổn, hạt gạo rơi đủ: an khang, 健康 sức khỏe.
工|コウ, ク||Thợ; công|Hình cái thước thợ: công, 工場 nhà máy.
場|ジョウ|ば|Nơi; bãi|Đất 土 phơi nắng 昜: bãi, nơi chốn.
早|ソウ, サッ|はや(い)|Sớm|Mặt trời 日 vừa nhô lên trên 十 cây: sớm.
力|リョク, リキ|ちから|Sức|Hình cánh tay gồng cơ bắp: sức.
合|ゴウ, ガッ|あ(う)|Hợp; vừa|Cái nắp 人 đậy vừa miệng 口: hợp, khớp.
械|カイ||Máy móc|Cây 木 làm khuôn 戒 cho máy: 機械 máy móc.
興|コウ, キョウ|おこ(る)|Hứng thú; hưng khởi|Nhiều tay cùng nâng lên: hứng thú, 興味 quan tâm.
赤|セキ, シャク|あか(い)|Đỏ|Đất 土 cháy lửa 火 đỏ rực: đỏ.
黒|コク|くろ(い)|Đen|Lò 里 cháy lửa 灬 ám khói đen: đen.
広|コウ|ひろ(い)|Rộng|Mái 广 che cái riêng 厶 rộng rãi: rộng.
方|ホウ|かた|Hướng; phía; người|Hình lá cờ chỉ hướng: phương hướng, cách.
暮|ボ|く(らす), く(れる)|Sống; hoàng hôn|Mặt trời 日 lặn sau đám cỏ 莫: chiều tối, 暮らす sinh sống.`.split("\n").map(l=>{const [c,...r]=l.split("|");return [c,r]})));

// Bổ sung chữ Hán cho từ vựng Sơ cấp 2 (Bài 26–50)
Object.assign(KH,Object.fromEntries("燃nhiên 都đô 参tham 加gia 席tịch 絡lạc 談đàm 由do 走tẩu 器khí 特đặc 技kỹ 勤cần 忙mang 優ưu 壊hoại 割cát 折chiết 破phá 汚ô 落lạc 棚bằng 危nguy 困khốn 貼thiếp 掛quải 飾sức 並tịnh 植thực 戻lệ 準chuẩn 備bị 壁bích 次thứ 続tục 決quyết 就tựu 職chức 定định 標tiêu 咳khái 腹phúc 注chú 射xạ 診chẩn 察sát 養dưỡng 報báo 路lộ 識thức 禁cấm 駐trú 非phi 常thường 口khẩu 障chướng 守thủ 規quy 則tắc 険hiểm 煙yên 焼thiêu 煮chử 炒sao 混hỗn 卵noãn 砂sa 糖đường 塩diêm 醤tương 油du 鍋oa 温ôn 順thuận 完hoàn 成thành 営doanh 値trị 届giới 文văn 色sắc 似tự 増tăng 減giảm 伸thân 太thái 痩sấu 効hiệu 努nỗ 最tối 必tất 褒bao 叱sất 誘dụ 頼lại 踏đạp 盗đạo 泥nê 棒bổng 建kiến 発phát 輸thâu 翻phiên 訳dịch 世thế 界giới 歴lịch 史sử 整chỉnh 類loại 昔tích 得đắc 苦khổ 影ảnh 坊phường 欠khiếm 退thoái 渋sáp 滞trệ 震chấn 停đình 迷mê 惑hoặc 謝tạ 確xác 認nhận 法pháp 質chất 答đáp 正chính 違vi 嘘hư 果quả 格cách 績tích 贈tặng 招chiêu 助trợ 司ti 同đồng 僚liêu 輩bối 貯trữ 免miễn 許hứa 申thân 込nhập 応ứng 援viện 具cụ 駄đà 雲vân 晴tình 倒đảo 悲bi 丈trượng 複phức 重trọng 軽khinh 厚hậu 薄bạc 延diên 期kỳ 緊khẩn 警cảnh 救cứu 逃đào 避tị 不bất 保bảo 領lĩnh 収thu 到đáo 検kiểm 査tra 育dục 噂tốn 告cáo 景cảnh 価giá 市thị 展triển 張trương 課khóa 秘bí 算toán 費phí 可khả 召triệu 覧lãm 存tồn 様dạng 利lợi 伺tứ 拝bái 恐khủng 承thừa 失thất".split(" ").map(x=>[x[0],x.slice(1)])));
Object.assign(KD,Object.fromEntries(`燃|ネン|も(える), も(やす)|Cháy|Lửa 火 và 然 bùng lên: cháy, 燃えるごみ rác cháy được.
都|ト, ツ|みやこ|Đô thị; thủ đô|Người 者 tụ tập trong ấp 阝: đô thị, 東京都.
参|サン|まい(る)|Tham gia; đi (khiêm nhường)|Hình người cài ba cây trâm lên tóc: tham gia.
加|カ|くわ(える)|Thêm|Sức 力 thêm vào miệng 口: thêm, 参加 tham gia.
席|セキ||Chỗ ngồi|Mái 广 che tấm chiếu 巾 trải ra: chỗ ngồi, 出席 có mặt.
絡|ラク|から(む)|Nối; liên lạc|Sợi chỉ 糸 nối các nơi 各: liên lạc.
談|ダン||Trò chuyện|Lời nói 言 nóng như lửa 炎: bàn bạc, 相談.
由|ユ, ユウ|よし|Lý do|Hình cái bình có miệng: lý do, do bởi.
走|ソウ|はし(る)|Chạy|Hình người dang tay và bước chân: chạy.
器|キ|うつわ|Đồ dùng; nhạc cụ|Bốn cái miệng 口 vây quanh con chó 犬: đồ dùng, 楽器 nhạc cụ.
特|トク||Đặc biệt|Con bò 牛 đứng ở chùa 寺: đặc biệt, 特技.
技|ギ|わざ|Kỹ năng|Tay 扌 cầm nhánh cây 支: kỹ năng.
勤|キン, ゴン|つと(める)|Đi làm; chuyên cần|Dùng sức 力 cần mẫn: 通勤 đi làm.
忙|ボウ|いそが(しい)|Bận|Lòng 忄 mất 亡 bình tĩnh vì bận rộn: bận.
優|ユウ|やさ(しい), すぐ(れる)|Hiền; ưu tú|Người 亻 biết lo nghĩ cho người khác: hiền, ưu tú.
壊|カイ|こわ(れる), こわ(す)|Hỏng; phá|Đất 土 sụp đổ tan nát: hỏng.
割|カツ|わ(る), わ(れる)|Chia; vỡ|Dao 刂 cắt gây hại 害: chia, làm vỡ.
折|セツ|お(る), お(れる)|Gãy; gập|Tay 扌 dùng rìu 斤 bẻ gãy: gãy.
破|ハ|やぶ(れる), やぶ(る)|Rách; phá|Đá 石 va vào da 皮 làm rách: phá, rách.
汚|オ|よご(れる), きたな(い)|Bẩn|Nước 氵 bẩn đọng lại: bẩn.
落|ラク|お(ちる), お(とす)|Rơi|Lá cỏ 艹 rụng xuống nước 氵: rơi.
棚|ホウ|たな|Kệ|Gỗ 木 xếp cạnh nhau 朋: cái kệ.
危|キ|あぶ(ない)|Nguy hiểm|Người đứng trên vách đá nhìn xuống: nguy hiểm.
困|コン|こま(る)|Khó khăn|Cây 木 bị nhốt trong khung 囗: khốn đốn, gặp rắc rối.
貼|チョウ|は(る)|Dán|Tiền 貝 chiếm 占 chỗ: dán.
掛|カ|か(ける), か(かる)|Treo|Tay 扌 treo lên cao: treo.
飾|ショク|かざ(る)|Trang trí|Đồ ăn 食 bày biện cạnh tấm khăn 巾: trang trí.
並|ヘイ|なら(べる), なら(ぶ)|Xếp hàng|Hai người đứng cạnh nhau: xếp hàng.
植|ショク|う(える)|Trồng|Cây 木 cắm thẳng 直 xuống đất: trồng.
戻|レイ|もど(す), もど(る)|Quay lại; đặt lại|Cửa 戸 mở cho con chó 大 chạy về: quay lại.
準|ジュン||Chuẩn mực|Nước 氵 phẳng như chim 隹 đậu: chuẩn, 準備.
備|ビ|そな(える)|Chuẩn bị|Người 亻 sắm đủ đồ dùng: chuẩn bị.
壁|ヘキ|かべ|Tường|Đất 土 xây thành vách 辟: tường.
次|ジ, シ|つぎ, つ(ぐ)|Kế tiếp|Há miệng 欠 gọi người kế: kế tiếp.
続|ゾク|つづ(く), つづ(ける)|Tiếp tục|Sợi chỉ 糸 nối liền không đứt: tiếp tục.
決|ケツ|き(める), き(まる)|Quyết định|Nước 氵 chảy dứt khoát về một phía: quyết.
就|シュウ, ジュ|つ(く)|Nhận chức; đạt|Kinh đô 京 và nét 尤 vươn lên: tựu, 就職 đi làm.
職|ショク||Nghề; chức vụ|Tai 耳 nghe lệnh, tay cầm giáo 戈: chức vụ, 職業 nghề.
定|テイ, ジョウ|さだ(める)|Định; cố định|Mái nhà 宀 vững vàng, đứng thẳng 正: định.
標|ヒョウ||Dấu hiệu; mục tiêu|Cây 木 cắm làm dấu 票: tiêu, 目標 mục tiêu.
咳|ガイ|せき|Ho|Miệng 口 phát ra tiếng 亥: ho.
腹|フク|はら|Bụng|Thịt 月 trải rộng 复: bụng.
注|チュウ|そそ(ぐ)|Rót; chú ý|Nước 氵 rót vào ly của chủ 主: rót, chú ý.
射|シャ|い(る)|Bắn; tiêm|Thân người 身 kéo cung 寸: bắn, 注射 tiêm.
診|シン|み(る)|Chẩn đoán|Lời hỏi 言 để xem xét kỹ 㐱: khám bệnh.
察|サツ||Quan sát|Dưới mái nhà 宀 xem xét kỹ lễ tế 祭: quan sát.
養|ヨウ|やしな(う)|Nuôi dưỡng|Dê 羊 được cho ăn 食 đầy đủ: nuôi dưỡng.
報|ホウ|むく(いる)|Thông báo; báo đáp|Hình người bị còng 幸 và quỳ 卩: báo, 報告 báo cáo.
路|ロ|じ|Đường|Bàn chân 足 bước từng bước 各: đường, 道路.
識|シキ||Nhận biết|Lời 言 giúp nhận ra âm 音 và vũ khí 戈: tri thức, 標識 biển báo.
禁|キン||Cấm|Hai cây 林 dưới bàn thờ 示: khu cấm, 禁止 cấm.
駐|チュウ||Đỗ; đóng quân|Ngựa 馬 dừng lại ở chỗ chủ 主: đỗ, 駐車.
非|ヒ||Không; phi|Hai cánh chim xòe ngược nhau: phi, 非常口 lối thoát hiểm.
常|ジョウ|つね|Thường; luôn|Khăn 巾 dưới mái 尚: thường.
口|コウ, ク|くち|Miệng; cửa|Hình cái miệng há: miệng, cửa ra vào.
障|ショウ|さわ(る)|Cản trở; hỏng|Gò 阝 chắn đường 章: chướng ngại, 故障 hỏng hóc.
守|シュ, ス|まも(る)|Giữ; bảo vệ|Dưới mái nhà 宀 giữ gìn bằng tay 寸: bảo vệ.
規|キ||Quy tắc|Chồng 夫 nhìn 見 theo khuôn phép: quy tắc.
則|ソク||Quy tắc; phép tắc|Vỏ sò 貝 và dao 刂 phân định luật lệ: tắc, 規則.
険|ケン|けわ(しい)|Hiểm trở|Gò 阝 dốc đứng, nhiều người 僉 mạo hiểm: hiểm, 危険.
煙|エン|けむり, けむ(い)|Khói|Lửa 火 và nắp đậy 垔: khói, 禁煙.
焼|ショウ|や(く), や(ける)|Nướng; cháy|Lửa 火 đốt cao 尭: nướng.
煮|シャ|に(る), に(える)|Nấu, kho|Lửa 灬 nấu cho người 者: nấu.
炒|ショウ|いた(める)|Xào|Lửa 火 và ít dầu 少: xào.
混|コン|ま(ぜる), ま(じる), こ(む)|Trộn; đông đúc|Nước 氵 hòa lẫn nhau 昆: trộn.
卵|ラン|たまご|Trứng|Hình hai quả trứng trong ổ: trứng.
砂|サ, シャ|すな|Cát|Đá 石 vụn nhỏ 少: cát.
糖|トウ||Đường|Gạo 米 ngọt như món 唐: đường, 砂糖.
塩|エン|しお|Muối|Đất 土 và nước biển phơi khô: muối.
醤|ショウ||Tương|Rượu 酉 ủ lâu và thịt: tương, 醤油.
油|ユ|あぶら|Dầu|Nước 氵 chảy ra từ lý do 由: dầu.
鍋|カ|なべ|Nồi|Kim loại 金 làm cái nồi sâu: nồi.
温|オン|あたた(かい), あたた(める)|Ấm|Nước 氵 trong bát 皿 dưới nắng: ấm.
順|ジュン||Thứ tự; thuận|Dòng 川 chảy lần lượt trước trang 頁: thuận, 手順 các bước.
完|カン||Hoàn thành|Mái nhà 宀 đã xong phần đầu 元: hoàn thành.
成|セイ, ジョウ|な(る)|Thành; trở thành|Cây rìu 戈 làm nên việc lớn: thành.
営|エイ|いとな(む)|Kinh doanh|Nhiều ánh đèn trên mái: doanh, 営業.
値|チ|ね, あたい|Giá|Người 亻 thẳng thắn 直 định giá: giá trị, 値段.
届||とど(く), とど(ける)|Đến nơi; chuyển đến|Thân người 尸 đến tận cửa: đến nơi.
文|ブン, モン|ふみ|Văn; câu|Hình người xăm hoa văn trên ngực: văn, câu.
色|ショク, シキ|いろ|Màu|Người 人 đỏ mặt 巴: màu sắc.
似|ジ|に(る)|Giống|Người 亻 dùng mẫu 以 làm theo: giống.
増|ゾウ|ふ(える), ま(す)|Tăng|Đất 土 chồng thêm tầng 曽: tăng.
減|ゲン|へ(る), へ(らす)|Giảm|Nước 氵 rút đi hết 咸: giảm.
伸|シン|の(びる), の(ばす)|Duỗi; dài ra|Người 亻 duỗi dài 申: duỗi.
太|タイ, タ|ふと(い), ふと(る)|To; béo|Người to 大 thêm một chấm: to, béo.
痩|ソウ|や(せる)|Gầy|Người bệnh 疒 gầy nhỏ: gầy.
効|コウ|き(く)|Hiệu quả|Giao 交 sức 力: có tác dụng.
努|ド|つと(める)|Nỗ lực|Người làm 奴 gắng sức 力: nỗ lực.
最|サイ|もっと(も)|Nhất|Che 冃 trước tay lấy 取: nhất, 最近 gần đây.
必|ヒツ|かなら(ず)|Nhất định|Trái tim 心 bị gạch dọc quyết tâm: nhất định.
褒|ホウ|ほ(める)|Khen|Áo 衣 chùm lên chữ bảo 保: khen ngợi.
叱|シツ|しか(る)|Mắng|Miệng 口 nói gay gắt 七: mắng.
誘|ユウ|さそ(う)|Mời; rủ|Lời nói 言 ngọt ngào dẫn dắt 秀: rủ rê.
頼|ライ|たの(む), たよ(る)|Nhờ; dựa vào|Bó 束 hàng và trang 頁: nhờ cậy.
踏|トウ|ふ(む)|Giẫm|Chân 足 đạp lên nhiều lớp 沓: giẫm.
盗|トウ|ぬす(む)|Ăn trộm|Kẻ thèm 次 nhìn đĩa 皿: ăn cắp.
泥|デイ|どろ|Bùn|Nước 氵 và đất sình 尼: bùn, 泥棒 kẻ trộm.
棒|ボウ||Gậy|Cây 木 dùng làm gậy 奉: gậy, 泥棒 kẻ trộm.
建|ケン, コン|た(てる), た(つ)|Xây dựng|Cây bút 聿 vẽ đường 廴 để xây: xây dựng.
発|ハツ, ホツ||Phát ra; xuất phát|Hai chân 癶 bước đi cùng cung tên: phát ra, xuất phát.
輸|ユ||Vận chuyển|Xe 車 chở hàng sang nơi khác 俞: vận chuyển, 輸出 xuất khẩu.
翻|ホン|ひるがえ(る)|Lật; dịch|Cánh 羽 lật qua lật lại 番: dịch, 翻訳.
訳|ヤク|わけ|Dịch; lý do|Lời nói 言 chuyển sang dạng khác 尺: dịch.
世|セ, セイ|よ|Đời; thế giới|Ba chục năm nối nhau là một đời: thế hệ, thế giới.
界|カイ||Giới hạn; thế giới|Ruộng 田 chia ranh giới 介: giới, 世界 thế giới.
歴|レキ||Lịch sử|Cây 厂 và bước chân 止 từng nơi: trải qua, 歴史.
史|シ||Lịch sử|Tay cầm bút ghi chép 口: sử, 歴史.
整|セイ|ととの(える)|Chỉnh; sắp xếp|Ép 敕 cho ngay ngắn 正: chỉnh lý, 整理.
類|ルイ||Loại|Gạo 米 và đầu 頁 xếp theo loại: loại, 書類 giấy tờ.
昔|セキ, シャク|むかし|Ngày xưa|Chồng ngày 日 chất lên nhau: ngày xưa.
得|トク|え(る), う(る)|Được; đạt|Bước 彳 đi nhặt được thứ quý 旦: được, 得意 sở trường.
苦|ク|くる(しい), にが(い)|Khổ; đắng|Cỏ 艹 lâu năm 古 thì đắng: khổ, 苦手.
影|エイ|かげ|Bóng; hình|Cảnh 景 có nét tỏa 彡: bóng, 撮影 chụp ảnh.
坊|ボウ||Cậu bé; nhà sư|Đất 土 và vuông 方: cậu bé, 寝坊 ngủ nướng.
欠|ケツ|か(ける)|Thiếu; vắng|Người há miệng ngáp thiếu ngủ: thiếu, 欠席 vắng mặt.
退|タイ|しりぞ(く)|Lùi; rút lui|Đi 辶 lùi lại 艮: lui, 早退 về sớm.
渋|ジュウ|しぶ(い)|Chát; ùn tắc|Nước 氵 dừng lại 止 nhiều đường: chát, 渋滞 kẹt xe.
滞|タイ|とどこお(る)|Đình trệ|Nước 氵 đọng lại trên đường: ùn tắc.
震|シン|ふる(える)|Rung chuyển|Mưa 雨 rền sấm làm rung chuyển 辰: chấn, 地震 động đất.
停|テイ||Dừng|Người 亻 dừng ở nhà đình 亭: dừng, 停電 mất điện.
迷|メイ|まよ(う)|Lạc; phân vân|Đi 辶 giữa gạo 米 rối rắm: lạc, mê.
惑|ワク|まど(う)|Phân vân; lúng túng|Lòng 心 mơ hồ như bị đánh lừa 或: bối rối, 迷惑 phiền toái.
謝|シャ|あやま(る)|Xin lỗi; cảm ơn|Lời nói 言 buông 射 mình xuống: tạ lỗi, cảm tạ.
確|カク|たし(か), たし(かめる)|Chắc chắn|Đá 石 cứng và chim 隹 đậu vững: xác thực, 確認.
認|ニン|みと(める)|Nhận; công nhận|Lời nói 言 nhẫn nại 忍 chấp nhận: nhận, 確認 xác nhận.
法|ホウ, ハッ||Phép; pháp luật|Nước 氵 đi theo lề thói 去: phương pháp, pháp luật.
質|シツ, シチ||Chất; hỏi|Hai cái rìu 斤 đổi lấy tiền 貝: chất lượng, 質問 câu hỏi.
答|トウ|こた(え), こた(える)|Trả lời|Tre 竹 ghép lại cho khớp 合: đáp lại.
正|セイ, ショウ|ただ(しい), まさ|Đúng|Một 一 bước chân 止 đi thẳng: đúng, chính.
違|イ|ちが(う)|Khác; sai|Đi 辶 ngược hướng 韋: khác, sai.
嘘|キョ|うそ|Lời nói dối|Miệng 口 nói điều trống rỗng 虚: nói dối.
果|カ|は(たす), くだもの|Quả; kết quả|Quả 田 trên cây 木: quả, kết quả.
格|カク, コウ||Tư cách; cách|Cây 木 mỗi nhánh 各 đều có dáng: tư cách, 合格 đỗ.
績|セキ||Thành tích|Sợi chỉ 糸 xe ngày một dày 責: công trạng, 成績.
贈|ゾウ, ソウ|おく(る)|Tặng|Vỏ sò 貝 tặng thêm 曽: tặng quà.
招|ショウ|まね(く)|Mời|Tay 扌 vẫy gọi 召: mời, 招待.
助|ジョ|たす(ける)|Giúp|Sức 力 thêm vào cho người: giúp đỡ.
司|シ||Quản lý|Người ra lệnh bằng miệng 口 từ bên trên: quản lý, 上司 cấp trên.
同|ドウ|おな(じ)|Cùng; giống|Cái miệng 口 trong khung cùng một lòng: đồng.
僚|リョウ||Đồng liêu|Người 亻 cùng làm việc chung 尞: đồng nghiệp, 同僚.
輩|ハイ||Bậc đàn anh; nhóm|Xe 車 xếp thành hàng so 非: bạn bè, 先輩 đàn anh.
貯|チョ||Tích trữ|Tiền 貝 cất vào kho 宁: tích trữ, 貯金.
免|メン|まぬが(れる)|Miễn; tránh|Người thoát khỏi bẫy: miễn, 免許 bằng lái.
許|キョ|ゆる(す)|Cho phép; tha thứ|Lời nói 言 đồng ý 午: cho phép.
申|シン|もう(す)|Nói (khiêm); xin|Hình tia chớp xuyên qua: nói, 申し込み.
込||こ(む), こ(める)|Vào; chứa|Đi 辶 vào bên trong 入: vào, 申し込む đăng ký.
応|オウ||Đáp ứng|Mái nhà 广 che trái tim 心 đáp lại: ứng, 応援 cổ vũ.
援|エン||Giúp đỡ|Tay 扌 kéo 爰 người lên: viện trợ, 応援.
具|グ||Dụng cụ|Mắt 目 và hai tay 廾 cầm đồ: dụng cụ, 道具.
駄|ダ||Vô ích; kém|Ngựa 馬 chở nặng 太 thì vô ích: lãng phí, 無駄.
雲|ウン|くも|Mây|Mưa 雨 và hình đám mây 云: mây.
晴|セイ|は(れる), は(らす)|Trời nắng|Mặt trời 日 và màu xanh 青: trời quang.
倒|トウ|たお(れる), たお(す)|Đổ; ngã|Người 亻 ngã đến 到: đổ.
悲|ヒ|かな(しい)|Buồn|Lòng 心 trái ngược 非: buồn.
丈|ジョウ|たけ|Dài; bền|Một 一 tay 又 dài thêm: chiều dài, 丈夫 bền chắc.
複|フク||Nhiều lớp|Áo 衤 nhiều lớp chồng lên 复: phức tạp.
重|ジュウ, チョウ|おも(い), かさ(ねる)|Nặng; chồng|Người 千 mang vật nặng dưới đất 里: nặng.
軽|ケイ|かる(い), かろ(やか)|Nhẹ|Xe 車 đi qua dòng nước 圣: nhẹ.
厚|コウ|あつ(い)|Dày|Sườn núi 厂 chồng lớp dày: dày.
薄|ハク|うす(い)|Mỏng; nhạt|Cỏ 艹 và nước 氵 loãng 専: mỏng, nhạt.
延|エン|の(びる), の(ばす)|Kéo dài|Bước đi 廴 kéo dài thêm: hoãn, kéo dài.
期|キ, ゴ||Kỳ hạn|Mặt trăng 月 qua 其 chu kỳ: kỳ hạn, 延期 hoãn.
緊|キン||Khẩn; căng|Sợi chỉ 糸 siết chặt: căng, 緊急 khẩn cấp.
警|ケイ||Cảnh báo|Lời nói 言 nghiêm khắc 敬: cảnh báo, 警察 cảnh sát.
救|キュウ|すく(う)|Cứu|Gậy 攵 cầu xin 求: cứu giúp, 救急車.
逃|トウ|に(げる), のが(す)|Chạy trốn|Đi 辶 chạy ra xa 兆: chạy trốn.
避|ヒ|さ(ける)|Tránh|Đi 辶 tránh xa bức tường 辟: tránh, 避難 sơ tán.
不|フ, ブ||Không|Hình hạt nảy mầm không lên: không, bất, 不安 lo lắng.
保|ホ|たも(つ)|Giữ; bảo vệ|Người 亻 bế đứa trẻ 呆: bảo vệ, 保険 bảo hiểm.
領|リョウ||Lãnh thổ; nhận|Lệnh 令 và đầu 頁: lĩnh, 領収書 hóa đơn.
収|シュウ|おさ(める)|Thu; nhận|Tay thu gom đồ: thu, 収入.
到|トウ||Đến|Dao 刂 chạm tới 至: đến, 到着 đến nơi.
検|ケン||Kiểm tra|Cây 木 dùng so sánh các 僉: kiểm tra.
査|サ||Điều tra|Cây 木 dưới trận mưa nghiền nát: kiểm tra, 検査.
育|イク|そだ(てる), そだ(つ)|Nuôi dưỡng|Đứa trẻ lộn ngược bên thịt 月: nuôi dưỡng, 教育 giáo dục.
噂|ソン|うわさ|Tin đồn|Miệng 口 truyền tai nhau 尊: tin đồn.
告|コク|つ(げる)|Báo; thông báo|Miệng 口 bò 牛 kêu báo hiệu: thông báo, 報告.
景|ケイ||Cảnh; phong cảnh|Mặt trời 日 chiếu lên kinh đô 京: cảnh, 景気 kinh tế.
価|カ|あたい|Giá|Người 亻 đem hàng ra bán 西: giá cả, 物価.
市|シ|いち|Chợ; thành phố|Chiếc khăn 巾 cắm trên chợ: chợ, thành phố.
展|テン||Trải ra|Thân người 尸 duỗi ra: triển khai, 発展 phát triển.
張|チョウ|は(る)|Căng; mở rộng|Cung 弓 kéo dài ra 長: căng, 出張 đi công tác.
課|カ||Khóa; phòng ban|Lời 言 đưa nhiệm vụ cho kết quả 果: bài khóa, 課長 trưởng nhóm.
秘|ヒ|ひ(める)|Bí mật|Lúa 禾 cất kỹ trong lòng 必: bí mật, 秘書 thư ký.
算|サン||Tính|Tre 竹 để đếm bằng mắt 目 hai tay 廾: tính toán, 予算.
費|ヒ|つい(やす)|Phí; tốn|Tiền 貝 chi ra không phải 弗: chi phí.
可|カ||Được phép|Miệng 口 được phép dưới móc 丁: khả dĩ, 許可.
召|ショウ|め(す)|Gọi; dùng (kính ngữ)|Dao 刀 và miệng 口 gọi: triệu, 召し上がる.
覧|ラン||Xem|Mắt 見 nhìn bao quát 臣: xem, ご覧になる.
存|ソン, ゾン||Tồn tại; biết|Tay 才 nuôi đứa con 子 tồn tại: ご存じ biết.
様|ヨウ|さま|Dạng; ngài|Gỗ 木 theo mẫu dài 羊 và nước 水: dạng, 様 ngài.
利|リ|き(く)|Lợi; sắc|Lúa 禾 và dao 刂 gặt: lợi, 便利 tiện lợi.
伺|シ|うかが(う)|Đến thăm; hỏi (khiêm nhường)|Người 亻 dò xét 司 cung kính: đến hỏi.
拝|ハイ|おが(む)|Lạy|Tay 扌 chắp trước ngực: bái, 拝見 xem (khiêm).
恐|キョウ|おそ(れる), おそ(ろしい)|Sợ|Lòng 心 e sợ thứ cứng 巩: sợ, 恐れ入ります.
承|ショウ|うけたまわ(る)|Tiếp nhận|Hai tay đỡ lấy người: thừa nhận, 承知.
失|シツ|うしな(う)|Mất|Tay 手 buông rơi khỏi mình: mất, 失礼.`.split("\n").map(l=>{const [c,...r]=l.split("|");return [c,r]})));
