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
  obtenNombre() {
    return this.#nombre;
  }
  #obtenEdad() {
    return this.#edad;
  }
}

const pers = new Persona("Gorka", 70);
pers.saludo();
console.log(pers.obtenNombre());
