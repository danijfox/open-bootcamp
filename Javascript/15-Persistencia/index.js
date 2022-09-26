localStorage.setItem("nombre", "Dani");

//localStorage.setItem("persona", { nombre: "Dani", edad: 40 });
//serializar un array u objeto

localStorage.setItem("persona", JSON.stringify({ nombre: "Gorka", edad: 40 }));
localStorage.getItem("persona");

//JSON.stringify() -> convierte un objeto/array en string
//JSON.parse() -> convierte un objeto/array convertido a traves de stringify en un objeto de javascritp

localStorage.removeItem("nombre");

sessionStorage.setItem("nombre-sesion", "Gorka");

/* Cookies */
document.cookie = "nombreCookie=GorkaCookie";
document.cookie =
  "nombreCaducidad =Nombre; expires=" + new Date(2023, 0, 1).toUTCString();
console.log(document.cookie);
