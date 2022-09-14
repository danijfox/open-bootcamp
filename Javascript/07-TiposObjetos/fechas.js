const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNacimiento = new Date("july 16, 1982");
console.log(fechaNacimiento);

const fecha = fechaHoy > fechaNacimiento;
console.log(fecha);

const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

const anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);
