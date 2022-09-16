// Funciones generadoras
// generamos un id incremental
// queremos que al principio valga 0 y vaya creciendo

function* generaID(params) {
  let id = 0;

  while (true) {
    id++;
    yield id; //esperando hasta que se vuelva a llamar
    if (id >= 10) {
      return;
    }
  }
}

const gen = generaID();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
