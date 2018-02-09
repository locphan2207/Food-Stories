import {connect} from 'react-redux';
import {fetchStories} from '../actions/story_actions';
import {fetchRecipes} from '../actions/recipe_actions';
import Homepage from './homepage';

const mapSTP = (state) => {
  let stories = Object.values(state.entities.stories);
  let recipes = Object.values(state.entities.recipes);
  // In React, componentWillUnmount() happens after the next componentDidMount(),
  // which causes the issue, where it does not reset the state, make homepage think
  // items were loaded and tries to render, and it fails
  // So, we have to make a condition here to make sure we have enough items to random when render,
  // (same fix in suggestion_container)
  if (stories.length < 10 || recipes < 10) {
    stories = [];
    recipes = [];
  }
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
