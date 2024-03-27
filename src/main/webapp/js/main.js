'use script';

{
    // 問題を配列で登録
    const quizzes = [
        {
        question: "いくらはどれ",
        answer: ["maguro", "saba", "ikura"],
        correctAnswer: "ikura"
    },
    {
        question: "マグロはどれ",
        answer: ["maguro", "tamago", "tai"],
        correctAnswer: "maguro"
    },
    {
        question: "さばはどれ",
        answer: ["kinoko", "saba", "kai"],
        correctAnswer: "saba"
    }
    ];

    const quizContainer = document.getElementById("quiz-container");
    const questionContainer = document.getElementById("question-container");
    const answersContainer = document.getElementById("answers-container");
    const nextButton = document.getElementById("next-btn");

    let currentQuizIndex = 0;

    


    // 問題文の表示


function showQuiz(quiz) {
    questionContainer.textContent = quiz.question;
    

    // answersContainerの子要素であるボタンをすべて削除
    answersContainer.innerHTML = '';
    
    // 選択肢の表示
    quiz.answer.forEach(answer => { 
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(answer, quiz.correctAnswer);
        answersContainer.appendChild(button);

        
    });
}
    // 回答の正誤
    function checkAnswer(selectedAnswer, correctAnswer) {
        if (selectedAnswer === correctAnswer) {
            alert("Correct!");
        } else {
            alert("Incorrect!");
        }
    }
// 次の問題
    function nextQuestion() {
        currentQuizIndex++;
        if (currentQuizIndex < quizzes.length) {
            showQuiz(quizzes[currentQuizIndex]);
        } else {
            alert("End of the quiz!");
            // クイズが終了した後の処理を追加する場合はここに追加してください
        }
    }

    // 最初のクイズを表示
    showQuiz(quizzes[currentQuizIndex]);

    // 次の質問へのボタンにクリックイベントを追加
    nextButton.addEventListener("click", nextQuestion);



}