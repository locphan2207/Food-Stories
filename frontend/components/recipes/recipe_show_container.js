import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import RecipeShow from './recipe_show';

import {fetchRecipe} from '../../actions/recipe_actions';
import {postComment} from '../../actions/comment_actions';
import {postStep} from '../../actions/step_actions';
import {receiveLikedRecipeId, deleteLikedRecipeId} from '../../actions/session_actions';
import {postLike, deleteLike} from '../../util/like_api_util'; //get api to create actions here!!!

const mapSTP = (state, ownProps) => {
  return {
    recipe: state.entities.recipes[`${ownProps.match.params.recipeId}`],
    comments: Object.values(state.entities.comments).reverse(), //reverse to get most recent first
    steps: Object.values(state.entities.steps),
    users: state.entities.users,  //we pass a hash object->ez to find user by key author_id
    likes: state.entities.likes,  //we pass a hash object->ez to find user by likeIds
    currentUser: state.session.currentUser
  };
};

const mapDTP = (dispatch, ownProps) => {
  return {
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId)),

    postLike: (itemType, itemId, like) => postLike(itemType, itemId, like)
      .then(() => dispatch(fetchRecipe(ownProps.match.params.recipeId))), //need for refetch current item id

    deleteLike: (itemType, likeId) => deleteLike(likeId) //fix for story too, added item type
      .then(() => dispatch(fetchRecipe(ownProps.match.params.recipeId))), //need for refetch current item id

    postComment: (formData) => dispatch(postComment("recipes",
      ownProps.match.params.recipeId, formData)), // hard code 2 arguments,
      //so, in the comment_index, they just need to call postComment(comment)
    postStep: (formData) => dispatch(postStep(ownProps.match.params.recipeId,
      formData)) // hard code 2 arguments,
      //so, in the comment_index, they just need to call postComment(comment)
  };
};

export default connect(mapSTP, mapDTP)(RecipeShow);
