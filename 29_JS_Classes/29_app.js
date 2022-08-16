/*
let mobile = {
    brand : 'Apple',
    price : 35000,
    color : 'Silver'
}
console.log(mobile);

 */

// OOPS Concept of constructing a structure with class
class Mobile {
    constructor(brand,price,color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    getBrand(){
        return this.brand;
    }

    getPrice(){
        return this.price;
    }

    getColor(){
        return this.color;
    }
}

// To access this Structure
    printSpecification()
{
    let spec = `BRAND : ${this.getBrand()}
                PRICE : ${this.getPrice()}
                COLOR : ${this.getColor()}`;
    console.log(spec);
}

// printing of data starts because of this statements
let mobile = new Mobile('Apple', 35000, 'Silver');
mobile.printSpecification();