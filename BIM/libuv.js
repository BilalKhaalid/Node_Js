// ! Libuv Thread Pool
// Analogy: Traffic Cop for Asynchronous Tasks

//     Simple Explanation:
//         Imagine you're a traffic cop at a busy intersection. Your job is to manage the flow of traffic efficiently. As cars approach, you signal them to keep moving without waiting for one car to completely pass before allowing the next one.

//     Relating to Node.js:
//         In Node.js, libuv is like this traffic cop. It efficiently manages asynchronous tasks, ensuring that your Node.js application can handle many operations simultaneously without waiting for each one to finish before starting the next.

const fs = require("node:fs");
const crypto = require("node:crypto");

// ! Below we have three function calls Synchronous tasks take certain amount of time first time then twice the time second time and thrice the time third time which can result in other code blocking so we use asynchronous tasks
const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("I am in there");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("I am in hell");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log(`Hash: ${Date.now() - start}`);

// ! when node receives a async task it transfer it to  libuv so the code does not block the execution of other code. libuv uses a thread from its thread pool so the async tasks run concurrently without waiting for on another to complete the execution
const max_count = 1;
for (let i = 0; i < max_count; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash ${i + 1} ${Date.now() - start}`);
  });
}
// ! It does not block the code execution
console.log("I am in last");
