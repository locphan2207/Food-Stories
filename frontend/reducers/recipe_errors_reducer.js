import {RECEIVE_RECIPE_ERRORS} from '../actions/recipe_actions';

const recipeErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_RECIPE_ERRORS):
      return action.errors;
    default:
      return state;
  }
};

export default recipeErrorsReducer;
