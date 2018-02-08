export const getStories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/stories'
  });
};

export const getStory = (storyId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/stories/${storyId}`
  });
};

export const postSearchByIds = (ids) => {
  return $.ajax({
    method: 'POST',
    url: '/api/stories/search_by_ids',
    data: {ids}
  });
};
