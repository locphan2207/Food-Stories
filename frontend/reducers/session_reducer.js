import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const _defaultState = {
  currentUser: undefined
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_CURRENT_USER):
      return {currentUser: action.currentUser};
    default:
      return state;
  }
};

export default sessionReducer;
