import {connect} from 'react-redux';
import {fetchRecipes} from '../../actions/recipe_actions';
import SuggestionBox from './suggestion_box';
import {withRouter} from 'react-router-dom';

const mapSTP = (state, ownProps) => {
  const ids = Object.keys(state.entities.recipes);
  const currentId = ownProps.match.params.recipeId;
  let threeRecs = [];
  if (!ids || ids.length < 10) threeRecs = [];  //we need at least 10 ids, to make sure we dodge the render
  else {
    //----I wanted to random suggestion, but it doesnt always work well----
    //----So, let just get the neighbors of this current recipe
    let currentRecIdx = ids.indexOf(`${currentId}`);
    if (currentRecIdx > 2) {
      for (let i = 0; i < 3; i++)
        threeRecs.push(state.entities.recipes[`${ids[--currentRecIdx]}`]);
    } else {
      for (let i = 0; i < 3; i++)
        threeRecs.push(state.entities.recipes[`${ids[++currentRecIdx]}`]);
    }
  }
  return {
    threeRecs: threeRecs
  };
};

const mapDTP = (dispatch, ownProps) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes())
  };
};

export default withRouter(connect(mapSTP, mapDTP)(SuggestionBox));
