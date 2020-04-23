import 'bootstrap';
import { SuperHero } from './../src/superhero.js';
import $ from 'jquery';
import './style.css';

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    $("#name").val("");
    $("#heroN").html("");
    $("#heroID").html("");
    $("#strLabel").html("");
    $("#intLabel").html("");
    $("#comLabel").html("");
    $("#durLabel").html("");
    $("#spLabel").html("");
    $("#powers").html("");
    (async () => {
      let hero = new SuperHero();
      const response = await hero.getSuperHeroInfo(name);
      getElements(response);
      $(".card").show();
    })();

    function getElements(response) {

      if (response) {

        console.log(response);

        $("#strBar").css("width", `${response.powerstats.strength}%`);

        $("#powers").append("Power Statistics:");
        $("#heroID").append(`${response.name}`);
        $("#heroN").append(`Secret Identity: ${response.biography.fullName}`);
        $("#aliases").append(`Aliases: ${response.biography.aliases.toString().replace(/,/g, ", ")}`)
        $("#publisher").append(`Publisher: ${response.biography.publisher}`)
        $("#first").append(`First Appearance: ${response.biography.firstAppearance}`)
        $("#family").append(`Relatives: ${response.connections.relatives}`)
        $("#strBar").css("width", `${response.powerstats.strength}%`);
        $("#strLabel").append(`Strength: ${response.powerstats.strength}`);
        $("#intBar").css("width", `${response.powerstats.intelligence}%`);
        $("#intLabel").append(`Intelligence: ${response.powerstats.intelligence}`);
        $("#comBar").css("width", `${response.powerstats.combat}%`);
        $("#comLabel").append(`Combat: ${response.powerstats.combat}`);
        $("#durBar").css("width", `${response.powerstats.durability}%`);
        $("#durLabel").append(`Durability: ${response.powerstats.durability}`);
        $("#spBar").css("width", `${response.powerstats.speed}%`);
        $("#spLabel").append(`Speeed: ${response.powerstats.speed}`);
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