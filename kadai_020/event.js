// textというidを持つHTML要素を取得し、定数に代入する
const displayText = document.getElementById('text')

// btnというidを持つHTML要素を取得し、定数に代入する
const displayBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
displayBtn.addEventListener('click', () => {
  
  // 表示された文字を変更する
  displayText.textContent = "ボタンをクリックしました";

});