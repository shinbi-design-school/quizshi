

    const questionContainer = document.getElementById("question-container");
    const answersContainer = document.getElementById("answers-container");
    const nextButton = document.getElementById("next-btn");
    const taishou = document.getElementById('taishou');
    const dishes = document.getElementById('dishes');

	
    let remainingQuizzes = [...quizzes];

    // 正解数を保持する変数
let count = 0;

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
	        	// 正解数のカウント
count++;
            
            //お皿画面の画像を表示させる

                const imagElement = document.createElement('img');
                imagElement.src = image;
                dishes.appendChild(imagElement);
            
        } else {
	        taishou.textContent = "ネタ切れです";
            alert("不正解!");
            alertComment(correctAnswer, comment);
        }
        sessionStorage.setItem('count', count); // ストレージに保存
        nextQuestion(); // 次の問題を表示
    }

    // 次の問題
    function nextQuestion() {
        if (remainingQuizzes.length === 0) {
            alert("あおいそです!");
            // クイズが終了した後の処理を追加する場合はここに追加
            window.location.href = "Total.html";
           
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

