import { combineReducers } from 'redux';

import movieReducer from './movie/reducer';
import navigationReducer from './navigation/reducer';

export default combineReducers({
  movie: movieReducer,
  navigation: navigationReducer,
});
