export class SuperHero {
  async getSuperHeroInfo() {
    try { 
    let hero = await fetch(`https://superhero-search.p.rapidapi.com/?hero=${name}&id=${process.env.HERO_KEY}`)
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