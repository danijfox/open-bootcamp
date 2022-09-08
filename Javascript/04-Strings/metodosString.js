//Convertir en mayúsculas o minúsculas

let mayus = "MAYÚSCULAS";
let minus = "minúsculas";

console.log(mayus.toLowerCase());
console.log(minus.toUpperCase());
console.log(mayus.toLocaleLowerCase()); //Para idiomas como el turko

//Concatenar dos cadenas de caracteres

let str1 = "Hola soy la primera cadena.";
let str2 = "Yo soy la segunda cadena.";

console.log(str1.concat(" ", str2));
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}`);

//Eliminar espacios al inicio y al final

let str3 = "  Hola soy un string con espacios  ";
console.log(str3.length);
console.log(str3.trim().length);
console.log(str3.trimStart()); //solo para quitar los espacios del principio
console.log(str3.trimEnd()); //solo para quitar los espacios del final

//Obtener el caracter que hay en cierta posición

let str4 = "Hola busco un caracter en una posición. Hola";
console.log(str4.charAt(7));
console.log(str4[5]); //tratar el string como un array

//Obtener una palabra dentro de una cadena de caracteres
console.log(str4.indexOf("busco")); //si  no lo encuentra devuelve un -1
console.log(str4.lastIndexOf("Hola"));
