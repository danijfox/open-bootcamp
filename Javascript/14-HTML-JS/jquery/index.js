$(() => {
  $("#hide").click(() => {
    $("h1").fadeOut();
  });
  $("#show").click(() => {
    $("h1").fadeIn();
  });
});
