// Formas de importar y exportar módulos
// 1. CommonJS - require
// 2. Import ES6 - import

//const moduloMatematicas = require("./modulos/matematicas.js");

//Forma nueva de hacerlo
const { factorial, suma } = require("./modulos/matematicas");

const fact = factorial(5);
console.log(fact);
