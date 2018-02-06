import * as RecipeAPIUtil from '../util/recipe_api_util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const RECEIVE_SEARCH_RESULT = "RECEIVE_SEARCH_RESULT";

const receiveRecipes = (recipes) => ({
  type: RECEIVE_RECIPES,
  recipes
});

const receiveRecipe = (recipe) => ({
  type: RECEIVE_RECIPE,
  recipe
});

const receiveSearchResult = (recipeIds) => ({
  type: RECEIVE_SEARCH_RESULT,
  recipeIds
});

export const fetchRecipes = () => (dispatch) => {
  return RecipeAPIUtil.getRecipes()
    .then(recipes => dispatch(receiveRecipes(recipes)));
};

export const fetchRecipe = (recipeId) => (dispatch) => {
  return RecipeAPIUtil.getRecipe(recipeId)
    .then(response => dispatch(receiveRecipe(response.recipe)));
};

export const searchRecipe = (searchQuery) => (dispatch) => {
  return RecipeAPIUtil.postSearchRecipe(searchQuery)
    .then(result => dispatch(receiveSearchResult(result.recipeIds)));
};
