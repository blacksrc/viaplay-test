const api = {
  ENV: process.env.NODE_ENV,
  HOST: process.env.REACT_APP_API_HOST,
  DEVICE: process.env.REACT_APP_API_DEVICE,
  MARKET: process.env.REACT_APP_API_MARKET,
};

const keyCodeActions = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  13: 'enter',
  27: 'exit',
  8: 'exit',
};

export { api, keyCodeActions };
