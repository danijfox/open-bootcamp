const logger = require("./logger");

//gestión de errores

const dobla = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  } else {
    //return false
    throw new Error("El valor debe ser de tipo número");
  }
};

const elDoble = dobla(3);

/// Cuando tenemos un código en un punto donde puede fallar, se usa try catch para envolver el codigo

const numero = "cuatrp";
try {
  // codigo que puede fallar
  const doble = dobla(numero);
  console.log("Correcto" + doble);
} catch (e) {
  console.log("error");
  console.error(e);
  // si falla ejecuta lo que hay aquí
} finally {
  // si ocurre algún error o no
}

//Errores comunes:
// Internal error
// Syntax error
// Range error
// Reference error
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
