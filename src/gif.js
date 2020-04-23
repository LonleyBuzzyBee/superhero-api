export class GifHere {
  async getGiphyInfo() {
    try {
      let gif = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIF_KEY}&tag=superhero`, {
        "method": "GET"
      });
      let jsonifiedResponse2;
      if (gif.ok && gif.status == 200) {
        jsonifiedResponse2 = await gif.json();
      } else {
        jsonifiedResponse2 = false;
      }
      return jsonifiedResponse2;
    } catch (error) {
      return false;

    }
  }
}

// https://developers.giphy.com/docs/api/schema#user-object