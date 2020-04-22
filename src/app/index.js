import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './assets/styles/global.css';
import { keyCodeActions } from './config';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import { setDirection } from './redux/navigation/actions';

function App({ setDirection }) {
  document.addEventListener('keydown', (e) => {
    setDirection(keyCodeActions[e.keyCode] || '');
  });
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/:guid">
        <MoviePage />
      </Route>
    </Switch>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setDirection: (direction) => dispatch(setDirection(direction)),
});

export default connect(null, mapDispatchToProps)(App);
