import {connect} from 'react-redux';
import {createRecipe, updateRecipe, receiveRecipeErrors} from '../../actions/recipe_actions';
import RecipeForm from './recipe_form';

const mapSTP = (state, ownProps) => {
  return {
    errors: state.errors.recipe, //need to put this key before formType, idk why
    isLoggedIn: state.session.currentUser ? true : false,
    currentUser: state.session.currentUser,
    formType: ownProps.match.path === '/recipes/new' ? 'new' : 'edit'
  };
};

const mapDTP = (dispatch, ownProps) => {
  return {
    submit: ownProps.match.path === '/recipes/new' ?
      (recipe) => dispatch(createRecipe(recipe)) :
      (recipe) => dispatch(updateRecipe(recipe)),
    clearError: () => dispatch(receiveRecipeErrors([])) //empty arr
  };
};

export default connect(mapSTP, mapDTP)(RecipeForm);
