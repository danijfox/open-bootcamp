const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("click en el boton");
});

$(() => {
  $("#btn").click(() => {
    console.log("estoy usando jquery");
  });
});
