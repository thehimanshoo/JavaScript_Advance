
let result = '';
for(let i=1; i<=10; i++){

    if(i < 10){
        result += `${i} , `;
    }else{
        result += `${i}`;
    }
};
console.log(result);

// Print a value from 20 - 0 with a difference of 2

let res = '';
for(let i=20; i>=0; i-= 2){

    if(i > 0 ){
        res += `${i} , `;
    }else{
        res += `${i}`;
    };
};
console.log(res);

/*  Print
            *
            * *
            * * *
            * * * *
            * * * * *
            * * * * * *

            */

let space = `\n`;
console.log(space);

let number = 10;
let str = '';
for(let i=1; i<=number; i++){

    for(let j=1; j<=i; j++){

        str += `* `;
    }

    str += `\n`;
};
console.log(str);


/*  Print   * * * * * *
            * * * * *
            * * * *
            * * *
            * *
            *

*/


number = 10;
str = '';
for(let i=number; i>0; i--){

    for(let j=i; j>0; j--){

        str += `* `;
    }
    str += `\n`;
};
console.log(str);


/* Print  1
          2 2
          3 3 3
          4 4 4 4
          5 5 5 5 5
          6 6 6 6 6 6

*/

number = 9;
str = '';
for(let i=1; i<=number; i++){

    for(let j=1; j<=i; j++){
        str += `${i} `;
    }
    str += `\n`;
}
console.log(str);


/*  Print   6 6 6 6 6 6
            5 5 5 5 5
            4 4 4 4
            3 3 3
            2 2
            1

*/

number = 9;
str = '';
for(let i=number; i>0; i--){

    for(let j=i; j>0; j--){

        str += `${i} `;
    }
    str += `\n`;
};
console.log(str);


/* Print   1
           1 2
           1 2 3
           1 2 3 4
           1 2 3 4 5
           1 2 3 4 5 6

*/

number = 10;
str = '';
for(let i=1; i<=number; i++){

    for(let j=1; j<=i; j++){

        str += `${j} `;
    }
    str += `\n`;
};
console.log(str);


/* Print   1 2 3 4 5 6
           1 2 3 4 5
           1 2 3 4
           1 2 3
           1 2
           1

 */

number = 10;
str = '';

for(let i=number; i>0; i--){

    for(let j=1; j<=i; j++){

        str += `${j} `;
    }
    str += `\n`;
}
console.log(str);


/* Print   5 5 5 5 5
           4 4 4 4
           3 3 3
           2 2
           1

*/

number = 9;
str = '';

for(let i=number; i>0; i--){

    for(let j=i; j>0; j--){

        str += `${i} `;
    };
    str += `\n`;
};
console.log(str);