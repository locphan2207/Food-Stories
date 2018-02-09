import * as StepAPIUtil from '../util/comment_api_util';
import {fetchRecipe} from './recipe_actions';

export const postStep = (recipeId, formData) => (dispatch) => {
  return StepAPIUtil.postStep(recipeId, formData)
    .then(() => dispatch(fetchRecipe(recipeId)));
};
