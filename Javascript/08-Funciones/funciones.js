//Funciones
//Las funciones son uno de los bloques de construcción fundamentales en JavaScript.
//Una función en JavaScript es similar a un procedimiento —
//un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.
//Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla

const nom = "Dani";
saludar(nom);

function saludar(nombre) {
  console.log(`Hola ${nombre}!`);
  despedir(nombre);
}

//////

function despedir(nombre) {
  console.log(`Adiós ${nombre}!`);
}

///

let persona = { nombre: "Juan", apellido: "González" };

saludarPersona(persona);
console.log(persona);

function saludarPersona(objeto) {
  objeto.apellido = "Villar";
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

///// Devolver valor por defecto

function imprimeNumero(numero = 7) {
  console.log(numero);
}

imprimeNumero();

///// Devuelve los parámetros del factor de propagación
// Parámetros indeterminados

function imprimir(...params) {
  console.log(params);
}

imprimir("hola", "me gusta", "tu madre Joseeee");

function sumaNum(...nums) {
  console.log(nums);
  return nums.reduce((a, b) => a + b);
}

const s = sumaNum(1, 2, 3, 4, 5, 6);
console.log(s);

// Ámbito de una función
// Todo lo que definamos dentro de la llaves de una función
// Lo que pasa en la función se queda en la función

function multiplicar(a = 0, b = 0) {
  return a * b;
}

console.log(multiplicar(4, 9));
