// ! This file is needed to work with worker_threads
const { parentPort } = require("node:worker_threads");

let j = 0;
for (let i = 0; i < 6000000; i++) {
  j++;
}

parentPort.postMessage(j);
