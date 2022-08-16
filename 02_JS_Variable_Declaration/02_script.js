/* Q. What actually what called..?  
* =>  Let -> is a 'Key-words' which is used to make variable... 
* =>  a   -> Variable name / Reference Variable
* =>  =   -> Assignment Operator
* =>  10  -> Value / data assign to variable
* =>  ;   -> end of the statements... */


let a = 100;
let b = 200;

let sum = (a + b);
console.log(sum);
console.log('The sum of a , b is :',sum);
console.log('The sum of ' +a+ ' , ' +b+ ' is :', sum);  // ES5

// This is form 'Es6' version... in this version the static data will be written in back-tick (``) and the dynamic value
// used to write in dollar-sign (${}) which is generally used to show the dynamic value of the variable written under (${})

console.log(`The sum of ${a} , ${b} is : ${sum}`);

/*
    Rules for Variable Declarations :-
    
 1. All variables are case sensitive, for ex:- 
    let name = 'John';
    console.log(Name);  // Error  { It gives error message because here variable we defined with the small letters only
                                but while printing we write the variable having a Capital letters so, it is giving an error message...}
                                
 2. All variable name must be in camelCase... for ex:- let myEmployeeName is = 'John';
    {When variable name can be made by more than one words then it should be starts with 'small-letter' and each first-letter of the other words
    starts with 'Capital-letter' without having a space between two letters...} 
    
 3. Max allowed character 15... {Actually you can write as many character as you want and the compiler won't gives any error but the standard limit
                                 given to us form the professionals is '15-char' max...} 
                                 
 4. Chars allowed are a-z , A-Z , $ , _ , 0-9
    for ex :-
            let number = 10;   // Valid
            let $number = 20;  // Valid
            let _number = 30;  // Valid
            let Number = 40;   // Valid
            let NUMBER = 50;   // Valid
            let @number = 60;  // not Valid
            let %number = 70;  // not valid
            let number1 = 80;  // not Valid
            let 1number = 90;  // not Valid  {Variable name must not starts with number... After declaration of first letter as alphabet / sign variable
                                              you can add number any where it will not give any error message...}  
                                              
 5. Variable name should not Starts with the number... first letter should be either Alphabet / given Sign variable , Otherwise it will give an error message...
 
 6. The given Variable must not re-declared...
 => for ex :-
            let name = 'David';
            let name = 'John';
            console.log(name);  // It gives error like "Identifier name has already been declared..." it means once you declare a variable
                                   then make sure that you must not re-declare the same Variable, you will have to declare the different variable for the program...

                                   and one more thing if you declare the variable and assign some value to it also, and you want to declare the same variable for
                                   the new value which you want to upgrade then just write the "Identifier" name directly without using (Let-keyword) with the new
                                   value and just print it , it will not give any error value... But always remember that define that (Identifier) without using
                                   (let-keyword), if you use the (let-keyword) then its again start showing error message...
 */
