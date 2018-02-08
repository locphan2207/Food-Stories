import * as LikeAPIUtil from '../util/like_api_util';
import {fetchRecipe} from './recipe_actions';
import {fetchStory} from './story_actions';

export const postLike = (itemType, itemId, currentPage, currentPageId, like) => (dispatch) => {
  return LikeAPIUtil.postLike(itemType, itemId, like)
    .then(() => {
      switch (currentPage) {
        case ("recipeShow"):
          dispatch(fetchRecipe(currentPageId)); break;
        case ("storyShow"):
          dispatch(fetchStory(currentPageId)); break;
        default:
          break;
      }
    });
};

export const deleteLike = (itemId, currentPage, currentPageId, likeId) => (dispatch) => {
  return LikeAPIUtil.deleteLike(likeId)
    .then(() => {
      switch (currentPage) {
        case ("recipeShow"):
          dispatch(fetchRecipe(currentPageId)); break;
        case ("storyShow"):
          dispatch(fetchStory(currentPageId)); break;
        default:
          break;
      }
    });
};
