export class SuperHero {
  async getSuperHeroInfo(name) {
    try { 
      let hero = await fetch(`https://superhero-search.p.rapidapi.com/?hero=${name}`,{ 
        method: "GET",
        headers: {
          "X-RapidAPI-Key": `${process.env.HERO_KEY}`
          // "X-RapidAPI-Host": 'superhero-search.p.rapidapi.com'
        }
      });
      let jsonifiedResponse;
      if (hero.ok && hero.status == 200){
          jsonifiedResponse = await hero.json();
      } else {
          jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
    return false;
    }
  } 
}