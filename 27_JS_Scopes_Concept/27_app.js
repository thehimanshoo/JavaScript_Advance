// Scopes Concept

let a = 10;
console.log(a);

{
    let b = 20;
    console.log(a);   // It will print the value because it's a global variable declaration
    console.log(b);   //  It will print the local value of the variable which has been declared under the statements black
}

// console.log(b);  // Here it will give an error message because the variable which has been declared locally here
                 // we are calling that variable globally that's why it will give an error message.


// let's understand with another examples :-

        let c = 3;

            { // let c = 40;
                { // let c = 50;
                    { // let c = 60;
                        { // let c = 70;
                            { // let c = 80;
                                 { // let c = 90;
                                    {
                                        // let c = 100;
                                        console.log(c);
                                    }
                                }
                            }
                        }
                    }
                }
            }


            // * Note:- As you keep commenting the variable the priority goes to their parents' element
            //    =>    and when all local variable of local be commented then the priority will go to the global element