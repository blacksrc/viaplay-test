import NavigationActionTypes from './types';

const INITIAL_STATE = {
  direction: '',
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavigationActionTypes.SET_DIRECTION:
      return {
        direction: action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
