import {connect} from 'react-redux';
import {fetchRecipes} from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapSTP = (state) => {
  let recipes = [];
  const resultIds = state.entities.searchResult.recipeIds;
  if (state.entities.searchResult.recipeIds.length < 1) {
    recipes = Object.values(state.entities.recipes);
  } else {
    resultIds.forEach(id => {
      // if (state.entities.recipes[`${id}`])
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
