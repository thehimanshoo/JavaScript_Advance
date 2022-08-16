// 1. Find the given String is Palindrome or not :-

let msg = 'ABA';
let isPalindrome = (str) => {
    let revStr = '';
    for(let i = str.length-1; i >= 0; i--){
        let char = str.charAt(i);
        revStr += char;
    }
    return revStr === str;
};
console.log(`The given String ${msg} is Palindrome ? ${isPalindrome(msg)}`);

// 2. Find the Reverse of the given String :-
    msg = 'Good Morning';
let reverseString = (str) => {
    let emptyString = '';

    for(let i=str.length-1; i>=0; i--){
        let char = str.charAt(i);
        emptyString += char;
    }
    return emptyString;
};
console.log(`The reverse of the String '${msg}' is :- ${reverseString(msg)}`);

// 3. Find again the Reverse String of the given String :-
    msg = 'Iam Rajpoot Himanshu';
let string = (str) => {
    let revStr = '';
    for(i=str.length-1; i>=0;i--){
      let char = str.charAt(i);
        revStr += char;
    }
    return revStr;
}
console.log(`The Reverse of the given '${msg}' is :=> ${string(msg)}`);

// 4. Write some Character in the Triangle form :-
    msg = 'Rajpoot Himanshu';
let triangleOne = (str)=>{
   let tempStr = '';
    for(let i=1; i<=str.length; i++){
        tempStr += `${str.substr(0, i)} \n`;
    }
    return tempStr;
};
console.log(`The Triangle shape of the given character '${msg}' is :- \n${triangleOne(msg)}`);

// 5. Write some character in the reverse Triangle form :-

let addSpace = (num) => {
    let tempSpace = '';
    for(let i=0; i<=num; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};
    msg = 'Rajpoot Himanshu';
let triangleTwo = (str) => {
   let tempStrTwo = '';
    for(let i=0; i<=str.length; i++){
        tempStrTwo += `${addSpace(i)}${str.substr(i)}\n`;
    }
    return tempStrTwo;
};
console.log(`The Reverse triangle Shape of the given String '${msg}' is :- \n\n${triangleTwo(msg)}\n`);

