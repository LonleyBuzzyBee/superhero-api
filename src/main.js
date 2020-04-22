import 'bootstrap';
import { SuperHero } from './../src/superhero.js';
import $ from 'jquery';
import './style.css';

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    $("#name").val("");
    (async () => {
      let hero = new SuperHero();
      const response = await hero.getSuperHeroInfo(name);
      getElements(response);
      $(".card").show();
    })();

    function getElements(response) {
       
      if (response) {

        console.log(response);
        
        $("#powers").append("Power Statistics:")
        $("#heroID").append(`${response.name}`);
        $("#heroN").append(`Secret Identity: ${response.biography.fullName}`);
        $("#str").append(`Strength: ${response.powerstats.strength}`);
        $("#int").append(`Intelligence: ${response.powerstats.intelligence}`);
        $("#com").append(`Combat Prowess: ${response.powerstats.combat}`);
        $("#dur").append(`Durability: ${response.powerstats.durability}`);
        $("#sp").append(`Speed: ${response.powerstats.speed}`);
        console.log(response.images.xs);
        $("#image").html(`<img src="${response.images.md}">`);

        } else {
          $("#hero-info").html("error");
        }
      
    }

    // function print(obj) {

      // for(let i in obj) {
      //   if(obj[i] instanceof Object) {
      //     print(obj[i]);
      //   } else {
      //     $("#output").append(i + ": " + obj[i] + "<br>");
      //   }
      // }
    //}
  });
});
// response.name