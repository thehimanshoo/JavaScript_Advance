// Find the number of 'o' in the given String :-

let msg = 'Good Morning';
let findZeros = (str)=>{
    let count = 0;

    for(let i=0; i<= str.length-1; i++){
        let char = str.charAt(i);

        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;
};

console.log(`The number of Zeros in the given String is : ${findZeros(msg)}`);


// Find the reverse string of the given String :-

msg = 'Good Morning';   // Should be print like :- gninroM dooG
let reverseString = (str) => {
  let tempString = '';
  for(let i = str.length-1; i >= 0; i--){
      let char = str.charAt(i);
      tempString += char;
  }
  return tempString;
};

console.log(`The reverse String of ${msg} is : ${reverseString(msg)}`);

// Find the given String is palindrome or not :-

let newMsg = 'ABABA';
let isPalindrome = (pal) => {

        return pal === reverseString(pal);
};
console.log(`The given String ${newMsg} is Palindrome ? ${isPalindrome(newMsg)}`);