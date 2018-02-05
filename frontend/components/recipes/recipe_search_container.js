import {connect} from 'react-redux';
import {postRecipeSearch} from '../../actions/recipe_actions';
import RecipeSearch from './recipe_search';

const mapDTP = (dispatch) => ({
  postRecipeSearch: (searchQuery) => dispatch(postRecipeSearch(searchQuery))
});

export default connect(null, mapDTP)(RecipeSearch);
