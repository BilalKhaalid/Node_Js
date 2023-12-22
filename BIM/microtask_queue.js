// ! MicroTask queue is in event loop and it consists of 2 subsections nextTick and promise queues

// ! Synchronous code will always have a priority in call stack. After the call stack is empty then the control will go in the event loop
// console.log("Sync code 1");
// process.nextTick(() => {
//   console.log("This is nextTick");
// });
// console.log("Sync code 2");

// ! Experiment how the microtask queue works in event loop
process.nextTick(() => {
  console.log("Next Tick 1");
});
process.nextTick(() => {
  console.log("Next Tick 2");
  process.nextTick(() => {
    console.log("Next Tick inside next tick 2");
  });
});
process.nextTick(() => {
  console.log("Next Tick 3");
});

Promise.resolve().then(() => {
  console.log("Promise 1");
});
Promise.resolve().then(() => {
  console.log("Promise 2");
  process.nextTick(() => {
    console.log("Next Tick inside promise 2");
  });
});
Promise.resolve().then(() => {
  console.log("Promise 3");
});
// ! the code above explains how the microtask queue's nextTick & promise queue works
