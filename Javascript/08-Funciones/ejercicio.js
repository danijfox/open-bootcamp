function devuelveTrue() {
  return true;
}
console.log(devuelveTrue());

function asincrona() {
  setTimeout(() => {
    console.log("Hola soy una promesa");
  }, 5000);
}

//console.log(asincrona());

function* genePar() {
  let id = 1;

  while (true) {
    id++;
    yield id;

    if (id % 2) {
      return;
    } else {
      id++;
    }
  }
}

const gen = genePar();
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
console.log(gen.next().value);
console.log(gen.next().value);
