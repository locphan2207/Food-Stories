import {RECEIVE_SEARCH_RESULT} from '../actions/recipe_actions';

const searchResultReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_SEARCH_RESULT):
      return {recipeIds: action.recipeIds};
    default:
      return state;
  }
};

export default searchResultReducer;
