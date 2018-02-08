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
