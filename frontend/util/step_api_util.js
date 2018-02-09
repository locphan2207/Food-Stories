export const postStep = (recipeId, formData) => {
  return $.ajax({
    method: 'POST',
    url: `/api/recipes/${recipeId}/steps`,
    data: formData,
    contentType: false, //need these 2 lines
    processData: false
  });
};
