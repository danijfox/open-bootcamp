const obj = {
  id: 4,
  nombre: "Juan",
  apellido: "González",
  isDev: true,
  libros_fav: ["El salto", "El método"],
  "4-juegos": [1, 2, 3, 4],
};
var prop = "isDev";
console.log(obj["4-juegos"]);
console.log(obj[prop]); //acceso a través de propiedades

const obj2 = obj;

obj2.nombre = "Antonio";
console.log(obj2);
console.log(obj); //cambiamos el primer objeto

const obj3 = { ...obj };
console.log(obj3);
obj3.nombre = "Jose Luis";
console.log(obj, obj3);

///// Ordenar listas de objetos en función de una propiedad
//.sort --> muta el valor de la lista

const listaObjetos = [
  { titulo: "Lo que el viento se llevó", anyo: 1939 },
  { titulo: "Titanic", anyo: 1997 },
  { titulo: "Moana", anyo: 2016 },
  { titulo: "Efecto Mariposa", anyo: 2004 },
  { titulo: "TED", anyo: 2012 },
];
console.log(listaObjetos.sort((a, b) => a.anyo - b.anyo));
