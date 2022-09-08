//labels ==> sirve para controlar bucles dentro de bucles

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log(`El número actual es ${decenas}${unidades}`);
    unidades++;
    if (decenas == 2) {
      break bucleDecenas;
    }
    if (unidades === 10) {
      unidades = 0;
      break bucleUnidades;
    }
  }
  decenas++;
}
console.log("Ya hemos terminado");
