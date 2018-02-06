import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {fetchRecipes, searchRecipe} from './actions/recipe_actions';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }
  //testing:
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchRecipes = fetchRecipes;
  window.searchRecipe = searchRecipe;

  ReactDOM.render(<Root store={store} />, root);
});
