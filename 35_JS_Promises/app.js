// JS Promises Concept with Callbacks
let doTask = (success, failure) => {
    let isDone = true;      // Can be TRUE or FALSE to see the Change in value
    if (isDone){
        success('The Task is Done');
    }
    else{
        failure('The Task is NOT Done');
    }
};

// Calling function having two function as parameter
    doTask((message) => {
        console.log(message);
    } , (message) => {
        console.error(message);
    });


    // Actual Promise Creation
let cleanCamera = new Promise((resolve, reject) => {
    // Cleaning Camera
    let isDone = false;
    if (isDone){
        resolve('Cleaning is Done');
    }
    else{
        reject('Cleaning is NOT Done');
    }

});

// Process of new Created Promise
    cleanCamera.then((message) => {
        console.log(message);
    }).catch((err) => {
        console.error(err);
    });  // (.then()) means resolve  &  (.catch()) is nothing but reject


// Dependent Promises in javaScript

let buildProject = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
        if(isDone){
            resolve('Build Project is Finished');
        }
        else{
            reject('Build Project is NOT Finished');
        }
    }, 1000);
});

let attendTechnicalRound = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
        if (isDone){
            resolve('Technical Round is Finished');
        }
        else{
            reject('Technical Round is NOT Finished');
        }
    }, 3000);
});

let attendManagerRound = new Promise((resolve, reject) => {
   setTimeout(() => {
       let isDone = true;
       if (isDone){
           resolve('Manager Round is Finished');
       }
       else{
           reject('Manager Round is NOT Finished');
       }
   }, 5000);
});

let attendHRRound = new Promise((resolve, reject) => {
   setTimeout(() => {
       let isDone = true;
       if (isDone){
           resolve('HR Round is Finished , got JOB');
       }
       else{
           reject('HR Round is NOT Finished');
       }
   }, 7000);
});

    buildProject.then((message) => {
        let result = `${message} -> `;
        let CurrentTime = Date = new Date().toLocaleTimeString();
        console.log(message);
        console.log(CurrentTime);

        attendTechnicalRound.then((message) => {
            result += `${message} -> `;
            console.log(message);
            console.log(CurrentTime);

            attendManagerRound.then((message) => {
                result += `${message} -> `;
                console.log(message);
                console.log(CurrentTime);

                attendHRRound.then((message) => {
                    result += `${message} `;
                    console.log(message);
                    console.log(CurrentTime);

                    // console.log(result);
                }).catch((err) => {
                    console.error(err);
                    console.log(date);
                });
            }).catch((err) => {
                console.error(err);
                console.log(date);
            });
        }).catch((err) => {
            console.error(err);
            console.log(date);
        });
    }).catch((err) =>  {
        console.error(err);
    });