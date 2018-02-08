import * as StoryAPIUtil from '../util/story_api_util';

export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_LIKED_STORIES = "RECEIVE_LIKED_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";

const receiveStories = (stories) => ({
  type: RECEIVE_STORIES,
  stories
});

const receiveLikedStories = (stories) => ({
  type: RECEIVE_LIKED_STORIES,
  stories
});

const receiveStory = (response) => ({
  type: RECEIVE_STORY,
  story: response.story,
  comments: response.comments,
  likes: response.likes,
  users: response.users
});

export const fetchStories = () => (dispatch) => {
  return StoryAPIUtil.getStories()
    .then(stories => dispatch(receiveStories(stories)));
};

export const fetchStory = (storyId) => (dispatch) => {
  return StoryAPIUtil.getStory(storyId)
    .then(response => dispatch(receiveStory(response)));
};

export const fetchLikedStories = (ids) => (dispatch) => {
  return StoryAPIUtil.postSearchByIds(ids)
    .then(stories => dispatch(receiveLikedStories(stories)));
};
