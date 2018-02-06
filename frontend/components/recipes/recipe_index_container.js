import {connect} from 'react-redux';
import {fetchRecipes} from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapSTP = (state) => {
  const resultIds = state.entities.searchResult.recipeIds;
  // I make three cases:
  // 1. When users are not searching, show all
  // 2. When users are searching, show result recipes
  // 3. When users are searching, but no result found, show nothing
  let recipes = []; // Case 3, when else statement of the condition below
  if (state.entities.searchResult.recipeIds === undefined) { // Case 1
    recipes = Object.values(state.entities.recipes);
  } else if (state.entities.searchResult.recipeIds.length > 0) {// Case 2
    resultIds.forEach(id => {
      recipes.push(state.entities.recipes[`${id}`]);
    });
  }
  return {
    recipes: recipes
  };
};

const mapDTP = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes())
});

export default connect(mapSTP, mapDTP)(RecipeIndex);
