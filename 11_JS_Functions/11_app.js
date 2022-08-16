/*
  1) Simple Functions ,
  2) args functions ,
  3) return values ,
  4) function expressions ,
  5) functions as arguments
  6) functions inside an object
  7) Nested Objects with functions ,
  8) default args
*/

// Print number from 0 - 10 in multiple column , having a difference 1 using a function
    
   function printNumbers(startNumber, endNumber){
       
       let result = '';
       for(let i=startNumber; i<=endNumber; i+=10){
           result += `${i} `;
       }
       console.log(result);
   }
   printNumbers(10, 110);     // As many times we enter the same function execution those many times it will repeat the printing pattern
   printNumbers(100, 180);
   printNumbers(190, 270);

// Print number as many you want from anywhere to anywhere using function
    function printNumber(startNumber, endNumber) {
        let result = '';
        for(let i=startNumber; i<=endNumber; i+= 10){

            result += `${i} `;
        }
        console.log(result);
    }
    printNumber(10, 200);

//  Function without Parameter
    function greet() {
        console.log('Good Morning');
    }
    greet();

//  Function Expression
    let greetMe = function (){
        console.log('Good Morning');
    }
    console.log(greetMe);
    greetMe();

// Function with parameter
    let wishMe = function (name, age){
        let message = `Hello ${name} you are ${age} years Old`;
        console.log(message);
    }
    wishMe('John' , 40);

// Function with return type
    let sum = function (a , b){
        let result = 2 * (a + b);
        return result;
    }
    let output = sum(10, 20);
    console.log(output);

// Function with an object as Parameter
    let printObject = function (obj){
        console.log(obj);
    };
    printObject({name : 'David' , age : 40 , Address : 'South Street California'});

    let mobile = {
        brand : 'Apple',
        color : 'Silver',
        price : 35000
    };
    printObject(mobile);

// Function with an array as Parameter
    let printArray = function (array){
        let result = '';
        for(let index in array){
            result += `INDEX : ${index} => VALUE : ${array[index]} \n`;
        }
        console.log(result);
    }
    printArray([10,20,30,40,50,60]);

    let colors = ['White','Black','Blue','Orange','Purple'];
    printArray(colors);

//  function inside an object
    let student = {
        firstName : 'Petter',
        lastName : 'Parker',
        fullName : function (){
            return `${this.firstName} ${this.lastName}`;
        }

    };
    console.log(student.fullName);   /* Here Output will be the whole function because here 'fullName' consists of
                                        the function inside itself so, if you need to print her the fullName
                                        then you will have to pass the function expression like 'fullName()'
                                        then you will get the desired output as 'Petter parker' ...*/

    console.log(student.fullName());  // Here you'll get the desired Output => 'Petter Parker'

// Nested function
    let outerFn = function (){
        console.log('Iam an Outer function');
        let innerFn = function (){
            console.log('Iam Inner function');
        }
        innerFn();  // Inner function will always be declared under the main function
    }
    outerFn();  // Outer function will always be declare after the main end of main function

// Twisted function
   let twistedFn = function() {
       let name = 'John';
       let printStudent = function (){
           let student = {
             name : 'David',
             age : 20,
             course : 'CSE'
           };
           return student;
       }
       return printStudent;
   };
    let innerFn = twistedFn();
    let studentObj = innerFn();
    console.log(studentObj.name);


// Write a programme to prepare Chicken Curry using function
    let glassBowl = function (rawChicken, masala){
        // Marinating the Chicken
        let marinatedChicken = `MIXING : (${rawChicken}) + (${masala})`;
        return marinatedChicken;
    };

    let cookingBowl = function (marinatedChicken, water) {
        // Writing the Cooking Logic
        let cookedChicken = `COOKING : (${marinatedChicken}) + (${water})`;
        return cookedChicken;
    };

    let survingPlate = function (cookedChicken, rice){
        // Eating Logic
        let eating = `EATING : (${cookedChicken}) + (${rice})`;
        console.log(eating);
    };
   let rawChicken = '3 Kg Chicken';
   let masala = 'Garlic, Turmeric, Red-chilli, Oil, Salt, Lemon-juice';
   let marinatedChicken = glassBowl(rawChicken, masala);
   let water = '1 Ltr. water';
   let cookedChicken = cookingBowl(marinatedChicken, water);
   let rice = '1 Kg rice';
   survingPlate(cookedChicken, rice);