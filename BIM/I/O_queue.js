// ! I/O Queue

const fs = require("node:fs");

// ! The code below tell us that the I/O queue's callbacks are  executed after microtask and timer queue's callbacks
fs.readFile(__filename, () => {
  console.log("File read");
});

// process.nextTick(() => {
//   console.log("Next Tick 1");
// });
// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// ! Experiment
// ? the result of callbacks of I/O and Timer queues are not guaranteed because of the source code of setTimeout which multiplies the input delay with one millisecond
setTimeout(() => {
  console.log("Timeout 2");
}, 0);
