import MovieActionTypes from './types';
import Movie from '../../api/Movie';

export const fetchMoviesStart = () => ({
  type: MovieActionTypes.FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (movies) => ({
  type: MovieActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error) => ({
  type: MovieActionTypes.FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMoviesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchMoviesStart());

    const data = await new Movie().getMovies();
    if (data.length > 0) {
      dispatch(fetchMoviesSuccess(data));
    } else {
      dispatch(fetchMoviesFailure(data));
    }
  };
};
