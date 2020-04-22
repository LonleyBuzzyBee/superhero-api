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
      
      
      
      // let allData = JSON.stringify(response);
      // let test = JSON.parse(response.responseText);
     
       
      if (response) {


        $("#output").html("");
        print(response);
        console.log(response);
         
        $("#heroN").append(`<p> name: ${response.biography.fullName}</p><br>`);
        $("#powers").append(`<p> <h2> Power Statistics: </h2> </p><br> Strength: ${response.powerstats.strength}</p><br><p>Intelligence: ${response.powerstats.intelligence} <br> <p>Combat Prowess: ${response.powerstats.combat}</p><br><p>Durability: ${response.powerstats.durability}</p><br><p>Power Level: ${response.powerstats.power}</p><br><p>Speed: ${response.powerstats.speed}</p><br>`);
            // $("#output").append("<p>" +  + ": " +  + "</p><br>")
            // $("#output").append("<p>" + element[0] + ": " + element[1] + "</p><br>")
          // $("#hero-info").html(test);
        
        } else {
          $("#hero-info").html("error");
        }
      
    }

    function print(obj) {
      for(let i in obj) {
        if(obj[i] instanceof Object) {
          print(obj[i]);
        } else {

          $("#output").append(i + ": " + obj[i] + "<br>");
        }
      }
    }
  });
});
// response.name