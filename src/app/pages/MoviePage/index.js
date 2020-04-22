import { connect } from 'react-redux';
import MoviePage from './MoviePage';
import { setDirection } from '../../redux/navigation/actions';

const mapDispatchToProps = (dispatch) => ({
  setDirection: (direction) => dispatch(setDirection(direction)),
});

export default connect(null, mapDispatchToProps)(MoviePage);
