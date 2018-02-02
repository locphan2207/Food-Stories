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
