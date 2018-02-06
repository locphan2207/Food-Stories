import {
  RECEIVE_RECIPE,
} from '../actions/recipe_actions';
import _ from 'lodash';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_RECIPE):
      return action.comments;
    default:
      return state;
  }
};

export default commentsReducer;
