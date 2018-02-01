import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {fetchRecipes} from './actions/recipe_actions';
import Root from './components/root';
import drawCircle from './util/canvas';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  console.log(window.currentUser);
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }
  window.onload = drawCircle; //canvas
  //testing:
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchRecipes = fetchRecipes;
  //
  ReactDOM.render(<Root store={store} />, root);
});
