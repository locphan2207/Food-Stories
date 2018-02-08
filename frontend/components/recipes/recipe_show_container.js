import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import RecipeShow from './recipe_show';

import {fetchRecipe} from '../../actions/recipe_actions';
import {postComment} from '../../actions/comment_actions';
import {postLike, deleteLike} from '../../actions/like_actions';

const mapSTP = (state, ownProps) => {
  return {
    recipe: state.entities.recipes[`${ownProps.match.params.recipeId}`],
    comments: Object.values(state.entities.comments).reverse(), //reverse to get most recent first
    users: state.entities.users,  //we pass a hash object->ez to find user by key author_id
    likes: state.entities.likes,  //we pass a hash object->ez to find user by likeIds
    currentUser: state.session.currentUser
  };
};

const mapDTP = (dispatch, ownProps) => {
  return {
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId)),
    postLike: (itemType, itemId, like) => dispatch(postLike(itemType,
      itemId, "recipeShow", ownProps.match.params.recipeId, like)),
    deleteLike: (itemId, likeId) => dispatch(deleteLike(itemId,
      "recipeShow", ownProps.match.params.recipeId, likeId)), //need for refetch current item id
    postComment: (formData) => dispatch(postComment("recipes",
      ownProps.match.params.recipeId, formData)) // hard code 2 arguments,
      //so, in the comment_index, they just need to call postComment(comment)
  };
};

export default connect(mapSTP, mapDTP)(RecipeShow);
