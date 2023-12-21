// ! In ES Modules we use import instead of require to import a module in another file
// import add from "./ESModules.mjs";

// console.log(add(15, 2));

// ! When we want to import more than one modules there are couple of ways
// ? This will import everything as math object from the desired module
import * as math from "./ESModules.mjs";

// ! Then we can destructure it or use it directly
// ? Directly
console.log(math.default.multiply(4, 4));
// ? Destructuring
const { add, subtract, multiply } = math.default;
console.log(subtract(15, 5));
