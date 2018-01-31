import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as actions from './actions/session_actions';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  console.log(window.currentUser);
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }

  //testing:
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = actions.signup;
  window.login = actions.login;
  window.logout = actions.logout;
  //
  ReactDOM.render(<Root store={store} />, root);
});
