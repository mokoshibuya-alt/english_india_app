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
  },

  // ---- バッチ 2: 旅行の場面 25本 (2026-11-14 年末の旅行用) ----

  // ===== ホテル =====
  {
    id: 31,
    role: "listen",
    scene: "ホテル",
    english: "Your good name, ma'am?",
    japanese: "お名前は?",
    context: ["ホテル", "インド英語"],
    explanation: "チェックインで名前を聞かれるときの言い方。good に意味はなく、丁寧に聞いているだけ。",
    vocabulary: ["good name", "ma'am"],
    learningTip: "「What is your good name?」はインド特有の丁寧な聞き方。名字か名前をそのまま答えればよい。"
  },
  {
    id: 32,
    role: "listen",
    scene: "ホテル",
    english: "Kindly fill this form and show your passport.",
    japanese: "この用紙に記入して、パスポートを見せてください",
    context: ["ホテル", "インド英語"],
    explanation: "外国人はチェックインで用紙とパスポート(ビザのページも)を求められる。",
    vocabulary: ["kindly", "fill this form"],
    learningTip: "インドでは please の代わりに kindly をよく使う。聞いたら「お願いされている」と分かればよい。"
  },
  {
    id: 33,
    role: "say",
    scene: "ホテル",
    english: "Is breakfast included?",
    japanese: "朝食は付いていますか",
    context: ["ホテル"],
    explanation: "チェックインのときに聞いておく。何時から何時まで、と続けて聞くなら What time is breakfast?",
    vocabulary: ["included"],
    learningTip: "「Is 〜 included?」=「〜は込みですか」。Wi-Fi や税金(tax)でも使える。"
  },
  {
    id: 34,
    role: "say",
    scene: "ホテル",
    english: "What time is checkout?",
    japanese: "チェックアウトは何時ですか",
    context: ["ホテル"],
    explanation: "インドのホテルは正午(12時)が多いが、宿による。最終日の予定を組む前に聞く。",
    vocabulary: ["what time", "checkout"],
    learningTip: "「What time is 〜?」で「〜は何時?」。朝食・出発・閉館、なんでも入る。"
  },
  {
    id: 35,
    role: "say",
    scene: "ホテル",
    english: "The AC is not working. Could you check it?",
    japanese: "エアコンが動きません。見てもらえますか",
    context: ["ホテル"],
    explanation: "部屋の不具合を伝える。インドではエアコンを AC(エーシー)と呼ぶ。お湯なら hot water。",
    vocabulary: ["AC", "not working"],
    learningTip: "「〜 is not working.」で「〜が動かない・壊れている」。The shower / The light に替えて使い回せる。"
  },
  {
    id: 36,
    role: "say",
    scene: "ホテル",
    english: "Can we leave our luggage here?",
    japanese: "荷物をここに預けてもいいですか",
    context: ["ホテル"],
    explanation: "チェックアウト後に観光する日や、早く着いた日に。二人旅なので we / our。",
    vocabulary: ["leave", "luggage"],
    learningTip: "leave は「置いていく」。「Can we 〜?」は「〜してもいい?」で、二人分の許可を取る型。"
  },

  // ===== 街歩き・オート =====
  {
    id: 37,
    role: "say",
    scene: "街歩き・オート",
    english: "How much to the station?",
    japanese: "駅までいくらですか",
    context: ["街歩き・オート"],
    explanation: "オートリキシャ(auto)やタクシーに乗る前に、必ず値段を決めてから乗る。",
    vocabulary: ["how much", "to the station"],
    learningTip: "「How much to 〜?」で「〜までいくら?」。行き先だけ入れ替えれば全部の移動に使える。"
  },
  {
    id: 38,
    role: "say",
    scene: "街歩き・オート",
    english: "Please go by meter.",
    japanese: "メーターで行ってください",
    context: ["街歩き・オート", "インド英語"],
    explanation: "メーターがあるのに使わず、高い言い値を出されることがある。断られたら値段を決めてから乗るか、別の車にする。",
    vocabulary: ["by meter"],
    learningTip: "「by meter」はインドで通じる言い方。アプリ(Uber・Ola)で呼ぶと値段が先に決まるので交渉がいらない。"
  },
  {
    id: 39,
    role: "listen",
    scene: "街歩き・オート",
    english: "Ma'am, where you are going?",
    japanese: "どちらへ行きますか",
    context: ["街歩き・オート", "インド英語"],
    explanation: "駅前や観光地で運転手に声をかけられる。語順が where are you going から崩れているのはよくあること。",
    vocabulary: ["ma'am", "where"],
    learningTip: "乗る気がなければ「No, thank you.」で歩き続ければよい。立ち止まると話が続く。"
  },
  {
    id: 40,
    role: "say",
    scene: "街歩き・オート",
    english: "Is it walking distance?",
    japanese: "歩いて行ける距離ですか",
    context: ["街歩き・オート"],
    explanation: "ホテルの人や店の人に道を聞くとき。遠ければオートを勧めてくれる。",
    vocabulary: ["walking distance"],
    learningTip: "「walking distance」=「歩ける距離」。「It's five minutes' walk.」の形で返ってくることが多い。"
  },
  {
    id: 41,
    role: "listen",
    scene: "街歩き・オート",
    english: "Go straight, then take a left.",
    japanese: "まっすぐ行って、左に曲がって",
    context: ["街歩き・オート"],
    explanation: "道を教えてもらうときの定番。インドでは首を横に揺らしながら言われることもあるが、No ではない。",
    vocabulary: ["go straight", "take a left"],
    learningTip: "「take a left / take a right」=「左へ・右へ曲がる」。turn left と同じ意味。"
  },
  {
    id: 42,
    role: "say",
    scene: "街歩き・オート",
    english: "Please stop here.",
    japanese: "ここで止めてください",
    context: ["街歩き・オート"],
    explanation: "目的地の手前で降りたいとき。払うときは釣り銭が出ないことがあるので、小さいお札を用意しておく。",
    vocabulary: ["stop here"],
    learningTip: "短く「Here is fine.」でも通じる。「ここで大丈夫」の意味。"
  },

  // ===== 買い物 =====
  {
    id: 43,
    role: "say",
    scene: "買い物",
    english: "How much is this?",
    japanese: "これはいくらですか",
    context: ["買い物"],
    explanation: "値札のない店では、まずこれ。指さしながら言えば十分。",
    vocabulary: ["how much"],
    learningTip: "複数なら「How much are these?」。値段は「rupees(ルピー)」で返ってくる。"
  },
  {
    id: 44,
    role: "say",
    scene: "買い物",
    english: "I'm just looking, thank you.",
    japanese: "見ているだけです",
    context: ["買い物"],
    explanation: "店員がすぐに寄ってくるので、断りの一言を持っておく。笑顔で言えば角が立たない。",
    vocabulary: ["just looking"],
    learningTip: "「just 〜ing」で「〜しているだけ」。最後の thank you で柔らかくなる。"
  },
  {
    id: 45,
    role: "say",
    scene: "買い物",
    english: "That's too expensive. What's your last price?",
    japanese: "高すぎます。いくらまで下げられますか",
    context: ["買い物", "インド英語"],
    explanation: "市場や土産物屋は値段交渉が前提。「last price」は「最終価格=これ以上下げられない値段」で、インドの交渉の決まり文句。",
    vocabulary: ["too expensive", "last price"],
    learningTip: "最初の言い値の半分くらいから始めて、間で決まることが多い。決裂したら店を出るのも交渉のうち。"
  },
  {
    id: 46,
    role: "listen",
    scene: "買い物",
    english: "Fixed price, ma'am. No bargaining.",
    japanese: "定価です。値引きはしません",
    context: ["買い物"],
    explanation: "デパートや国営の店(エンポリアム)は定価。ここでは交渉しない。",
    vocabulary: ["fixed price", "bargaining"],
    learningTip: "bargain は「値切る」。fixed price と聞いたら交渉の場ではない、と切り替える。"
  },
  {
    id: 47,
    role: "say",
    scene: "買い物",
    english: "If I buy two, can you give me a discount?",
    japanese: "二つ買ったら、まけてくれますか",
    context: ["買い物"],
    explanation: "二人で同じものを買うときの交渉。まとめ買いは値引きの口実になりやすい。",
    vocabulary: ["if I buy", "discount"],
    learningTip: "「If I 〜, can you 〜?」は「〜したら、〜してくれる?」の交渉の型。"
  },
  {
    id: 48,
    role: "say",
    scene: "買い物",
    english: "Can I pay by card?",
    japanese: "カードで払えますか",
    context: ["買い物"],
    explanation: "小さい店は現金かUPI(インドのスマホ決済)だけのことが多い。払う前に聞く。",
    vocabulary: ["pay by card"],
    learningTip: "「by card / in cash」で支払い方法。cash は by ではなく in を使う。"
  },
  {
    id: 49,
    role: "listen",
    scene: "買い物",
    english: "Only cash or UPI, ma'am.",
    japanese: "現金かUPIだけです",
    context: ["買い物", "インド英語"],
    explanation: "48番への返事でよく聞く。UPI(ユーピーアイ)はQRで払うインドの決済。旅行者は使えないことが多いので、現金を持っておく。",
    vocabulary: ["cash", "UPI"],
    learningTip: "「Only 〜」を頭に置くと「〜だけ」。インドでは文の最後に only を付けて強める言い方もある(cash only)。"
  },

  // ===== 観光 =====
  {
    id: 50,
    role: "say",
    scene: "観光",
    english: "Two tickets, please.",
    japanese: "チケット2枚ください",
    context: ["観光"],
    explanation: "窓口で。遺跡や博物館は外国人料金(foreigner)が別にあり、インド人料金より高い。",
    vocabulary: ["ticket"],
    learningTip: "数+名詞+please で注文は全部できる。「Two chai, please.」でも同じ。"
  },
  {
    id: 51,
    role: "listen",
    scene: "観光",
    english: "Please remove your footwear here.",
    japanese: "ここで履物を脱いでください",
    context: ["観光", "インド英語"],
    explanation: "寺院やモスクの入口で言われる。靴を預ける場所があり、少額のお礼を払うことも。",
    vocabulary: ["remove", "footwear"],
    learningTip: "インドでは shoes より footwear(履物)をよく使う。サンダルも含む言い方。"
  },
  {
    id: 52,
    role: "say",
    scene: "観光",
    english: "Can I take a photo here?",
    japanese: "ここで写真を撮ってもいいですか",
    context: ["観光"],
    explanation: "寺院の中や博物館は撮影禁止や撮影料が必要な場所がある。迷ったら聞く。",
    vocabulary: ["take a photo"],
    learningTip: "人を撮るときも「Can I take a photo of you?」と聞いてから。"
  },
  {
    id: 53,
    role: "listen",
    scene: "観光",
    english: "Ma'am, one selfie, please?",
    japanese: "一緒に自撮りしてもいいですか",
    context: ["観光", "インド英語"],
    explanation: "観光地で外国人はよく写真をせがまれる。嫌なら断ってよい。",
    vocabulary: ["selfie"],
    learningTip: "断るなら「Sorry, no photos.」、応じるなら「OK, just one.」。どちらも短くて通じる。"
  },
  {
    id: 54,
    role: "say",
    scene: "観光",
    english: "Could you take a picture of us?",
    japanese: "私たちの写真を撮ってもらえますか",
    context: ["観光"],
    explanation: "二人で写りたいときに。スマホを渡すなら、周りの家族連れや係員に頼むのが安心。",
    vocabulary: ["could you", "picture of us"],
    learningTip: "「of us」で「私たちの」。一人なら「of me」。"
  },
  {
    id: 55,
    role: "say",
    scene: "観光",
    english: "What time does it close?",
    japanese: "何時に閉まりますか",
    context: ["観光"],
    explanation: "遺跡や博物館は早く閉まる所や、曜日で休みの所がある(タージ・マハルは金曜休み)。",
    vocabulary: ["what time", "close"],
    learningTip: "開く時間なら「What time does it open?」。it は場所を指している。"
  },

  // ===== 雑談 (2026-11-14 現地の人と・お坊さんが同行するかも) =====
  {
    id: 56,
    role: "listen",
    scene: "雑談",
    english: "Which country you are from?",
    japanese: "どこの国から来たの?",
    context: ["雑談", "インド英語"],
    explanation: "インドで一番よく聞かれる。語順が Which country are you from? から崩れているが、よくある形。",
    vocabulary: ["which country"],
    learningTip: "短く「Which country?」だけのことも多い。「Japan.」の一語で会話が始まる。"
  },
  {
    id: 57,
    role: "say",
    scene: "雑談",
    english: "We're from Japan. We're friends, traveling together.",
    japanese: "日本から来ました。友達同士で旅行しています",
    context: ["雑談"],
    explanation: "二人の関係を聞かれる前に言ってしまう一言。姉妹?と聞かれることもある。",
    vocabulary: ["traveling together"],
    learningTip: "「〜 together」で「一緒に〜」。We're friends. だけでも十分通じる。"
  },
  {
    id: 58,
    role: "listen",
    scene: "雑談",
    english: "Are you married? How many children?",
    japanese: "結婚してるの?子どもは何人?",
    context: ["雑談", "インド英語"],
    explanation: "インドでは初対面でも家族のことをよく聞かれる。詮索ではなく、親しくなるための普通の話題。",
    vocabulary: ["married", "children"],
    learningTip: "答えたくなければ笑って「I have a daughter.」など、言いたいところだけ返せばよい。"
  },
  {
    id: 59,
    role: "say",
    scene: "雑談",
    english: "I have a daughter. She's in Japan.",
    japanese: "娘が一人います。日本にいます",
    context: ["雑談"],
    explanation: "58番への返事。家族の話は喜ばれるので、スマホの写真を見せると話が続く。",
    vocabulary: ["daughter"],
    learningTip: "「I have 〜」で家族を言う。息子なら son、姉妹なら sister。"
  },
  {
    id: 60,
    role: "listen",
    scene: "雑談",
    english: "What is your profession?",
    japanese: "お仕事は何ですか",
    context: ["雑談", "インド英語"],
    explanation: "インドでは仕事を聞くとき profession(職業)をよく使う。What do you do? と同じ意味。",
    vocabulary: ["profession"],
    learningTip: "返事は「I work for a company.」で十分。中身を言うなら「I work with data.」。"
  },
  {
    id: 61,
    role: "say",
    scene: "雑談",
    english: "I work with data at a company.",
    japanese: "会社でデータの仕事をしています",
    context: ["雑談"],
    explanation: "60番への返事。IT の話が好きな人も多いので、ここから話が広がることもある。",
    vocabulary: ["work with", "data"],
    learningTip: "「work with 〜」で「〜を扱う仕事」。work with people / work with numbers。"
  },
  {
    id: 62,
    role: "say",
    scene: "雑談",
    english: "I practice yoga in Japan.",
    japanese: "日本でヨガをしています",
    context: ["雑談"],
    explanation: "インドの人は喜んで食いついてくれる話題。どんな流派かと聞かれることもある。",
    vocabulary: ["practice"],
    learningTip: "習いごとは practice(実践する)を使うと自然。I do yoga. でも通じる。"
  },
  {
    id: 63,
    role: "say",
    scene: "雑談",
    english: "I'm interested in Vedanta.",
    japanese: "ヴェーダーンタに関心があります",
    context: ["雑談"],
    explanation: "インドの哲学の話を始める一言。詳しい人に会うと、向こうから話してくれる。",
    vocabulary: ["interested in", "Vedanta"],
    learningTip: "「I'm interested in 〜」で「〜に関心がある」。Indian food / temples でも使える。"
  },
  {
    id: 64,
    role: "say",
    scene: "雑談",
    english: "Our friend is a monk.",
    japanese: "友人はお坊さんです",
    context: ["雑談"],
    explanation: "同行者を紹介するとき。お寺や聖地では、僧侶と一緒だと扱いが変わることもある。",
    vocabulary: ["monk"],
    learningTip: "monk(マンク)は「お坊さん・修道士」。日本の僧侶なら a Japanese monk。"
  },
  {
    id: 65,
    role: "listen",
    scene: "雑談",
    english: "How do you find India?",
    japanese: "インドはどうですか",
    context: ["雑談", "インド英語"],
    explanation: "find は「見つける」ではなく「どう感じるか」。インドの人がよく使う聞き方。How do you like India? と同じ。",
    vocabulary: ["how do you find"],
    learningTip: "返事は「I love it.」「Everyone is so kind.」など一言でよい。"
  },
  {
    id: 66,
    role: "say",
    scene: "雑談",
    english: "Nice talking to you.",
    japanese: "お話できてよかったです",
    context: ["雑談"],
    explanation: "雑談の締め。立ち去るきっかけにもなる。",
    vocabulary: ["nice talking to you"],
    learningTip: "初対面の挨拶は Nice to meet you、別れ際は Nice talking to you。"
  },
  // ---- バッチ 2: 100本 (2026-11-14 旅行・雑談を厚く。長めの文とインド英語の聞き取り) ----

  // ===== 空港・移動 =====
  {"id": 67, "role": "listen", "scene": "空港・移動", "english": "Kindly keep your belongings with you at all times.", "japanese": "手荷物は常にお手元に置いてください", "context": ["空港・移動", "インド英語"], "explanation": "空港のアナウンス。kindly はインドで please の代わりによく使われる、少しかしこまった丁寧語。", "vocabulary": [{"term": "kindly", "meaning": "どうぞ〜してください(丁寧)", "katakana": "カインドリー"}, {"term": "belongings", "meaning": "持ち物・手荷物", "katakana": "ビロンギングズ"}], "learningTip": "インドの案内・メールは kindly だらけ。「Kindly note」「Kindly confirm」も同じ。命令ではなく丁寧なお願い。"},
  {"id": 68, "role": "say", "scene": "空港・移動", "english": "Is this the queue for international transfers?", "japanese": "これは国際線乗り継ぎの列ですか", "context": ["空港・移動"], "explanation": "乗り継ぎ空港で、並ぶ列が合っているか確かめる。", "vocabulary": [{"term": "queue", "meaning": "列", "katakana": "キュー"}, {"term": "transfer", "meaning": "乗り継ぎ", "katakana": "トランスファー"}], "learningTip": "インド・イギリスでは列は queue。アメリカ英語の line でも通じるが、案内表示は queue が多い。"},
  {"id": 69, "role": "listen", "scene": "空港・移動", "english": "Your flight has been rescheduled. It will now depart at four thirty.", "japanese": "便の時刻が変更になりました。4時半の出発です", "context": ["空港・移動"], "explanation": "カウンターや搭乗口で言われる。rescheduled は時刻変更、cancelled なら欠航。", "vocabulary": [{"term": "rescheduled", "meaning": "予定が変更された", "katakana": "リスケジュールド"}, {"term": "depart", "meaning": "出発する", "katakana": "ディパート"}], "learningTip": "delayed(遅れ)/rescheduled(変更)/cancelled(欠航)を聞き分けられると慌てずに済む。"},
  {"id": 70, "role": "say", "scene": "空港・移動", "english": "Could you tell me which gate it's leaving from now?", "japanese": "今はどのゲートから出るか教えてもらえますか", "context": ["空港・移動"], "explanation": "時刻変更のついでにゲートも変わっていないか確かめる一言。", "vocabulary": [{"term": "which gate", "meaning": "どのゲート", "katakana": "ウィッチ ゲイト"}, {"term": "leaving from", "meaning": "〜から出発する", "katakana": "リーヴィング フロム"}], "learningTip": "「Could you tell me + 疑問文」は語順が平叙文に戻る(which gate it's leaving)。丁寧に聞くときの形。"},
  {"id": 71, "role": "listen", "scene": "空港・移動", "english": "Prepaid taxi counter is just outside, Ma'am. Pay here itself.", "japanese": "プリペイドタクシーのカウンターはすぐ外です。ここで払ってください", "context": ["空港・移動", "インド英語"], "explanation": "空港の到着口で。先払いのタクシーは料金でもめにくい。itself は「ここで(他ではなく)」の強調。", "vocabulary": [{"term": "prepaid", "meaning": "前払いの", "katakana": "プリペイド"}, {"term": "itself", "meaning": "(強調)まさに〜で", "katakana": "イットセルフ"}], "learningTip": "インド英語の itself は「今日中に=today itself」「ここで=here itself」のように強調で付く。"},
  {"id": 72, "role": "say", "scene": "空港・移動", "english": "We'd rather take an Uber. Where's the pickup point?", "japanese": "ウーバーにしたいんです。乗り場はどこですか", "context": ["空港・移動"], "explanation": "客引きのタクシーを断って、配車アプリの乗り場を聞く。インドの空港には専用の pickup point がある。", "vocabulary": [{"term": "would rather", "meaning": "むしろ〜したい", "katakana": "ウッド ラザー"}, {"term": "pickup point", "meaning": "乗車場所", "katakana": "ピックアップ ポイント"}], "learningTip": "We'd rather は「(他の案より)こっちがいい」。断りの角が立たない言い方。"},
  {"id": 73, "role": "listen", "scene": "空港・移動", "english": "Your driver is arriving in two minutes. He is on the way only.", "japanese": "運転手は2分で着きます。もう向かっていますよ", "context": ["空港・移動", "インド英語"], "explanation": "配車の電話やホテルの手配で。on the way only の only は「もう・まさに」の強調で、「だけ」の意味ではない。", "vocabulary": [{"term": "on the way", "meaning": "向かっている途中", "katakana": "オン ザ ウェイ"}, {"term": "only", "meaning": "(インド英語の強調)まさに", "katakana": "オンリー"}], "learningTip": "インド英語の only は文末で強調。「I am here only」=「ちゃんとここにいますよ」。"},
  {"id": 74, "role": "say", "scene": "空港・移動", "english": "Could you avoid the toll road? We're in no hurry.", "japanese": "有料道路は避けてもらえますか。急いでいないので", "context": ["空港・移動"], "explanation": "料金を抑えたいとき、景色を見たいときに。", "vocabulary": [{"term": "toll road", "meaning": "有料道路", "katakana": "トール ロード"}, {"term": "in no hurry", "meaning": "急いでいない", "katakana": "イン ノウ ハリー"}], "learningTip": "We're in no hurry は「急がなくていいですよ」という気遣いにもなる。荒い運転を和らげたいときにも。"},
  {"id": 75, "role": "listen", "scene": "空港・移動", "english": "Madam, AC or non-AC?", "japanese": "エアコン付きにしますか、なしにしますか", "context": ["空港・移動", "インド英語"], "explanation": "タクシー・オート・電車・バスでよく聞かれる。AC は「エーシー」と読む。値段が変わる。", "vocabulary": [{"term": "AC", "meaning": "エアコン(付き)", "katakana": "エーシー"}, {"term": "non-AC", "meaning": "エアコンなし", "katakana": "ノン エーシー"}], "learningTip": "インドでは AC が料金の区分になっている。夏や長距離なら AC を選ぶのが無難。"},
  {"id": 76, "role": "say", "scene": "空港・移動", "english": "Can you drop us at the main entrance rather than the back gate?", "japanese": "裏口じゃなくて正面入口で降ろしてもらえますか", "context": ["空港・移動"], "explanation": "降ろす場所を指定する。drop は「(車から)降ろす」。", "vocabulary": [{"term": "drop", "meaning": "(車から)降ろす", "katakana": "ドロップ"}, {"term": "rather than", "meaning": "〜ではなく", "katakana": "ラザー ザン"}], "learningTip": "乗せるは pick up、降ろすは drop (off)。「Drop me here」でも通じる。"},

  // ===== ホテル =====
  {"id": 77, "role": "listen", "scene": "ホテル", "english": "Early check-in is subject to availability.", "japanese": "アーリーチェックインは空き状況によります", "context": ["ホテル"], "explanation": "早く着いたときに言われる決まり文句。空いていれば入れる、という意味。", "vocabulary": [{"term": "subject to", "meaning": "〜次第で", "katakana": "サブジェクト トゥ"}, {"term": "availability", "meaning": "空き状況", "katakana": "アヴェイラビリティ"}], "learningTip": "subject to 〜 はホテル・予約・規約で頻出。「条件付きです」の合図。"},
  {"id": 78, "role": "say", "scene": "ホテル", "english": "Would it be possible to leave our bags here until the room is ready?", "japanese": "部屋の準備ができるまで荷物を預かってもらえますか", "context": ["ホテル"], "explanation": "チェックイン前に荷物を預けて出かけたいとき。", "vocabulary": [{"term": "would it be possible", "meaning": "〜は可能でしょうか", "katakana": "ウッド イット ビー ポッシブル"}, {"term": "leave", "meaning": "置いていく・預ける", "katakana": "リーヴ"}], "learningTip": "Would it be possible to 〜? は Could you 〜? よりさらに丁寧。断られても気まずくない聞き方。"},
  {"id": 79, "role": "listen", "scene": "ホテル", "english": "Your room is on the fifth floor. Lift is to your left.", "japanese": "お部屋は5階です。エレベーターは左手です", "context": ["ホテル", "インド英語"], "explanation": "インドはイギリス式で、エレベーターは lift。", "vocabulary": [{"term": "lift", "meaning": "エレベーター", "katakana": "リフト"}, {"term": "to your left", "meaning": "左手に", "katakana": "トゥ ユア レフト"}], "learningTip": "インドの floor はイギリス式のことがある。ground floor が1階、first floor が2階。部屋番号で確かめると安心。"},
  {"id": 80, "role": "say", "scene": "ホテル", "english": "The air conditioner isn't working. Could someone take a look?", "japanese": "エアコンが効きません。見てもらえますか", "context": ["ホテル"], "explanation": "部屋の不具合をフロントに電話で伝える。", "vocabulary": [{"term": "isn't working", "meaning": "動かない・壊れている", "katakana": "イズント ワーキング"}, {"term": "take a look", "meaning": "見てみる", "katakana": "テイク ア ルック"}], "learningTip": "「〜 isn't working」で何でも言える。The shower / The Wi-Fi / The light isn't working."},
  {"id": 81, "role": "listen", "scene": "ホテル", "english": "I'll send someone up right away. Kindly bear with us.", "japanese": "すぐに係の者を伺わせます。少々お待ちください", "context": ["ホテル", "インド英語"], "explanation": "不具合を伝えたときの返事。bear with us は「ご辛抱ください」。", "vocabulary": [{"term": "send someone up", "meaning": "人を(部屋へ)行かせる", "katakana": "センド サムワン アップ"}, {"term": "bear with", "meaning": "辛抱する・待つ", "katakana": "ベア ウィズ"}], "learningTip": "bear with me は「ちょっと待ってね」。自分が使うなら Please bear with me, my English is slow."},
  {"id": 82, "role": "say", "scene": "ホテル", "english": "Could we get a room on a higher floor, away from the street noise?", "japanese": "通りの音から離れた、上の階の部屋にしてもらえますか", "context": ["ホテル"], "explanation": "インドの街はクラクションがにぎやか。眠れなさそうなときに。", "vocabulary": [{"term": "higher floor", "meaning": "上の階", "katakana": "ハイヤー フロア"}, {"term": "away from", "meaning": "〜から離れて", "katakana": "アウェイ フロム"}], "learningTip": "要望は理由を添えると通りやすい。away from the noise / the elevator など。"},
  {"id": 83, "role": "listen", "scene": "ホテル", "english": "Breakfast is complimentary. It's served from seven to ten thirty.", "japanese": "朝食は無料です。7時から10時半までです", "context": ["ホテル"], "explanation": "チェックイン時の説明。complimentary は「サービス(無料)」。", "vocabulary": [{"term": "complimentary", "meaning": "無料の(サービスの)", "katakana": "コンプリメンタリー"}, {"term": "served", "meaning": "(食事が)出される", "katakana": "サーヴド"}], "learningTip": "free より上品な言い方。complimentary water / Wi-Fi もよく見る。"},
  {"id": 84, "role": "say", "scene": "ホテル", "english": "Is it safe to drink the tap water, or should we stick to bottled water?", "japanese": "水道水は飲めますか、それともボトルの水にしたほうがいいですか", "context": ["ホテル"], "explanation": "インドでは基本ボトルの水。歯みがきの水も気にする人が多い。", "vocabulary": [{"term": "tap water", "meaning": "水道水", "katakana": "タップ ウォーター"}, {"term": "stick to", "meaning": "〜だけにしておく", "katakana": "スティック トゥ"}], "learningTip": "stick to 〜 は「〜から外れない」。食事でも「I'll stick to vegetarian food.」と使える。"},
  {"id": 85, "role": "listen", "scene": "ホテル", "english": "Housekeeping, Ma'am. Shall I make up the room now?", "japanese": "清掃です。今お部屋を整えましょうか", "context": ["ホテル"], "explanation": "ドアをノックして言われる。make up the room は掃除とベッドメイク。", "vocabulary": [{"term": "housekeeping", "meaning": "客室清掃(係)", "katakana": "ハウスキーピング"}, {"term": "make up the room", "meaning": "部屋を整える", "katakana": "メイク アップ ザ ルーム"}], "learningTip": "断るときは Not now, thank you. 来てほしいときは Yes, please."},
  {"id": 86, "role": "say", "scene": "ホテル", "english": "Not right now, thanks. Could you come back in an hour?", "japanese": "今は大丈夫です。1時間後に来てもらえますか", "context": ["ホテル"], "explanation": "清掃を後にしてほしいとき。", "vocabulary": [{"term": "not right now", "meaning": "今はいい", "katakana": "ノット ライト ナウ"}, {"term": "come back", "meaning": "また来る", "katakana": "カム バック"}], "learningTip": "in an hour は「1時間後に」。within an hour(1時間以内)と混同しない。"},
  {"id": 87, "role": "listen", "scene": "ホテル", "english": "There may be a power cut this evening, but we have a backup generator.", "japanese": "今晩停電があるかもしれませんが、予備の発電機があります", "context": ["ホテル", "インド英語"], "explanation": "インドでは停電を power cut と言う。ホテルは発電機があることが多い。", "vocabulary": [{"term": "power cut", "meaning": "停電", "katakana": "パワー カット"}, {"term": "generator", "meaning": "発電機", "katakana": "ジェネレーター"}], "learningTip": "アメリカ英語なら power outage。インドでは power cut、current is not there とも言う。"},
  {"id": 88, "role": "say", "scene": "ホテル", "english": "We're checking out tomorrow morning. Could you arrange a car to the airport?", "japanese": "明日の朝チェックアウトします。空港までの車を手配してもらえますか", "context": ["ホテル"], "explanation": "帰りの車をフロントに頼む。", "vocabulary": [{"term": "check out", "meaning": "チェックアウトする", "katakana": "チェック アウト"}, {"term": "arrange", "meaning": "手配する", "katakana": "アレンジ"}], "learningTip": "arrange は「手配する」。arrange a taxi / a guide / a tour と何にでも使える。"},
  {"id": 89, "role": "listen", "scene": "ホテル", "english": "May I know your good name, Ma'am?", "japanese": "お名前をうかがえますか", "context": ["ホテル", "インド英語"], "explanation": "good name はインド英語で「お名前」の丁寧な言い方。良い名前という意味ではない。", "vocabulary": [{"term": "good name", "meaning": "(インド英語)お名前", "katakana": "グッド ネーム"}, {"term": "may I know", "meaning": "うかがえますか", "katakana": "メイ アイ ノウ"}], "learningTip": "May I know 〜? もインドらしい丁寧な聞き方。「May I know the reason?」なども。"},
  {"id": 90, "role": "say", "scene": "ホテル", "english": "I think there's a mistake on the bill. We didn't order room service.", "japanese": "請求書が間違っていると思います。ルームサービスは頼んでいません", "context": ["ホテル"], "explanation": "チェックアウトの明細に覚えのない項目があったとき。I think を付けて柔らかく。", "vocabulary": [{"term": "mistake", "meaning": "間違い", "katakana": "ミステイク"}, {"term": "bill", "meaning": "請求書・お会計", "katakana": "ビル"}], "learningTip": "強く言うより I think there's a mistake のほうが、相手も直しやすい。"},
  {"id": 91, "role": "listen", "scene": "ホテル", "english": "Sorry for the inconvenience. I will remove it just now.", "japanese": "ご不便をおかけしました。すぐ取り消します", "context": ["ホテル", "インド英語"], "explanation": "インド英語の just now は「たった今(過去)」ではなく「今すぐ(これから)」の意味でも使う。", "vocabulary": [{"term": "inconvenience", "meaning": "不便・迷惑", "katakana": "インコンヴィニエンス"}, {"term": "just now", "meaning": "(インド英語)今すぐ", "katakana": "ジャスト ナウ"}], "learningTip": "I will do it just now =「すぐやります」。過去の「さっき」と思うと混乱する。"},

  // ===== 街歩き・オート =====
  {"id": 92, "role": "listen", "scene": "街歩き・オート", "english": "Meter is not working, Madam. Fixed rate, three hundred.", "japanese": "メーターが壊れてます。定額で300です", "context": ["街歩き・オート", "インド英語"], "explanation": "オートリキシャでよくある言い分。高めに言われることが多い。", "vocabulary": [{"term": "meter", "meaning": "メーター", "katakana": "ミーター"}, {"term": "fixed rate", "meaning": "定額", "katakana": "フィックスト レイト"}], "learningTip": "言い値はたいてい高い。配車アプリの金額を見せると話が早い。"},
  {"id": 93, "role": "say", "scene": "街歩き・オート", "english": "That's way too much. The app says it should be around one fifty.", "japanese": "高すぎます。アプリだと150くらいのはずです", "context": ["街歩き・オート"], "explanation": "値段の交渉。根拠を出すと強い。", "vocabulary": [{"term": "way too much", "meaning": "高すぎる", "katakana": "ウェイ トゥー マッチ"}, {"term": "the app says", "meaning": "アプリでは〜となっている", "katakana": "ジ アップ セズ"}], "learningTip": "way は too を強める。way too expensive / way too far。"},
  {"id": 94, "role": "listen", "scene": "街歩き・オート", "english": "Okay, okay, final price two hundred. Come, sit.", "japanese": "わかった、最終200。さあ乗って", "context": ["街歩き・オート", "インド英語"], "explanation": "交渉の落としどころ。Come, sit は「乗って」。命令形でぶっきらぼうに聞こえるが、普通の言い方。", "vocabulary": [{"term": "final price", "meaning": "最終価格", "katakana": "ファイナル プライス"}, {"term": "come, sit", "meaning": "(どうぞ)乗って", "katakana": "カム シット"}], "learningTip": "納得なら Okay, done. まだ高いなら One seventy? と少し刻んでみる。"},
  {"id": 95, "role": "say", "scene": "街歩き・オート", "english": "Is this neighbourhood safe to walk around at night?", "japanese": "このあたりは夜歩いても安全ですか", "context": ["街歩き・オート"], "explanation": "ホテルの人や店の人に聞く。", "vocabulary": [{"term": "neighbourhood", "meaning": "近所・界隈", "katakana": "ネイバーフッド"}, {"term": "walk around", "meaning": "歩き回る", "katakana": "ウォーク アラウンド"}], "learningTip": "答えが Mostly safe なら「だいたい」。気をつけろの合図として聞く。"},
  {"id": 96, "role": "listen", "scene": "街歩き・オート", "english": "Go straight, take a U-turn at the signal, and it's on the left side.", "japanese": "まっすぐ行って、信号でUターンすると左側です", "context": ["街歩き・オート", "インド英語"], "explanation": "道を聞いたときの答え。インドでは信号を signal と言う。", "vocabulary": [{"term": "signal", "meaning": "信号", "katakana": "シグナル"}, {"term": "take a U-turn", "meaning": "Uターンする", "katakana": "テイク ア ユーターン"}], "learningTip": "インドの道案内は U-turn が多い(中央分離帯があるため)。歩きでも言われる。"},
  {"id": 97, "role": "say", "scene": "街歩き・オート", "english": "Sorry, I'm a bit lost. Could you point me in the right direction?", "japanese": "すみません、ちょっと迷いました。方向を教えてもらえますか", "context": ["街歩き・オート"], "explanation": "地図を見せながら聞くとよい。", "vocabulary": [{"term": "lost", "meaning": "道に迷った", "katakana": "ロスト"}, {"term": "point me in the right direction", "meaning": "正しい方向を教える", "katakana": "ポイント ミー イン ザ ライト ディレクション"}], "learningTip": "地図を見せて Where am I? だけでも通じる。"},
  {"id": 98, "role": "listen", "scene": "街歩き・オート", "english": "It's walking distance only. Five minutes.", "japanese": "歩いて行ける距離ですよ。5分です", "context": ["街歩き・オート", "インド英語"], "explanation": "only は強調で「すぐそこですよ」。インドの「5分」は長めのこともある。", "vocabulary": [{"term": "walking distance", "meaning": "歩いて行ける距離", "katakana": "ウォーキング ディスタンス"}], "learningTip": "インドの「five minutes」はあいまい。暑い日はオートを使うほうが楽なことも。"},
  {"id": 99, "role": "say", "scene": "街歩き・オート", "english": "Could you wait here for ten minutes and then take us back?", "japanese": "ここで10分待って、帰りも乗せてもらえますか", "context": ["街歩き・オート"], "explanation": "観光地で、帰りの足を確保する。", "vocabulary": [{"term": "wait here", "meaning": "ここで待つ", "katakana": "ウェイト ヒア"}, {"term": "take us back", "meaning": "帰りに乗せていく", "katakana": "テイク アス バック"}], "learningTip": "払うのは帰りに着いてから(Pay at the end)にすると安心。"},
  {"id": 100, "role": "listen", "scene": "街歩き・オート", "english": "Waiting charges will be extra, Madam.", "japanese": "待ち時間の料金は別になります", "context": ["街歩き・オート"], "explanation": "待ってもらうと上乗せされる。いくらか先に確かめる。", "vocabulary": [{"term": "waiting charges", "meaning": "待ち時間料金", "katakana": "ウェイティング チャージズ"}, {"term": "extra", "meaning": "追加の・別料金", "katakana": "エクストラ"}], "learningTip": "How much extra? / How much in total? で総額を聞いておく。"},
  {"id": 101, "role": "say", "scene": "街歩き・オート", "english": "Is it better to cross here, or should we use the underpass?", "japanese": "ここで渡ったほうがいいですか、地下道を使うべきですか", "context": ["街歩き・オート"], "explanation": "インドの道路を渡るのは難しい。地元の人に聞くのが確実。", "vocabulary": [{"term": "cross", "meaning": "(道を)渡る", "katakana": "クロス"}, {"term": "underpass", "meaning": "地下道", "katakana": "アンダーパス"}], "learningTip": "渡るときは地元の人の横について渡るのがコツ。"},
  {"id": 102, "role": "listen", "scene": "街歩き・オート", "english": "This road is blocked because of a procession. I will take another route.", "japanese": "行列(祭り)で道が通れないので、別の道で行きます", "context": ["街歩き・オート"], "explanation": "祭りや宗教行事の行列で道が塞がるのはよくある。", "vocabulary": [{"term": "procession", "meaning": "行列・パレード", "katakana": "プロセッション"}, {"term": "route", "meaning": "道・経路", "katakana": "ルート"}], "learningTip": "遠回りで料金が上がりそうなら Same price? と先に確かめる。"},
  {"id": 103, "role": "say", "scene": "街歩き・オート", "english": "Could you slow down a little? It's a bit scary back here.", "japanese": "少しスピードを落としてもらえますか。後ろの席がちょっと怖くて", "context": ["街歩き・オート"], "explanation": "運転が荒いとき。笑顔で言えば角は立たない。", "vocabulary": [{"term": "slow down", "meaning": "スピードを落とす", "katakana": "スロウ ダウン"}, {"term": "scary", "meaning": "怖い", "katakana": "スケアリー"}], "learningTip": "a bit を入れると柔らかい。Please drive slowly. より自然。"},
  {"id": 104, "role": "listen", "scene": "街歩き・オート", "english": "You want to go to the old market or the new one? Both are there.", "japanese": "古い市場と新しい市場、どっちに行きますか。両方ありますよ", "context": ["街歩き・オート", "インド英語"], "explanation": "Both are there は「両方ある」。〜 is there(〜がある)の形。", "vocabulary": [{"term": "both are there", "meaning": "(インド英語)両方ある", "katakana": "ボウス アー ゼア"}], "learningTip": "迷ったら Which one do you recommend? と聞き返せばよい。"},
  {"id": 105, "role": "say", "scene": "街歩き・オート", "english": "Please pull over here. This is fine.", "japanese": "ここで止めてください。ここで大丈夫です", "context": ["街歩き・オート"], "explanation": "目的地の少し手前で降りたいとき。", "vocabulary": [{"term": "pull over", "meaning": "(車を)脇に寄せて止める", "katakana": "プル オウヴァー"}], "learningTip": "Stop here, please. でもよい。This is fine. を足すと「ここでいいですよ」と伝わる。"},
  {"id": 106, "role": "listen", "scene": "街歩き・オート", "english": "Change is not there, Madam. You have smaller notes?", "japanese": "おつりがありません。細かいお札はありますか", "context": ["街歩き・オート", "インド英語"], "explanation": "インドではおつりがないと言われることが多い。小額紙幣を持っておくと楽。", "vocabulary": [{"term": "change", "meaning": "おつり・小銭", "katakana": "チェンジ"}, {"term": "notes", "meaning": "紙幣", "katakana": "ノーツ"}], "learningTip": "インド・イギリスではお札は notes(アメリカは bills)。"},

  // ===== 買い物 =====
  {"id": 107, "role": "listen", "scene": "買い物", "english": "This is pure pashmina, Ma'am. Feel the quality.", "japanese": "これは本物のパシュミナですよ。手触りを見てください", "context": ["買い物"], "explanation": "ショールの店の定番の売り文句。本物かどうかは半々で聞く。", "vocabulary": [{"term": "pure", "meaning": "純粋な・本物の", "katakana": "ピュア"}, {"term": "feel", "meaning": "触ってみる", "katakana": "フィール"}], "learningTip": "Feel the quality は「触ってみて」。触るのは自由、買う義務はない。"},
  {"id": 108, "role": "say", "scene": "買い物", "english": "How can I tell if it's genuine?", "japanese": "本物かどうか、どうやって見分けるんですか", "context": ["買い物"], "explanation": "売り文句に対して、穏やかに確かめる。", "vocabulary": [{"term": "tell", "meaning": "見分ける", "katakana": "テル"}, {"term": "genuine", "meaning": "本物の", "katakana": "ジェニュイン"}], "learningTip": "この tell は「わかる・見分ける」。I can't tell the difference.(違いがわからない)"},
  {"id": 109, "role": "listen", "scene": "買い物", "english": "For you, special price. Normally I sell for two thousand.", "japanese": "あなたには特別価格。普段は2000で売ってます", "context": ["買い物"], "explanation": "special price は値切りの始まりの合図。ここから交渉。", "vocabulary": [{"term": "special price", "meaning": "特別価格", "katakana": "スペシャル プライス"}, {"term": "normally", "meaning": "普段は", "katakana": "ノーマリー"}], "learningTip": "最初の値段の半分くらいから返すのが目安と言われる。"},
  {"id": 110, "role": "say", "scene": "買い物", "english": "I'm just browsing for now. I might come back later.", "japanese": "今は見ているだけです。また後で来るかもしれません", "context": ["買い物"], "explanation": "しつこい呼び込みをかわす一言。", "vocabulary": [{"term": "browse", "meaning": "(買わずに)見て回る", "katakana": "ブラウズ"}, {"term": "come back later", "meaning": "後でまた来る", "katakana": "カム バック レイター"}], "learningTip": "店を出ると値段が下がることもよくある。"},
  {"id": 111, "role": "say", "scene": "買い物", "english": "If I buy two, can you give me a better price?", "japanese": "2つ買ったら、もう少し安くしてもらえますか", "context": ["買い物"], "explanation": "まとめ買いで値引きを引き出す。", "vocabulary": [{"term": "better price", "meaning": "もっといい値段", "katakana": "ベター プライス"}], "learningTip": "discount より better price のほうが交渉らしく、相手も乗りやすい。"},
  {"id": 112, "role": "listen", "scene": "買い物", "english": "Last price, Madam. Less than this, I cannot do.", "japanese": "これが最終価格です。これ以下は無理です", "context": ["買い物", "インド英語"], "explanation": "インドの値段交渉の決まり文句。last price は「最終価格」。", "vocabulary": [{"term": "last price", "meaning": "最終価格", "katakana": "ラスト プライス"}], "learningTip": "「What's your last price?」と自分から聞くのもインドでは普通。"},
  {"id": 113, "role": "say", "scene": "買い物", "english": "Do you have this in a different colour, maybe something less bright?", "japanese": "これの色違い、もう少し落ち着いた色はありますか", "context": ["買い物"], "explanation": "色違いを頼む。less bright は「派手すぎない」。", "vocabulary": [{"term": "in a different colour", "meaning": "色違いで", "katakana": "イン ア ディファレント カラー"}, {"term": "less bright", "meaning": "もっと控えめな", "katakana": "レス ブライト"}], "learningTip": "in + 色・サイズ で「〜の色(サイズ)で」。Do you have this in blue / in a smaller size?"},
  {"id": 114, "role": "listen", "scene": "買い物", "english": "Card is not accepted. Only cash or UPI.", "japanese": "カードは使えません。現金かUPIだけです", "context": ["買い物", "インド英語"], "explanation": "UPI はインドのスマホ決済(QRコード)。外国人は使えないことが多いので現金を持っておく。", "vocabulary": [{"term": "accepted", "meaning": "受け付けられる", "katakana": "アクセプティッド"}, {"term": "UPI", "meaning": "インドのQR決済", "katakana": "ユーピーアイ"}], "learningTip": "Do you take cards? と先に聞くと、選んでから困らない。"},
  {"id": 115, "role": "say", "scene": "買い物", "english": "Could you wrap it carefully? It's going in my suitcase.", "japanese": "丁寧に包んでもらえますか。スーツケースに入れるので", "context": ["買い物"], "explanation": "割れ物や形が崩れやすいものを買ったとき。", "vocabulary": [{"term": "wrap", "meaning": "包む", "katakana": "ラップ"}, {"term": "suitcase", "meaning": "スーツケース", "katakana": "スーツケース"}], "learningTip": "理由を添えると、相手もしっかり包んでくれる。"},
  {"id": 116, "role": "listen", "scene": "買い物", "english": "You can try it in the trial room, Madam.", "japanese": "試着室で着てみてください", "context": ["買い物", "インド英語"], "explanation": "インドでは試着室を trial room と言う。", "vocabulary": [{"term": "trial room", "meaning": "試着室", "katakana": "トライアル ルーム"}], "learningTip": "アメリカ英語は fitting room / dressing room。インドでは trial room が普通。"},
  {"id": 117, "role": "say", "scene": "買い物", "english": "Can you ship it to Japan, or do I have to carry it?", "japanese": "日本に送ってもらえますか、それとも持って帰るしかないですか", "context": ["買い物"], "explanation": "大きいもの・重いものを買うとき。", "vocabulary": [{"term": "ship", "meaning": "発送する", "katakana": "シップ"}, {"term": "carry", "meaning": "持ち運ぶ", "katakana": "キャリー"}], "learningTip": "送料(shipping cost)と日数(How long does it take?)も合わせて聞く。"},
  {"id": 118, "role": "listen", "scene": "買い物", "english": "Tell me your size, I will get it from the godown.", "japanese": "サイズを言ってください。倉庫から持ってきます", "context": ["買い物", "インド英語"], "explanation": "godown はインド英語で「倉庫」。", "vocabulary": [{"term": "godown", "meaning": "(インド英語)倉庫", "katakana": "ゴーダウン"}], "learningTip": "店の奥の在庫置き場も godown。待つ間にお茶を出されることもある。"},

  // ===== 観光 =====
  {"id": 119, "role": "listen", "scene": "観光", "english": "Please remove your footwear before entering the temple.", "japanese": "寺院に入る前に履物を脱いでください", "context": ["観光", "インド英語"], "explanation": "寺院の入口で。靴下も脱ぐよう言われることがある。", "vocabulary": [{"term": "remove", "meaning": "脱ぐ・外す", "katakana": "リムーヴ"}, {"term": "footwear", "meaning": "履物", "katakana": "フットウェア"}], "learningTip": "インドでは footwear がよく使われる。Footwear not allowed という看板も。"},
  {"id": 120, "role": "say", "scene": "観光", "english": "Is it okay to take photos inside, or is it not allowed?", "japanese": "中で写真を撮ってもいいですか、それとも禁止ですか", "context": ["観光"], "explanation": "寺院や博物館で。カメラ料金が別にかかる所もある。", "vocabulary": [{"term": "take photos", "meaning": "写真を撮る", "katakana": "テイク フォトズ"}, {"term": "allowed", "meaning": "許されている", "katakana": "アラウド"}], "learningTip": "人を撮るときは May I take your photo? と一言。"},
  {"id": 121, "role": "listen", "scene": "観光", "english": "Foreigners' ticket is separate. Kindly go to that counter.", "japanese": "外国人用のチケットは別です。あちらの窓口へどうぞ", "context": ["観光", "インド英語"], "explanation": "インドの観光地は外国人料金が別のことが多い。", "vocabulary": [{"term": "foreigners", "meaning": "外国人", "katakana": "フォリナーズ"}, {"term": "separate", "meaning": "別の", "katakana": "セパレット"}], "learningTip": "foreigner はインドでは普通に使う言葉。失礼な意味はない。"},
  {"id": 122, "role": "say", "scene": "観光", "english": "How long does it take to see the whole place?", "japanese": "全部見るのにどのくらいかかりますか", "context": ["観光"], "explanation": "広い遺跡や寺院で、時間の目安を聞く。", "vocabulary": [{"term": "whole place", "meaning": "全体", "katakana": "ホール プレイス"}], "learningTip": "答えが「two hours, minimum」なら「最低2時間」。"},
  {"id": 123, "role": "listen", "scene": "観光", "english": "You want a guide, Madam? Government approved. I will explain full history.", "japanese": "ガイドはいかがですか。政府公認です。歴史を全部説明します", "context": ["観光", "インド英語"], "explanation": "観光地の入口で声をかけられる。本当に公認かは証明書を見せてもらう。", "vocabulary": [{"term": "guide", "meaning": "ガイド", "katakana": "ガイド"}, {"term": "approved", "meaning": "公認の", "katakana": "アプルーヴド"}], "learningTip": "頼むなら値段と時間を先に決める。How much for one hour?"},
  {"id": 124, "role": "say", "scene": "観光", "english": "No, thank you. We'd like to look around on our own.", "japanese": "いえ、結構です。自分たちで見て回りたいので", "context": ["観光"], "explanation": "ガイドの申し出を断る。", "vocabulary": [{"term": "look around", "meaning": "見て回る", "katakana": "ルック アラウンド"}, {"term": "on our own", "meaning": "自分たちだけで", "katakana": "オン アワ オウン"}], "learningTip": "一度で引かないこともある。同じ言葉を笑顔で繰り返せばよい。"},
  {"id": 125, "role": "listen", "scene": "観光", "english": "Shoulders and knees must be covered inside.", "japanese": "中では肩とひざを隠してください", "context": ["観光"], "explanation": "寺院や聖地の服装の決まり。ショールを1枚持っておくと便利。", "vocabulary": [{"term": "covered", "meaning": "覆われた", "katakana": "カヴァード"}, {"term": "must be", "meaning": "〜でなければならない", "katakana": "マスト ビー"}], "learningTip": "入口で布を貸してくれる所もある。Can I borrow a cloth?"},
  {"id": 126, "role": "say", "scene": "観光", "english": "Is there a place where we can leave our shoes?", "japanese": "靴を預けられる場所はありますか", "context": ["観光"], "explanation": "寺院の前に靴の預かり所(有料のこともある)がある。", "vocabulary": [{"term": "leave", "meaning": "置いておく・預ける", "katakana": "リーヴ"}], "learningTip": "預かり所の番号札をなくさないように。"},
  {"id": 127, "role": "listen", "scene": "観光", "english": "The aarti starts at sunset. You should not miss it.", "japanese": "アールティは日没に始まります。見逃さないで", "context": ["観光", "インド英語"], "explanation": "aarti(アールティ)は火を灯して祈るヒンドゥーの儀式。ガンジス河畔のものが有名。", "vocabulary": [{"term": "aarti", "meaning": "火を灯す祈りの儀式", "katakana": "アールティ"}, {"term": "sunset", "meaning": "日没", "katakana": "サンセット"}], "learningTip": "should not miss は「ぜひ見て」という勧め。You must see it. と同じ温度。"},
  {"id": 128, "role": "say", "scene": "観光", "english": "What's the significance of this festival?", "japanese": "このお祭りにはどんな意味があるんですか", "context": ["観光"], "explanation": "祭りや儀式に出会ったとき。意味を聞くと、たいてい喜んで話してくれる。", "vocabulary": [{"term": "significance", "meaning": "意味・意義", "katakana": "シグニフィカンス"}], "learningTip": "What does it mean? よりも、行事の意味を聞く丁寧な言い方。"},
  {"id": 129, "role": "listen", "scene": "観光", "english": "Photography is allowed, but no flash, please.", "japanese": "撮影はできますが、フラッシュはやめてください", "context": ["観光"], "explanation": "博物館や寺院の中で。", "vocabulary": [{"term": "photography", "meaning": "撮影", "katakana": "フォトグラフィー"}, {"term": "flash", "meaning": "フラッシュ", "katakana": "フラッシュ"}], "learningTip": "no 〜, please は「〜はご遠慮ください」。No shoes, please. も同じ形。"},
  {"id": 130, "role": "say", "scene": "観光", "english": "We came all the way from Japan to see this.", "japanese": "これを見るためにはるばる日本から来ました", "context": ["観光"], "explanation": "観光地で話しかけられたときの一言。相手もうれしそうにする。", "vocabulary": [{"term": "all the way", "meaning": "はるばる", "katakana": "オール ザ ウェイ"}], "learningTip": "all the way from 〜 で「はるばる〜から」。距離の大きさが伝わる。"},
  {"id": 131, "role": "listen", "scene": "観光", "english": "It gets very crowded after ten. Better you come early morning.", "japanese": "10時を過ぎるとすごく混みます。朝早く来たほうがいいですよ", "context": ["観光", "インド英語"], "explanation": "Better you come は You'd better come のインド式の語順。", "vocabulary": [{"term": "crowded", "meaning": "混んでいる", "katakana": "クラウディッド"}, {"term": "better you", "meaning": "(インド英語)〜したほうがいい", "katakana": "ベター ユー"}], "learningTip": "インド英語は語順がゆるい。意味の単語だけ拾えば十分わかる。"},

  // ===== 食事 =====
  {"id": 132, "role": "say", "scene": "食事", "english": "Could you make it less spicy? We're not used to strong spice.", "japanese": "辛さを控えめにしてもらえますか。強い辛さに慣れていなくて", "context": ["食事"], "explanation": "注文のとき。インドの「少し辛い」はかなり辛いことがある。", "vocabulary": [{"term": "less spicy", "meaning": "辛さ控えめ", "katakana": "レス スパイシー"}, {"term": "not used to", "meaning": "慣れていない", "katakana": "ノット ユーストゥ"}], "learningTip": "mild(マイルド)も通じる。Not spicy at all なら「全く辛くなく」。"},
  {"id": 133, "role": "listen", "scene": "食事", "english": "Veg or non-veg, Madam?", "japanese": "ベジですか、ノンベジですか", "context": ["食事", "インド英語"], "explanation": "インドの食事の最初の質問。non-veg は肉・魚・卵入り。", "vocabulary": [{"term": "veg", "meaning": "ベジタリアン(の料理)", "katakana": "ヴェジ"}, {"term": "non-veg", "meaning": "肉・魚あり", "katakana": "ノン ヴェジ"}], "learningTip": "インドの店や飛行機の機内食でも聞かれる。答えは Veg, please. だけでよい。"},
  {"id": 134, "role": "say", "scene": "食事", "english": "What would you recommend for someone trying Indian food for the first time?", "japanese": "インド料理が初めての人には、何がおすすめですか", "context": ["食事"], "explanation": "店員さんに選んでもらう。", "vocabulary": [{"term": "recommend", "meaning": "すすめる", "katakana": "レコメンド"}, {"term": "for the first time", "meaning": "初めて", "katakana": "フォー ザ ファースト タイム"}], "learningTip": "What's popular here? / What's your favourite? でもよい。"},
  {"id": 135, "role": "listen", "scene": "食事", "english": "This one is a little spicy, but you can manage.", "japanese": "これは少し辛いですが、大丈夫ですよ", "context": ["食事"], "explanation": "manage は「なんとかできる」。インドの人の「大丈夫」は信じすぎないほうがよい。", "vocabulary": [{"term": "manage", "meaning": "なんとかこなす", "katakana": "マネージ"}], "learningTip": "心配なら Can I try a little first? と味見を頼む。"},
  {"id": 136, "role": "say", "scene": "食事", "english": "Is this vegetarian? Our friend doesn't eat meat or eggs.", "japanese": "これはベジタリアンですか。友人は肉も卵も食べないんです", "context": ["食事"], "explanation": "同行のお坊さんのために確かめる。インドでは卵はベジに入らないことが多い。", "vocabulary": [{"term": "vegetarian", "meaning": "菜食の", "katakana": "ヴェジタリアン"}, {"term": "meat or eggs", "meaning": "肉も卵も", "katakana": "ミート オア エッグズ"}], "learningTip": "インドの pure veg の店は卵も出さない。看板の pure veg が目印。"},
  {"id": 137, "role": "listen", "scene": "食事", "english": "You want to eat with hand or spoon?", "japanese": "手で食べますか、スプーンにしますか", "context": ["食事", "インド英語"], "explanation": "インドでは右手で食べる人が多い。外国人にはスプーンを出してくれる。", "vocabulary": [{"term": "with hand", "meaning": "手で", "katakana": "ウィズ ハンド"}, {"term": "spoon", "meaning": "スプーン", "katakana": "スプーン"}], "learningTip": "手で食べるなら右手だけで。左手は使わないのが作法。"},
  {"id": 138, "role": "say", "scene": "食事", "english": "Could we have the bill, please? And can we pay separately?", "japanese": "お会計をお願いします。別々に払えますか", "context": ["食事"], "explanation": "食事の終わりに。", "vocabulary": [{"term": "bill", "meaning": "お会計", "katakana": "ビル"}, {"term": "pay separately", "meaning": "別々に払う", "katakana": "ペイ セパレットリー"}], "learningTip": "アメリカは check、インド・イギリスは bill。"},
  {"id": 139, "role": "listen", "scene": "食事", "english": "Service charge is included. Tip is up to you.", "japanese": "サービス料は含まれています。チップはお気持ちで", "context": ["食事"], "explanation": "会計のときに言われる。", "vocabulary": [{"term": "included", "meaning": "含まれている", "katakana": "インクルーディッド"}, {"term": "up to you", "meaning": "あなた次第", "katakana": "アップ トゥ ユー"}], "learningTip": "up to you は「お任せします」の意味でも使える。It's up to you."},
  {"id": 140, "role": "say", "scene": "食事", "english": "That was delicious. What's this dish called?", "japanese": "とてもおいしかったです。この料理は何という名前ですか", "context": ["食事"], "explanation": "気に入った料理の名前を聞いて、次も頼めるように。", "vocabulary": [{"term": "delicious", "meaning": "とてもおいしい", "katakana": "デリシャス"}, {"term": "dish", "meaning": "料理(一品)", "katakana": "ディッシュ"}], "learningTip": "名前が聞き取れなければ Could you write it down? とメモを頼む。"},
  {"id": 141, "role": "listen", "scene": "食事", "english": "Have some more, no? Don't feel shy.", "japanese": "もっと食べてね。遠慮しないで", "context": ["食事", "インド英語"], "explanation": "家庭や食事の席でのおもてなし。文末の no? は「〜でしょ?」くらいの軽い付け足し。", "vocabulary": [{"term": "no?", "meaning": "(文末)〜でしょ?", "katakana": "ノー"}, {"term": "feel shy", "meaning": "遠慮する", "katakana": "フィール シャイ"}], "learningTip": "おなかいっぱいなら I'm full, thank you. It was wonderful. と笑顔で。"},

  // ===== 雑談 =====
  {"id": 142, "role": "listen", "scene": "雑談", "english": "Which place you are from in Japan?", "japanese": "日本のどこから来たんですか", "context": ["雑談", "インド英語"], "explanation": "インド英語は疑問文でも語順が平叙文のままのことが多い。", "vocabulary": [{"term": "which place", "meaning": "どこ", "katakana": "ウィッチ プレイス"}], "learningTip": "語順が崩れていても、which place / from が聞こえれば意味はとれる。"},
  {"id": 143, "role": "say", "scene": "雑談", "english": "I'm from near Tokyo, but it's much quieter where I live.", "japanese": "東京の近くです。でも住んでいるところはずっと静かです", "context": ["雑談"], "explanation": "出身を聞かれたときに一言足す。", "vocabulary": [{"term": "near", "meaning": "近く", "katakana": "ニア"}, {"term": "quieter", "meaning": "より静か", "katakana": "クワイエター"}], "learningTip": "一言足すと会話が続く。Have you been to Japan? と聞き返すのもよい。"},
  {"id": 144, "role": "listen", "scene": "雑談", "english": "You are married? Kids?", "japanese": "結婚してますか。お子さんは?", "context": ["雑談", "インド英語"], "explanation": "インドでは家族のことを早い段階で聞かれる。悪気はない。", "vocabulary": [{"term": "married", "meaning": "結婚している", "katakana": "マリッド"}, {"term": "kids", "meaning": "子ども", "katakana": "キッズ"}], "learningTip": "答えたくなければ笑って話を変えてよい。"},
  {"id": 145, "role": "say", "scene": "雑談", "english": "Yes, I have a daughter. She's back home in Japan.", "japanese": "はい、娘が一人います。日本にいます", "context": ["雑談"], "explanation": "家族を聞かれたときの答え。", "vocabulary": [{"term": "daughter", "meaning": "娘", "katakana": "ドーター"}, {"term": "back home", "meaning": "故郷に・国に", "katakana": "バック ホウム"}], "learningTip": "back home は「自分の国で」。Back home, we eat rice every day. のようにも使える。"},
  {"id": 146, "role": "listen", "scene": "雑談", "english": "Japan is very advanced, no? Everything is so clean and on time.", "japanese": "日本は進んでますよね。何でもきれいで時間どおりで", "context": ["雑談", "インド英語"], "explanation": "インドの人がよく言う日本の印象。", "vocabulary": [{"term": "advanced", "meaning": "進んだ", "katakana": "アドヴァンスト"}, {"term": "on time", "meaning": "時間どおり", "katakana": "オン タイム"}], "learningTip": "受けるなら It is, in some ways. と少しぼかすと、次の話に繋がる。"},
  {"id": 147, "role": "say", "scene": "雑談", "english": "It is, but life there can be quite stressful too.", "japanese": "そうですね。でも暮らしは結構ストレスも多いんですよ", "context": ["雑談"], "explanation": "ほめられたときに、少し本音を返す。", "vocabulary": [{"term": "quite", "meaning": "かなり", "katakana": "クワイト"}, {"term": "stressful", "meaning": "ストレスの多い", "katakana": "ストレスフル"}], "learningTip": "can be は「〜なこともある」。言い切らずに柔らかくする。"},
  {"id": 148, "role": "listen", "scene": "雑談", "english": "Have you tried our street food? You must try pani puri.", "japanese": "屋台の食べ物は食べました?パニプリはぜひ", "context": ["雑談"], "explanation": "pani puri は丸い揚げせんべいに水を入れて食べる屋台の定番。", "vocabulary": [{"term": "street food", "meaning": "屋台の食べ物", "katakana": "ストリート フード"}, {"term": "pani puri", "meaning": "パニプリ(屋台の軽食)", "katakana": "パーニー プーリー"}], "learningTip": "You must try 〜 は「ぜひ食べて」という強い勧め。"},
  {"id": 149, "role": "say", "scene": "雑談", "english": "I'd love to, but I'm a bit worried about my stomach.", "japanese": "食べてみたいけど、ちょっとおなかが心配で", "context": ["雑談"], "explanation": "屋台を勧められたときに、やんわり断る。", "vocabulary": [{"term": "I'd love to", "meaning": "ぜひそうしたい", "katakana": "アイド ラヴ トゥ"}, {"term": "worried about", "meaning": "〜が心配", "katakana": "ワリード アバウト"}], "learningTip": "I'd love to, but 〜 は断るときの万能型。相手の気持ちを受けてから断れる。"},
  {"id": 150, "role": "listen", "scene": "雑談", "english": "What do you do? You are working here?", "japanese": "お仕事は何ですか。こちらで働いているんですか", "context": ["雑談", "インド英語"], "explanation": "What do you do? は職業を聞く決まり文句。", "vocabulary": [{"term": "what do you do", "meaning": "お仕事は?", "katakana": "ワット ドゥ ユー ドゥ"}], "learningTip": "今何してるの?ではなく「職業は?」。"},
  {"id": 151, "role": "say", "scene": "雑談", "english": "We're here on holiday this time, just to look around.", "japanese": "今回は休暇で、見て回るだけです", "context": ["雑談"], "explanation": "旅行で来ていると伝える。", "vocabulary": [{"term": "on holiday", "meaning": "休暇で", "katakana": "オン ホリデイ"}, {"term": "this time", "meaning": "今回は", "katakana": "ディス タイム"}], "learningTip": "インド・イギリスは holiday、アメリカは vacation。"},
  {"id": 152, "role": "listen", "scene": "雑談", "english": "How many days you are staying?", "japanese": "何日滞在するんですか", "context": ["雑談", "インド英語"], "explanation": "これも語順が平叙文のまま。", "vocabulary": [{"term": "how many days", "meaning": "何日", "katakana": "ハウ メニー デイズ"}, {"term": "staying", "meaning": "滞在する", "katakana": "ステイイング"}], "learningTip": "答えは For a week. / Until Sunday. と短くてよい。"},
  {"id": 153, "role": "say", "scene": "雑談", "english": "About a week. I wish we could stay longer.", "japanese": "1週間くらいです。もっといられたらいいのに", "context": ["雑談"], "explanation": "滞在日数を答えて、気持ちを足す。", "vocabulary": [{"term": "I wish", "meaning": "〜だったらいいのに", "katakana": "アイ ウィッシュ"}, {"term": "stay longer", "meaning": "もっと長くいる", "katakana": "ステイ ロンガー"}], "learningTip": "I wish + could は「できたらいいのに(実際はできない)」。名残惜しさが伝わる。"},
  {"id": 154, "role": "listen", "scene": "雑談", "english": "Next time you come, you must visit Kerala. It is God's own country.", "japanese": "次に来たらケララに行って。神の国ですよ", "context": ["雑談", "インド英語"], "explanation": "God's own country はケララ州の愛称。インドの人は自分の州をよく勧める。", "vocabulary": [{"term": "next time", "meaning": "次に〜するとき", "katakana": "ネクスト タイム"}, {"term": "God's own country", "meaning": "ケララの愛称", "katakana": "ゴッズ オウン カントリー"}], "learningTip": "どこ出身の人かで勧める場所が変わる。Is that where you're from? と聞き返せる。"},
  {"id": 155, "role": "say", "scene": "雑談", "english": "Everything here is so different from what I imagined.", "japanese": "ここは想像していたのと全然違います", "context": ["雑談"], "explanation": "旅の感想を伝える。良い意味にも驚きにも使える。", "vocabulary": [{"term": "different from", "meaning": "〜と違う", "katakana": "ディファレント フロム"}, {"term": "imagined", "meaning": "想像した", "katakana": "イマジンド"}], "learningTip": "In a good way. を足すと「良い意味で」とはっきりする。"},
  {"id": 156, "role": "listen", "scene": "雑談", "english": "Can I take one selfie with you?", "japanese": "一緒に自撮りしてもいいですか", "context": ["雑談", "インド英語"], "explanation": "インドでは外国人がよく写真を頼まれる。one は「一枚」の軽い言い方。", "vocabulary": [{"term": "selfie", "meaning": "自撮り", "katakana": "セルフィー"}], "learningTip": "嫌なら Sorry, not today. で断ってよい。"},
  {"id": 157, "role": "say", "scene": "雑談", "english": "Sure, why not! Should I stand here?", "japanese": "いいですよ!ここに立てばいいですか", "context": ["雑談"], "explanation": "写真に応じるとき。", "vocabulary": [{"term": "why not", "meaning": "もちろん・いいね", "katakana": "ワイ ノット"}], "learningTip": "Why not! は「断る理由なんてない」=「喜んで」。"},
  {"id": 158, "role": "listen", "scene": "雑談", "english": "Your English is very good! Where did you learn?", "japanese": "英語上手ですね!どこで習ったんですか", "context": ["雑談"], "explanation": "ほめられたときの返し方を持っておく。", "vocabulary": [{"term": "where did you learn", "meaning": "どこで習ったの", "katakana": "ウェア ディッジュー ラーン"}], "learningTip": "Thank you, I'm still learning. が角の立たない返し。"},
  {"id": 159, "role": "say", "scene": "雑談", "english": "Thank you, but I still struggle with fast speakers.", "japanese": "ありがとう。でも早口の人はまだ苦手で", "context": ["雑談"], "explanation": "ほめ言葉を受けて、ゆっくり話してもらう流れを作る。", "vocabulary": [{"term": "struggle with", "meaning": "〜に苦労する", "katakana": "ストラグル ウィズ"}, {"term": "fast speakers", "meaning": "早口の人", "katakana": "ファスト スピーカーズ"}], "learningTip": "これを言っておくと、相手が自然にゆっくり話してくれる。"},
  {"id": 160, "role": "listen", "scene": "雑談", "english": "Are you liking the weather here?", "japanese": "こっちの天気はどうですか", "context": ["雑談", "インド英語"], "explanation": "インド英語は like を進行形で使う(本来は Do you like)。", "vocabulary": [{"term": "are you liking", "meaning": "(インド英語)気に入ってる?", "katakana": "アー ユー ライキング"}], "learningTip": "「I am understanding」「I am knowing」もインドでは聞く。意味は普通の現在形と同じ。"},
  {"id": 161, "role": "say", "scene": "雑談", "english": "It's hotter than I expected, but the evenings are lovely.", "japanese": "思ったより暑いけど、夕方は気持ちいいです", "context": ["雑談"], "explanation": "天気の話に返す。", "vocabulary": [{"term": "than I expected", "meaning": "思っていたより", "katakana": "ザン アイ エクスペクティッド"}, {"term": "lovely", "meaning": "すてきな", "katakana": "ラヴリー"}], "learningTip": "比較+than I expected は旅の感想に便利。cheaper / busier than I expected."},
  {"id": 162, "role": "listen", "scene": "雑談", "english": "Your friend is a monk? Which temple he is from?", "japanese": "お友達はお坊さん?どこのお寺の方ですか", "context": ["雑談", "インド英語"], "explanation": "同行のお坊さんに興味を持たれる。語順は平叙文のまま。", "vocabulary": [{"term": "temple", "meaning": "寺", "katakana": "テンプル"}], "learningTip": "インドは仏教の発祥地。日本のお坊さんだと話が弾むことがある。"},
  {"id": 163, "role": "say", "scene": "雑談", "english": "He's from a small temple in the countryside, not a famous one.", "japanese": "田舎の小さなお寺で、有名なところではないんです", "context": ["雑談"], "explanation": "お寺について答える。", "vocabulary": [{"term": "countryside", "meaning": "田舎", "katakana": "カントリーサイド"}, {"term": "famous", "meaning": "有名な", "katakana": "フェイマス"}], "learningTip": "not a famous one の one は temple の言い換え。同じ語を繰り返さないための形。"},
  {"id": 164, "role": "listen", "scene": "雑談", "english": "I will tell you one thing. In India, everything is possible.", "japanese": "一つ言っておきます。インドでは何でもありです", "context": ["雑談", "インド英語"], "explanation": "インドの人がよく言う冗談まじりの一言。", "vocabulary": [{"term": "I will tell you one thing", "meaning": "一つ言っておくと", "katakana": "アイル テル ユー ワン シング"}, {"term": "possible", "meaning": "ありうる", "katakana": "ポッシブル"}], "learningTip": "笑って So I've noticed! と返すと盛り上がる。"},
  {"id": 165, "role": "say", "scene": "雑談", "english": "That's what I'm starting to realise.", "japanese": "だんだんそれがわかってきました", "context": ["雑談"], "explanation": "相手の一言に、旅の実感で返す。", "vocabulary": [{"term": "starting to", "meaning": "〜し始めている", "katakana": "スターティング トゥ"}, {"term": "realise", "meaning": "気づく・わかる", "katakana": "リアライズ"}], "learningTip": "That's what 〜 は「まさにそれ」。That's what I thought.(そう思ってた)も便利。"},
  {"id": 166, "role": "say", "scene": "雑談", "english": "Let's keep in touch. Are you on Instagram?", "japanese": "連絡を取り合いましょう。インスタやってますか", "context": ["雑談"], "explanation": "仲良くなった相手との別れ際に。", "vocabulary": [{"term": "keep in touch", "meaning": "連絡を取り合う", "katakana": "キープ イン タッチ"}, {"term": "are you on", "meaning": "(SNSを)やってる?", "katakana": "アー ユー オン"}], "learningTip": "インドでは WhatsApp が一番使われている。Are you on WhatsApp? も覚えておく。"}
];
