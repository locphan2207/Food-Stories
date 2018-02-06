import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import RecipeShow from './recipe_show';

import {fetchRecipe} from '../../actions/recipe_actions';
import {postComment} from '../../actions/comment_actions';

const mapSTP = (state, ownProps) => {
  return {
    recipe: state.entities.recipes[`${ownProps.match.params.recipeId}`],
    comments: Object.values(state.entities.comments),
    currentUser: state.session.currentUser
  };
};

const mapDTP = (dispatch, ownProps) => {
  return {
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId)),
    postComment: (comment) => dispatch(postComment("recipes",
      ownProps.match.params.recipeId, comment)) // hard code 2 arguments,
      //so, in the comment_index, they just need to call postComment(comment)
  };
};

export default connect(mapSTP, mapDTP)(RecipeShow);
