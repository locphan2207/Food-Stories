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
