const listaCompra = [
  "ajo",
  "cebollas",
  "pan",
  "tomates",
  "pollo",
  "lentejas",
  "mantequilla",
];
listaCompra.push("Aceite de Girasol");

console.log(listaCompra);

listaCompra.pop();

console.log(listaCompra);

const pelisFavoritas = [
  { titulo: "Amanece que no es poco", director: "Jose Luis", fecha: 1986 },
  { titulo: "Jumannji", director: "Jose Antonio", fecha: 2000 },
  { titulo: "Spiderman", director: "Marta Jari", fecha: 2018 },
];

const pelis2010 = pelisFavoritas.filter((peli) => peli.fecha > 2010);
console.log(pelis2010);

const tituloPelis = pelisFavoritas.map((peli) => peli.titulo);
console.log(tituloPelis);

var directorPelis = pelisFavoritas.map((peli) => peli.director);
console.log(directorPelis);

var directorTitulo = tituloPelis.concat(directorPelis);
console.log(directorTitulo);

var propaga = [...directorTitulo, ...tituloPelis];
console.log(propaga);
