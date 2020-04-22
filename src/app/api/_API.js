import { api as apiConfig } from '../config';
/**
 * Base API class. This Class is not for direct usage.
 * Extend your model class from API class and use request method instead.
 */
export default class API {
  constructor(
    passedConfig,
    baseUrl = apiConfig.HOST,
    device = apiConfig.DEVICE,
    market = apiConfig.MARKET
  ) {
    this.defaultConfig = {};

    this.config = {
      ...this.defaultConfig,
      ...passedConfig,
    };

    this.baseUrl = baseUrl;
    this.device = device;
    this.market = market;
  }

  /**
   * This method will create absolute url for fetch
   *
   * @param {string} [path] - endpoint path
   */
  _createUrl(path) {
    // To handle proxy
    if (apiConfig.ENV === 'development') {
      return `/${this.device}-${this.market}${path}`;
    }
    return `${this.baseUrl}${this.device}-${this.market}${path}`;
  }

  /**
   * Method to make all http requests
   *
   * @param {string} [path] - endpoint path
   * @param {string} [path='GET'] - Http method for request
   *
   * @return {object} response objet
   */
  request(path, method = 'GET') {
    // Setting request method. Could be GET, POST, PUT, DELETE, ...
    this.config.method = method;

    return fetch(this._createUrl(path), this.config)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return {
          code: 999, // result.code only appears on error apparently (need API documentation)
          error,
        };
      });
  }
}
