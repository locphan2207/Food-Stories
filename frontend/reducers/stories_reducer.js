import {
  RECEIVE_STORIES,
  RECEIVE_STORY
} from '../actions/story_actions';

const storiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_STORIES):
      return action.stories;
    case (RECEIVE_STORY):
      let newState = {[action.story.id]: action.story};
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default storiesReducer;
