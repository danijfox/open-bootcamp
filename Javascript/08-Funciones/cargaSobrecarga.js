//Carga y sobrecarga de funciones

function saludar(params) {
  hola();
}

function hola(params) {
  console.log("Hola soy la funcion hola");
}
saludar();

// 1. El interprete lee de arriba a abajo
// 2. Carga la funcion global -- global()
// 3. Cuando encuentra otra función la añade a la cola -- hola () saludar() global()
// 4. Después las va eliminando de la cola -- global()

// La sobrecarga puede llegar con funciones recursivas
