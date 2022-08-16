class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName(){
        this.firstName;
    }
    getLastName(){
        this.lastName;
    }
    greet(){
        let msg = `Welcome Mr. ${this.firstName} ${this.lastName}`;
        console.log(msg);
    }
}
 /*

// How to create an Object for the person Class is :-
let person = new Person('Rajpoot', 'Himanshu');
person.greet();

  */

// To extend the parent class how we do is :-
class Employee extends Person{
    constructor(firstName, lastName, age, designation) {
        super(firstName, lastName);
        this.age = age;
        this.designation = designation;
    }
    // To access the property

    getAge(){
       return this.age;
    }
    getDesignation (){
        return this.designation;
    }
    greet() {
        let msg = `Hello Mr: ${this.firstName} ${this.lastName}
                   AGE : ${this.getAge()}
                   DESIGNATION : ${this.getDesignation()}`;
        console.log(msg);
    }
}
let employee = new Employee('Rajpoot', 'Himanshu', 19, 'Software Engineer');
employee.greet();

// Create and add Another class to the parent Class

class Customer extends Person{
    constructor(firstName, lastName, age, location) {
        super(firstName, lastName);
        this.age = age;
        this.location = location;
    }
     // To access this
    getCustomerAge(){
        return this.age;
    }
    getCustomerLocation(){
        return this.location;
    }
    greet() {
        let msg = `Hello Ms: ${this.firstName} ${this.lastName}
                   AGE : ${this.getCustomerAge()}
                   LOCATION : ${this.getCustomerLocation()}`;
        console.log(msg);
    }
}

// Create an Object for the Person class
let customer = new Customer('Laura', 'Wilson', 28, 'USA');
customer.greet();