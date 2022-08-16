// printWishMessage
let printWishMessage = (message, color) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerHTML = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.color = 'white';
    h1Tag.style.textAlign = 'center';
    h1Tag.style.marginTop = '20px';
    h1Tag.style.marginBottom = '20px';
    h1Tag.style.padding = '20px';
    h1Tag.style.fontSize = '30px';
    h1Tag.style.borderRadius = '20px';
    h1Tag.style.textShadow = '0 5px 10px blue';
    h1Tag.style.boxShadow = '0 5px 10px black';
    h1Tag.style.fontFamily = 'Arial, sans-serif';
};
printWishMessage();
