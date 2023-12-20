console.log("Hello World!");

// ! To import or use a module in another file we use require function
const add = require("./module");

const sum = add(15, 15);
console.log(sum);
