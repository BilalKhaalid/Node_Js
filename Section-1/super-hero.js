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
module.exports = new SuperHero("Bilal");
