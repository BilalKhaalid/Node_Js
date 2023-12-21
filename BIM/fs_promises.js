// ! Built In Fs/Promise module
const fs = require("node:fs/promises");

// ! Reading files with fs promises asynchronously because promises are always used with async code
// * This is promise based version of reading file
// fs.readFile("./greet.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ! We can also use async and await with fs/promises
const readFile = async () => {
  try {
    const data = await fs.readFile("./greet.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

readFile();
