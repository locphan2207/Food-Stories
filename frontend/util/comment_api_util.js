export const postComment = (itemType, itemId, comment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/${itemType}/${itemId}/comments`,
    data: {comment}
  });
};
