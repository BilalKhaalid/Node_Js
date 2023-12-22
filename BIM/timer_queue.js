// ! Timer Queue SetTimeOut/SetInterval Callbacks

// ! This explains that the timer queue runs after the microtask queue is empty
// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// setTimeout(() => {
//   console.log("Timeout 3");
// }, 0);

// ! code how microtask queue works in event loop
// process.nextTick(() => {
//   console.log("Next Tick 1");
// });
// process.nextTick(() => {
//   console.log("Next Tick 2");
//   process.nextTick(() => {
//     console.log("Next Tick inside next tick 2");
//   });
// });
// process.nextTick(() => {
//   console.log("Next Tick 3");
// });

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });
// Promise.resolve().then(() => {
//   console.log("Promise 2");
//   process.nextTick(() => {
//     console.log("Next Tick inside promise 2");
//   });
// });
// Promise.resolve().then(() => {
//   console.log("Promise 3");
// });

// ! Experiment
setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
  process.nextTick(() => {
    console.log("Next Tick inside Timeout 2");
  });
}, 0);
setTimeout(() => {
  console.log("Timeout 3");
}, 0);

// ? The code above explains the concept that after running every callback in timer queue the control check the microtask queue's nextTick & promise queues if there are any callbacks in them to be executed if there are they are executed and the rest of timer queues callbacks are executed later
