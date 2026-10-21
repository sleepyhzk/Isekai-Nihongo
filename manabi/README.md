# Manabi – Học tiếng Nhật

## Chạy trong VS Code
1. Cài Node.js (bản LTS) nếu chưa có: https://nodejs.org
2. Giải nén, mở thư mục `manabi` bằng VS Code (File > Open Folder).
3. Mở Terminal (Ctrl + `) rồi chạy:

```
npm install
npm run dev
```
Mở link hiện ra (thường là http://localhost:5173).

## Build
```
npm run build
```
Kết quả nằm trong thư mục `dist/`, có thể đưa lên hosting bất kỳ.
Xem thử bản build: `npm run preview`.

## Cấu trúc
- `index.html` – khung trang
- `src/main.js` – giao diện và logic
- `src/data.js` – 200 câu giao tiếp (sửa/thêm câu ở đây, dạng `tiếng Nhật/nghĩa`)
- `src/vocab.js` – từ vựng Minna no Nihongo Sơ cấp 1, Bài 1–25 (`chữ Nhật|cách đọc|nghĩa|câu ví dụ|nghĩa câu ví dụ`)
- `src/style.css` – giao diện

## Thanh trên, độ sáng, nút Back
- Thanh trên: ‹ Quay lại, ⛩ Trang chủ, ★ số mục đã đánh dấu; bên phải là tên hiển thị (bấm để đổi tên và chọn giọng đọc) và nút ☀/☾ để chỉnh độ sáng.
- Độ sáng: kéo thanh từ tối đến sáng (có 4 mức chọn nhanh và "Tự động theo thiết bị"); màu nền, chữ và thẻ đổi liên tục, chữ tự đổi sáng/tối để luôn đọc được. Lưu trong localStorage (`br`).
- Tên mặc định nằm ở hằng số `DEFAULT_NAME` trong `src/main.js` (đổi trước khi đưa web lên mạng); tên người dùng tự đặt lưu ở `un`.
- Nút Back của trình duyệt lùi một màn hình trong app (giống nút Quay lại); ở trang chủ thì nhấn Back mới thoát ra trang trước đó.

## Giao diện trang chủ
- Nền giấy kẻ ô, dây đèn lồng hồng treo trên cùng (đèn lồng đỏ vàng khi ở chế độ tối), chữ Hán mờ ở bên phải (chỉ hiện khi màn hình rộng từ 1280px, chỉ ở trang chủ), con bướm nhắn nhủ ở góc dưới trái (bấm vào bướm để đổi lời nhắn, bấm × để ẩn trong phiên này). Lời nhắn nằm ở mảng `MSG` trong `src/main.js`.
- Số đèn lồng tự tính theo chiều rộng màn hình (mỗi đèn cách nhau 132px, khớp với nhịp của dây).

## Giọng đọc giống người (khuyên dùng)
Mặc định app dùng giọng của trình duyệt (Edge có giọng "Natural" tự nhiên nhất). Để có giọng thần kinh chất lượng cao cho mọi câu/từ:
```
pip install edge-tts
npm run audio
```
Lệnh này tạo file mp3 trong `public/audio/` (cần Internet, chạy lại sau khi thêm câu/từ mới). App tự dùng mp3 nếu có, không có thì quay về giọng trình duyệt.

## Nút phân tích 🔍
Trong Từ vựng và Giao tiếp, bấm 🔍 trên mỗi thẻ để xem: romaji cả câu, từng từ (cách đọc, romaji, từ loại, dạng gốc), thành phần chữ Hán + âm Hán Việt, và ví dụ lấy từ các câu khác trong app.
Dữ liệu được tạo tự động bằng kuromoji mỗi khi chạy `npm run dev` / `npm run build` (hoặc chạy riêng `npm run analyze`).
Thêm âm Hán Việt cho chữ Hán mới ở `src/kanji.js`.

## Chọn giọng đọc
Ô chọn giọng ở góc trên: Tự nhiên – nữ (Nanami), các giọng VOICEVOX (東北ずん子, 小夜/SAYO, 中部つるぎ, 四国めたん, 離途, 黒沢冴白) hoặc giọng trình duyệt. Lựa chọn được nhớ lại.
Các giọng anime/nam dùng VOICEVOX (miễn phí, giọng AI học từ diễn viên lồng tiếng). App không còn hiện dòng ghi công ở cuối trang. Nếu đưa trang lên mạng cho người khác dùng, điều khoản VOICEVOX yêu cầu ghi "VOICEVOX:tên nhân vật" ở đâu đó, nhớ thêm lại.
Cách tạo âm thanh:
1. Cài VOICEVOX từ https://voicevox.hiroshiba.jp và **mở app** (giữ chạy nền).
2. (Khuyên dùng) cài ffmpeg để file nhẹ (mp3), không có thì file là wav.
3. `pip install edge-tts` (chỉ cần cho giọng Nanami), rồi chạy `npm run audio`.
Chỉ tạo vài giọng cho nhanh: `VOICES=nanami,zunko npm run audio` (Windows PowerShell: `$env:VOICES="nanami,zunko"; npm run audio`).
Chưa có file âm thanh thì app dùng giọng trình duyệt.
Muốn đổi sang nhân vật VOICEVOX khác: thêm một dòng vào `PROFILES` trong `scripts/gen_audio.py`, một `<option>` trong `index.html`, và tên nhân vật vào `CN` trong `src/main.js` (tên phải đúng như trong app VOICEVOX, ví dụ 剣崎雌雄, 玄野武宏).

## Hán tự & Luyện gõ
- Mục **Hán tự**: chữ Hán chia theo bài (lấy tự động từ các từ vựng của từng bài, chữ nào đã xuất hiện ở bài trước thì không lặp lại). Mỗi chữ có âm Hán Việt, âm On/Kun, nghĩa và từ vựng liên quan. Thêm chữ Hán mới ở `src/kanji.js` (`KD`: `ký tự|On|Kun|nghĩa`, và `KH` cho âm Hán Việt).
- Trong mỗi bài Từ vựng có nút **✍ Luyện gõ**: hiện nghĩa tiếng Việt, bạn gõ chữ Nhật, cách đọc hiragana hoặc romaji.

## Ghi nhớ (Chữ hay quên)
Gom tất cả mục đã bấm ★ (từ vựng, câu giao tiếp, chữ Hán). Có Học nhanh (thẻ lật, đánh dấu Đã nhớ / Chưa nhớ, cuối buổi có thể bỏ ★ các mục đã nhớ), Luyện gõ từ vựng theo nghĩa, tìm kiếm, nút 🔊 và 🗑 để bỏ khỏi Ghi nhớ.

- **Luyện gõ** dùng được với mọi loại đã ★: từ vựng, câu Giao tiếp, câu Shadowing, Hán tự (hiện chữ Hán, gõ một cách đọc On hoặc Kun là đúng) và ngữ pháp (hiện nghĩa tiếng Việt của câu ví dụ đầu tiên, gõ lại câu đó). Với câu có chữ Hán, cách đọc lấy từ `public/analysis.json` (chạy `npm run analyze` một lần); gõ romaji liền mạch, không cần dấu câu, trợ từ は/へ/を gõ theo cách đọc (wa/e/o) hoặc cách viết (ha/he/wo) đều được.
- **Trắc nghiệm** dùng được với mọi loại đã ★ (từ vựng, câu, Hán tự, ngữ pháp), mỗi lượt tối đa 15 câu, trộn ngẫu nhiên.

- Ghi nhớ có 3 tab: **★ Đã đánh dấu** (Học nhanh, Luyện gõ, Trắc nghiệm), **Chưa thuộc** và **Thuộc rồi** (các thẻ Flashcard đã chấm, kèm nút 🃏 Học lại). Mục Ôn tập cũ đã được gộp vào đây; nút 📋 Ghi nhớ trong Flashcard mở thẳng tab Chưa thuộc.

## Giáo trình Minna no Nihongo
`src/vocab.js` có `V` (Sơ cấp 1, Bài 1–25, khoảng 430 từ) và `V2` (Sơ cấp 2, Bài 26–50, khoảng 378 từ). Từ vựng và câu ví dụ do mình tự soạn theo chủ đề và ngữ pháp từng bài, không sao chép từ sách, nên có thể khác danh sách trong sách. Mỗi từ: `chữ Nhật|cách đọc|nghĩa|câu ví dụ|nghĩa câu ví dụ`. Muốn thêm/sửa từ thì sửa `V`/`V2` cùng định dạng.
Hán tự: `src/kanji.js` hiện có dữ liệu cho toàn bộ 603 chữ Hán trong từ vựng Sơ cấp 1 và 2 (mục Hán tự mở được cả hai giáo trình). Khi thêm từ vựng có chữ Hán mới, hãy thêm dữ liệu chữ đó vào `KH` và `KD`, nếu không chữ đó sẽ chưa hiện ở mục Hán tự.
Dữ liệu ★ từ vựng lưu ở khóa `vv3` (khóa cũ `vv2` của các giáo trình JPD không còn dùng).

## Ngữ pháp (mục 04)
`src/grammar.js` chứa `GR`: 50 bài (Minna no Nihongo Bài 1–50), mỗi bài gồm các mẫu câu, giải thích tiếng Việt và câu ví dụ. Nội dung do mình tự soạn, không sao chép từ sách, nên có thể khác cách trình bày trong sách. Mỗi ví dụ có 🔊 nghe và 🔍 phân tích từng từ. Cuối bài có bài **Ghép câu**: sắp xếp các từ (lấy từ kết quả phân tích kuromoji) thành câu đúng; cần chạy `npm run dev` hoặc `npm run analyze` ít nhất một lần để có `public/analysis.json`. Muốn thêm hoặc sửa mẫu câu thì sửa `GR` cùng định dạng, rồi chạy lại `npm run analyze` (và `npm run audio` nếu muốn có âm thanh thật).

## Luyện nhớ (Hán tự và Ngữ pháp)
- Hán tự: nút **🧠 Luyện nhớ** ở từng bài (chữ trong bài đó) và ở danh sách bài (cả giáo trình). Mỗi lượt tối đa 15 câu trắc nghiệm, 4 dạng: chữ → âm Hán Việt, chữ → nghĩa, âm Hán Việt + nghĩa → chữ, và cách đọc của một từ chứa chữ đó.
- Ngữ pháp: **🧠 Luyện nhớ** ở từng bài (tối đa 8 câu) và **Ôn Sơ cấp 1 / Sơ cấp 2 / cả hai** ở trang Ngữ pháp (12 câu mỗi lượt). 3 dạng: mẫu câu → nghĩa, câu ví dụ → mẫu câu, nghĩa → câu tiếng Nhật.
- Phím tắt: 1–4 chọn đáp án, Enter hoặc Space sang câu kế. Cuối lượt có thể ôn lại các câu sai, hoặc thêm chữ/mẫu câu sai vào Ghi nhớ.
- Mẫu ngữ pháp có nút ★ riêng để đưa vào mục Ghi nhớ (lưu ở localStorage khóa `gg`). Trong Ghi nhớ có thêm thẻ **Trắc nghiệm** cho các chữ Hán và mẫu ngữ pháp đã ★.

## Shadowing (mục 05)
Chia hai chế độ, giao diện một trang (có hình minh họa tự vẽ, danh sách câu bên phải):
- **Hội thoại 2 người**: 50 đoạn (Bài 1–50, `src/dialogues.js`), hai nhân vật A (nữ) và B (nam). Chọn "Tôi nói vai A/B" để đóng vai; app chỉ đọc vai còn lại và chờ bạn nói. Có chọn giọng vai B.
- **Đoạn văn 1 người**: 50 đoạn, mỗi bài học (Bài 1–50) một đoạn 9–10 câu (`src/passages.js`), viết theo đúng từ vựng, ngữ pháp và chữ Hán của bài đó; chữ Hán chưa học tới bài đó được viết bằng kana. Rê chuột (hoặc chạm) vào từng từ tiếng Nhật ở câu đang đọc để xem romaji phía trên từ đó (cần `npm run analyze`).
- Nút ▶ lớn = tự động nghe và chờ bạn nói theo; ⏮ ⏭ đổi câu; 🔊 nghe lại; ⟳ Lặp câu; tốc độ 0.5×/0.75×/1×; bật tắt chữ Nhật / romaji / nghĩa; 🎤 ghi âm rồi nghe lại giọng mình; ★ (phím ↓) đưa câu vào Ghi nhớ.
- Phím: Space tự động, ←/→ đổi câu, R nghe lại, L lặp, ↓ đánh dấu ★.
- Hình minh họa nằm trong `src/scene.js` (14 cảnh SVG; người đang nói mở miệng và hiện bóng thoại).
- Sửa hoặc thêm đoạn văn: chỉnh `PS` trong `passages.js`, rồi chạy `npm run analyze` (romaji) và `npm run audio` (âm thanh).

## Làm quen (mục 01: Hiragana và Katakana)
Làm theo bố cục của trang gốc: trang chọn bảng chữ, mỗi bảng có lộ trình ba chặng.
1. **Nhận mặt chữ**: bảng chữ xếp theo hàng (chữ thuần 46, âm đục 25, âm ghép 33, tổng 104). Chạm vào chữ để nghe phát âm; nút "Ẩn romaji" để tự kiểm tra.
2. **Nhớ bằng hình ảnh**: thẻ cho 46 chữ thuần mỗi bảng, mỗi chữ có emoji và một câu liên tưởng tiếng Việt (tự soạn, nằm trong `src/kana.js`). Space hoặc chạm vào thẻ để xem hình, ← chưa nhớ, → nhớ rồi. Có thể học theo từng hàng hoặc xáo trộn; cuối lượt ôn lại các chữ chưa nhớ.
3. **Luyện gõ phản xạ**: chọn phạm vi (chữ thuần, âm đục, âm ghép), nhìn chữ và gõ romaji. Gõ đúng tự sang chữ kế, gõ sai bị đếm lỗi và hiện đáp án. Có bấm giờ. Chấp nhận cả cách gõ kiểu Nhật (si, ti, tu, hu, zi, sya, tya...). Cuối lượt hiện các chữ hay gõ sai.
Tiến độ ba chặng lưu ở localStorage khóa `kp`. Âm thanh từng chữ có trong `npm run audio` (dữ liệu từ `src/kana.js`).

## Phụ lục tra cứu (mục 08)
Trang chủ có thêm mục **Phụ lục**, gồm ba tab. Dữ liệu ở `src/appendix.js`, tự soạn.
- **Chia động từ:** ô tra cứu 183 động từ (gõ chữ Nhật, cách đọc hoặc nghĩa tiếng Việt, không cần dấu). Mỗi động từ hiện 17 dạng: từ điển, ます, ません, ました, て, ない, なかった, た, たい, khả năng, ý chí, ば, たら, bị động, sai khiến, mệnh lệnh, cấm, kèm cách đọc và nút nghe. Từ không có trong danh sách thì chọn nhóm I, II hoặc III để chia thử (giả định cách đọc giống chữ gõ vào). Dưới có bảng quy tắc chia theo nhóm. Thêm động từ mới: thêm một dòng `chữ|cách đọc|nghĩa|nhóm` vào `VERBS`.
- **Số đếm:** số cơ bản đến 1 trăm triệu và 14 trợ từ đếm (つ, 人, 枚, 台, 冊, 本, 杯, 個, 匹, 回, 歳, 階, 足, 軒) với cách đọc 1 đến 10 và "hỏi mấy". Cách đọc đặc biệt được tô màu hồng.
- **Giờ & ngày tháng:** giờ, phút, ngày trong tháng (ついたち, ふつか…), tháng, thứ, khoảng thời gian (〜時間, 〜週間, 〜か月, 〜年) và từ chỉ thời điểm (おととい, きのう, きょう…).
Chạm vào chữ hoặc ô trong bảng để nghe đọc.

## Kiểm tra theo từng bài (mục 10)
- 50 bài kiểm tra, mỗi bài ứng với một bài học (Bài 1–50). Mỗi bài kiểm tra bao quát toàn bộ từ vựng, chữ Hán (những chữ mới của bài đó) và mẫu ngữ pháp của bài, không giới hạn số câu (khoảng 27–45 câu mỗi bài); mẫu ngữ pháp được hỏi 2 kiểu khác nhau. Câu hỏi trộn ngẫu nhiên mỗi lần làm.
- Có thêm hai bài Tổng hợp Sơ cấp 1 và Sơ cấp 2 (40 câu lấy ngẫu nhiên). Điểm cao nhất mỗi bài lưu trong localStorage (`kt`; điểm của các cụm 5 bài cũ không còn dùng). Đạt từ 80%.
- Hết bài sẽ gợi ý những bài cần xem lại, và có thể đưa câu sai vào Ghi nhớ.

- Câu trả lời sai được giải thích rõ: hiện lựa chọn của bạn, vì sao sai (ví dụ «X» là nghĩa của từ khác, kèm từ đó), đáp án đúng và phần ghi nhớ. Có nút 🔊 để nghe lại câu hoặc từ (các câu mà tiếng đọc làm lộ đáp án thì nút loa chỉ hiện sau khi trả lời).

## Phát âm cơ bản (trong Làm quen)
Cuối trang **Làm quen** có 5 bài phát âm, dữ liệu ở `src/phonetics.js`: **Nhịp (mora)**, **Trường âm**, **Âm ngắt っ**, **Âm mũi ん** và **Cao độ**.
- Mỗi bài có giải thích, quy tắc, ví dụ có chia nhịp (ô nhịp được tô màu cho phần cần chú ý) và nút nghe, rồi các **cặp từ dễ nhầm** (ví dụ おばさん / おばあさん, きて / きって, かじ / かんじ) với nút "So sánh hai từ".
- **Luyện nghe**: app phát một từ, bạn chọn đúng từ vừa nghe; ngoài ra có câu hỏi chọn từ theo nghĩa và đếm nhịp. Có nút "Ôn tất cả phần phát âm".
- Bài cao độ chỉ cho kiểu phổ biến của giọng Tokyo. Giọng đọc tổng hợp có thể không phân biệt được hai từ đồng âm khác cao độ (はし, あめ), nên hãy đối chiếu từ điển cao độ khi cần chắc chắn.
- Các từ trong bài phát âm đã được thêm vào danh sách của `npm run audio`.

## Flashcard (mục 10)
Trang chủ có mục **Flashcard**, hoặc nút **🃏 Flashcard** trong từng bài từ vựng (chỉ học bài đó).
- Thẻ gồm 1.611 thẻ: từ vựng Sơ cấp 1 (430), từ vựng Sơ cấp 2 (378), câu Giao tiếp (200) và Hán tự (603). Một hàng lọc duy nhất: các nút nguồn (Tất cả, Sơ cấp 1, Sơ cấp 2, Giao tiếp, Hán tự), ô chọn chủ đề (bài hoặc chủ đề giao tiếp) và nút **🔀 Xáo trộn**. Thẻ đã đến lịch ôn luôn được xếp lên đầu, tiếp theo là thẻ chưa học, cuối cùng là thẻ chưa đến hạn.
- Mặt trước là chữ Nhật và cách đọc (có 🔊). Hai nút **← Chưa thuộc** và **Thuộc rồi →** luôn hiện sẵn. Nhấn Space (hoặc chạm vào thẻ) để hiện nghĩa, câu ví dụ hoặc mẹo nhớ; nhấn Space lần nữa để che lại. Nút 👁 bật chế độ luôn hiện nghĩa. Nút ★ (hoặc ↓) đưa thẻ vào mục Ghi nhớ.
- Chấm **Thuộc rồi** (→) hoặc **Chưa thuộc** (←). Thẻ thuộc sẽ quay lại sau 1, 3, 7, 14, 30, rồi 60 ngày; thẻ chưa thuộc quay lại sau khoảng 10 phút và về mức đầu. Dòng dưới tiêu đề cho biết có bao nhiêu thẻ đến hạn. Tiến độ lưu ở localStorage khóa `fc`.
- Cuối lượt có nút ôn lại các thẻ chưa thuộc.

## Hiển thị nghĩa
Trong Từ vựng và Giao tiếp, nghĩa tiếng Việt hiện sẵn. Chạm vào nghĩa để ẩn đi khi muốn tự kiểm tra, chạm lại để hiện.



## Bản cập nhật: giọng đọc và tranh hội thoại
- **Giọng đọc (src/main.js, khối "Âm thanh")**: file âm thanh được cache và nạp trước 2 câu kế tiếp trong Shadowing; giọng vai B được chốt một lần cho cả bài (không đổi theo từng câu); đổi giọng không còn phát chồng lên nhau (lỗi do play() bị ngắt rồi tự rơi sang giọng trình duyệt). Nếu giọng đã chọn thiếu file cho một câu, app báo một lần rồi dùng nanami, hoặc giọng trình duyệt nếu cũng thiếu.
- **Tranh riêng từng bài (src/scene2.js)**: 50 bố cục riêng cho Bài 1–50, dùng chung cho Hội thoại và Đoạn văn. Bộ biểu tượng SVG tự vẽ nằm trong đối tượng `I`; muốn đổi đồ vật của một bài thì sửa dòng tương ứng trong mảng `LESSON`.
- **Chỉ mục âm thanh tách theo giọng**: `npm run audio` giờ ghi `public/audio/index.json` (chỉ là danh sách giọng, vài trăm byte) và một file `index-<giọng>.json` cho mỗi giọng. Web chỉ tải file của giọng đang chọn. Định dạng cũ (một `index.json` lớn) vẫn đọc được. Cài ffmpeg trước khi chạy để file ra dạng mp3 nhẹ.
- Đã có sẵn thư mục `public/audio` kiểu cũ (một `index.json` lớn)? Chạy `npm run splitindex` để tách theo giọng ngay, không cần tạo lại mp3.
- **Luyện đọc (Shadowing, nút thứ 3)**: 44 đoạn ngắn L1.1–L3.24 lấy từ file `L1.1.txt`, nằm trong `src/reading.js` (giữ nguyên dấu cách giữa các từ; nghĩa tiếng Việt do mình dịch). Dùng đúng bộ điều khiển của Shadowing: nghe, tốc độ, lặp câu, ghi âm, ★. Muốn thêm đoạn mới thì thêm một dòng vào `RD`, rồi chạy `npm run audio` để tạo âm thanh cho các câu mới (các file đã có sẽ được bỏ qua).
- **Phân tích từ trong Shadowing** (mọi chế độ): dưới mỗi câu có bảng từng từ gồm chữ, cách đọc, romaji, nghĩa tiếng Việt và ghi chú ngữ pháp (ví dụ たべません: Ăn, phủ định lịch sự). Bấm chữ để nghe từ đó, bấm ★ để thêm vào Ghi nhớ (dùng được cho Học nhanh, Luyện gõ, Trắc nghiệm). Nút “Từ” ở hàng tùy chọn để bật/tắt. Nằm trong `src/gloss.js` (bộ tách từ + sinh dạng chia động từ/tính từ) và `src/gloss_extra.js` (từ bổ sung, mỗi dòng `chữ|cách đọc|nghĩa`). Thấy từ nào “Chưa có nghĩa” thì thêm một dòng vào `gloss_extra.js`. Bộ tách này thay cho kuromoji ở phần hiển thị câu vì kuromoji tách sai chữ kana thuần (かぞく thành か·ぞ·く). Nghĩa do mình soạn nên nên rà lại.
- **Luyện đọc mở rộng**: ngoài 44 đoạn L1.1–L3.24 (`src/reading.js`) còn 94 đoạn mới cho Bài 4–50, mỗi bài 2 đoạn 5 câu (`src/reading_more.js`). Các đoạn này bám từ vựng và ngữ pháp của đúng bài, chữ Hán chưa học tới bài đó được viết bằng kana, giữ dấu cách giữa các từ. Có thanh lọc theo nhóm bài phía trên. Nghĩa tiếng Việt do mình dịch, nên nhờ người biết tiếng Nhật rà lại. Thêm bài mới: thêm một dòng vào `RD_MORE`, rồi chạy `npm run audio`.
- **Đọc liền** (nút ▶▶ cạnh “Lặp câu”, phím C): đọc một mạch đến hết đoạn, chỉ nghỉ khoảng 0,35 giây giữa các câu thay vì dừng 3–4 giây chờ bạn nói theo. Ở chế độ Hội thoại, lượt của vai bạn đóng vẫn có khoảng dừng để bạn nói.
- **Xem cả đoạn** (nút “Từng câu / Cả đoạn” trên khung nội dung, có ở Đoạn văn và Luyện đọc): hiện toàn bộ đoạn thành một khối văn liền, câu đang đọc được tô sáng, bấm vào câu để nhảy tới; bản dịch hiện thành một đoạn bên dưới khi bật “Nghĩa”.
