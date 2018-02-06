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
    url: '/api/search',
    data: searchQuery
  });
};
