// SMS App
let textAreaEl = document.querySelector('#text-area');
let charCountEl = document.querySelector('#char-count');
textAreaEl.addEventListener('keyup', function () {
   let textLenght = textAreaEl.value.length;
   charCountEl.innerText = textLenght;
});