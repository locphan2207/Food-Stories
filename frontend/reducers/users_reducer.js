import {
  RECEIVE_RECIPE,
} from '../actions/recipe_actions';
import {
  RECEIVE_STORY,
} from '../actions/story_actions';
import _ from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_RECIPE):
      //need condition, in case no comment, and action.comment is undefined
      if (action.users) return action.users;
      else return state;
    case (RECEIVE_STORY):
      //need condition, in case no comment, and action.comment is undefined
      if (action.users) return action.users;
      else return state;
    default:
      return state;
  }
};

export default usersReducer;
