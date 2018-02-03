import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchRecipes} from '../../actions/recipe_actions';
import {fetchStories} from '../../actions/story_actions';
import SuggestionBox from './suggestion_box';

const mapSTP = (state, ownProps) => {
  let itemIdText;
  let itemTextPlural;
  if (ownProps.match.path === "recipes/:recipeId") {
    itemTextPlural = "recipes";
    itemIdText = "recipeId";
  } else {
    itemTextPlural = "stories";
    itemIdText = "storyId";
  }
  const ids = Object.keys(state.entities[itemTextPlural]);
  const currentItemId = ownProps.match.params[itemIdText];
  let values = [];
  if (ids.length > 0) { // it will wait one more render?
    for (let i = 0; i < 2; i++) {
      let randomId = Math.floor(Math.random() * ids.length); // random index to get random id
      // console.log(randomId);
      // while (randomId !== currentItemId) {
      //   console.log(randomId);
      //   randomId = Math.floor(Math.random() * ids.length);
      // }
      values.push(state.entities[itemTextPlural][randomId]);
    }
  }
  return {
    recipes: values
  };
};

const mapDTP = (dispatch, ownProps) => {
  console.log(ownProps.match.path);
  return {
    fetchItems: ownProps.match.path === "/recipes/:recipeId" ?
      () => dispatch(fetchRecipes()) :
      () => dispatch(fetchStories())
  };
};

export default withRouter(connect(mapSTP, mapDTP)(SuggestionBox));
