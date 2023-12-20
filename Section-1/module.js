// ! This is a module
const add = (number, number2) => {
  return number + number2;
};

// ! to export a module in node we rely on commonJs
module.exports = add;
