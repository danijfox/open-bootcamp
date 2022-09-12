//Concatenacion de arrays
//lista1.concat(lista2) = lista3

let array = ["hola", 2, false, null];
let array2 = ["adios", 8, true, undefined];
let array3 = array.concat(array2);
console.log(array3);

//Unir listas con el factor de propagación
console.log(...array3);
let array4 = [...array, ...array2];
console.log(array4);

let array5 = [array, array2]; //No confundir con el factor de propagación, aquí no se concatenan elementos
