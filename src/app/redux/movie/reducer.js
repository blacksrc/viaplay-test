import MovieActionTypes from './types';

const INITIAL_STATE = {
  movies: [],
  isFetching: false,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
