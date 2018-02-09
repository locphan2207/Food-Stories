import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import recipeErrorsReducer from './recipe_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  recipe: recipeErrorsReducer
});

export default errorsReducer;
