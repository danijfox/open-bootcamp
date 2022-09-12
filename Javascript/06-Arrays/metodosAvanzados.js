// Trabajar con métodos más avanzados
// .map() te permite iterar sobre un array y modificar sus elementos utilizando una función callback

let ciudades = ["Madrid", "Barcelona", "Bilbao", "Valencia"];

const ciudadesIndex = ciudades.map(
  (ciudad, indice) => `${indice + 1} - ${ciudad}`
);
console.log(ciudadesIndex);

// .filter() Consiste en filtrar uno o más elementos (un subconjunto) de una colección más grande de elementos (un superconjunto) basándose en alguna condición/preferencia.

let arrayObjetos = [
  { nombre: "Dani", edad: 40, colorOjos: "Verde" },
  { nombre: "Jose Luis", edad: 23, colorOjos: "Azul" },
  { nombre: "Hugo", edad: 8, colorOjos: "Marrón" },
];

const personasMayores = arrayObjetos.filter((persona) => persona.edad > 20);
console.log(personasMayores);

// .reduce() El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
// reduce(funcionCallback(valorAnterior, valorActual, indice, arrayOriginal))
let valores = [3, 5, 5, 7];
let suma = valores.reduce((acumulado, actual, indice, arrayOriginal) => {
  return 10; //acumulado
});
