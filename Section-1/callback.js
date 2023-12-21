// ! Callbacks in Node JS

// ! Higher Order Function is a function that accepts a callback function as an argument or returns or calls a function inside it

// ! This is the example of Higher Order Function In JS
function callback(name) {
  return console.log(`Hello ${name}`);
}

function HOF(callbackFn) {
  let name = "Bilal";
  callbackFn(name);
}

HOF(callback);

// ? Why we need callback function?
// * Callback functions are needed when we want to delay or resume the execution of code based on a certain event or operation

// ! There are two main types of callback Function Synchronous and Asynchronous

// * Examples of synchronous are sort,filter,map in JS
let numbers = [1, 2, 3, 4, 5];
// ! Map accepts a callback to perform operation on numbers array
numbers.map((num) => {
  console.log(num);
});

// * Examples of asynchronous callbacks include document.addEventListener("click", callback)
// ! addEventListener only calls the callback when a certain event or operation is performed in our case it is click event
