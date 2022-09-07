//BIFURCACIONES IF ... ELSE

let saldo = 50;
let efectivo = 20;

// IF ELSE + IF ELSE

let nota = 0;

if (nota === 5) {
  console.log("Estás aprobado");
} else if (nota === 4) {
  console.log("Cateto");
} else if (nota === 3) {
  console.log("Inutil");
} else if (nota === 2) {
  console.log("Pringao");
} else if (nota === 1) {
  console.log("Perdedor");
} else if (nota === 0) {
  console.log("Eres lo peor");
}

//Switch

nota = 8;

switch (nota) {
  case 5:
    console.log("Estás aprobado");
    break;

  case 4:
    console.log("Cateto");
    break;

  case 3:
    console.log("Inutil");
    break;

  case 2:
    console.log("Pringao");
    break;

  case 1:
    console.log("Perdedor");
    break;

  case 0:
    console.log("Eres lo peor");
    break;
  default:
    console.log("Introduce un número correcto");
}
