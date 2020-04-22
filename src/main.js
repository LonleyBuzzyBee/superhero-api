import { SuperHero } from './../src/superhero.js';
import $ from 'jquery';

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    $("#name").val("");
    (async () => {
      let hero = new SuperHero();
      const response = await hero.getSuperHeroInfo(name);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $("#hero-info").html(response);
      } else {
        $("#hero-info").html("error");
      }
    }
  });
});