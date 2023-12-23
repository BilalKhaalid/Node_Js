// ! Check Queue run after I/O queue and I/O Polling
const fs = require("node:fs");
const { nextTick } = require("node:process");

// ! by this experiment we understand that check queue callbacks are executed after i/o queue and i/o polling
setImmediate(() => {
  console.log("Set Immediate");
});

setTimeout(() => {
  console.log("SetTimeout 1");
}, 0);

fs.readFile(__filename, () => {
  console.log("File read");
});

// ! by this Experiment we understand that microtask queue callbacks are also executed between the check and i/o callbacks
setImmediate(() => {
  console.log("Set Immediate 2");
  setTimeout(() => console.log("inside Immediate"), 0);
});
setImmediate(() => {
  console.log("Set Immediate 3");
  nextTick(() => {
    console.log("Inside immediate next");
  });
});
