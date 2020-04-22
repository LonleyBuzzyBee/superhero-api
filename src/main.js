import { Hero } from './../src/superhero.js';
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    $("#name").val("");
    (async () => {
      let hero = new Hero();
      const response = await hero.getSuperHeroInfo(name);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        
      } else {
        
      }
    }
  });
});