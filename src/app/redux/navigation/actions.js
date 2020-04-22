import NavigationActionTypes from './types';

export const setDirection = (direction) => ({
  type: NavigationActionTypes.SET_DIRECTION,
  payload: direction,
});
