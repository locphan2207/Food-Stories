import * as RecipeAPIUtil from '../util/recipe_api_util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";

const receiveRecipes = (recipes) => ({
  type: RECEIVE_RECIPES,
  recipes
});

export const fetchRecipes = () => (dispatch) => {
  RecipeAPIUtil.getRecipes()
    .then(recipes => dispatch(receiveRecipes(recipes)));
};
