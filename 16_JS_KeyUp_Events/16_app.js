// Keyup Events Example
let textBox = document.querySelector('#username');
textBox.addEventListener('keyup', function () {
    let textEntered = textBox.value;
    let textShow = document.querySelector('#msg');
    textShow.innerHTML = textEntered;
});