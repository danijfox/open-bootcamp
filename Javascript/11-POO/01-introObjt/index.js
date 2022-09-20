const persona = {
  nombre: "Daniel",
  edad: 40,
  isDev: false,
  saludo: () => {
    console.log("hola");
  },
};

console.log(persona);
persona.saludo();

const otra_persona = {
  nombre: "Luis",
  edad: 29,
  isDev: true,
  saludo: () => {
    console.log("hola");
  },
};

const creaPersona = (nombre, edad, isDev) => {
  return {
    nombre,
    edad,
    isDev,
  };
};

const Maria = creaPersona("María", 36, true);
console.log(Maria);
