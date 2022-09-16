// Funciones asíncronas no reciben una respuesta inmediata.

function miAsinc(params) {
  // Llamamos a una base de datos externa
  // Puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);

  if (i != 0) {
    // si está todo correcto
    resolve();
  } else {
    // si está todo mal
    console.log("Salió mal");
    reject();
  }
});

miPromesa
  .then(() => console.log("De forma correcta"))
  .catch(() => console.log("ERRORRRR"))
  .finally(() => console.log("Yo ejecuto siempre"));
