import {combineReducers} from 'redux';
import recipesReducer from './recipes_reducer';
import storiesReducer from './stories_reducer';
import commentsReducer from './comments_reducer';
import usersReducer from './users_reducer';
import likesReducer from './likes_reducer';
import searchResultReducer from './search_result_reducer';

const entitiesReducer = combineReducers({
  recipes: recipesReducer,
  stories: storiesReducer,
  comments: commentsReducer,
  likes: likesReducer,
  users: usersReducer,
  searchResult: searchResultReducer
});

export default entitiesReducer;
