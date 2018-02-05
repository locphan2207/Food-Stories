import {connect} from 'react-redux';
import {fetchStories} from '../actions/story_actions';
import {fetchRecipes} from '../actions/recipe_actions';
import Homepage from './homepage';

const mapSTP = (state) => ({
  stories: Object.values(state.entities.stories),
  recipes: Object.values(state.entities.recipes)
});

const mapDTP = (dispatch) => ({
  fetchStories: () => dispatch(fetchStories()),
  fetchRecipes: () => dispatch(fetchRecipes())
});

export default connect(mapSTP, mapDTP)(Homepage);
