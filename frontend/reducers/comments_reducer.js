import {
  RECEIVE_RECIPE,
} from '../actions/recipe_actions';
import {
  RECEIVE_STORY,
} from '../actions/story_actions';
import _ from 'lodash';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_RECIPE):
      //need condition, in case no comment, and action.comment is undefined
      if (action.comments) return action.comments;
      else return {}; //clear ccomment when swtiching other items
    case (RECEIVE_STORY):
      //need condition, in case no comment, and action.comment is undefined
      if (action.comments) return action.comments;
      else return {}; //clear ccomment when swtiching other items
    default:
      return state;
  }
};

export default commentsReducer;
