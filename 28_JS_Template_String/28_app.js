/*

// JS Template Strings (``) back tick operator +

let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 45000
};

// In ES-5 version how we access the data is :-
let msg = "Brand: " + mobile.brand + " Color: " + mobile.color + " Price: " + mobile.price ;
console.log(msg);

// In Es-6 version how we access the data is :-
 let msg1 = `Brand: ${mobile.brand}  Color: ${mobile.color}  Price: ${mobile.price}`;
 console.log(msg1);

 // If you wanna converted these like a list Items then how we do in ES-5 is :-
let template1 = "<ul>" +
                    "<li>"+ mobile.brand +"</li>" +
                    "<li>"+ mobile.color +"</li>" +
                    "<li>"+ mobile.price +"</li>" +
                "</ul>";

// The same thing will display using ES-6 Version, so, how we do is :-
let template2 = `<ul>
                    <li>${mobile.brand}</li>
                    <li>${mobile.color}</li>
                    <li>${mobile.price }</li>
                 </ul>`;


// Optional Parameter
let greet = function (name, age=20) {
  let msg = `Hello ${name} you are ${age} yrs old`;
  console.log(msg);
};
greet('Rajpoot');


let printNumber = function (start, end=100) {
  let result = '';
  for (let i=start; i<=end; i++){
      result += `${i} `;
  }
  console.log(result);
};
printNumber(5, 30);

*/


/*
 
        Types of Functions
      ______________________
      
      1) Normal Function
      2) Function Expression
      3) Arrow Function
 
 */

/*

// Normal Function

    let result = '';
 function printNormalFunction() {
     let msg = '';
     for (let i=1; i<=10; i++){
         if (i<10){
             msg += `${i}, `;
         }
         else{
             msg += `${i} `;
         }
     }
     return msg;
 }
 result = printNormalFunction();
 console.log(result);


 // Function Expression

    let printFunctionExpression = function (start, end=20) {
        let msg = '';
        for (let i=start; i<=end; i++){
            if (i<end){
                msg += `${i}, `;
            }
            else{
                msg += `${i} `;
            }
        }
        return msg;
    }
    result = printFunctionExpression(5);
    console.log(result);


    //  Arrow Function

    let printArrowFunction = (start, end=15) => {
        let msg = '';
        for (let i=start; i<=end; i++){
            if (i<end){
                msg += `${i}, `;
            }else{
                msg += `${i} `;
            }
        }
        return msg;
    };
    result = printArrowFunction(5);
    console.log(result);

    // Usage of Array Function
let employees = [
    {
        id : 1,
        name : 'John',
        age : 40,
        designation : 'Manager',
        isActive : true
    },
    {
        id : 2,
        name : 'Wilson',
        age : 46,
        designation : 'Sr.Manager',
        isActive : false
    },
    {
        id : 3,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        isActive : true
    },
    {
        id : 4,
        name : 'Laura',
        age : 28,
        designation : 'Tech Lead',
        isActive : false
    },
    {
        id : 5,
        name : 'David',
        age : 26,
        designation : 'Software Engineer',
        isActive : true
    }
];

// Junior Employees {with simple function}
let juniorEmployees = employees.filter(function (employee) {
    return employee.age <= 30;
});
console.log(juniorEmployees);

// Junior Employee with an Arrow Function
    let jrEmployees = employees.filter((employee) => {
       return employee.age <= 30;
    });
    console.log(jrEmployees);

    // if you have only one expression to pass and only one output to pass then you need not write () and {} of function and return statement also need not write
    let jrEmployees2 = employees.filter(employee => employee.age <= 30);
    console.log(jrEmployees2);


  // Limitation of an Arrow Function
/*
    In an Arrow function "this" keyword instead of student does not work to read the current
    object, it will work very well in simple function but in arrow function it will
    not work, this is the small limitation of an 'Arrow Function'...

            Instead of 'this' keyword we will have to use 'student' keyword to see
            the Combined Output
 */

/*

let student = {
    firstName: 'Rajpoot',
    lastName: 'Himanshu',
    fullName :  () => {
        return `${student.firstName} ${student.lastName}`;
    }
};
console.log(student.fullName());

 */


// For-of Loop
let employees = [
    {
        id : 1,
        name : 'John',
        age : 40,
        designation : 'Manager',
        isActive : true
    },
    {
        id : 2,
        name : 'Wilson',
        age : 46,
        designation : 'Sr.Manager',
        isActive : false
    },
    {
        id : 3,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        isActive : true
    },
    {
        id : 4,
        name : 'Laura',
        age : 28,
        designation : 'Tech Lead',
        isActive : false
    },
    {
        id : 5,
        name : 'David',
        age : 26,
        designation : 'Software Engineer',
        isActive : true
    }
];

// Normal-for Loop
    let result = '';
    for (let i=0; i<=employees.length-1; i++){
        let employee = employees[i];
        if (i<employees.length-1){
            result += `${employee.name.toUpperCase()}, `;
        }
        else{
            result += `${employee.name.toUpperCase()} `;
        }
    }
    console.log(result);


 // For-in loop (upto Es-5 Version)
    result = '';
    for (let index in employees){
        let employee = employees[index];
        result += `${employee.name.toUpperCase()} `;
    }
    console.log(result);


// For-of loop (upto Es-6 Version)
result = '';
for (let employee of employees){
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

// for_Each Function Es5
result = '';
employees.forEach(function (employee) {
    result += `${employee.name.toUpperCase()} `;
});
console.log(result);

// forEach with an Arrow Function Es6
result = '';
employees.forEach(employee => {
    result += `${employee.name.toUpperCase()} `;
})
console.log(result);

// De-structuring ES6
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    address : {
        street : 'Hi-tech city',
        city : 'Hyderabad',
        state : 'TS'
    },
    hobbies : {
        regular: {
            id: 1,
            regHobbies: ['Reading Books', 'Playing Cricket']
        }
    },
    occasional : {
        id : 2,
        occHobbies : ['Playing Cards' , 'Online Games']
    }
};

   // De-Structuring Concept
let {street, city, state} = student.address;
console.log(`STREET : ${street},
             CITY : ${city},
             STATE : ${state}`);

  // regular Hobbies
let {regHobbies} = student.hobbies.regular;
console.log(regHobbies);

// Can also access direct like this
console.log(student.hobbies.regular.regHobbies);


// Spread Operator (want to find the minimum of it...)
let numbersArray = [10,20,67,76,1,876,908,3,5886];
let min = Math.min(...numbersArray);
console.log(min);


// Merse two Array in a single Array (Es5_Version)
let array1 = ['White','Blue','Silver','Black','Purple'];
let array2 = ['Orange','Golden','Pink','Sky-blue'];

let addedArray = [];
for (let color of array1){
    addedArray.push(color);
}
for (let color of array2){
    addedArray.push(color);
}
console.log(addedArray);

// Mersing of two Array in a single Array (Es-6__Version)
array1 = ['White','Blue','Silver','Black','Purple'];
array2 = ['Orange','Golden','Pink','Sky-blue'];

addedArray = [...array1, ...array2];
console.log(addedArray);
