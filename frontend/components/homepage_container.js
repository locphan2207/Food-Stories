import {connect} from 'react-redux';
import {fetchStories} from '../actions/story_actions';
import {fetchRecipes} from '../actions/recipe_actions';
import Homepage from './homepage';

const mapSTP = (state) => {
  let stories = Object.values(state.entities.stories);
  let recipes = Object.values(state.entities.recipes);
  // if (stories.length < 10 || recipes < 10) {
  //   stories = [];
  //   recipes = [];
  // }
  return {
    stories: stories,
    recipes: recipes
  };
};
const mapDTP = (dispatch) => ({
  fetchStories: () => dispatch(fetchStories()),
  fetchRecipes: () => dispatch(fetchRecipes())
});

export default connect(mapSTP, mapDTP)(Homepage);
