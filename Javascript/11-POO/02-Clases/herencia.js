// Herencia - Inheritance
// Polimorfismo

class Persona {
  //variables
  _nombre;
  _edad;
  // el constructor es el método por defecto que vamos a usar a la hora de crear una clase
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }
  //metodos
  saludo() {
    console.log(`Hola soy ${this._nombre} y tengo ${this._edad} años`);
  }
}

class Desarrollador extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad); //accede a variables y métodos del padre
    this.lenguaje = lenguaje;
  }
  saludo() {
    //Override (Polimorfismo)
    super.saludo();
    console.log(`y soy desarrollador de ${this.lenguaje}`);
  }
}
const nuevoDev = new Desarrollador("Dani", 40, "Javascript");
console.log(nuevoDev);
nuevoDev.saludo();
