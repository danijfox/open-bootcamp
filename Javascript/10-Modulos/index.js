//Modulos, porción de código que se puede reutilizar en distintas partes

function suma(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}
function eleva(a, b) {
  return a ** b;
}
function factorial(a) {
  let factorial = 1;
  for (let index = 2; index <= array.length; index++) {
    factorial *= index;
  }
  return factorial;
}

const fact = factorial(5);
console.log(fact);
