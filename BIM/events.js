// ! Built In Events Module
const eventEmitter = require("node:events");

const emitter = new eventEmitter();
console.log(emitter);

emitter.on("order-pizza", (size, topping) => {
  console.log(`Baking the ${size} ordered pizza with ${topping} topping`);
});

// ! We can have as many events as we want
emitter.on("order-pizza", (size) => {
  if (size === "medium" || size === "large") {
    console.log(`With ${size} pizza drinks are on us :)!`);
  }
});

// ! We can have arguments which will be automatically passed to the event handler
emitter.emit("order-pizza", "large", "cream");
