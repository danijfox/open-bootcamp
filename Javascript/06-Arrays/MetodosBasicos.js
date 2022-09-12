//Arrays
//Como trabajar con ellos
let var1 = 45;
let array = [1, "Hola", true, { id: 5 }, undefined, null, var1];

console.log(array);

//Acceder a los valores de un array a través de su posición. La primera posición es el 0;
// array[indice]
console.log(array[3]);

//Cambiar valores en un array
// .push() --> añade un valor al final
//.unshift() --> añade un valor al incio
// Mutan los valores del array

array.push(false, 5, "holita"); //podemos incluir los valores que queremos, separados por coma
console.log(array);

array.unshift(false, 5, "holita");
console.log(array);

//Eliminar valores en un array
// .pop() --> elimina un valor al final
// .shift() --> elimina valores al principio

array.pop();
console.log(array);

array.shift();
console.log(array);

//Metodo para eliminar, modificar o añadir valores en nuestro array
//Eliminar valores .splice(indice,numeroValores)
array.splice(0, 2);
array.splice(7, 2);
console.log(array);

//Añadir valores
//.splice(indice, 0 , valorAñadir) Con el 0 indicamos que vamos a añadir valores
array.splice(0, 0, true, "holita");
console.log(array);

//Modificar valores
//.splice(indice , 1 , valores)
array.splice(1, 1, "hola"); //Cambiamos "holita" por "hola"
console.log(array);
