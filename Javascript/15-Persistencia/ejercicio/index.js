var nombre = "Daniel";
var apellidos = "Paíno Serrano";

var persona = { nombre, apellidos };

sessionStorage.setItem("persona", JSON.stringify(persona));
localStorage.setItem("persona", JSON.stringify(persona));

document.cookie = "nombreCookie = caducidadCookie; max-age=3600";
