// クイズの正解数を取得
const count = sessionStorage.getItem('count');
// const quizLength = sessionStorage.getItem('quizLength');


// 正解数を表示する要素を取得
const scoreElement = document.getElementById('dishes_sum');


// 正解数を表示
scoreElement.textContent = count;
// 初期化
sessionStorage.setItem('count', 0);


