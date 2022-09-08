// Casos específicos para break y continue (Poco recomendable)

let listado = [1, 2, 3, 4, 5, 6, 7, 8];

for (let index = 0; index < listado.length; index++) {
  if (listado[index] === 3) {
    continue;
  }

  console.log(listado[index]);
  if (listado[index] > 5) {
    break;
  }
}

//Cuál es el ámbito de un bucle (Alcance que tienen las variables dentro de un bucle)
//let y const solo existen dentro de un bucle, var existe en todo el proyecto

console.log(i);
