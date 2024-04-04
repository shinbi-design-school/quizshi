'use strict';

{
    // 問題を配列で登録
    const quizzes = [
        {
            question: "ヒトデに襲われると閉殻筋（貝柱）を使い、殻を力強く開閉することで、貝の中に入っている海水を吐き出し",
            answer: ["まぐろ", "さば", "フィラデルフィアロール"],
            correctAnswer: "まぐろ",
            comment :"いくらは鮭のたまご",
            image:"../images/sushi_ikura.png"
        },
        { 
            question: "マグロはどれ",
            answer: ["maguro", "tamago", "tai"],
            correctAnswer: "maguro",
            comment: "まぐろはとまると死ぬ",
            image:"../images/sushi_akami.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "江戸っ子からは、「せっかくの海苔の香りが台なしで、こんなものは下種の食べ物だ」などと酷評されていた巻きずしは？",
            answer: ["たくあんまき", "なっとうまき", "かっぱまき"],
            correctAnswer: "たくあんまき",
            comment: "たいはめでたい",
            image:"../images/sushi_kinmedai.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
        },
        {
            question: "さばはどれ",
            answer: ["kinoko", "saba", "kai"],
            correctAnswer: "saba",
            comment: "さばは好きじゃない",
            image:"../images/sushi_battera.png"
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