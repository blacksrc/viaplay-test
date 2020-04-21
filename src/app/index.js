import React from 'react';
import { connect } from 'react-redux';
import './assets/styles/global.css';
import { keyCodeActions } from './config';
import HomePage from './pages/HomePage';
import { setDirection } from './redux/navigation/actions';

function App({ setDirection }) {
  document.addEventListener('keydown', (e) => {
    setDirection(keyCodeActions[e.keyCode] || '');
  });
  return <HomePage />;
}

const mapDispatchToProps = (dispatch) => ({
  setDirection: (direction) => dispatch(setDirection(direction)),
});

export default connect(null, mapDispatchToProps)(App);
