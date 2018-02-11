import {
  RECEIVE_CURRENT_USER,
  RECEIVE_LIKED_RECIPE_ID,
  DELETE_LIKED_RECIPE_ID
} from '../actions/session_actions';
import _ from 'lodash';

const _defaultState = {
  currentUser: undefined
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case (RECEIVE_CURRENT_USER):
      return {currentUser: action.currentUser};
    case (RECEIVE_LIKED_RECIPE_ID):
      newState = _.merge({}, state);  //dup
      newState.currentUser.likedRecipeIds.push(parseInt(action.likedRecipeId)); //add new liked rec id
      return newState;
    case (DELETE_LIKED_RECIPE_ID):
      newState = _.merge({}, state);  //dup
      newState.currentUser.likedRecipeIds = []; //clear old ids array in newstate
      //Loop through previous likedIds, skip the id we want to delete
      state.currentUser.likedRecipeIds.forEach(id => {
        if (id !== parseInt(action.likedRecipeId)) {
          newState.currentUser.likedRecipeIds.push(id);
        }
      });
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
