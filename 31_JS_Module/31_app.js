import {Employee} from "./Employee/employee.js";
import {Customer} from "./Customer/customer.js";
import {Person} from "./Person/person.js";

let employee = new Employee('Rajpoot', 'Himanshu', 19, 'Software Engineer');
employee.greet();

let customer = new Customer('Laura', 'Wilson', 28, 'USA');
customer.greet();

let person = new Person('John', 'Doe');
person.greet();