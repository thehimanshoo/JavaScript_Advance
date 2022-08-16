/*
        Callback function :
    => A function which can take another function as parameter is called Callback Function

 */

/*
let sum = (a , b) => {
  return a + b;
};
let mul = (a , b) => {
  return a * b;
};

let calculate = (a , b , callback) => {
  let result = '';
  return callback(a , b);
};

let output = calculate(20 , 90 , sum);
console.log(output);

    output = calculate(30 , 50 , mul);
    console.log(output);

//     output = calculate(10, 20, Callback(a , b) => {
//         return a - b;
// });
//     console.log(output);

 */

let employees = [{id : 1, name : 'John', age : 35},
                 {id : 2, name : 'Rajan', age : 25}];

let createEmployee = (employee, callback) => {
    setTimeout(() => {
        employees.push(employee);
        callback();
    }, 2000);
};

let getEmployees = () => {
    setTimeout(() => {
        let employeeRows = '';
        employees.forEach((employee) => {
            employeeRows += `<tr> 
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.age}</td>
                             </tr>`
        });
        document.querySelector('#table-body').innerHTML = employeeRows;

    }, 1000)
};
createEmployee({id : 3, name : 'Wilson', age : 45}, getEmployees);