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
  13: 'enter', // Redirection is not implemented. Check the console
  27: 'exit', // Return is not implemented. Check the console
};

export { api, keyCodeActions };
