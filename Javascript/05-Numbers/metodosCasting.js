//Metodos de numbers
let a = 2;
let b = new Number(3);
console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());
console.log(+b);

// NaN - Infinity (Not a Number) Intentando utilizar un metodo o lo que sea con algo que no es un número
let n = Number("adios");
console.log(n);

let numerador = 20;
let divisor = 0;

console.log(numerador / divisor); //infinity. al dividir entre 0 o entre null.

//Como convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = "5.89";
let numero2 = 17.2;

console.log(numero + numero2); //concatena
console.log(Number(numero) + Number(numero2));
console.log(+numero + numero2);
console.log(numero2 + +numero);

console.log(parseInt(numero)); //Lo transforma en número entero, es decir, sin coma
console.log(parseFloat(numero));

//Número hexadecimales (base 16) se utilizan en relación a la memoria del ordenador que trabaja en este sentido
let numEx = "0x3a5b";
console.log(parseInt(numEx, 16));

//Obtener los valores máximos y mínimos en Javascript
let minPrecision = Number.EPSILON;
let minValue = Number.MIN_VALUE;
let maxValue = Number.MAX_VALUE;

console.log(minPrecision);
console.log(minValue);
console.log(maxValue);
