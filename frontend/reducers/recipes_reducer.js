import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPE,
  RECEIVE_LIKED_RECIPES
} from '../actions/recipe_actions';
import _ from 'lodash';

const recipesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_RECIPES):
      return _.merge({}, action.recipes, state); // I want to keep old data, just get what wasnt there
      // return action.recipes;
    case (RECEIVE_LIKED_RECIPES):
      return action.recipes; //replace entire recipes with liked recipes
    case (RECEIVE_RECIPE):
      let newState = {[action.recipe.id]: action.recipe};
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default recipesReducer;
