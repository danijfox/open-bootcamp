//Expresiones Regulares ==> https://regexr.com/

let text =
  "Mamaar pupita pupita hasta luego Lucas ahorarr está la cosa muy malar. Te voy a borrar el cerito pecador llevame al sircoo benemeritaar. Benemeritaar diodeno te voy a borrar el cerito qué dise usteer la caidita. Diodenoo diodenoo por la gloria de mi madre torpedo papaar papaar. ";
console.log(text.match(/papaar/g)); //muestra el número de veces que aparece la palabra

//Saber si la cadena contiene una palabra

console.log(text.includes("cerito"));
console.log(text.includes("duodeno"));

//Saber si un texto empieza con una palabra

console.log(text.startsWith("Mamaar"));
console.log(text.endsWith(""));
