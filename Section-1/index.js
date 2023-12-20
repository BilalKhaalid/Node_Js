// console.log("Hello World!");

// ! To import or use a module in another file we use require function
// const add = require("./module");

// const sum = add(15, 15);
// console.log(sum);

// require("./batman");
// require("./superman");

// ! memory caching concept importing the exported instance of class SuperHero
// const SuperHero = require("./super-hero");
// console.log(SuperHero);
// console.log(SuperHero.getName());
// console.log(SuperHero.setName("Bilal Khalid"));
// console.log(SuperHero);

// const SuperHero2 = require("./super-hero");
// // * SuperHero2 will get the same name as we have set it in the previous code this is because node uses memory caching to increase performance and it will not reload the module
// console.log(SuperHero2.getName());

// ! memory caching concept importing the class SuperHero itself
const SuperHero = require("./super-hero");
console.log(SuperHero);

const Bilal = new SuperHero("Bilal");
console.log(Bilal);

const Bilal_Khalid = Bilal.setName("Bilal Khalid");
console.log(Bilal_Khalid);

const newSuperHero = require("./super-hero");
const SuperHero2 = new newSuperHero("John");

console.log(SuperHero2.getName());
