// ! Extending from EventEmitters
class PizzaShop {
  constructor(params) {
    this.orderNumbers = 0;
  }
  order() {
    console.log(`Order Received! Baking the pizza `);
  }
  displayOrderNumber() {
    console.log(`Received Orders Number: ${this.orderNumbers}`);
  }
}

module.exports = PizzaShop;
