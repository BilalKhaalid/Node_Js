// ! Export Patterns in Node Js
const add = (a, b) => {
  return a + b;
};

// ? This is the common module export
// module.exports = add;

// ? Second Pattern
module.exports = (a, b) => {
  return a + b;
};
