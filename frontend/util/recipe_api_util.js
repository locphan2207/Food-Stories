export const getRecipes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/recipes'
  });
};

export const getRecipe = (recipeId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/recipes/${recipeId}`
  });
};

export const postSearchRecipe = (searchQuery) => {
  return $.ajax({
    method: 'POST',
    url: '/api/recipes/search',
    data: searchQuery
  });
};

export const postSearchByIds = (ids) => {
  return $.ajax({
    method: 'POST',
    url: '/api/recipes/search_by_ids',
    data: {ids}
  });
};

export const postRecipe = (recipe) => {
  return $.ajax({
    method: 'POST',
    url: 'api/recipes',
    data: {recipe}
  });
};

export const patchRecipe = (recipeId, recipe) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/recipes/${recipeId}`,
    data: {recipe}
  });
};
