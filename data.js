// ============================================================
// インド出張 英語カード データ
// 追加方法: 以下の配列に同じ構造のオブジェクトを追記するだけ
//
// role:  "listen" = 相手が言う(音で当てる) / "say" = 自分が言う
// scene: 場面。index.html の場面セレクトと対応
// context: バッジ表示用のタグ(scene + インド英語なら "インド英語")
// ============================================================

const messages = [
  // ---- バッチ 1: 30本 (2026-09-03 下書き→確定) ----

  // ===== 空港・移動 =====
  {
    id: 1,
    role: "say",
    scene: "空港・移動",
    english: "Could you take me to the office, please?",
    japanese: "オフィスまでお願いします",
    context: ["空港・移動"],
    explanation: "空港で迎えの車やタクシーに乗ったとき。行き先を告げる一言。会社名を入れるなら the の後に社名を置く。",
    vocabulary: ["could you", "take me to"],
    learningTip: "「Could you 〜, please?」は頼みごとの万能型。Can you より丁寧で、出張中はこれ一つで乗り切れる。"
  },
  {
    id: 2,
    role: "listen",
    scene: "空港・移動",
    english: "Sir, this way please.",
    japanese: "こちらへどうぞ",
    context: ["空港・移動", "インド英語"],
    explanation: "空港の係員・ホテルのスタッフ・運転手が案内するときに言う。女性には Ma'am(マム)。",
    vocabulary: ["sir", "this way"],
    learningTip: "インドでは Sir / Ma'am をとてもよく付ける。呼ばれても驚かなくてよい。"
  },
  {
    id: 3,
    role: "say",
    scene: "空港・移動",
    english: "How long will it take?",
    japanese: "どのくらいかかりますか",
    context: ["空港・移動"],
    explanation: "車に乗ってから、到着まで何分かを聞く。渋滞の話に繋がりやすい。",
    vocabulary: ["how long", "take"],
    learningTip: "この take は「(時間が)かかる」。「It takes 10 minutes.」の形で覚えると聞き取りも楽。"
  },
  {
    id: 4,
    role: "listen",
    scene: "空港・移動",
    english: "Around one hour. Traffic is there.",
    japanese: "1時間くらい。渋滞があるので",
    context: ["空港・移動", "インド英語"],
    explanation: "運転手の返事。「Traffic is there」はインド英語で「渋滞がある」。There is traffic の順が入れ替わっている。",
    vocabulary: ["around", "traffic"],
    learningTip: "「〜 is there」=「〜がある」はインド英語の定番。「Problem is there」なら「問題がある」。"
  },
  {
    id: 5,
    role: "say",
    scene: "空港・移動",
    english: "I have a reservation under my name.",
    japanese: "私の名前で予約しています",
    context: ["空港・移動"],
    explanation: "ホテルのチェックイン。名前を聞かれたらパスポートを見せるのが早い。",
    vocabulary: ["reservation", "under my name"],
    learningTip: "「under the name of 〜」で「〜の名前で」。レストランの予約でも同じ言い方。"
  },

  // ===== オフィス到着・自己紹介 =====
  {
    id: 6,
    role: "say",
    scene: "オフィス",
    english: "Nice to meet you. I'm Moko, from the Tokyo office.",
    japanese: "はじめまして、東京オフィスのもこです",
    context: ["オフィス"],
    explanation: "初対面の同僚への自己紹介。名前と所属だけで十分。握手は相手が出してきたら応じる。",
    vocabulary: ["nice to meet you", "from"],
    learningTip: "「from the Tokyo office」の from は「所属」。部署を足すなら「from the IT team」。"
  },
  {
    id: 7,
    role: "say",
    scene: "オフィス",
    english: "This is my first time in India.",
    japanese: "インドは初めてです",
    context: ["オフィス"],
    explanation: "自己紹介の続き。ここから「How do you like it?」など雑談が始まる。",
    vocabulary: ["first time", "in India"],
    learningTip: "「This is my first time 〜」は「初めて」の定番。「first time here」でも通じる。"
  },
  {
    id: 8,
    role: "listen",
    scene: "オフィス",
    english: "How was your flight?",
    japanese: "フライトはどうでしたか",
    context: ["オフィス"],
    explanation: "到着した人への決まり文句。中身を聞きたいわけではなく挨拶。",
    vocabulary: ["how was", "flight"],
    learningTip: "「How was 〜?」は「〜はどうだった?」。返事は Good / Long / Fine で足りる。"
  },
  {
    id: 9,
    role: "say",
    scene: "オフィス",
    english: "It was long, but fine.",
    japanese: "長かったけど大丈夫でした",
    context: ["オフィス"],
    explanation: "8番への返事。「but fine」を付けると会話が明るく終わる。",
    vocabulary: ["long", "fine"],
    learningTip: "「〜, but fine.」は「〜だったけど問題ない」の便利な締め。"
  },
  {
    id: 10,
    role: "listen",
    scene: "オフィス",
    english: "Have you had your breakfast?",
    japanese: "朝ごはんは済みましたか",
    context: ["オフィス", "インド英語"],
    explanation: "インドでは挨拶がわりによく聞かれる。本当に食べたか聞いているというより気づかい。",
    vocabulary: ["have you had", "breakfast"],
    learningTip: "「Have you had 〜?」は「〜を済ませた?」。Yes, I have. / Not yet. で返せる。"
  },
  {
    id: 11,
    role: "say",
    scene: "オフィス",
    english: "Where can I get some water?",
    japanese: "水はどこでもらえますか",
    context: ["オフィス"],
    explanation: "オフィスに着いてまず必要になる一言。給水機かボトルを教えてくれる。",
    vocabulary: ["where can I", "get"],
    learningTip: "「Where can I 〜?」は「どこで〜できますか」。トイレなら Where is the washroom? がインドでは通じやすい。"
  },

  // ===== 打ち合わせ =====
  {
    id: 12,
    role: "say",
    scene: "打ち合わせ",
    english: "Sorry, could you say that again?",
    japanese: "すみません、もう一度お願いします",
    context: ["打ち合わせ"],
    explanation: "聞き取れなかったときの聞き返し。恥ずかしがらずに何度でも使う。",
    vocabulary: ["say that again"],
    learningTip: "短くするなら「Sorry?」だけでも聞き返しになる。語尾を上げるのがコツ。"
  },
  {
    id: 13,
    role: "say",
    scene: "打ち合わせ",
    english: "Could you speak a little slower?",
    japanese: "もう少しゆっくり話してもらえますか",
    context: ["打ち合わせ"],
    explanation: "速くて追えないときに。相手は悪気なく速いので、言えば合わせてくれる。",
    vocabulary: ["a little", "slower"],
    learningTip: "「a little」を挟むと柔らかい。「slowly」でなく「slower」でも会話では自然。"
  },
  {
    id: 14,
    role: "say",
    scene: "打ち合わせ",
    english: "Let me check and get back to you.",
    japanese: "確認して折り返します",
    context: ["打ち合わせ"],
    explanation: "その場で答えられないときの逃げ道。日本に確認してから返す、という場面で。",
    vocabulary: ["let me", "get back to you"],
    learningTip: "「get back to you」=「折り返し連絡する」。「Let me 〜」は「〜させて」で、自分の行動を宣言する型。"
  },
  {
    id: 15,
    role: "listen",
    scene: "打ち合わせ",
    english: "I'll revert by tomorrow.",
    japanese: "明日までに返事します",
    context: ["打ち合わせ", "インド英語"],
    explanation: "インドの同僚からよく聞く。revert は本来「元に戻す」だが、インド英語では「返事する」。",
    vocabulary: ["revert", "by tomorrow"],
    learningTip: "メールでも「Please revert」=「返事ください」。アメリカ英語の人は使わないので、インド特有と覚える。"
  },
  {
    id: 16,
    role: "listen",
    scene: "打ち合わせ",
    english: "Please do the needful.",
    japanese: "必要な対応をお願いします",
    context: ["打ち合わせ", "インド英語"],
    explanation: "インド英語の代表選手。「あとはよろしく」に近い。メールの結びで頻出。",
    vocabulary: ["do the needful"],
    learningTip: "needful は「必要なこと」。「do the needful」でひとかたまりに覚える。"
  },
  {
    id: 17,
    role: "listen",
    scene: "打ち合わせ",
    english: "Can we prepone the meeting to 2 o'clock?",
    japanese: "会議を2時に前倒しできますか",
    context: ["打ち合わせ", "インド英語"],
    explanation: "postpone(延期)の反対語として、インドで作られた言葉。辞書にないが現地では普通。",
    vocabulary: ["prepone", "meeting"],
    learningTip: "pre(前)+pone で「前倒し」。聞いたら「早める話だな」と分かればよい。"
  },
  {
    id: 18,
    role: "say",
    scene: "打ち合わせ",
    english: "Do you mean this one?",
    japanese: "これのことですか",
    context: ["打ち合わせ"],
    explanation: "画面や資料を指さしながら確認する。単語が分からなくても、指させば通じる。",
    vocabulary: ["mean", "this one"],
    learningTip: "「Do you mean 〜?」は「〜ってこと?」。聞き取りが怪しいときの確認に万能。"
  },
  {
    id: 19,
    role: "say",
    scene: "打ち合わせ",
    english: "Could you send me the file by email?",
    japanese: "ファイルをメールで送ってもらえますか",
    context: ["打ち合わせ"],
    explanation: "資料をあとで見たいときに。「by email」を「on Teams」に替えても使える。",
    vocabulary: ["send me", "by email"],
    learningTip: "「send me the 〜」で「〜を送って」。「by 〜」は手段。by email / by phone。"
  },
  {
    id: 20,
    role: "say",
    scene: "打ち合わせ",
    english: "Who is in charge of this data?",
    japanese: "このデータの担当は誰ですか",
    context: ["打ち合わせ"],
    explanation: "データの出どころ・担当者を辿るときに。答えは名前が返ってくるので、聞き取れなければ書いてもらう。",
    vocabulary: ["in charge of", "data"],
    learningTip: "「in charge of 〜」=「〜の担当」。「Who owns this data?」でも同じ意味で通じる。"
  },
  {
    id: 21,
    role: "listen",
    scene: "打ち合わせ",
    english: "I'll share the details today itself.",
    japanese: "今日中に詳細を共有します",
    context: ["打ち合わせ", "インド英語"],
    explanation: "「today itself」はインド英語で「まさに今日、今日のうちに」の強調。",
    vocabulary: ["share", "today itself"],
    learningTip: "「〜 itself」を時間の後ろに付けるのはインド特有。「now itself」なら「今すぐ」。"
  },
  {
    id: 22,
    role: "say",
    scene: "打ち合わせ",
    english: "Just to confirm, the deadline is Friday, right?",
    japanese: "確認ですが、締め切りは金曜ですね",
    context: ["打ち合わせ"],
    explanation: "会議の終わりに、聞き取った内容を自分の口で言って確かめる。ずれていればここで直る。",
    vocabulary: ["just to confirm", "deadline"],
    learningTip: "「Just to confirm, 〜, right?」は復唱の型。文の最後に right? を付けるだけで確認になる。"
  },

  // ===== 食事 =====
  {
    id: 23,
    role: "listen",
    scene: "食事",
    english: "Veg or non-veg?",
    japanese: "ベジですか、ノンベジですか",
    context: ["食事", "インド英語"],
    explanation: "インドの食事で最初に聞かれる。菜食か肉ありか。メニューも veg / non-veg で分かれている。",
    vocabulary: ["veg", "non-veg"],
    learningTip: "vegetarian の略が veg。返事は Non-veg is fine. / Veg, please. で足りる。"
  },
  {
    id: 24,
    role: "say",
    scene: "食事",
    english: "Not too spicy, please.",
    japanese: "あまり辛くしないでください",
    context: ["食事"],
    explanation: "注文のとき。言わないと本気の辛さで来ることがある。「Less spicy」でも通じる。",
    vocabulary: ["spicy", "not too"],
    learningTip: "「Not too 〜, please.」は「〜しすぎないで」。Not too sweet, Not too much でも使える。"
  },
  {
    id: 25,
    role: "listen",
    scene: "食事",
    english: "Have you tried biryani?",
    japanese: "ビリヤニは食べたことありますか",
    context: ["食事"],
    explanation: "食事の席の雑談。インドの料理を勧めてくれる流れ。Yes / Not yet で返せる。",
    vocabulary: ["have you tried", "biryani"],
    learningTip: "「Have you tried 〜?」=「〜を試したことある?」。食べ物にも場所にも使う。"
  },
  {
    id: 26,
    role: "say",
    scene: "食事",
    english: "This is delicious. What is it called?",
    japanese: "おいしいです。これは何という料理ですか",
    context: ["食事"],
    explanation: "料理をほめて名前を聞く。相手が喜んで説明してくれるので、会話が続く。",
    vocabulary: ["delicious", "called"],
    learningTip: "「What is it called?」=「これ何て言うの?」。物の名前を聞く万能の型。"
  },
  {
    id: 27,
    role: "say",
    scene: "食事",
    english: "Only bottled water for me, please.",
    japanese: "水はボトルのものでお願いします",
    context: ["食事"],
    explanation: "水道水を避けるための一言。レストランでもホテルでも。",
    vocabulary: ["bottled water", "only"],
    learningTip: "「〜 for me, please.」は注文の型。「Coffee for me, please.」でも同じ。"
  },

  // ===== 別れ・お礼 =====
  {
    id: 28,
    role: "say",
    scene: "別れ・お礼",
    english: "Thank you for your help today.",
    japanese: "今日はありがとうございました",
    context: ["別れ・お礼"],
    explanation: "一日の終わりに。「for your help」を「for lunch」に替えれば食事のお礼になる。",
    vocabulary: ["thank you for", "help"],
    learningTip: "「Thank you for 〜」の後は名詞か 〜ing。Thank you for coming. / for your time."
  },
  {
    id: 29,
    role: "say",
    scene: "別れ・お礼",
    english: "See you tomorrow at nine.",
    japanese: "明日9時に",
    context: ["別れ・お礼"],
    explanation: "翌日の待ち合わせ。時刻を言い添えると、その場で確認になる。",
    vocabulary: ["see you", "at nine"],
    learningTip: "時刻は at、曜日は on、月は in。「at nine」「on Friday」「in October」。"
  },
  {
    id: 30,
    role: "listen",
    scene: "別れ・お礼",
    english: "Take care. Safe journey.",
    japanese: "気をつけて。良い旅を",
    context: ["別れ・お礼", "インド英語"],
    explanation: "帰国する人への見送り。「Safe journey」はインドでよく聞く。アメリカなら「Have a safe trip」。",
    vocabulary: ["take care", "journey"],
    learningTip: "「Take care.」は別れの挨拶の定番。返事も「You too.」で十分。"
  }
];
