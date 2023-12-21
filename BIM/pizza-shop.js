// ! Extending from EventEmitters
const EventEmitters = require("node:events");

class PizzaShop extends EventEmitters {
  constructor() {
    super();
    this.orderNumbers = 0;
  }
  order(size, topping) {
    this.orderNumbers++;
    this.emit("order", size, topping);
  }
  displayOrderNumber() {
    console.log(`Received Orders Number: ${this.orderNumbers}`);
  }
}

module.exports = PizzaShop;
