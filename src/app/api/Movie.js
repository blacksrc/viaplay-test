import API from './_API';

export default class Movie extends API {
  async getMovies() {
    const result = await this.request('/serier/samtliga');
    // result.code only appears on error apparently (need API documentation)
    if (!result.code) {
      return result._embedded['viaplay:blocks'][0]._embedded['viaplay:products'];
    } else {
      return result;
    }
  }
}
