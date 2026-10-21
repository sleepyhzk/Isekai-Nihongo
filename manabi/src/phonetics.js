// Bài phát âm cơ bản: nhịp, trường âm, âm ngắt っ, âm mũi ん, cao độ. Tự soạn.
// words: [kana, kanji hoặc "", nghĩa, (cao độ H/L, chỉ ở bài cao độ)]
// pairs: [kana A, nghĩa A, kana B, nghĩa B, (cao độ A, cao độ B)]
export const PH = [
  {
    id: "mora", jp: "拍", title: "Nhịp (拍) và cách đếm", kind: "mora",
    intro: [
      "Tiếng Nhật đếm theo nhịp (mora), không đếm theo âm tiết như tiếng Việt. Mỗi nhịp dài gần bằng nhau. Hãy đọc đều từng nhịp, không nhấn mạnh nhịp nào.",
      "Hiểu đúng nhịp là nền cho ba bài sau: trường âm, âm ngắt っ và âm mũi ん đều chiếm một nhịp đầy đủ."
    ],
    rules: [
      "Mỗi chữ kana là 1 nhịp: か, さ, ら, ん...",
      "Chữ nhỏ ゃ ゅ ょ ghép với chữ đứng trước thành 1 nhịp: きょ là 1 nhịp, りゅ là 1 nhịp.",
      "っ (âm ngắt), ん (âm mũi) và ー (kéo dài) mỗi cái chiếm 1 nhịp riêng.",
      "Trường âm cũng chiếm 1 nhịp: おかあさん = お・か・あ・さ・ん (5 nhịp)."
    ],
    words: [
      ["さくら", "桜", "Hoa anh đào"], ["にほん", "日本", "Nhật Bản"], ["きょうと", "京都", "Kyoto"],
      ["とうきょう", "東京", "Tokyo"], ["がっこう", "学校", "Trường học"], ["おかあさん", "お母さん", "Mẹ"],
      ["りょこう", "旅行", "Du lịch"], ["ほん", "本", "Sách"], ["せんせい", "先生", "Giáo viên"], ["ざっし", "雑誌", "Tạp chí"]
    ],
    pairs: [
      ["びょういん", "Bệnh viện (4 nhịp)", "びよういん", "Tiệm làm đẹp (5 nhịp)"],
      ["じゅう", "Mười (2 nhịp)", "じゆう", "Tự do (3 nhịp)"]
    ]
  },
  {
    id: "choyon", jp: "長", title: "Trường âm (長音)", kind: "choyon",
    intro: [
      "Trường âm là nguyên âm được kéo dài thêm 1 nhịp, đọc dài gấp đôi nguyên âm thường. Nghe ngắn hay dài có thể đổi nghĩa hoàn toàn.",
      "Giữ giọng đều trong lúc kéo dài, không lên xuống như dấu thanh tiếng Việt."
    ],
    rules: [
      "あ + あ: おかあさん (mẹ), ああ.",
      "い + い: おにいさん (anh trai), おじいさん (ông).",
      "う + う: ゆうめい (nổi tiếng), くうき (không khí).",
      "え + い (đọc kéo dài え): えいが (phim), せんせい (giáo viên). Một số từ dùng え + え: おねえさん (chị gái).",
      "お + う (đọc kéo dài お): とうきょう, ほうこう. Một số từ dùng お + お: おおきい (to), とおい (xa).",
      "Katakana dùng dấu ー: ビール (bia), コーヒー (cà phê), ケーキ (bánh kem)."
    ],
    words: [
      ["おかあさん", "お母さん", "Mẹ"], ["おにいさん", "お兄さん", "Anh trai"], ["ゆうめい", "有名", "Nổi tiếng"],
      ["えいが", "映画", "Phim"], ["せんせい", "先生", "Giáo viên"], ["とうきょう", "東京", "Tokyo"],
      ["とおい", "遠い", "Xa"], ["おおきい", "大きい", "To"], ["ビール", "", "Bia"], ["コーヒー", "", "Cà phê"], ["ケーキ", "", "Bánh kem"]
    ],
    pairs: [
      ["おばさん", "Cô, dì", "おばあさん", "Bà"],
      ["おじさん", "Chú, bác", "おじいさん", "Ông"],
      ["ゆき", "Tuyết", "ゆうき", "Dũng khí"],
      ["とる", "Lấy, chụp", "とおる", "Đi qua"],
      ["ビル", "Tòa nhà", "ビール", "Bia"],
      ["とけい", "Đồng hồ", "とうけい", "Thống kê"]
    ]
  },
  {
    id: "sokuon", jp: "っ", title: "Âm ngắt っ (促音)", kind: "sokuon",
    intro: [
      "っ (chữ つ viết nhỏ) là một nhịp ngắt: bạn dừng lại đúng một nhịp rồi mới đọc phụ âm kế tiếp. Trong lúc dừng không phát ra âm nào.",
      "Cách luyện: đếm ngầm một nhịp ở chỗ っ. Nếu bỏ qua nhịp dừng này thì きって (tem) sẽ nghe thành きて (hãy đến)."
    ],
    rules: [
      "っ đứng trước các phụ âm k, s (sh), t (ch, ts), p: がっこう, ざっし, きって, いっぱい.",
      "Khi viết bằng romaji, gấp đôi phụ âm đó: gakkou, zasshi, kitte, ippai.",
      "Katakana dùng ッ: ベッド (giường), コップ (cốc).",
      "っ không đứng đầu từ. Cuối từ chỉ gặp trong cảm thán như あっ."
    ],
    words: [
      ["がっこう", "学校", "Trường học"], ["ざっし", "雑誌", "Tạp chí"], ["きって", "切手", "Tem"],
      ["ちょっと", "", "Một chút"], ["いっぱい", "一杯", "Một cốc; đầy"], ["ずっと", "", "Suốt, mãi"],
      ["コップ", "", "Cái cốc"], ["ベッド", "", "Giường"], ["ぜったい", "絶対", "Tuyệt đối"], ["しっかり", "", "Chắc chắn"]
    ],
    pairs: [
      ["おと", "Âm thanh", "おっと", "Chồng"],
      ["きて", "Hãy đến", "きって", "Tem"],
      ["さか", "Dốc", "さっか", "Nhà văn, tác giả"],
      ["せけん", "Thế gian", "せっけん", "Xà phòng"],
      ["ぶか", "Cấp dưới", "ぶっか", "Vật giá"],
      ["いた", "Đã ở", "いった", "Đã đi"]
    ]
  },
  {
    id: "hatsuon", jp: "ん", title: "Âm mũi ん (撥音)", kind: "hatsuon",
    intro: [
      "ん chiếm trọn một nhịp, đọc đủ độ dài như các chữ khác, không đọc lướt.",
      "Cách phát âm của ん thay đổi theo âm đứng sau nó, nhưng người Nhật không để ý vì đều là một chữ ん."
    ],
    rules: [
      "Trước p, b, m: miệng khép lại như âm 'm'. Ví dụ: さんぽ (sampo), しんぶん (shimbun), えんぴつ.",
      "Trước t, d, n, r, ch, ts: đầu lưỡi chạm lợi trên như âm 'n'. Ví dụ: かんたん, おんな, せんろ.",
      "Trước k, g: đọc như âm 'ng' ở cuối từ tiếng Việt 'ăng'. Ví dụ: ぎんこう, りんご.",
      "Cuối từ hoặc trước nguyên âm, y, w, h, s: đọc nhẹ qua mũi, giữ đủ một nhịp. Ví dụ: ほん, でんわ, こんにちは."
    ],
    words: [
      ["ほん", "本", "Sách"], ["でんわ", "電話", "Điện thoại"], ["さんぽ", "散歩", "Đi dạo"],
      ["しんぶん", "新聞", "Báo"], ["えんぴつ", "鉛筆", "Bút chì"], ["ぎんこう", "銀行", "Ngân hàng"],
      ["りんご", "", "Táo"], ["おんな", "女", "Phụ nữ"], ["にんじん", "", "Cà rốt"], ["こんばん", "今晩", "Tối nay"]
    ],
    pairs: [
      ["かじ", "Hỏa hoạn", "かんじ", "Chữ Hán"],
      ["こや", "Chòi, lán", "こんや", "Tối nay"],
      ["ぶか", "Cấp dưới", "ぶんか", "Văn hóa"],
      ["かい", "Vỏ sò", "かんい", "Giản tiện"]
    ]
  },
  {
    id: "accent", jp: "音", title: "Cao độ (アクセント)", kind: "accent",
    intro: [
      "Tiếng Nhật có cao độ: mỗi nhịp là cao (H) hoặc thấp (L). Khác với tiếng Việt, cao độ gắn với cả từ chứ không phải dấu thanh của từng âm.",
      "Dưới đây là kiểu phổ biến của giọng chuẩn (Tokyo). Cao độ có thể khác theo vùng, và giọng đọc tổng hợp đôi khi đọc chưa đúng, nên hãy tra từ điển cao độ (ví dụ của NHK) khi cần chắc chắn."
    ],
    rules: [
      "Kiểu 平板 (không có điểm hạ): nhịp 1 thấp, các nhịp sau cao và giữ nguyên. Ví dụ: さくら = L H H.",
      "Kiểu 頭高 (hạ sau nhịp 1): nhịp 1 cao rồi hạ xuống. Ví dụ: みる = H L.",
      "Kiểu 中高 (hạ ở giữa): lên cao rồi hạ trước nhịp cuối. Ví dụ: たべる = L H L.",
      "Kiểu 尾高 (hạ sau nhịp cuối): giống 平板 nhưng trợ từ đi sau bị hạ xuống. Ví dụ: はし (cầu) = L H, còn はしが = L H L.",
      "Từ đồng âm có thể chỉ khác nhau ở cao độ: はし (đũa) và はし (cầu), あめ (mưa) và あめ (kẹo)."
    ],
    words: [
      ["さくら", "桜", "Hoa anh đào", "LHH"], ["がっこう", "学校", "Trường học", "LHHH"], ["とうきょう", "東京", "Tokyo", "LHHH"],
      ["みる", "見る", "Xem", "HL"], ["たべる", "食べる", "Ăn", "LHL"], ["せんせい", "先生", "Giáo viên", "LHHL"], ["にほん", "日本", "Nhật Bản", "LHL"]
    ],
    pairs: [
      ["はし", "Đũa (箸)", "はし", "Cầu (橋)", "HL", "LH"],
      ["あめ", "Mưa (雨)", "あめ", "Kẹo (飴)", "HL", "LH"]
    ]
  }
];
export const PH_TEXTS = [...new Set(PH.flatMap(l => [...l.words.map(w => w[0]), ...l.pairs.flatMap(p => [p[0], p[2]])]))];
