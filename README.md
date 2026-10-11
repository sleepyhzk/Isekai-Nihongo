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
Ô chọn giọng ở góc trên: Tự nhiên – nữ (Nanami), các giọng VOICEVOX (東北ずん子, 櫻歌ミコ, 小夜/SAYO, 中部つるぎ, 四国めたん, 離途, 黒沢冴白), giọng nam 青山龍星 (trầm, tự nhiên), hoặc giọng trình duyệt. Lựa chọn được nhớ lại.
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
Chọn bộ câu từ ba nguồn: **Giao tiếp** (theo chủ đề), **Ngữ pháp** (câu ví dụ theo bài) hoặc **Từ vựng** (câu ví dụ theo bài, Sơ cấp 1 và 2). Mỗi câu tự phát âm khi mở. Nói theo ngay khi nghe, gần như cùng lúc với giọng đọc.
- **Tốc độ** 0.7×, 0.85×, 1× (áp dụng cho cả file âm thanh lẫn giọng trình duyệt).
- Bật/tắt **Chữ Nhật**, **Romaji**, **Nghĩa** để luyện nghe thuần hoặc kèm chữ.
- **Tự động nói theo**: phát câu, chờ một khoảng bằng độ dài câu để bạn nói theo, rồi sang câu kế, đến hết bộ câu.
- **Ghi âm**: ghi giọng bạn cho câu hiện tại rồi bấm "Giọng bạn" để nghe lại và so sánh. Cần cho phép micro; trang phải chạy qua `localhost` hoặc HTTPS. Bản ghi chỉ nằm trong bộ nhớ trình duyệt và mất khi rời bài.
- Phím tắt: Space nghe, ← → đổi câu, A bật/tắt tự động. Bộ câu nào học xong được đánh dấu ✓ (lưu ở localStorage khóa `sh`).
- Bộ câu Ngữ pháp và Từ vựng dùng cùng dữ liệu với hai mục đó, nên không cần chạy thêm gì ngoài `npm run analyze` (và `npm run audio` nếu muốn giọng thật).

## Làm quen (mục 01: Hiragana và Katakana)
Làm theo bố cục của trang gốc: trang chọn bảng chữ, mỗi bảng có lộ trình ba chặng.
1. **Nhận mặt chữ**: bảng chữ xếp theo hàng (chữ thuần 46, âm đục 25, âm ghép 33, tổng 104). Chạm vào chữ để nghe phát âm; nút "Ẩn romaji" để tự kiểm tra.
2. **Nhớ bằng hình ảnh**: thẻ cho 46 chữ thuần mỗi bảng, mỗi chữ có emoji và một câu liên tưởng tiếng Việt (tự soạn, nằm trong `src/kana.js`). Space hoặc chạm vào thẻ để xem hình, ← chưa nhớ, → nhớ rồi. Có thể học theo từng hàng hoặc xáo trộn; cuối lượt ôn lại các chữ chưa nhớ.
3. **Luyện gõ phản xạ**: chọn phạm vi (chữ thuần, âm đục, âm ghép), nhìn chữ và gõ romaji. Gõ đúng tự sang chữ kế, gõ sai bị đếm lỗi và hiện đáp án. Có bấm giờ. Chấp nhận cả cách gõ kiểu Nhật (si, ti, tu, hu, zi, sya, tya...). Cuối lượt hiện các chữ hay gõ sai.
Tiến độ ba chặng lưu ở localStorage khóa `kp`. Âm thanh từng chữ có trong `npm run audio` (dữ liệu từ `src/kana.js`).

