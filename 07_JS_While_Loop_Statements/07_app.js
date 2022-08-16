
// Initialization
/*
    while(condition){
    Statements
    Increment / Decrement  (Always Last line)
}

 */


// Print the value from 0 - 10 having difference of 1 using while loop

let i = 0;
let str = '';

while(i<=10){

    if(i<10){
        str += `${i} , `;
    }else{
        str += `${i}`;
    };
    i++;
};
console.log(str);


// Print the value from 20 - 0 having difference of 2 using while loop

i = 20;
str = '';

while(i >= 0){

    if(i > 0){

        str += `${i} , `;
    }
    else{

        str += `${i}`;
    }
    i-= 2;
};
console.log(str);


/*  Print  *
           * *
           * * *
           * * * *
           * * * * *

 */

     i = 1;
 let result = '';
     number = 8;

 while(i <= number){

    let j = 1;
    while(j <= i){

        result += `* `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);


/*  Print  1
           1 2
           1 2 3
           1 2 3 4
           1 2 3 4 5
           1 2 3 4 5 6

*/

i = 1;
number = 8;
result = '';

while(i <= number){

    let j = 1;
    while(j <= i){

        result += `${j} `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);


/*  Print 1
           2 2
           3 3 3
           4 4 4 4
           5 5 5 5 5
           6 6 6 6 6 6

 */

i = 1;
number = 8;
result = '';

while(i <= number){

    let j = 1;
    while(j <= i){

        result += `${i} `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);


/*  Print   6 6 6 6 6 6
             5 5 5 5 5
             4 4 4 4
             3 3 3
             2 2
             1

 */

i = 8;
result = '';

while(i > 0){

    let j = i;
    while(j > 0){

        result += `${i} `;
        j--;
    }
    result += `\n`;
    i--;
}
console.log(result);