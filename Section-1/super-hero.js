// ! Memory Caching in Node JS

class SuperHero {
  constructor(name) {
    return (this.name = name);
  }
  getName() {
    return this.name;
  }
  setName(name) {
    return (this.name = name);
  }
}

// ! Exporting an instance of the class
// module.exports = new SuperHero("Bilal");

// ! Exporting the class itself so the node will not cache it in memory
module.exports = SuperHero;
