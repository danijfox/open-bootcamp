const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  // alert("comeme los huevos");
  confirm("Seguro que quieres?") ? confirm("ok") : confirm("seguro que no?");
});
