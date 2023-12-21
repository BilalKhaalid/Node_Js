// ! Exporting modules using ES Modules
// * ES Modules came in ES2015(ES6) and in node v14 it came official in node

// const add = (a, b) => {
//   return a + b;
// };

// const subtract = (a, b) => {
//   return a - b;
// };

// function multiply(a, b) {
//   return a * b;
// }

// ! First Pattern export default
// export default add;

// ! When we want to export more than one module we use second pattern
// export default {
//   add,
//   subtract,
//   multiply,
// };

// ! When we want to make a named export. Note that when importing it should be importing using same name as exported
export function multiply(a, b) {
  return a * b;
}
