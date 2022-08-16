// JavaScript Object
let camera = {
    brand : 'Canon',
    price : 50000,
    color : 'black',
    mfg : 2021,
    lens : 'Canon Original f 2.5',
};
console.log(camera);
// Accessing an array and its properties

console.log(camera.brand);
console.log(camera.price);
console.log(camera.color);
console.log(camera.mfg);
console.log(camera.lens);

// Access not existed property from an array
console.log(camera.megapixel);    // Undefined

// Access the Properties using dot , [] notation
console.log(camera.price);
console.log(camera ['price']);

// Dynamic Properties dot , [] notation
let prop = 'brand';
console.log(camera.prop)    // Undefined  ()
console.log(camera[prop]);

// Nested Object
let student = {
    Name : 'John',
    Age : 30,
    Course : 'MBBS',
    Address : {
        Street : 'Jubilee Hills',
        City : 'Hyderabad',
        State : 'Telangana States'
    }
};

// Access the nested-object
console.log(student);
console.log(student.Name);
console.log(student.Address);
console.log(student.Address.City);

// adding properties to an array
let mobile = {};
mobile.brand = 'Apple',
    mobile.color = 'Golden',
    mobile.price = 200000,
    console.log(mobile);

// Read Operation
console.log(mobile.brand);  // Apple

// Update Operation
console.log(mobile.price);  // 200000
mobile.price = 50000;
mobile.isInsured = true;
console.log(mobile);

// Delete some existing properties form the array
delete mobile.isInsured;
console.log(mobile);