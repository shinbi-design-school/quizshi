'use strict';

{
    // 問題を配列で登録
    const quizzes = [
        {
            question: "イクラの語源は何語？",
            answer: ["日本語", "ロシア語", "英語"],
            correctAnswer: "ロシア語",
            comment :"「イクラ(Икра：ikra)」は元々ロシア語で「魚卵」の意味",
            image:"../images/sushi_ikura.png"
        },
        {
            question: "時速70キロ以上で泳ぐことができる",
            answer: ["マグロ", "ノドグロ", "タイ"],
            correctAnswer: "マグロ",
            comment: "マグロは止まると死ぬ、、、、",
            image:"../images/sushi_akami.png"
        },
        {
            question: "数をごまかす際に用いられることわざ、「●●を読む」",
            answer: ["タ イ", "サ バ", "カ イ"],
            correctAnswer: " サバ",
            comment: "サバは鮮度の落ちが激しい魚。",
            image:"../images/sushi_battera.png"
        },
        {
            question: "とても長寿の魚で、縁起物として扱われる",
            answer: ["タイ", "イカ", "カツオ"],
            correctAnswer: "タイ",
            comment: "タイはめでたい、平安時代には「平魚（タイラウオ）」と呼ばれていた。",
            image:"../images/sushi_kinmedai.png"
        },
        {
            question: "長崎の鉄火巻きに使われる魚は？",
            answer: ["ヒラス", "サワラ", "ブリ"],
            correctAnswer: "ヒラス",
            comment: "長崎ではとてもポピュラーな魚で、一般的にマグロが用いられる鉄火巻きの具にヒラスが用いられる",
            image:"../images/makimono_tekkamaki.png"
        },
        {
            question: "河童の好物であることから名づけられた寿司は？",
            answer: ["かっぱ巻き", "鉄火巻き", "納豆巻き"],
            correctAnswer: "かっぱ巻き",
            comment: "太平洋戦争の終戦直後、物資が不足する中で作られたおすし",
            image:"../images/makimono_kappa.png"
        },
        {
            question: "天敵はヒトデの寿司ネタは？",
            answer: ["ホタテ", "赤カイ", "アワビ"],
            correctAnswer: "ホタテ",
            comment: "ヒトデに襲われると（貝柱）を使い、殻を力強く開閉することで、貝の中に入っている海水を吐き出し、素早く泳いで逃げる",
            image:"../images/sushi_hotate.png"
        },
        {
            question: "ウロコがない魚は？",
            answer: ["アナゴ", "ブリ", "コハダ"],
            correctAnswer: "アナゴ",
            comment: "名前の由来は、日中は海底の穴に潜む習性があることから「穴籠（あなご）もり」が転じて穴子と言われるようになった",
            image:"../images/sushi_anago.png"
        },
        {
            question: "高級お寿司屋さんのネタで、「玉（たま）」と呼ばれている寿司ネタは？",
            answer: ["アカ貝", "ホタテ", "イカ"],
            correctAnswer: "アカ貝",
            comment: "アカ貝のむき身が玉のように丸いことが由来",
            image:"../images/sushi_akagai.png"
        },
        {
            question: "外国ではデビル・フイッシュ（悪魔の魚）として言われている魚は？",
            answer: ["タコ", "ホタテ", "あまえび"],
            correctAnswer: "タコ",
            comment: "2足歩行。脳みそが9こ。心臓は3つ。外国ではデビル・フイッシュ（悪魔の魚）として食用にしない民族も多い",
            image:"../images/sushi_tako.png"
        },
        {
            question: "歯がすごく強力で岩をもえぐる咬合力がある魚は？",
            answer: ["ウニ", "タコ", "ウナギ"],
            correctAnswer: "ウニ",
            comment: "5本の歯を持つ。この歯は大変強力で、岩をもえぐる力を持っている",
            image:"../images/sushi_uni2.png"
        },
        {
            question: "寿命が５年ほどの魚は？",
            answer: ["アジ", "サンマ", "イワシ"],
            correctAnswer: "アジ",
            comment: "1年で体長15cm、3年で約30cmに成長し、寿命は5年以上とされる",
            image:"../images/sushi_iwashi.png"
        },
        {
            question: "甘エビはどの海域に生息していますか？",
            answer: ["太平洋", "日本海", "東シナ海"],
            correctAnswer: "日本海",
            comment: "北海道のほか、石川県や新潟県など『日本海中部』での漁獲も盛んです。",
            image:"../images/sushi_amaebi.png"
        },
        {
            question: "寿司ネタで使われる白子は何の魚?",
            answer: ["タラ", "フグ", "アンコウ"],
            correctAnswer: "タラ",
            comment: "安い白子は『スケトウダラ』の白子を使う。",
            image:"../images/sushi_shirako.png"
        },
        {
            question: "えんがわはヒラメのどの部位？",
            answer: ["尾の付け根", "尾の端の部分", "尾自体"],
            correctAnswer: "尾の付け根",
            comment: "えんがわとは本来、ヒラメやカレイの尻ビレの付け根にある部位を指します",
            image:"../images/sushi_engawa.png"
        },
        {
            question: "別名「ワラサ」とも呼ばれている魚は？",
            answer: ["ハマチ", "イワシ", "サワラ"],
            correctAnswer: "ハマチ",
            comment: "ハマチ」は、60～80cmほどの体長になり、地域によっては30～40cmのものを指します。 別名「ワラサ」とも呼ばれます",
            image:"../images/sushi_hamachi.png"
        },
        {
            question: "カツオのお腹の縞模様はいつ現れる？",
            answer: ["生後半年", "生後1年", "死後"],
            correctAnswer: "死後",
            comment: "生きているときはお腹の縞模様はほとんど見えないが、死後現れる",
            image:"../images/sushi_katsuo.png"
        },
        {
            question: "サーモンにはアスタキサンチンが含まれています、ビタミンCの何倍の抗酸化作用でしょうか？",
            answer: ["60倍", "600倍", "6000倍"],
            correctAnswer: "6000倍",
            comment: " アスタキサンチンはビタミンCの約6,000倍の抗酸化作用があり、シミ・シワ予防等の老化防止に有効と言われています。",
            image:"../images/sushi_salmon.png"
        },
        {
            question: "ブリは出世魚ですが関東で何種類の名前がありますか？",
            answer: ["5種類", "3種類", "4種類"],
            correctAnswer: "4種類",
            comment: " 関東・・・『ワカシ』『イナダ』『ワラサ』『ブリ』他の地域でもさらに名前が変わります。",
            image:"../images/sushi_buri.png"
        },
        {
            question: "ノドグロの正式名称は？",
            answer: ["アカムツ", "クロムツ", "バラムツ"],
            correctAnswer: "アカムツ",
            comment: " のどぐろという呼び方は通称で、正式名称はアカムツと言います。",
            image:"../images/sushi_nodoguro.png"
        },
        {
            question: "ウナギの旬はどれ？",
            answer: ["冬ごろ", "夏ごろ", "春ごろ"],
            correctAnswer: "冬ごろ",
            comment: " 「夏の土用の丑の日」という言葉があるが、実は旬は『冬』である",
            image:"../images/sushi_unagi_nori.png"
        },
        {
            question: "ホッキガイの正式名称は？",
            answer: ["北寄貝", "姥貝", "巻貝"],
            correctAnswer: "姥貝",
            comment: " 『姥貝』は、タウリンやミネラルが豊富で、非常に栄養価が高い貝なんです。",
            image:"../images/sushi_hokkigai.png"
        },
        {
            question: "カリフォルニアロール発祥の地域はどれ？",
            answer: ["日本", "カリフォルニア", "ロサンゼルス"],
            correctAnswer: "カリフォルニア",
            comment: " カリフォルニアロールはその名の通り、アメリカのカリフォルニア州発祥と言われています。",
            image:"../images/sushi_california_roll.png"
        },
        {
            question: "ハンバーグ寿司のカロリーは？",
            answer: ["111cal", "222cal", "333cal"],
            correctAnswer: "111cal",
            comment: " ハンバーグ寿司のカロリーは111calです。",
            image:"../images/sushi_hamburg.png"
        },
        {
            question: "シラスに入っているビタミンはどれ？",
            answer: ["ビタミンD", "ビタミンA", "ビタミンB6"],
            correctAnswer: "ビタミンD",
            comment: " 歯や骨の形成に必要な「カルシウム」や「ビタミンD」。 脳の病気を予防する「ビタミンB12」など多くの栄養成分が含まれています。",
            image:"../images/sushi_shirasu.png"
        },
        {
            question: "イカの足は10本ですが、そのうち触腕は何本？",
            answer: ["2 本", "4 本", "3 本"],
            correctAnswer: "2 本",
            comment: " 本当はタコと同じで８本なのです。 １０本のうちの２本は触腕と呼ばれるもので、他の腕より長く、先が木の葉の形をしています。 ",
            image:"../images/sushi_ika.png"
        },
        {
            question: "ツナ缶はいつ作られましたか？",
            answer: ["1860年頃", "1890年頃", "1996年頃"],
            correctAnswer: "1860年頃",
            comment: " ツナ缶の歴史は古い。 1860〜70年ごろフランスで発祥した、とされている。 当初のものはビスケー湾でとれたビンチョウマグロの油漬けだったという ",
            image:"../images/sushi_tsuna.png"
        },
        {
            question: "子宝に恵まれるということを連想させる、縁起もの寿司ネタは？",
            answer: ["カズノコ", "イクラ", "とびっこ"],
            correctAnswer: "カズノコ",
            comment: " アイヌ語で「鰊（かど）」と呼ばれる魚のたまご ",
            image:"../images/sushi_kazunoko.png"
        },
        {
            question: "かんぴょう原材料の生産量日本一の県は？",
            answer: ["栃木県", "滋賀県", "千葉県"],
            correctAnswer: "栃木県",
            comment: " ユウガオの果肉を薄く細長くむいて、天日干しした乾物食品 ",
            image:"../images/makimono_kanpyo.png"
        },
        {
            question: "江戸っ子からは、「せっかくの海苔の香りが台なしで、こんなものは下種の食べ物だ」などと酷評されていた巻きずしは？",
            answer: ["たくあんまき", "なっとうまき", "かっぱまき"],
            correctAnswer: "たくあんまき",
            comment: " 江戸っ子からは、沢庵の独特の強い臭いのせいで「せっかくの海苔の香りが台なしで、こんなものは下種の食べ物だ」などと酷評された ",
            image:"../images/makimono_takuwan.png"
        },
        {
            question: "とろたくは何がまかれているでしょうか？",
            answer: ["たくあん", "きゅうり", "かんぴょう"],
            correctAnswer: "たくあん",
            comment: "新潟県の寿司屋「大寿司」発祥  ",
            image:"../images/sushi_makimono_torotaku.png"
        },
        {
            question: "岩手県盛岡市の発祥のおすしは？",
            answer: ["納豆巻き", "恵方巻", "かんぴょう巻き"],
            correctAnswer: "納豆巻き",
            comment: "昭和38年、すしが高級料理だったころ、出来るだけ多くの人に寿司を食べてもらいたいと思ったお寿司屋さんが低価格で提供したすし",
            image:"../images/sushi_makimono_nattou.png"
        },
        {
            question: "お寿司屋さんで「ぎょく」といえばなに？",
            answer: ["たまご", "かっぱ巻き", "なっとう巻き"],
            correctAnswer: "たまご",
            comment: "関西の寺で出されていた精進料理が元となっている",
            image:"../images/sushi_tamago.png"
        },
        {
            question: "フィラデルフィアロールには必ず入っているものはなに？",
            answer: ["カニカマ", "クリームチーズ", "生ハム"],
            correctAnswer: "クリームチーズ",
            comment: "スモークサーモンとフィラデルフィア・クリームチーズを海苔巻きにしたもの",
            image:"../images/sushi_philadelphia_roll.png"
        },
        {
            question: "東日本では人気の魚で高値で流通していますが、西日本での人気はなく安値で流通している魚は？",
            answer: ["イワシ", "コハダ", "サンマ"],
            correctAnswer: "コハダ",
            comment: "江戸前寿司で光物の代表としてなくてはならない魚、「コノシロ（コハダ）」",
            image:"../images/sushi_kohada.png"
        },
        {
            question: "はらすはサーモンのどの部分？",
            answer: ["せなか", "おなか", "しっぽ付近"],
            correctAnswer: "おなか",
            comment: "「サーモン（鮭）」の腹のふくらみ部分で、溶けるような脂身で旨みをもった部位のこと",
            image:"../images/sushi_harasu.png"
        },
        {
            question: "江戸時代、食べずに捨てられていた部分は？",
            answer: ["赤身", "脳天", "大トロ"],
            correctAnswer: "大トロ",
            comment: "江戸時代、食べずに捨てられていた部分（赤身は食べていた",
            image:"../images/sushi_ootoro.png"
        },
        {
            question: "肉ずしは食中毒予防のため表面を加熱して提供されるが、どのくらい加熱している？",
            answer: ["75℃で1分以上", "70℃で1分以上", "65℃で1分以上"],
            correctAnswer: "75℃で1分以上",
            comment: "２０１０年に恵比寿横丁からスタートした",
            image:"../images/food_nikuzushi3.png"
        },
        {
            question: "いなり寿司の形は三角形と俵型がある。分岐点となる地域はどこ？",
            answer: ["京都、奈良、和歌山あたり", "福井、滋賀、三重あたり", "富山、岐阜、愛知あたり"],
            correctAnswer: "京都、奈良、和歌山あたり",
            comment: "江戸時代より食べられており、庶民の食べ物として親しまれてきました。見世物小屋等が立ち並ぶ歓楽街で、小腹がすいた人向けに箸で、若しくは素手で簡単に食べられるということからファストフード的な位置づけとして広まっていきました。",
            image:"../images/food_inarizushi_set.png"
        },
        {
            question: "ねぎとろの語源は？",
            answer: ["ネギとトロだから", "中落ちを削り取るから", "加護を願う「 ねぐ 」から"],
            correctAnswer: "中落ちを削り取るから",
            comment: "日本で生まれたマグロを生で食する調理法。「中落ち」や腹などの「すき身」をたたき、ネギと合わせたもの",
            image:"../images/sushi_negitoro.png"
        },
    ];


    const questionContainer = document.getElementById("question-container");
    const answersContainer = document.getElementById("answers-container");
    const nextButton = document.getElementById("next-btn");
    const taishou = document.getElementById('taishou');
    const dishes = document.getElementById('dishes');

	
    let remainingQuizzes = [...quizzes];

    // シャッフルする関数
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // 問題文の表示
    function showQuiz(quiz) {
        questionContainer.textContent = quiz.question;

        // answersContainerの子要素であるボタンをすべて削除
        answersContainer.innerHTML = '';
        
        // 選択肢をシャッフルして表示
        const shuffledAnswers = shuffleArray(quiz.answer);
        shuffledAnswers.forEach(answer => { 
            const button = document.createElement("button");
            button.textContent = answer;
            button.onclick = () => checkAnswer(answer, quiz.correctAnswer, quiz.comment, quiz.image);
            answersContainer.appendChild(button);
        });
    }

	//アラートで正解と解説を表示させる
	function alertComment(correctAnswer, comment){
		alert(`正解は「${correctAnswer}」です。\n${comment}`);
	}

    // 回答の正誤
    function checkAnswer(selectedAnswer, correctAnswer,comment, image) {
        if (selectedAnswer === correctAnswer) {
	        taishou.textContent = "へい、おまち！";
			alert("正解!");
	        alertComment(correctAnswer, comment);
	        //お皿画面の画像を表示させる

                const imagElement = document.createElement('img');
                imagElement.src = image;
                dishes.appendChild(imagElement);
            
        } else {
	        taishou.textContent = "ネタ切れです";
            alert("不正解!");
            alertComment(correctAnswer, comment);
        }
        nextQuestion(); // 次の問題を表示
    }

    // 次の問題
    function nextQuestion() {
        if (remainingQuizzes.length === 0) {
            alert("あおいそです!");
            // クイズが終了した後の処理を追加する場合はここに追加
            return;
        }

        // 未表示の問題からランダムに選択
        const randomIndex = Math.floor(Math.random() * remainingQuizzes.length);
        const randomQuiz = remainingQuizzes[randomIndex];

        // 選択された問題を表示
        showQuiz(randomQuiz);

        // 表示した問題を remainingQuizzes から削除
        remainingQuizzes.splice(randomIndex, 1);
    }

    // 最初の問題を表示
    nextQuestion();

    // 次の質問へのボタンにクリックイベントを追加
    nextButton.addEventListener("click", nextQuestion);

}