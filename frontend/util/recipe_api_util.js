export const getRecipes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/recipes'
  });
};
