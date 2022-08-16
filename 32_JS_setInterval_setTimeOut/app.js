// Set Interval

let count = 0;
let interval = 0;
let greet = () => {
  count++;
  console.log(`Hey a very good morning to you : ${count}`);
  console.log(new Date().toLocaleTimeString(1000));

};
interval = setInterval(greet, 1000);

// Example of Set TimeOut (it is used to stop the iteration after certain number of time)
// console.log(new Date().toLocaleTimeString(1000));
// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);
