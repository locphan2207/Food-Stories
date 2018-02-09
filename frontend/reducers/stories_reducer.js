import {
  RECEIVE_STORIES,
  RECEIVE_STORY,
  RECEIVE_LIKED_STORIES,
  CLEAR_ALL_STORIES
} from '../actions/story_actions';
import _ from 'lodash';

const storiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (CLEAR_ALL_STORIES):
      return {};
    case (RECEIVE_STORIES):
      return _.merge({}, action.stories, state);
    case (RECEIVE_LIKED_STORIES):
      return action.stories; //replace entire stories with liked stories
    case (RECEIVE_STORY):
      let newState = {[action.story.id]: action.story};
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default storiesReducer;
