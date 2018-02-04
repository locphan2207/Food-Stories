import {connect} from 'react-redux';
import {fetchRecipe} from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';
import {withRouter} from 'react-router-dom';

const mapSTP = (state, ownProps) => {
  // const ids = Object.keys(state.entities.recipes);
  // const currentId = ownProps.match.params.recipeId;
  // let threeRecs = [];
  // if (!ids || ids.length < 4) threeRecs = undefined;  //we need at least 4 ids,
  // else {
  //   //----I wanted to random suggestion, but it doesnt always work well----
  //   //----So, let just get the neighbors of this current recipe
  //   let currentRecIdx = ids.indexOf(`${currentId}`);
  //   if (currentRecIdx > 2) {
  //     for (let i = 0; i < 3; i++)
  //       threeRecs.push(state.entities.recipes[`${ids[--currentRecIdx]}`]);
  //   } else {
  //     for (let i = 0; i < 3; i++)
  //       threeRecs.push(state.entities.recipes[`${ids[++currentRecIdx]}`]);
  //   }
  // }
  return {
    recipe: state.entities.recipes[`${ownProps.match.params.recipeId}`]
    // allRecs: state.entities.recipes
    // threeRecs: threeRecs
  };
};

const mapDTP = (dispatch, ownProps) => {
  return {
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId))
    // fetchRecipes: () => dispatch(fetchRecipes())
  };
};

export default connect(mapSTP, mapDTP)(RecipeShow);
