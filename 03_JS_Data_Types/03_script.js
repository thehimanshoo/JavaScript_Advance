/* Q.  What is JS_Data_Types..?
   =>  The type of data which can be assign to a variable in "JavaScript" is called "Data_Types" of "JS"...
       There are five types of Data_Types...

       1. Number  -> Any number...
       2. String  -> Any text-data...
       3. Boolean -> true / false...
       4. Undefined
       5. Null

    =>   These are Primitive Data-Types / The Basic data-types of JavaScript...
*  */

// String Examples
let employeeName = 'John';
/*
    Here (let) is not any data-type... It is only indicating a variable declaration... It is just a key to declare
    a variable it is not the meaning of declaring any data-types , So we never even mentioned what types of data we 
    are going to assigning , JavaScript intelligently understand what type of data it is based on the value...

=>  To Write the string it is not mandatory to write it in a double-quotes ("") , You can also write the string data
    in single-quote '' / back-tick `` ... You can use all of these three punctuation for you string...

=>  if you wanna really know what type of data you entered , then just add an operator called (typeof) by assigning
    this operator you can find what type of data u have entered... for ex:-
 */
console.log(employeeName);   // Output will be (John)
console.log(typeof employeeName);  // Output will be (string)

// number example
let employeeAge = 40;
console.log(employeeAge);  // Output will be (40) Or you can also print the data like 👇👇
console.log(`Value : ${employeeAge} Type : ${typeof employeeAge}`);  // Output will be (Value : 40 Type : number)

/*
    The most important thing is that , always use the back-tick (``), when you gonna use to represent the dynamic value
    and to display the dynamic value use ${} and then input the value under the (curly-braces)...
    
=>  Dynamic value means the value which you have assigned as like number and wanna print with any message
    then at that time we gonna use ${} to represent the dynamic data...
 */

// boolean Examples
let statements = true;
// let newStatements = TRUE; // It gives an error

console.log(statements);   // Output will be (true)
console.log(typeof statements);  // Output will be (boolean)

// console.log(newStatements);  // Output will be (error) / TRUE is not defined...
/*
    It is because for the data-type (boolean) only "true / false" value should be entered , by default only
    these two values are given in the program by default... so , must take care of these things that the boolean character
    should be written (true / false) only...
 */

// Undefined
let name;      // Variable declaration
name = 'Rajpoot Himanshu';  // Assignment of value
console.log(name);     // Printing the statements

// Here is the clear example of how undefined be happen in our program...
let name2;
console.log(name2);
name2 = 'Rajpoot Himanshu';

/*
    Here what we do is, we are just printing our data before assigning the value to the variable so, it gives (Undefined)
    as a result... Because every programming language execute the instruction line by line and here what we are doing is 
    without assigning a proper value to the variable we are just printing the output that's why it shows an (Undefined)
    as result...
 */

// null (dummy value)
let test = null;
console.log(`Value : ${test} Type : ${typeof test}`);
/*
    when you assign a value (null) to a variable then, its by default creat a "Dummy-Value" to itself and when you used
    to check-up then it gives (Object) as a result when you check with the function (typeof)...
 */

//  Re-Assignment
    let abc = 10;
    console.log(abc);
    // Here what it print is only the value which is assigned to a variable means it gives an Output of (10);

    abc = 'Rajpoot Himanshu';
    console.log(`Value : ${abc} Type ${typeof abc}`);
    /*
        It is the example of Re-Assignment of the value to the same variable which you can assign it as many times as
        many times you want, but the condition is to without adding any (let) keyword, only then you will be able to assign
        an another value which you wanna add and wanna print...
     */

    abc = 'non-veg';
    console.log(`Value : ${abc} , and Type : ${typeof abc}`);