// Change Event on Select Box
let selectBox = document.querySelector('#lang-select');
selectBox.addEventListener('change', function () {
     let selectedOption = selectBox.value;

     let displayLang = document.querySelector('#lang-display');
     displayLang.innerText = selectedOption;
});
