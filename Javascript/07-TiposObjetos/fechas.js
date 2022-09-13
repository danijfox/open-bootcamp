//Fechas

const fecha = new Date();
console.log(fecha);

// new Date (año, mes dia, (hora, minutos, segundos, milisegundos))
const fecha2 = new Date(1982, 6, 16);
console.log(fecha2);

//fechas por milisegundos
const fecha3 = new Date(1000000);
console.log(fecha3); //hora 0 1 enero 1970

//fecha por string
const fecha4 = new Date("16 july 1982");
console.log(fecha4);

//comparación de fechas
console.log(fecha4 > fecha3);

// para igualar fechas hay que convertirlas a milisegundos
console.log(fecha4.getTime() === fecha2.getTime());

// obtener el día, mes y año de una fecha

console.log(fecha4.getDate());
console.log(fecha4.getMonth() + 1); //Los meses comienzan en 0
console.log(fecha4.getFullYear());
