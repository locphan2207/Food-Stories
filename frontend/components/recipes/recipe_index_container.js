import {connect} from 'react-redux';
import {fetchRecipes} from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapSTP = (state) => ({
  recipes: Object.values(state.entities.recipes)
});

const mapDTP = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes())
});

export default connect(mapSTP, mapDTP)(RecipeIndex);
