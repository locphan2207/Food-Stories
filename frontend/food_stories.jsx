import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as actions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  //testing:
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = actions.signup;
  window.login = actions.login;
  window.logout = actions.logout;
  //
  ReactDOM.render(<h1>Food Stories</h1>, root);
});
