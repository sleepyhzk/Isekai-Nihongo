// Từ bổ sung cho phần phân tích Shadowing (ngoài vocab.js). Mỗi dòng: "chữ Nhật|cách đọc|nghĩa". Động từ viết dạng ます để tự sinh các dạng chia.
// Nghĩa do mình soạn, nên rà lại nếu thấy chỗ chưa hợp.
export const EXTRA_TEXT = `
これ|これ|Cái này
それ|それ|Cái đó
あれ|あれ|Cái kia
どれ|どれ|Cái nào
この|この|… này
その|その|… đó
あの|あの|… kia
どの|どの|… nào
ここ|ここ|Ở đây, chỗ này
そこ|そこ|Ở đó, chỗ đó
あそこ|あそこ|Ở kia, chỗ kia
どこ|どこ|Ở đâu
こちら|こちら|Phía này, vị này (lịch sự)
そちら|そちら|Phía đó, vị đó (lịch sự)
あちら|あちら|Phía kia, vị kia (lịch sự)
どちら|どちら|Phía nào, vị nào
こんな|こんな|Như thế này
そんな|そんな|Như thế đó
どう|どう|Thế nào
どんな|どんな|Như thế nào
いくら|いくら|Bao nhiêu tiền
いつ|いつ|Khi nào
誰|だれ|Ai
何|なに|Cái gì
何|なん|Cái gì (đọc nan trước です/の)
なぜ|なぜ|Tại sao
どうして|どうして|Tại sao
はい|はい|Vâng, dạ
いいえ|いいえ|Không
ええ|ええ|Vâng (thân mật)
ありがとう|ありがとう|Cảm ơn
ございます|ございます|Có (dạng rất lịch sự của あります)
ありがとうございます|ありがとうございます|Xin cảm ơn
どうぞ|どうぞ|Xin mời
すみません|すみません|Xin lỗi, xin phép
いらっしゃいませ|いらっしゃいませ|Xin chào quý khách (nhân viên nói)
こちらこそ|こちらこそ|Tôi mới là người xin được…
よろしく|よろしく|Mong được giúp đỡ
お願い|おねがい|Lời nhờ vả, xin
お願いします|おねがいします|Xin nhờ, làm ơn
お願いいたします|おねがいいたします|Xin nhờ (rất lịch sự)
申します|もうします|Tôi tên là (khiêm nhường)
ぜひ|ぜひ|Nhất định
なるほど|なるほど|Ra vậy, thì ra thế
そうです|そうです|Đúng vậy
そうですか|そうですか|Vậy à
そう|そう|Như vậy; có vẻ; nghe nói
すごい|すごい|Giỏi quá, tuyệt vời
うれしい|うれしい|Vui
うらやましい|うらやましい|Ghen tị, thèm
ほんとう|ほんとう|Thật sự
ひどい|ひどい|Tệ, nặng, kinh khủng
田中|たなか|Tanaka (họ)
山田|やまだ|Yamada (họ)
鈴木|すずき|Suzuki (họ)
さん|さん|Anh/chị/ông/bà (đặt sau tên)
ちゃん|ちゃん|Bé… (đặt sau tên, thân mật)
赤ちゃん|あかちゃん|Em bé
毎朝|まいあさ|Mỗi sáng
毎日|まいにち|Mỗi ngày
毎月|まいつき|Mỗi tháng
毎週|まいしゅう|Mỗi tuần
毎晩|まいばん|Mỗi tối
毎年|まいとし|Mỗi năm
来年|らいねん|Năm sau
来月|らいげつ|Tháng sau
来週|らいしゅう|Tuần sau
去年|きょねん|Năm ngoái
先月|せんげつ|Tháng trước
先週|せんしゅう|Tuần trước
昨日|きのう|Hôm qua
今日|きょう|Hôm nay
明日|あした|Ngày mai
今晩|こんばん|Tối nay
今度|こんど|Lần tới
今朝|けさ|Sáng nay
週末|しゅうまつ|Cuối tuần
いつも|いつも|Luôn luôn
たいてい|たいてい|Thường thì
少し|すこし|Một chút
少々|しょうしょう|Một chút (lịch sự)
あまり|あまり|Không… lắm
まず|まず|Trước hết
もっと|もっと|Hơn nữa
まっすぐ|まっすぐ|Thẳng
早く|はやく|Sớm, nhanh
とても|とても|Rất
また|また|Lại, lần nữa
それに|それに|Hơn nữa
だから|だから|Vì vậy
それから|それから|Sau đó
すぐ|すぐ|Ngay
必ず|かならず|Nhất định
いろいろ|いろいろ|Nhiều loại
ほか|ほか|Khác
ほんとうに|ほんとうに|Thật là
日曜日|にちようび|Chủ nhật
月曜日|げつようび|Thứ hai
火曜日|かようび|Thứ ba
水曜日|すいようび|Thứ tư
木曜日|もくようび|Thứ năm
金曜日|きんようび|Thứ sáu
土曜日|どようび|Thứ bảy
曜日|ようび|Thứ (trong tuần)
京都|きょうと|Kyoto
東京|とうきょう|Tokyo
大阪|おおさか|Osaka
箱根|はこね|Hakone
富士山|ふじさん|Núi Phú Sĩ
町|まち|Thị trấn, phố
建物|たてもの|Tòa nhà
食べ物|たべもの|Đồ ăn
買い物|かいもの|Mua sắm
部屋|へや|Căn phòng
図書館|としょかん|Thư viện
準備|じゅんび|Chuẩn bị
温泉|おんせん|Suối nước nóng
意味|いみ|Ý nghĩa
説明|せつめい|Giải thích
子供|こども|Trẻ con
電気|でんき|Điện, đèn điện
心配|しんぱい|Lo lắng
修理|しゅうり|Sửa chữa
参加|さんか|Tham gia
残業|ざんぎょう|Làm thêm giờ
運動|うんどう|Vận động, thể thao
味見|あじみ|Nếm thử
注文|ちゅうもん|Đặt hàng, gọi món
配達|はいたつ|Giao hàng
無料|むりょう|Miễn phí
返品|へんぴん|Trả hàng
努力|どりょく|Nỗ lực
気持ち|きもち|Cảm giác
早退|そうたい|Về sớm
運転|うんてん|Lái xe
出張|しゅっちょう|Đi công tác
検査|けんさ|Kiểm tra, khám
避難|ひなん|Sơ tán
練習|れんしゅう|Luyện tập
食事|しょくじ|Bữa ăn
散歩|さんぽ|Đi dạo
勉強|べんきょう|Học
生活|せいかつ|Cuộc sống
便利|べんり|Tiện lợi
歯|は|Răng
お酒|おさけ|Rượu
おさけ|おさけ|Rượu
駐車|ちゅうしゃ|Đỗ xe
駐車禁止|ちゅうしゃきんし|Cấm đỗ xe
お祭り|おまつり|Lễ hội
お寺|おてら|Chùa
お金|おかね|Tiền
お荷物|おにもつ|Hành lý (lịch sự)
ご迷惑|ごめいわく|Sự phiền hà
親切|しんせつ|Tốt bụng
静か|しずか|Yên tĩnh
きれい|きれい|Đẹp, sạch
にぎやか|にぎやか|Nhộn nhịp
有名|ゆうめい|Nổi tiếng
丈夫|じょうぶ|Khỏe, bền
大切|たいせつ|Quan trọng
複雑|ふくざつ|Phức tạp
元気|げんき|Khỏe
大変|たいへん|Vất vả, khó khăn
好き|すき|Thích
嫌い|きらい|Ghét
上手|じょうず|Giỏi
下手|へた|Kém
安全|あんぜん|An toàn
独身|どくしん|Độc thân
赤い|あかい|Màu đỏ
白い|しろい|Màu trắng
青|あお|Màu xanh dương
痛い|いたい|Đau
眠い|ねむい|Buồn ngủ
楽しい|たのしい|Vui
悲しい|かなしい|Buồn
明るい|あかるい|Sáng sủa
暗い|くらい|Tối
重い|おもい|Nặng
忙しい|いそがしい|Bận
難しい|むずかしい|Khó
おもしろい|おもしろい|Thú vị
苦しい|くるしい|Khó chịu, khổ sở
無理|むり|Quá sức, vô lý
場合|ばあい|Trường hợp
今|いま|Bây giờ
朝|あさ|Buổi sáng
昼|ひる|Buổi trưa
夜|よる|Buổi tối
晩|ばん|Buổi tối
家|いえ|Nhà
中|なか|Bên trong
前|まえ|Trước
後|あと|Sau
近く|ちかく|Gần
後ろ|うしろ|Phía sau
右|みぎ|Bên phải
左|ひだり|Bên trái
道|みち|Con đường
橋|はし|Cây cầu
空|そら|Bầu trời
箱|はこ|Cái hộp
紙|かみ|Giấy
声|こえ|Giọng, tiếng
物|もの|Đồ vật
手|て|Tay
足|あし|Chân
熱|ねつ|Sốt
咳|せき|Ho
風邪|かぜ|Cảm lạnh
薬|くすり|Thuốc
病気|びょうき|Bệnh
病院|びょういん|Bệnh viện
お客さん|おきゃくさん|Khách hàng
部長|ぶちょう|Trưởng phòng
課長|かちょう|Tổ trưởng, trưởng nhóm
社長|しゃちょう|Giám đốc
秘書|ひしょ|Thư ký
先月|せんげつ|Tháng trước
犬|いぬ|Con chó
猫|ねこ|Con mèo
牛乳|ぎゅうにゅう|Sữa bò
ご飯|ごはん|Cơm, bữa ăn
朝ご飯|あさごはん|Bữa sáng
昼ご飯|ひるごはん|Bữa trưa
晩ご飯|ばんごはん|Bữa tối
水|みず|Nước
肉|にく|Thịt
野菜|やさい|Rau
塩|しお|Muối
お金|おかね|Tiền
値段|ねだん|Giá
品物|しなもの|Hàng hóa
物価|ぶっか|Giá cả
財布|さいふ|Ví tiền
荷物|にもつ|Hành lý
切手|きって|Tem
封筒|ふうとう|Phong bì
写真|しゃしん|Ảnh
映画|えいが|Phim
天気|てんき|Thời tiết
台風|たいふう|Bão
地震|じしん|Động đất
経済|けいざい|Kinh tế
世界|せかい|Thế giới
国|くに|Đất nước, quê hương
ことば|ことば|Từ ngữ, ngôn ngữ
泥棒|どろぼう|Kẻ trộm
将来|しょうらい|Tương lai
免許|めんきょ|Bằng lái, giấy phép
資料|しりょう|Tài liệu
会議|かいぎ|Cuộc họp
試験|しけん|Kỳ thi
予定|よてい|Dự định
貯金|ちょきん|Tiết kiệm tiền
新入社員|しんにゅうしゃいん|Nhân viên mới
研修|けんしゅう|Khóa đào tạo
意見|いけん|Ý kiến
費用|ひよう|Chi phí
ひらがな|ひらがな|Chữ Hiragana
漢字|かんじ|Chữ Hán
日本語|にほんご|Tiếng Nhật
英語|えいご|Tiếng Anh
えい語|えいご|Tiếng Anh
ドイツ語|ドイツご|Tiếng Đức
ドイツご|ドイツご|Tiếng Đức
イタリアご|イタリアご|Tiếng Ý
中国語|ちゅうごくご|Tiếng Trung
中国人|ちゅうごくじん|Người Trung Quốc
韓国人|かんこくじん|Người Hàn Quốc
かんこく人|かんこくじん|Người Hàn Quốc
こく人|こくじん|Người (nước…)
がっこう|がっこう|Trường học
学校|がっこう|Trường học
きょうし|きょうし|Giáo viên
教師|きょうし|Giáo viên
きょうしつ|きょうしつ|Phòng học
教室|きょうしつ|Phòng học
しゃいん|しゃいん|Nhân viên công ty
社員|しゃいん|Nhân viên công ty
かいしゃいん|かいしゃいん|Nhân viên công ty
じむしつ|じむしつ|Văn phòng
事務室|じむしつ|Văn phòng
がっき|がっき|Nhạc cụ
たいこ|たいこ|Cái trống
たいいくかん|たいいくかん|Nhà thi đấu thể thao
れんしゅう|れんしゅう|Luyện tập
どくしょ|どくしょ|Đọc sách
りょうり|りょうり|Nấu ăn, món ăn
しゅみ|しゅみ|Sở thích
せんせい|せんせい|Giáo viên
がくせい|がくせい|Học sinh, sinh viên
みんな|みんな|Mọi người
かぞく|かぞく|Gia đình
しごと|しごと|Công việc
ちち|ちち|Bố (của mình)
はは|はは|Mẹ (của mình)
あに|あに|Anh trai (của mình)
あね|あね|Chị gái (của mình)
いもうと|いもうと|Em gái
おとうと|おとうと|Em trai
弟|おとうと|Em trai
ともだち|ともだち|Bạn bè
たんじょうび|たんじょうび|Sinh nhật
にほん|にほん|Nhật Bản
にほんじん|にほんじん|Người Nhật
にほんご|にほんご|Tiếng Nhật
ちゅうごく|ちゅうごく|Trung Quốc
かんこく|かんこく|Hàn Quốc
だいがく|だいがく|Đại học
がつ|がつ|Tháng
ろくがつ|ろくがつ|Tháng 6
しがつ|しがつ|Tháng 4
くがつ|くがつ|Tháng 9
じゅういちがつ|じゅういちがつ|Tháng 11
じゅうにがつ|じゅうにがつ|Tháng 12
ごぜん|ごぜん|Buổi sáng (AM)
ごご|ごご|Buổi chiều (PM)
ななじはん|ななじはん|7 giờ rưỡi
ろくじ|ろくじ|6 giờ
くじ|くじ|9 giờ
はちじ|はちじ|8 giờ
ひとり|ひとり|Một người
ふたり|ふたり|Hai người
いっかい|いっかい|Tầng 1
さんがい|さんがい|Tầng 3
ごかい|ごかい|Tầng 5
やすみ|やすみ|Ngày nghỉ, kỳ nghỉ
休み|やすみ|Ngày nghỉ, kỳ nghỉ
はるやすみ|はるやすみ|Kỳ nghỉ xuân
うち|うち|Nhà
かい|かい|Tầng, lần
とけい|とけい|Đồng hồ
時計|とけい|Đồng hồ
おくりもの|おくりもの|Quà tặng
かた|かた|Vị (người), phía
ぜんぶ|ぜんぶ|Toàn bộ
全部|ぜんぶ|Toàn bộ
ぜんぶで|ぜんぶで|Tổng cộng
みせ|みせ|Cửa hàng
店|みせ|Cửa hàng
えき|えき|Nhà ga
駅|えき|Nhà ga
ほん|ほん|Sách
じしょ|じしょ|Từ điển
こうえん|こうえん|Công viên
公園|こうえん|Công viên
としょかん|としょかん|Thư viện
かいしゃ|かいしゃ|Công ty
いえ|いえ|Nhà
りょこう|りょこう|Du lịch
旅行|りょこう|Du lịch
はなみ|はなみ|Ngắm hoa anh đào
はなび|はなび|Pháo hoa
さんぽ|さんぽ|Đi dạo
べんきょう|べんきょう|Học
しゅくだい|しゅくだい|Bài tập về nhà
宿題|しゅくだい|Bài tập về nhà
ひるごはん|ひるごはん|Bữa trưa
あさごはん|あさごはん|Bữa sáng
ごはん|ごはん|Cơm, bữa ăn
くうこう|くうこう|Sân bay
けいたいでんわ|けいたいでんわ|Điện thoại di động
おふろ|おふろ|Bồn tắm
ひる|ひる|Buổi trưa
よる|よる|Buổi tối
あさ|あさ|Buổi sáng
とり|とり|Gà, chim
とりにく|とりにく|Thịt gà
たまご|たまご|Trứng
みず|みず|Nước
ぎゅうにゅう|ぎゅうにゅう|Sữa bò
パンフレット|パンフレット|Tờ rơi
りんご|りんご|Quả táo
バナナ|バナナ|Chuối
三つ|みっつ|Ba cái
五本|ごほん|Năm cây/chai
一つ|ひとつ|Một cái
六つ|むっつ|Sáu cái
ふたつ|ふたつ|Hai cái
まい|まい|Tờ, tấm (đếm vật mỏng)
三年|さんねん|Ba năm
一年|いちねん|Một năm
一日|いちにち|Một ngày
一人|ひとり|Một người
二人|ふたり|Hai người
十人|じゅうにん|Mười người
九人|きゅうにん|Chín người
十時|じゅうじ|10 giờ
十月|じゅうがつ|Tháng 10
十二月|じゅうにがつ|Tháng 12
三月|さんがつ|Tháng 3
四月|しがつ|Tháng 4
九月|くがつ|Tháng 9
十一月|じゅういちがつ|Tháng 11
十月二十日|じゅうがつはつか|Ngày 20 tháng 10
四日間|よっかかん|Bốn ngày
四年生|よねんせい|Sinh viên năm thứ tư
一年生|いちねんせい|Sinh viên năm nhất
二年生|にねんせい|Sinh viên năm hai
三年生|さんねんせい|Sinh viên năm ba
一時間|いちじかん|Một tiếng
二時間|にじかん|Hai tiếng
三時間|さんじかん|Ba tiếng
四時間|よじかん|Bốn tiếng
六時間|ろくじかん|Sáu tiếng
二十才|はたち|20 tuổi
二十歳|はたち|20 tuổi
じゅっさい|じゅっさい|10 tuổi
にじゅっさい|にじゅっさい|20 tuổi
ゆっさい|ゆっさい|(tuổi)
パイロット|パイロット|Phi công
カメラマン|カメラマン|Nhiếp ảnh gia
ナース|ナース|Y tá
イギリス|イギリス|Anh
ロンドン|ロンドン|London
インド|インド|Ấn Độ
ネパール|ネパール|Nepal
モンゴル|モンゴル|Mông Cổ
シャンハイ|シャンハイ|Thượng Hải
ブラジル|ブラジル|Brazil
シドニー|シドニー|Sydney
ハノイ|ハノイ|Hà Nội
アユタヤ|アユタヤ|Ayutthaya (Thái Lan)
ロマンティック|ロマンティック|Lãng mạn
トヨタ|トヨタ|Toyota
タイ|タイ|Thái Lan
バドミントン|バドミントン|Cầu lông
ソウル|ソウル|Seoul
ダンス|ダンス|Khiêu vũ
ジョギング|ジョギング|Chạy bộ
ピアノ|ピアノ|Đàn piano
ロビー|ロビー|Sảnh
ラウンジ|ラウンジ|Phòng nghỉ
インフォメーション|インフォメーション|Quầy thông tin
ツアー|ツアー|Tour du lịch
ショップ|ショップ|Cửa hàng
アイフォーン|アイフォーン|iPhone
ソニー|ソニー|Sony
スイス|スイス|Thụy Sĩ
ユーロ|ユーロ|Euro
ドル|ドル|Đô la
ネクタイ|ネクタイ|Cà vạt
マフラー|マフラー|Khăn quàng cổ
セーター|セーター|Áo len
メニュー|メニュー|Thực đơn
ステーキ|ステーキ|Bít tết
ペン|ペン|Bút
ファイル|ファイル|Tập hồ sơ
ゴム|ゴム|Cục tẩy
スペイン|スペイン|Tây Ban Nha
ギター|ギター|Đàn guitar
バイオリン|バイオリン|Vĩ cầm
パーソン|パーソン|Người (person)
イェン|イェン|Yên (yen)
ジャパン|ジャパン|Nhật Bản (Japan)
ラオス|ラオス|Lào
ブックストア|ブックストア|Hiệu sách
カフェ|カフェ|Quán cà phê
コーヒー|コーヒー|Cà phê
マッチャ|マッチャ|Trà matcha
ニコニコ|ニコニコ|Nikoniko (tên siêu thị)
スーパー|スーパー|Siêu thị
チーズ|チーズ|Phô mai
クラス|クラス|Lớp học
テスト|テスト|Bài kiểm tra
コロンビア|コロンビア|Colombia
マンガ|マンガ|Truyện tranh
ホンダ|ホンダ|Honda
メール|メール|Thư điện tử
コピー|コピー|Photocopy
サンドイッチ|サンドイッチ|Bánh sandwich
ハンバーガー|ハンバーガー|Hamburger
ウェイター|ウェイター|Nhân viên phục vụ
ベーカリー|ベーカリー|Tiệm bánh mì
パン|パン|Bánh mì
サラダ|サラダ|Salad
ミルク|ミルク|Sữa
ヨーグルト|ヨーグルト|Sữa chua
トースト|トースト|Bánh mì nướng
ルームメート|ルームメート|Bạn cùng phòng
フランス|フランス|Pháp
プール|プール|Hồ bơi
テニス|テニス|Quần vợt
ホーチミン|ホーチミン|Thành phố Hồ Chí Minh
バイク|バイク|Xe máy
チョコレート|チョコレート|Sô-cô-la
ディズニーランド|ディズニーランド|Disneyland
チケット|チケット|Vé
ジュース|ジュース|Nước ép
ショッピングモール|ショッピングモール|Trung tâm mua sắm
ハンカチ|ハンカチ|Khăn tay
スカーフ|スカーフ|Khăn quàng
オオキワ|オオキワ|Ookiwa (tên công viên)
ランチ|ランチ|Bữa trưa
オヤコドン|オヤコドン|Cơm gà trứng (oyakodon)
アサヒ|アサヒ|Asahi (tên công viên)
パスタ|パスタ|Mì ống
ピザ|ピザ|Pizza
ホームステイ|ホームステイ|Ở nhà dân (homestay)
ホストファミリー|ホストファミリー|Gia đình chủ nhà
サッカー|サッカー|Bóng đá
スポーツドリンク|スポーツドリンク|Nước uống thể thao
ドリンク|ドリンク|Đồ uống
ドラマ|ドラマ|Phim truyền hình
アイスクリーム|アイスクリーム|Kem
ゴールデンウィーク|ゴールデンウィーク|Tuần lễ Vàng (kỳ nghỉ lễ ở Nhật)
ダナン|ダナン|Đà Nẵng
ビーチ|ビーチ|Bãi biển
バスケットボール|バスケットボール|Bóng rổ
ドア|ドア|Cửa
ホテル|ホテル|Khách sạn
ラーメン|ラーメン|Mì ramen
ラーメンや|ラーメンや|Quán ramen
テレビ|テレビ|Ti vi
ベトナム|ベトナム|Việt Nam
レストラン|レストラン|Nhà hàng
コンビニ|コンビニ|Cửa hàng tiện lợi
カメラ|カメラ|Máy ảnh
ケーキ|ケーキ|Bánh kem
カレー|カレー|Cà ri
エレベーター|エレベーター|Thang máy
ラジオ|ラジオ|Radio
チーム|チーム|Đội
コップ|コップ|Cái cốc
インターネット|インターネット|Internet
パーティー|パーティー|Bữa tiệc
ボール|ボール|Quả bóng
タバコ|タバコ|Thuốc lá
シャワー|シャワー|Vòi sen
シャツ|シャツ|Áo sơ mi
ルー|ルー|Viên cà ri (roux)
テニス|テニス|Quần vợt
アルバイト|アルバイト|Việc làm thêm
アン|アン|An (tên người)
ミン|ミン|Minh (tên người)
マイ|マイ|Mai (tên người)
ミラー|ミラー|Miller (tên người)
リサ|リサ|Lisa (tên người)
ワン|ワン|Vương (tên người)
シュミット|シュミット|Schmidt (tên người)
ナタポン|ナタポン|Nattapong (tên người)
ミンジ|ミンジ|Minji (tên người)
サム|サム|Sam (tên người)
マリア|マリア|Maria (tên người)
カリナ|カリナ|Karina (tên người)
アンナ|アンナ|Anna (tên người)
グプタ|グプタ|Gupta (tên người)
さくら|さくら|Sakura (tên người)
ヒマワリ|ヒマワリ|Himawari (tên trường)
疲れます|つかれます|Mệt
磨きます|みがきます|Đánh (răng), mài
降ります|おります|Xuống (xe)
降ります|ふります|Rơi (mưa)
濡れます|ぬれます|Bị ướt
踏みます|ふみます|Giẫm lên
褒めます|ほめます|Khen
連れます|つれます|Dẫn đi
始まります|はじまります|Bắt đầu (tự)
始めます|はじめます|Bắt đầu
登ります|のぼります|Leo
忘れます|わすれます|Quên
落ちます|おちます|Rơi
倒れます|たおれます|Đổ
転びます|ころびます|Ngã
置きます|おきます|Đặt, để
返します|かえします|Trả lại
払います|はらいます|Trả (tiền)
頼みます|たのみます|Nhờ
盗みます|ぬすみます|Ăn trộm
叱ります|しかります|Mắng
輸出します|ゆしゅつします|Xuất khẩu
翻訳します|ほんやくします|Dịch
止まります|とまります|Dừng lại
驚きます|おどろきます|Ngạc nhiên
通ります|とおります|Đi qua
知らせます|しらせます|Thông báo
帰ります|かえります|Về
持ちます|もちます|Cầm, mang
読みます|よみます|Đọc
受けます|うけます|Nhận, dự (thi)
発言します|はつげんします|Phát biểu
計算します|けいさんします|Tính toán
伸びます|のびます|Tiến bộ, dài ra
続けます|つづけます|Tiếp tục
要ります|いります|Cần
引っ越します|ひっこします|Chuyển nhà
合います|あいます|Vừa, hợp
交換します|こうかんします|Đổi
参加します|さんかします|Tham gia
残業します|ざんぎょうします|Làm thêm giờ
注文します|ちゅうもんします|Đặt hàng
運動します|うんどうします|Vận động
勉強します|べんきょうします|Học
留学します|りゅうがくします|Du học
結婚します|けっこんします|Kết hôn
卒業します|そつぎょうします|Tốt nghiệp
就職します|しゅうしょくします|Đi làm (xin việc)
欠席します|けっせきします|Vắng mặt
営業します|えいぎょうします|Kinh doanh, mở cửa
発展します|はってんします|Phát triển
貯金します|ちょきんします|Tiết kiệm tiền
散歩します|さんぽします|Đi dạo
食事します|しょくじします|Dùng bữa
出ます|でます|Ra, xuất hiện
出します|だします|Đưa ra, nộp, đổ (rác)
上がります|あがります|Tăng lên
働きます|はたらきます|Làm việc
住みます|すみます|Sống
歩きます|あるきます|Đi bộ
炒めます|いためます|Xào
切ります|きります|Cắt
入れます|いれます|Cho vào
届けます|とどけます|Giao, chuyển
届きます|とどきます|Được giao đến
貯めます|ためます|Để dành
言います|いいます|Nói
思います|おもいます|Nghĩ
曲がります|まがります|Rẽ
渡ります|わたります|Qua (cầu, đường)
座ります|すわります|Ngồi
撮ります|とります|Chụp (ảnh)
取ります|とります|Lấy
付けます|つけます|Bật, gắn
乗り換えます|のりかえます|Chuyển tàu xe
着きます|つきます|Đến
着ます|きます|Mặc
寝ます|ねます|Ngủ
忘れます|わすれます|Quên
やめます|やめます|Bỏ, thôi
辞めます|やめます|Nghỉ (việc)
呼びます|よびます|Gọi
知ります|しります|Biết
わかります|わかります|Hiểu
できます|できます|Có thể, làm được
なります|なります|Trở thành, trở nên
します|します|Làm
行きます|いきます|Đi
来ます|きます|Đến
見ます|みます|Xem, nhìn
食べます|たべます|Ăn
飲みます|のみます|Uống
買います|かいます|Mua
書きます|かきます|Viết
聞きます|ききます|Nghe, hỏi
話します|はなします|Nói chuyện
会います|あいます|Gặp
起きます|おきます|Thức dậy
待ちます|まちます|Đợi
使います|つかいます|Dùng
作ります|つくります|Làm, chế tạo
歌います|うたいます|Hát
泳ぎます|およぎます|Bơi
遊びます|あそびます|Chơi
休みます|やすみます|Nghỉ
働きます|はたらきます|Làm việc
終わります|おわります|Kết thúc
借ります|かります|Mượn
貸します|かします|Cho mượn
教えます|おしえます|Dạy, chỉ
覚えます|おぼえます|Nhớ
開けます|あけます|Mở
閉めます|しめます|Đóng
消します|けします|Tắt, xóa
洗います|あらいます|Rửa
掃除します|そうじします|Dọn dẹp
洗濯します|せんたくします|Giặt đồ
電話します|でんわします|Gọi điện thoại
人|ひと|Người
所|ところ|Nơi, chỗ
日|ひ|Ngày
円|えん|Yên
名前|なまえ|Tên
大|おお|Lớn
やります|やります|Làm (thân mật)
おろします|おろします|Rút (tiền)
しまいます|しまいます|Lỡ… mất (hoàn tất/tiếc nuối)
お待ち|おまち|Chờ (お待ちします)
お待たせします|おまたせします|Xin lỗi đã để chờ
お届け|おとどけ|Giao hàng
ご覧になります|ごらんになります|Xem (kính ngữ)
いらっしゃいます|いらっしゃいます|Có mặt, đến (kính ngữ)
集まります|あつまります|Tập trung
誘います|さそいます|Mời, rủ
助けます|たすけます|Giúp
当たります|あたります|Trúng
焼きます|やきます|Nướng
割ります|わります|Làm vỡ, chia
建てます|たてます|Xây dựng
助かります|たすかります|Được giúp, đỡ quá
いただきます|いただきます|Nhận (khiêm nhường), xin phép ăn
落とします|おとします|Làm rơi
なくなります|なくなります|Hết, mất
戻します|もどします|Trả về chỗ cũ
滑ります|すべります|Trơn trượt
治ります|なおります|Khỏi (bệnh)
元|もと|Chỗ cũ, gốc
自分|じぶん|Bản thân
じぶん|じぶん|Bản thân
次|つぎ|Tiếp theo
つぎ|つぎ|Tiếp theo
たばこ|たばこ|Thuốc lá
あ|あ|À, ồ (thán từ)
はず|はず|Chắc là, đáng lẽ
撮影します|さつえいします|Quay, chụp ảnh
ううん|ううん|Không (thân mật)
妹|いもうと|Em gái
鳥|とり|Con chim
干します|ほします|Phơi
笑います|わらいます|Cười
黒い|くろい|Màu đen
景色|けしき|Phong cảnh
込みます|こみます|Đông đúc
喜びます|よろこびます|Vui mừng
電卓|でんたく|Máy tính bỏ túi
辛い|からい|Cay
募集します|ぼしゅうします|Tuyển dụng
預かります|あずかります|Giữ hộ, nhận giữ
以上|いじょう|Trở lên, ở trên
かさ|かさ|Cái ô
傘|かさ|Cái ô
気|き|Tâm trí, tinh thần
気を つけます|きを つけます|Cẩn thận, chú ý
見|み|Xem (thân động từ)
兄|あに|Anh trai
洗濯|せんたく|Giặt giũ
世話|せわ|Chăm sóc
話|はなし|Câu chuyện, cuộc nói chuyện
研究|けんきゅう|Nghiên cứu
予約|よやく|Đặt trước
予約します|よやくします|Đặt trước
年|とし|Tuổi, năm
燃えます|もえます|Cháy
燃える|もえる|Cháy được
掃除|そうじ|Dọn dẹp
開きます|ひらきます|Mở ra
開きます|あきます|Mở (tự)
煮ます|にます|Hầm, kho
ゆっくり|ゆっくり|Chậm rãi, thong thả
眠ります|ねむります|Ngủ
確かめます|たしかめます|Kiểm tra, xác nhận
問題|もんだい|Vấn đề, bài tập
履歴書|りれきしょ|Sơ yếu lý lịch
パスポート|パスポート|Hộ chiếu
ナイフ|ナイフ|Con dao
風|かぜ|Gió
飛びます|とびます|Bay
長い|ながい|Dài
非常ベル|ひじょうベル|Chuông báo động
行動します|こうどうします|Hành động
近づきます|ちかづきます|Đến gần
記事|きじ|Bài báo
部|ぶ|Bộ phận
作文|さくぶん|Bài văn
席|せき|Chỗ ngồi
連絡|れんらく|Liên lạc
連絡します|れんらくします|Liên lạc
運びます|はこびます|Vận chuyển
集めます|あつめます|Sưu tầm, gom
引っ越します|ひっこします|Chuyển nhà
行動|こうどう|Hành động
ときどき|ときどき|Thỉnh thoảng
どなた|どなた|Vị nào, ai (lịch sự)
さしあげます|さしあげます|Tặng (khiêm nhường)
よろしい|よろしい|Được, ổn (lịch sự)
うるさい|うるさい|Ồn ào
におい|におい|Mùi
すいえい|すいえい|Bơi lội
店員|てんいん|Nhân viên cửa hàng
てんいん|てんいん|Nhân viên cửa hàng
温度|おんど|Nhiệt độ
報告します|ほうこくします|Báo cáo
`;
