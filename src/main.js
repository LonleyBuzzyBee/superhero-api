import 'bootstrap';
import swal from 'sweetalert2';
import { SuperHero } from './../src/superhero.js';
import { GifHere } from './../src/gif.js';
import $ from 'jquery';
import './style.css';

$(document).ready(function () {
  (async () => {
    let gifHere = new GifHere();
    const response2 = await gifHere.getGiphyInfo();
    getElements2(response2);

    function getElements2(response2) {
      console.log(response2);
      $("#gif-here").append(`<img src=${response2.data.image_original_url} alt='gif-here'>`);
    }
  })();

  $("#form").submit(function (event) {
    event.preventDefault();

    // (async () => {
    //   let gifHere = new GifHere();
    //   const response2 = await gifHere.getGiphyInfo();
    //   getElements2(response2);

    //   function getElements2(response2) {
    //     // ${response2.data[0].images.original.url}
    //     console.log(response2);
    //     $("#gif-here").append(`<img src=${response2.data.image_original_url} alt='gif-here'>`);
    //   }
    // })();

    const name = $("#name").val();
    $("#name").val("");
    $("#heroN").html("");
    $("#heroID").html("");
    $("#aliases").html("");
    $("#publisher").html("");
    $("#location").html("");
    $("#first").html("");
    $("#family").html("");
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
    })();

    function getElements(response) {

      if (!Object.keys(response).length) {
        $(".card").hide();
        swal.fire("Sorry Character not found.Search a new hero.");

      }
      else if (response) {

        console.log(response);

        $("#strBar").css("width", `${response.powerstats.strength}%`);

        $("#powers").append("<strong><h4>Power Statistics:</h4></strong>");
        $("#heroID").append(`${response.name}`);
        $("#heroN").append(`<strong>Secret Identity:</strong> ${response.biography.fullName}`);
        $("#aliases").append(`<strong>Aliases:</strong> ${response.biography.aliases.toString().replace(/,/g, ", ")}`);
        $("#location").append(`<strong>Location:</strong> ${response.work.base}`);
        $("#publisher").append(`<strong>Publisher:</strong> ${response.biography.publisher}`);
        $("#first").append(`<strong>First Appearance:</strong> ${response.biography.firstAppearance}`);
        $("#family").append(`<strong>Relatives:</strong> ${response.connections.relatives}`);
        $("#strBar").css("width", `${response.powerstats.strength}%`);
        $("#strLabel").append(`<strong>Strength:</strong> ${response.powerstats.strength}`);
        $("#intBar").css("width", `${response.powerstats.intelligence}%`);
        $("#intLabel").append(`<strong>Intelligence:</strong> ${response.powerstats.intelligence}`);
        $("#comBar").css("width", `${response.powerstats.combat}%`);
        $("#comLabel").append(`<strong>Combat Prowess:</strong> ${response.powerstats.combat}`);
        $("#durBar").css("width", `${response.powerstats.durability}%`);
        $("#durLabel").append(`<strong>Durability:</strong> ${response.powerstats.durability}`);
        $("#spBar").css("width", `${response.powerstats.speed}%`);
        $("#spLabel").append(`<strong>Speed:</strong> ${response.powerstats.speed}`);
        $("#com").append(`<strong>Combat Prowess:</strong> ${response.powerstats.combat}`);

        $("#dur").append(`<strong>Durability:</strong> ${response.powerstats.durability}`);
        $("#sp").append(`<strong>Speed:</strong> ${response.powerstats.speed}`);
        console.log(response.images.xs);
        $("#image").html(`<img src="${response.images.md}">`);
        $(".card").show();

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