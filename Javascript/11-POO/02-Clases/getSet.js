class Persona {
  //variables
  // con # conviertes las variables en privadas
  // solo se puede acceder desde la clase
  #nombre;
  #edad;
  // las variables protegidas se declaran con _
  // se puede acceder desde la clase y sus descendientes
  _isDeveloper = true;

  // el constructor es el método por defecto que vamos a usar a la hora de crear una clase
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }
  //metodos
  saludo() {
    console.log(`Hola soy ${this.#nombre} y tengo ${this.#edad} años`);
  }
  //getter -> devuelve metodos o variables privados o protegidos
  getNombre() {
    return this.#nombre;
  }
  getEdad() {
    return this.#edad;
  }
  //setter -> permite cambiar un valor a un metodo o variable privada
  setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
  setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
}

const pers = new Persona("Pastora", 38);

console.log(pers.getEdad());

pers.setEdad(39);
console.log(pers.getEdad());
