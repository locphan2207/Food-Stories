import {
  RECEIVE_RECIPE,
} from '../actions/recipe_actions';
import _ from 'lodash';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_RECIPE):
      //need condition, in case no comment, and action.comment is undefined
      if (action.likes) return action.likes;
      else return {}; //clear ccomment when swtiching other items
    default:
      return state;
  }
};

export default likesReducer;
