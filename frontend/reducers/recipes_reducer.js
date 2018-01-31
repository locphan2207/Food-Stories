import {RECEIVE_RECIPES} from '../actions/recipe_actions';

const recipesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_RECIPES):
      return action.recipes;
    default:
      return state;
  }
};

export default recipesReducer;
