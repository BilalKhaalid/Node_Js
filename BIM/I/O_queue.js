// ! I/O Queue

const fs = require("node:fs");

// ! The code below tell us that the I/O queue's callbacks are  executed after microtask and timer queue's callbacks
fs.readFile(__filename, () => {
  console.log("File read");
});

process.nextTick(() => {
  console.log("Next Tick 1");
});
Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

// ! Experiment
// ? the result of callbacks of I/O and Timer queues are not guaranteed because of the source code of setTimeout which multiplies the input delay with one millisecond
setTimeout(() => {
  console.log("Timeout 2");
}, 0);

// ! I/O Polling happens when the control first time enters the I/O queue and asks the operation that if it is completed in our case its readFile if yes then it put its callback in I/O queue and goes to check queue and execute the callback init afterwards it looks all the queues are empty but I/O queue has a callback then that is executed
setImmediate(() => {
  console.log("This is setImmediate");
});
