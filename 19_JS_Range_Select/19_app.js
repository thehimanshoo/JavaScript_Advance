// Range Input
// To add the comma (,) we will have to search 'formatNumber' on Google and copy the code written their
// for this i have to make a function :- (to use rupee symbol use code "&#8377")




// Logic for 'Change Password Section'
let passwordBox = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', function () {
   let typeAttribute = passwordBox.getAttribute('type');
   if(typeAttribute === 'password'){
       passwordBox.setAttribute('type', 'text');
   }
   else{
       passwordBox.setAttribute('type', 'password');
   }
});



// Logic for 'Range Select'

let formatNumber = (number) => {
   let result =  new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
   return result;
};

let rangeEl = document.querySelector('#range');
let amountEl = document.querySelector('#amount');
rangeEl.addEventListener('input', function () {
   let selectedAmount = rangeEl.value;
   amountEl.innerText = formatNumber(selectedAmount);
});