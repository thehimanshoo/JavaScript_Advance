// Creation of an Array
    let number = [10,20,30,40,50];
    console.log(number);
    
 // Access the element of an Array
    console.log(number[0]);
    console.log(number[1]);
    console.log(number[2]);
    console.log(number[3]);
    console.log(number[4]);
    console.log(number[5]);   // Undefined

// Access non-existing element of Array
    console.log(number[5]);   // Undefined

// Accessing length of an Array
    console.log()

// Iteration of Array elements
    let colors = ['Red','Green','Blue','Orange','Yellow','Pink','White','Black','Violet'];
    
    for(let i=0; i <= colors.length-1; i++){
        console.log(colors[i]);
    }
    
 // Same Iteration but printing on the same line
    let result = '';
    for(let i=0; i <= colors.length-1; i++){
        if(i < 8){
            result += `${colors[i]} , `;
        }else{
            result += `${colors[i]}`;
        }
    }
    console.log(result);
    
// Same Iteration using "for-in Loop" (ES-5 feature) 
   result = '';
   for(let a in colors){
       result += `${colors[a]} `;
   }
   console.log(result);
   
 // same Iteration using "for-of Loop"  (ES-6 feature)
    result = '';
    for(let color of colors){
        result += `${color} `;
    }
    console.log(result);
    
 // Same Iteration using 'forEach' function
    result = '';
    colors.forEach(function (color){
        result += `${color} `;
    })
console.log(result);
    
 // Same Iteration using 'Arrow Function' from ES-6 version
    result = '';
    colors.forEach(color => result += `${color} `);
    console.log(result);
    
    
 // Array of Employee
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
    
 // Access the array of objects
    console.log(employees);
    result = '';
    

// reverse the array using reverse()


// Remove the first value of the array: shift()


// Add value to front of the array:unshift()


// Remove the last value of the array: pop()


// Add value the end of the array: push()


// Remove an element from an Array , Arguments: colors.splice(pos,n):


// Create a copy of an array. Typically assigned to a new variable:slice();


// indexOf()


// join() , split()



// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
