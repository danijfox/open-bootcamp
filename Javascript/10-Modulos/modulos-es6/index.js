import { suma, pi } from "./modulos/matematicas.js";
import getAuthor, { libro } from "./modulos/literatura.js";
//import * as operaciones from "./modulos/matematicas.js";
//const sum = operaciones.suma(4, 3);
//console.log(sum);

const sum = suma(4, 3);
console.log(sum);

console.log(pi);

const autor = getAuthor();
console.log(autor);
console.log(libro);
