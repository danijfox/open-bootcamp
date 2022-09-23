const form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();
});
