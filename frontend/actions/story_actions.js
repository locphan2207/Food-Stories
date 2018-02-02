import * as StoryAPIUtil from '../util/story_api_util';

export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";

const receiveStories = (stories) => ({
  type: RECEIVE_STORIES,
  stories
});

const receiveStory = (story) => ({
  type: RECEIVE_STORY,
  story
});

export const fetchStories = () => (dispatch) => {
  StoryAPIUtil.getStories()
    .then(stories => dispatch(receiveStories(stories)));
};

export const fetchStory = (storyId) => (dispatch) => {
  StoryAPIUtil.getStory(storyId)
    .then(response => dispatch(receiveStory(response.story)));
};
