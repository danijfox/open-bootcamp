//Numbers

let a = 1;
let b = 0.1;
let c = 0.3;

console.log(a + b + c); //hay problemas con la preción, el truco está en usar el operador round

//Precision (truco) A parte existen librerías que hacen esto por nosotros
console.log(Math.round((0.1 + 0.2) * 100) / 100);
