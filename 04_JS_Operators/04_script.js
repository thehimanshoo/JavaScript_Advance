/*
                   JS Operator :---

   1.   Assignment Operator            :- =
   2.   Arithmetic Operator :-         + - * / %
   3.   Short hand Math Operators :-   += , -= , /= , *=
   4.   Conditional Operator :-        < , > , <= , >= , !==
   5.   Unary Operator :-              ++ , --
   6.   Logical Operator :-            && , || , ^
   7.   Ternary Operator :-            ?:
   8.   Equality Operator :-           == , ===

   */

// Example of all Operator :-

// Assignment operator =
let data = 10;
console.log(data);

// Arithmetic operators + - * /
let num1 = 10;
let num2 = 20;
console.log(`sum of ${num1} + ${num2} is : ${num1 + num2}`);
console.log(`sub of ${num1} - ${num2} is : ${num2 - num1}`);
console.log(`mul of ${num1} * ${num2} is : ${num1 * num2}`);
console.log(`div of ${num1} / ${num2} is : ${num1 / num2}`);

// % (Modulus) is generally used to get Result... for ex :-
// Write a program of even or odd using Arithmetic Operators
let num = 13;
if(num % 2 ===0){
    console.log(`${num} is an Even number`);
}else{
    console.log(`${num} is an Odd number`);
}

// Short hand math += , -= , *= , /=
let a = 20;
let b = 30;
let add = 10;
add = add + (a + b); // The same statements can also be written as "add += (a + b)"
// add += (a + b);

/* The main rule for writing the shorthand maths you have to write the arithmetical which is before the equal sign same..
* for example :- Add += here the sign of + must be the same for both logic in simple and the shorthand logic. */

 // add -= (a + b);
 // add *= (a + b);
 // add /= (a + b);
console.log(`add Value : ${add}`);

// Conditional operators < , > , <= , >= , !=
let marks = 200;
if(marks <= 35){
    console.log(`You have failed in the Examination`);
}else{
    console.log(`Congratulations!! You have Cleared the Examination by ${marks} marks`);

}

// Unary Operator ++ , -- (pre , post)
let x = 10;
x = x + 1; // It can be increase by 1 like this (Here you can also increase as much number as you want to increase to the variable , you just need to put that value at the place of 1)
x += 1;    // Also like this this (Here you can increase as much number as you want to the variable, you just need to put at the place of 1)
x++;       // Also like this in a vary shortcut method (Here we can't add x+2 for increasing 2 in value... It will always written x++)
console.log(x);

// Logical operators AND(&&) , OR(||) , XOR(^)

/* If you are doing any Comparison or if you are doing any condition checking between any two variables and data you can
   use this Operator for you program... How this works lets see..
 
   for Ex :- 
   1. And => T && T -> T   (If both the operands are true then it gives result 'True' otherwise gives Result 'False' this is called "And-Operator")
   2. OR  => T || T -> T   (If any one from the both are true then it gives result 'True' and if both are true then also gives Result 'True' This is called "OR-Operator")
   3. XOR => T ^ F , F ^ T -> (If both are different then only it gives 'True' , If both are same then it will give 'False'
                               If both are 'True' then also it will give "False" and if both are 'False' then also
                               It will give "False", it will give 'True' in only one condition when both are "Different"..)
*/

// Example for "And-Operator" :-
    let inRelation = true;
    let parentsAgreed = false;
    if(inRelation && parentsAgreed){
        console.log(`Get Marry Soon`);
    }else{
        console.log(`Wait until the parents Agreed`);
    }
    
// Example for "OR-Operator" :-
    let livingRelation = true;
    let parentsAgree = false;
    if(livingRelation || parentsAgree){
        console.log(`Get Marry Soon`);
    }else{
        console.log(`Wait until the parents Agreed`);
    }

 // Example for "XOR-Operator" :- (It only gives true when the both sides are different, if not then it gives else value)
    let loveMarriage = true;
    let ourParentsAgreed = true;
    if(loveMarriage ^ ourParentsAgreed){
        console.log(`Get Marry Soon`);
    }else{
        console.log(`Don't go against you Parents`);
    }

 // Ternary Operator ?: (If the given statements are true then the first statements after the ? will print else after : message will print..)
    let totalMarks = 35;
    let message = '';
    (totalMarks <= 35) ? message = 'You failed the Exam' : message = 'You Cleared the Exam';
    console.log(message);

 // String Concatenation Operator
    let str1 = 'Hello';
    let str2 = ' World';
    let res = str1.concat(str2);
    console.log(res);

// Type of operator  (== use to compare integers both side but does not compare the types of the data-types...)

// == operator
   a = 10;
   b = '20';
   if(a == b){
       console.log(`Both are Equal`);
   }else{
       console.log(`Both are NOT Equal`);
   }

// === operator
    a = 20;
    b = '20';
    if(a === b){
        console.log(`Both are Equal`);
    }else{
        console.log(`Both are NOT Equal`);
    }