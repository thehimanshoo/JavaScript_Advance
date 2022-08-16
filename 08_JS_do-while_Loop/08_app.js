
// Print the number from 0 - 10 having a difference of 1 using do-while loop

let i = 0;
let result = '';

do{
    if(i < 10){
        result += `${i} , `;
    }else{
        result += `${i}`;
    }
    i++;
}
while(i <= 10);
console.log(result);


// Print the number from 0 - 20 having a difference of 2 using do-while loop

i = 0;
result = '';

do{

    if(i < 20){
        result += `${i} , `;
    }else{
        result += `${i}`;
    }
    i += 2;
}
while(i <= 20);
console.log(result);


// Print the number from 20 - 0 having a difference of 2 using do-while loop

i = 20;
result = '';

do{
    if(i > 0){

        result += `${i} , `;
    }else{
        result += `${i}`;
    }
    i-= 2;
}
while(i >= 0);
console.log(result);