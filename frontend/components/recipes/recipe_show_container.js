import {connect} from 'react-redux';
import {fetchRecipe} from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';
import {withRouter} from 'react-router-dom';

const mapSTP = (state, ownProps) => ({
  recipe: state.entities.recipes[`${ownProps.match.params.recipeId}`]
});

const mapDTP = (dispatch, ownProps) => {
  return {
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId))
  };
};

export default withRouter(connect(mapSTP, mapDTP)(RecipeShow));
