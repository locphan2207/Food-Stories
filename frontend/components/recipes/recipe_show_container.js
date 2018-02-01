import {connect} from 'react-redux';
import {fetchRecipe} from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';

const mapSTP = (state, ownProps) => ({
  recipe: state.entities.recipes[`${ownProps.match.params.recipeId}`],
  recipeId: ownProps.match.params.recipeId
});

const mapDTP = (dispatch) => ({
  fetchRecipe: () => dispatch(fetchRecipe())
});

export default connect(mapSTP, mapDTP)(RecipeShow);
