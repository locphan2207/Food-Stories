export const postLike= (itemType, itemId, like) => {
  return $.ajax({
    method: 'POST',
    url: `/api/${itemType}/${itemId}/likes`,
    data: {like}
  });
};

export const deleteLike = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${id}`
  });
};
