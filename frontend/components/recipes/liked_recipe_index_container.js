import {connect} from 'react-redux';
import {fetchLikedRecipes} from '../../actions/recipe_actions';
import LikedRecipeIndex from './liked_recipe_index';

const mapSTP = (state) => {
  // In this route, the slice of recipes in entities should just store what
  // current user's liked recipes
  return {
    recipes: Object.values(state.entities.recipes),
    likedRecipeIds: state.session.currentUser.likedRecipeIds // current user's liked recipes
  };
};

const mapDTP = (dispatch) => ({
  fetchLikedRecipes: (ids) => dispatch(fetchLikedRecipes(ids))
});
export default connect(mapSTP, mapDTP)(LikedRecipeIndex);
