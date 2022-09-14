const datosPersonales = {
  nombre: "Daniel",
  apellidos: "Paíno Serrano",
  edad: 40,
  altura: 173,
  isDev: false,
};

const edad = datosPersonales.edad;
console.log(edad);

const listaDatos = [
  {
    nombre: "Daniel",
    apellidos: "Paino Serrano",
    edad: 40,
    altura: 133,
    isDev: false,
  },
  {
    nombre: "Jose",
    apellidos: "Martinez Almeida",
    edad: 42,
    altura: 193,
    isDev: false,
  },
  {
    nombre: "Ana",
    apellidos: "Pérez Semper",
    edad: 44,
    altura: 160,
    isDev: false,
  },
];

const listaOrdenada = listaDatos.sort((a, b) => b.edad - a.edad);

console.log(listaOrdenada);
