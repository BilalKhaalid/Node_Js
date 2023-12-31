// ! Export Patterns in Node Js
// const add = (a, b) => {
//   return a + b;
// };

// const subtract = (a, b) => {
//   return a - b;
// };

// ? This is the common module export
// module.exports = add;

// ? Second Pattern
// module.exports = (a, b) => {
//   return a + b;
// };

// ? Third Pattern When we want to export more than one modules
// module.exports = {
//   add,
//   subtract,
// };

// ? Fourth Pattern
// module.exports.add = (a, b) => {
//   return a + b;
// };

// module.exports.subtract = (a, b) => {
//   return a - b;
// };

// ? Fifth Pattern
// * This method is not recommended
exports.add = (a, b) => {
  return a + b;
};

exports.subtract = (a, b) => {
  return a - b;
};
