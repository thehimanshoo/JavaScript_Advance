    import {Person} from "../Person/person.js";

    export class Customer extends Person{
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