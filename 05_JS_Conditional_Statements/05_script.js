// If Else condition Example
let time = 24;
let wishMessage = '';
if(time >=0 && time <= 12){
    wishMessage = 'Good Morning';
}else if(time >12 && time <= 17){
    wishMessage = 'Good Afternoon';
}else if(time >17 && time <= 24){
    wishMessage = 'Good Evening';
}else{
    wishMessage = 'Enter a Proper time';
}
console.log(wishMessage);


// Switch Case Example :-
let day = new Date().getDay();
let today = '';
day = 0;
switch (day){
    case 0:
        today = 'Sunday';
        break;
        
    case 1:
        today = 'Monday';
        break;
        
    case 2:
        today = 'Tuesday';
        break;
        
    case 3:
        today = 'Wednesday';
        break;
        
    case 4:
        today = 'Thursday';
        break;
        
    case 5:
        today = 'Friday';
        break;
        
    case 6:
        today = 'Saturday';
        break;
        
    default:
        today = 'Enter a Proper day';
        break;
}
console.log(`Today is : ${today}`);

// For loop Example to display from 1 - 10 values
    let result = '';
    for(let i=0; i<=10; i++){
        
        if(i<=9){
            result += `${i} , `;
        }else{
            result += `${i}`;
        }
    }
    console.log(result);
    
    
 // Print the Value from 20 - 0 by difference 2...

    let res = '';
    for(let i=20; i >= 0; i -= 2){
        
        if(i > 0){
            res += `${i} , `;
        }else{
            res += `${i}`;
        }
    }
    console.log(res);
    
/* Write a program of nested-for loop for printing the star pattern... like  
                                                                                *
                                                                                * *
                                                                                * * *
                                                                                * * * * 
                                                                                * * * * *
                                                                                * * * * * *
                                                                                
                                                                                */

    let number = 6;
    let star = '';
    for(let i=6 ; i>0; i--){
        
        for(let j=1; j<=i; j++){
            star += `${j} `;
        }
        star += `\n`;
    }console.log(star);
    
// While loop Example to display from 1 - 10 values


// Do while loop Example to display from 1 - 10 values


// Switch Statement Example
