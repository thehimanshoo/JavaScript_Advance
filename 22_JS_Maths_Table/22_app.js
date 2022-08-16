// Maths Table
let numberEl = document.querySelector('#req-number');
numberEl.addEventListener('keyup', function () {
   let theNumber = Number(numberEl.value);
   document.querySelector('#number').innerText = theNumber;
   calculate();
});

// Input Event of range Selector
let rangeEl = document.querySelector('#multiplier');
rangeEl.addEventListener('input', function () {
   let selectedMultiplier = Number(rangeEl.value);
   document.querySelector('#multi').innerText = selectedMultiplier;
    calculate();
});


// Result Section of the app
let calculate = () => {
  let theNumber =  Number(document.querySelector('#number').innerText);
  let muiltiplier = Number(document.querySelector('#multi').innerText);
  let mathResult = theNumber * muiltiplier;

  document.querySelector('#result').innerText = mathResult;
};

