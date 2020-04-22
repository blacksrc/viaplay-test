import API from './_API';

/**
 * Movie class in order to implement all movies' resources
 */
export default class Movie extends API {
  /**
   * This method will fetch list of movies
   *
   * @param {string} [path] - endpoint path
   *
   * @return {object} - array of movies
   */
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
