import * as RecipeAPIUtil from '../util/recipe_api_util';

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_LIKED_RECIPES = "RECEIVE_LIKED_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const RECEIVE_SEARCH_RESULT = "RECEIVE_SEARCH_RESULT";
export const CLEAR_ALL_RECIPES = "CLEAR_ALL_RECIPES";
export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";

const receiveRecipes = (recipes) => ({
  type: RECEIVE_RECIPES,
  recipes
});

export const clearRecipes = () => ({
  type: CLEAR_ALL_RECIPES
});

const receiveLikedRecipes = (recipes) => ({
  type: RECEIVE_LIKED_RECIPES,
  recipes
});

const receiveRecipe = (response) => ({
  type: RECEIVE_RECIPE,
  recipe: response.recipe,
  comments: response.comments,
  likes: response.likes,
  users: response.users,
  steps: response.steps
});

export const receiveRecipeErrors = (errors) => ({
  type: RECEIVE_RECIPE_ERRORS,
  errors
});

const receiveSearchResult = (recipeIds) => ({
  type: RECEIVE_SEARCH_RESULT,
  recipeIds
});

export const fetchRecipes = () => (dispatch) => {
  return RecipeAPIUtil.getRecipes()
    .then(recipes => dispatch(receiveRecipes(recipes)));
};

//Fetch Recipe includes comments data and like data related to that recipes
//also include author of comments
export const fetchRecipe = (recipeId) => (dispatch) => {
  return RecipeAPIUtil.getRecipe(recipeId)
    .then(response => dispatch(receiveRecipe(response)));
};

export const createRecipe = (recipe) => (dispatch) => {
  return RecipeAPIUtil.postRecipe(recipe)
    .then(response => dispatch(receiveRecipe(response)))
    .fail(promise => dispatch(receiveRecipeErrors(promise.responseJSON.errors)));
};

export const updateRecipe = (recipeId, recipe) => (dispatch) => {
  return RecipeAPIUtil.patchRecipe(recipeId, recipe)
    .then(response => dispatch(receiveRecipe(response)))
    .fail(promise => dispatch(receiveRecipeErrors(promise.responseJSON.errors)));
};

export const searchRecipe = (searchQuery) => (dispatch) => {
  return RecipeAPIUtil.postSearchRecipe(searchQuery)
    .then(result => dispatch(receiveSearchResult(result.recipeIds)));
};

export const fetchLikedRecipes = (ids) => (dispatch) => {
  return RecipeAPIUtil.postSearchByIds(ids)
    .then(recipes => dispatch(receiveLikedRecipes(recipes)));
};
