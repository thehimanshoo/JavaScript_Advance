/*
    Storage
   ----------

 -> localStorage -> string -> JSON.stringfy() , parse()
    -> setItem('key','value'); // create / update
    -> getItem('key');  // read
    -> delete('key');  // delete
    -> clear();

 -> sessionStorage ->
     -> setItem('key', 'value');  // create / update
     -> getItem('key');  // read
     -> removeItem('key');  // delete
     -> clear();

 */

// Local Storage for Simple String
let empName = 'john';

// Set the data
localStorage.setItem('name', empName);

// get the data
console.log(localStorage.getItem('name'));

// Delete the key
// localStorage.removeItem('name');

// To clear the data
// localStorage.clear();

// Local Storage with an array
let colors = [{id : 1, name : 'White'},
              {id : 2, name : 'Black'},
              {id : 3, name : 'Green'},
              {id : 4, name : 'Orange'},
              {id : 5, name : 'Yellow'}];

localStorage.setItem('colors',JSON.stringify(colors));

let theColors = JSON.parse(localStorage.getItem('colors'));
console.log(theColors);

// If you want to delete the colors item then, you just need to perform this attribute
localStorage.removeItem('colors');

// Session Storage with simple String
let studentName = 'Rajan';

// Set
sessionStorage.setItem('name',studentName);

// get
console.log(sessionStorage.getItem('name'));

// To remove the data of any individual use this
sessionStorage.removeItem('name');

// Otherwise, if you want to delete all the data then, use this
sessionStorage.clear();

// Session Storage with an array
    colors = [{id : 1, name : 'White'},
    {id : 2, name : 'Black'},
    {id : 3, name : 'Green'},
    {id : 4, name : 'Orange'},
    {id : 5, name : 'Yellow'}];

sessionStorage.setItem('colors',JSON.stringify(colors));

theColors = JSON.parse(sessionStorage.getItem('colors'));
console.log(theColors);

// if you want to remove data of sessionStorage then use
sessionStorage.removeItem('colors');