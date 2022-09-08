let string = "Hola soy un texto";

//Longitud cadena de texto
console.log(string.length);

//Obtener partes de cadenas de caracteres
//slice()
//substring()
//substr() - obsoleto

console.log(string.slice(5, 8));
console.log(string.substring(5, 8));
console.log(string.substr(5, 3));

//Reemplazar parte del contenido de una cadena de texto

let cadena = "Mi nombre es Dani";
console.log(cadena.replace("Dani", "Jose Luis")); //Al utilizar strings solo remplaza la primera instancia

let chiquitoIpsum =
  "Mamaar pupita pupita hasta luego Lucas ahorarr está la cosa muy malar. Te voy a borrar el cerito pecador llevame al sircoo benemeritaar. Benemeritaar diodeno te voy a borrar el cerito qué dise usteer la caidita. Diodenoo diodenoo por la gloria de mi madre torpedo papaar papaar. ";
console.log(chiquitoIpsum.replace(/papaar/g, "Mamaar"));
