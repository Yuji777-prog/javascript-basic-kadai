const btn = document.getElementById('btn');
const text = document.getElementById('text');

// btn要素がクリックされた2秒後にtext内容を書き換える
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました"
  }, 2000);
});