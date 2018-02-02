import {combineReducers} from 'redux';
import recipesReducer from './recipes_reducer';
import storiesReducer from './stories_reducer';

const entitiesReducer = combineReducers({
  recipes: recipesReducer,
  stories: storiesReducer
});

export default entitiesReducer;
