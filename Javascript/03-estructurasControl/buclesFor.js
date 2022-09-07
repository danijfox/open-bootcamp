//BUCLES for(inicializacion; condicion; actualizacion)

var listado = [0, 1, 2, 3, 4, 5, 6, 7];

//estructura for
for (let index = 0; index < listado.length; index++) {
  const element = listado[index];
  console.log(element);
}

//estructura for of
for (let valor of listado) {
  console.log(valor);
}

//estructura forEach
listado.forEach((element) => {
  console.log(element);
});

//estructura forIn (objetos)
const persona = {
  nombre: "Dani",
  apellido: "Paino",
  edad: 40,
  isDeveloper: false,
};

for (const key in persona) {
  console.log(key);
  console.log(persona[key]);
}
