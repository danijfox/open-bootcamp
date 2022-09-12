//Ordenar sort()

let array = [2, 6, 9, 18, 23, 1];
console.log(array);

array.sort((a, b) => {
  //de menor a mayor
  if (a < b) {
    return -1;
  } else if (a > b) {
    return +1;
  } else {
    return 0;
  }
});
console.log(array);

//Ordenar unicamente arrays numericos
// De mayor a menor
let arrayNum = [2, 6, 9, 18, 23, 1];
arrayNum.sort((a, b) => b - a);
console.log(arrayNum);

//////// Array de objetos

let arrayObjetos = [
  { nombre: "Dani", edad: 40, colorOjos: "Verde" },
  { nombre: "Jose Luis", edad: 23, colorOjos: "Azul" },
  { nombre: "Hugo", edad: 8, colorOjos: "Marrón" },
];

arrayObjetos.sort((objA, objB) => objA.edad - objB.edad);
console.log(arrayObjetos);
