// instalar axios npm i axios

import axios from "axios";

axios
  .get("https://pokeapi.co/api/v2/pokemon/pepe")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
