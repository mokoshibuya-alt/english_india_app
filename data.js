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
  }
];
