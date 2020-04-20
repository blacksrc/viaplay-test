import React from 'react';
import { connect } from 'react-redux';
import './assets/styles/global.css';
import HomePage from './pages/HomePage';
import { setDirection } from './redux/navigation/actions';

function App({ setDirection }) {
  document.addEventListener('keydown', function (e) {
    let direction = '';
    switch (e.keyCode) {
      case 37:
        direction = 'left';
        break;
      case 38:
        direction = 'up';
        break;
      case 39:
        direction = 'right';
        break;
      case 40:
        direction = 'down';
        break;
      default:
        break;
    }
    setDirection(direction);
  });
  return <HomePage />;
}

const mapDispatchToProps = (dispatch) => ({
  setDirection: (direction) => dispatch(setDirection(direction)),
});

export default connect(null, mapDispatchToProps)(App);
