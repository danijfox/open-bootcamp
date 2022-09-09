//Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

//Suma (+)
console.log(a + b);

//Resta (-)
console.log(a - b);

//Multiplicación (*)
console.log(a * b);

//División
console.log(a / b);

//Representación de los números en cadenas de texto
console.log(typeof a);

let a_s = a.toString();
console.log(typeof a_s);

//Redondeo de números decimales

let c = 3.3;
let d = c * 3;
let e = 287983794874597;
let f = 2304958.0324958;

console.log(d);
// .toFixed(x) limita el número de decimales

console.log(d.toFixed(2)); //El parámetro indica el número de decimales que queremos. Hay que tener cuidado porque lo devuelve en string
console.log(e.toFixed(2)); //Aunque no tenga decimales podemos pedir que los incluya

// .toPrecision(x) Limita el número de cifras significativas
console.log(f.toPrecision(6)); //También devuelve un string. Importante tenerlo en cuenta.
