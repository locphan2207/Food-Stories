import * as LikeAPIUtil from '../util/like_api_util';
import {fetchRecipe} from './recipe_actions';
import {fetchStory} from './story_actions';

export const postLike = (itemType, itemId, currentPage, like) => (dispatch) => {
  return LikeAPIUtil.postLike(itemType, itemId, like)
    .then(() => {
      switch (currentPage) {
        case ("recipeShow"):
          dispatch(fetchRecipe(itemId)); break;
        case ("storyShow"):
          dispatch(fetchStory(itemId)); break;
        default:
          break;
      }
    });
};

export const deleteLike = (itemId, currentPage, likeId) => (dispatch) => {
  return LikeAPIUtil.deleteLike(likeId)
    .then(() => {
      switch (currentPage) {
        case ("recipeShow"):
          dispatch(fetchRecipe(itemId)); break;
        case ("storyShow"):
          dispatch(fetchStory(itemId)); break;
        default:
          break;
      }
    });
};
