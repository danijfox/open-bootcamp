//Modulos, porción de código que se puede reutilizar en distintas partes

export function suma(a, b) {
  return a + b;
}
export function multi(a, b) {
  return a * b;
}
export function eleva(a, b) {
  return a ** b;
}
export function factorial(a) {
  let factorial = 1;
  for (let index = 2; index <= a; index++) {
    factorial *= index;
  }
  return factorial;
}
