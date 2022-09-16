// Funciones tipo flecha
// Hay otra sintaxis muy simple y concisa para crear funciones, que a menudo es mejor que las Expresiones de funciones.
// Tiene que estar inicializada para ser usada

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const array2 = arrayNum.map((valor) => valor * 2);

console.log(array2);

//valorDoble(3) //no funciona

const valorDoble = (valor) => valor * 2;

console.log(valorDoble(3));
const array3 = arrayNum.map(valorDoble);

console.log(array3);
// Funciones anónimas, son funciones sin nombre
