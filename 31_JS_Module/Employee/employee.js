    import{Person} from "../Person/person.js";

    export class Employee extends Person{
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