// Sets de objetos
// Los objetos Set son colecciones de valores. Puede iterar a través de los elementos de un conjunto en orden de inserción.
//Un valor en un Set solo puede ocurrir una vez; es único en la colección del Set.

const array = [1, 2, 3, 4, 5];

const miSet = new Set(array);

console.log(array);
console.log(miSet);

//.add() para añadir valores

miSet.add({ id: 5 });

console.log(miSet);

//.delete() para borrar valores
miSet.delete(5);
console.log(miSet);

//.clear() para eliminar todos los valores

//miSet.clear();

//.has() para saber si contiene algo específico
console.log(miSet.has(4));

//.size para saber la cantidad de valores que tiene
console.log(miSet.size);

miSet.forEach((valor) => console.log(valor));

//.values()

console.log(miSet.values());

//pasar a array
const seToArray = [...miSet];
console.log(seToArray);
