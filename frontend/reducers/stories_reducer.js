import {
  RECEIVE_STORIES,
  RECEIVE_STORY
} from '../actions/story_actions';
import _ from 'lodash';

const storiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_STORIES):
      return _.merge({}, action.stories, state);
    case (RECEIVE_STORY):
      let newState = {[action.story.id]: action.story};
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default storiesReducer;
