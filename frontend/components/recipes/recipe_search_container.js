import {connect} from 'react-redux';
import {searchRecipe} from '../../actions/recipe_actions';
import RecipeSearch from './recipe_search';

const mapDTP = (dispatch) => ({
  searchRecipe: (searchQuery) => dispatch(searchRecipe(searchQuery))
});

export default connect(null, mapDTP)(RecipeSearch);
