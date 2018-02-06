import * as CommentAPIUtil from '../util/comment_api_util';
import {fetchRecipe} from './recipe_actions';
import {fetchStory} from './story_actions';

export const postComment = (itemType, itemId, comment) => (dispatch) => {
  return CommentAPIUtil.postComment(itemType, itemId, comment)
    .then(() => {
      if (itemType === "recipes") dispatch(fetchRecipe(itemId));
      else dispatch(fetchStory(itemId));
    });
};
