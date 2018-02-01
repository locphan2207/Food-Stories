import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPE
} from '../actions/recipe_actions';

const recipesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_RECIPES):
      return action.recipes;
    case (RECEIVE_RECIPE):
      let newState = {[action.recipe.id]: action.recipe};
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default recipesReducer;
