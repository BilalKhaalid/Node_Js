// ! Built In FS Module
const fs = require("node:fs");

console.log("First");

// ! Synchronously reading file content
const file = fs.readFileSync("./file.txt", "utf-8");
// ! To print the actual file content we can do this below or give the character encoding above in readFileSync as a second argument
// console.log(file.toString());
console.log(file);
console.log("Second");

// ! Asynchronously Reading file content
const asFile = fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("Third");

// ! Writing file with fs module
// ! Synchronously
const newFile = fs.writeFileSync("./greet.txt", "Hello Bilal");
const read = fs.readFileSync("./greet.txt", "utf-8");
console.log(read);

// ! Asynchronously
// * To append the content in file and stop it from overriding  the content of the file we give a third argument to writeFile before callback which is an object and in that object set flag
const asyncFile = fs.writeFile(
  "./greet.txt",
  " Khalid",
  {
    flag: "a",
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Written");
    }
  }
);
