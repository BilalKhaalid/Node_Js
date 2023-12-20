// ! Export Patterns in Node Js
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

// ? This is the common module export
// module.exports = add;

// ? Second Pattern
// module.exports = (a, b) => {
//   return a + b;
// };

// ? Third Pattern When we want to export more than one modules
module.exports = {
  add,
  subtract,
};
