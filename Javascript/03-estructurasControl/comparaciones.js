// Comparaciones; Se utiliza == (igualdad debil, solo chequea el valor) === (igualdad fuerte, compara el valor y el tipo)

a = 5;
b = "5";

if (a == b) {
  console.log("es practicamente lo mismo");
}
if (a === b) {
  console.log("es exactamente igual");
}

// Desigualdad; !=
if (a != b) {
  console.log("no es lo mismo");
}
if (a !== b) {
  console.log("no es lo mismo");
}

// Mayor y menor que

let max = 10;
let min = 5;

if (max > min) {
  console.log("max es mayor");
}
if (min < max) {
  console.log("min es menor");
}
if (min <= max) {
  console.log("es menor o igual");
}
if (max >= min) {
  console.log("es mayor o igual");
}
