import { connect } from 'react-redux';
import MovieView from './MovieView';
import { setDirection } from '../../redux/navigation/actions';

const mapStateToProps = (state) => ({
  state: state,
  movie: state.movie,
  navigation: state.navigation,
});

const mapDispatchToProps = (dispatch) => ({
  setDirection: (direction) => dispatch(setDirection(direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieView);
