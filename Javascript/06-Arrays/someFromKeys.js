//El método some() comprueba si un elemento del array cumple con una condición, y nos devuelve un booleano.
//Esto implica que esta función la utilizaremos cuando trabajemos con arrays de cualquier tipo, sean arrays de strings, array de objetos, etc.

let array = [1, 3, 4, 5, 6];

const res = array.some((valor) => valor > 0);
console.log(res);

const existe = array.some((valor) => valor !== 3);

let arrayObjetos = [
  { nombre: "Dani", edad: 40, colorOjos: "Verde" },
  { nombre: "Jose Luis", edad: 23, colorOjos: "Azul" },
  { nombre: "Hugo", edad: 8, colorOjos: "Marrón" },
];

let existeDani = arrayObjetos.some((persona) => persona.nombre === "Dani");
console.log(existeDani);

//Obtener una lista a partir de un objeto iterable
let str = "Hola soy Dani";

let from = Array.from(str);
console.log(from);

const set = new Set([1, 2, 3, 4]);
const array2 = Array.from(set);
console.log(array2);

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);
