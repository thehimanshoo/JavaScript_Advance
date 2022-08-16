    export class Person {
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