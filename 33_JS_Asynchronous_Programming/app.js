// This code will execute line by line, it is known as Synchronous Program
console.log(new Date().toLocaleTimeString());
console.log("Synchronous Program prints line by line");
console.log("Car 1");
console.log("Car 2");
console.log("Car 3");
console.log("Car 4");
console.log("Car 5");
console.log("\n\n\n");

// This is the example of Asynchronous Programming
console.log("Asynchronous Program prints the statement whenever you want ot print");
console.log(new Date().toLocaleTimeString());
console.log("Car 1");
console.log("Car 2");
setTimeout(() => {
    console.log("Car 3");
    console.log(new Date().toLocaleTimeString());
}, 3000)
console.log("Car 4");
console.log("Car 5");