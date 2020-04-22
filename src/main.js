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
       
        console.log(response);
         
        $("#output").append(`<p> name: ${response.biography.fullName}</p><br>`);
        $("#output").append(`<p> powerstats: ${response.powerstats.strength}</p><br>`);
            // $("#output").append("<p>" +  + ": " +  + "</p><br>")
            // $("#output").append("<p>" + element[0] + ": " + element[1] + "</p><br>")
          // $("#hero-info").html(test);
        
        } else {
          $("#hero-info").html("error");
        }
      
    }
  });
});
// response.name