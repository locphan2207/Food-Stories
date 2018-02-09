import {
  RECEIVE_RECIPE,
} from '../actions/recipe_actions';
import _ from 'lodash';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_RECIPE):
      //need condition, in case no step, and action.step is undefined
      if (action.steps) return action.steps;
      else return {}; //clear cstep when swtiching other items
    default:
      return state;
  }
};

export default stepsReducer;
