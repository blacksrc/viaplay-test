import { api as apiConfig } from '../config';

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

  _createUrl(path) {
    if (apiConfig.ENV === 'development') {
      return `/${this.device}-${this.market}${path}`;
    }
    return `${this.baseUrl}${this.device}-${this.market}${path}`;
  }

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
