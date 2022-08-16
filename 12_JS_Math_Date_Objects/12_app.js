    /* ------------------------------------------------------------------
                                Math Object Examples
     -------------------------------------------------------------------- */

    // Math PI

    // Math sqrt
        let sqrt = Math.sqrt(144);
        console.log(`sqrt of 144 is : ${sqrt}`);

    // find the 'x' to the power of 'y' value, ex: 2^4
    let pow = Math.pow(2,5);
    console.log(pow);

    // find the min of 4 numbers
        let min = Math.min(2,4,6,10,20);
        console.log(min);

    // find the Max of 4 numbers
        let max = Math.max(10,15,5,20,25,11);
        console.log(max);

    // generate the random numbers from 0 to 100
        let random = Math.random();
        console.log(random);

        /* (If you want to get the number not in the "0.Something" then just multiply the number with some digit
            having number of '0' so, that you will filter some of round number)  */

        let ran = Math.random()*1000;
        console.log(ran);  // some round number.something

        /* (If you want to take only the round-figure number without having any of digit after '.' then just go with { Club
            the whole property of 'random() function under the round() function' and then multiply with some of digit
             having '0' then you will got the result as fully rounded function..} the following function then you'll
             get your desired output...) */

        let roundNumber = Math.round(Math.random() * 1000);
        console.log(roundNumber);

    /* For more details about Math Object, please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    */

    /* ------------------------------------------------------------------
                                Date Object Examples
     -------------------------------------------------------------------- */

    // get today's date
        let date = new Date();
        console.log(date);

    // Get proper date
        let newDate = new Date().toLocaleDateString();
        console.log(newDate);

    // Today's Time (India)
    //    let option = {timezone: 'India/New_Delhi' };
    //    let indiaTime = ontimeupdate(en-HNindia)

    // USA Date
        let option = {timeZone : 'America/New_York' };
        let usaDate = new Date().toLocaleDateString();
        console.log(usaDate);

    // USA Time
       let time = {timeZone: 'America/New_York' };
       let indianTime = new Date().toLocaleTimeString('en-US', option);
       console.log(indianTime);
    // get full day of the week using switch statement

    // Display a Digital Clock on the web page


    /* For More Details about Date() please have a look at
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    */

    /* ------------------------------------------------------------------
                                Number Object Examples
     -------------------------------------------------------------------- */
    console.log('\n\nNumber Object Example Starts from here :- \n\n');
    // To print the number of the following form :-

    // To print Number


    // To print Maximum number (How we access is :- )
    console.log('Example of Maximum number :- ');
    console.log(Number.MAX_SAFE_INTEGER);

    // To print Minimum number (How we access is : )
    console.log('\nExample of minimum number :- ');
    console.log(Number.MIN_SAFE_INTEGER);

    // To Print Maximum Value (How we access is : )
    console.log('\nExample of Maximum value :- ');
    console.log(Number.MAX_VALUE);

    // To Print Minimum Value (How we access is : )
    console.log('\nExample of Minimum Value :- ');
    console.log(Number.MIN_VALUE);

    /* ------------------------------------------------------------------
                                String Object Examples
     -------------------------------------------------------------------- */