import {connect} from 'react-redux';
import {fetchLikedRecipes} from '../../actions/recipe_actions';
import {fetchLikedStories} from '../../actions/story_actions';
import LikedItemIndex from './liked_item_index';

const mapSTP = (state) => {
  // In this route, the slice of recipes in entities should just store what
  // current user's liked recipes
  return {
    recipes: Object.values(state.entities.recipes),
    stories: Object.values(state.entities.stories),
    likedRecipeIds: state.session.currentUser.likedRecipeIds, // current user's liked recipes
    likedStoryIds: state.session.currentUser.likedStoryIds // current user's liked stories
  };
};

const mapDTP = (dispatch) => ({
  fetchLikedRecipes: (ids) => dispatch(fetchLikedRecipes(ids)),
  fetchLikedStories: (ids) => dispatch(fetchLikedStories(ids)),
});
export default connect(mapSTP, mapDTP)(LikedItemIndex);
