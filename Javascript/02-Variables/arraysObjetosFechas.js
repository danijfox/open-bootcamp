//Listas ==> arrays o arreglos o vectores. Conjunto de variables

const lista = [1, "string", null, true];
lista;

const lista2 = new Array(); //lista vacía
lista2;

const lista3 = new Array(1, "String", null, true);
lista3;

console.log(lista[0]);

const lista4 = [lista, lista2, lista3]; // Array de arrays

//Objetos ==> Representaciones en datos de objetos de la vida real. Se pueden introducir datos, arrays y otros objetos

const movil = {
  altura: 250,
  anchura: 50,
  fabricante: "Apple",
  isCool: true,
  contactos: ["Antonio", "Marta", "Jacinta"],
  tarjeta: {
    marca: "Sandisk",
    almacenamiento: "23GB",
  },
  "altura-tarjeta": 40, //Se pueden definir parametros entre comillas
};

console.log(movil.tarjeta.marca);

movil.entrada = "Lightin"; //se pueden introducir nuevos parámetros

console.log(movil.entrada);

//Fechas
// Libreira => moment.js

const momento = new Date(); //Fecha exacta del momento de creacion de la variable
console.log(momento);

const fechaMili = new Date(100);
console.log(fechaMili);

const fechaString = new Date("july 16 1982");
console.log(fechaString);

const fechaValores = new Date(2050, 6, 16);
console.log(fechaValores);

const dia = momento.getDate();
const mes = momento.getMonth();
const anio = momento.getFullYear();

console.log(dia, mes + 1, anio);
