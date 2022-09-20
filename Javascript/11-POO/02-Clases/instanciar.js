// Clases

class Persona {
  //variables
  nombre;
  edad;
  isDeveloper;
  // el constructor es el método por defecto que vamos a usar a la hora de crear una clase
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  //metodos
  saludo() {
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
  }
}

const nuevaPersona = new Persona("Antonio", 44, false);
console.log(nuevaPersona);
nuevaPersona.saludo();

const otraPersona = new Persona("Dani", 40, false);
otraPersona.saludo();
