import { connect } from 'react-redux';
import MoviesList from './MoviesList';
import { fetchMoviesStartAsync } from '../../redux/movie/actions';
import { setDirection } from '../../redux/navigation/actions';

const mapStateToProps = (state) => ({
  movie: state.movie,
  navigation: state.navigation,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesStartAsync: () => dispatch(fetchMoviesStartAsync()),
  setDirection: (direction) => dispatch(setDirection(direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
