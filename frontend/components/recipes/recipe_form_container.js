import {connect} from 'react-redux';
import {createRecipe, updateRecipe, receiveRecipeErrors} from '../../actions/recipe_actions';
import RecipeForm from './recipe_form';

const convertStringToIngre = (ingreString) => {
  let ingreHash = {};
  let ingredientPairs = ingreString.split(", "); //split by comma
  ingredientPairs = ingredientPairs.map((row, idx) => {
    //We split the pair by colon, and show add to hash
    const ingreName = row.split(": ")[0];
    const ingreQuan = row.split(": ")[1];
    ingreHash[`${ingreName}`] = ingreQuan;
  });
  return ingreHash;
};

const mapSTP = (state, ownProps) => {
  const recipeIds = Object.keys(state.entities.recipes);
  const latestId = recipeIds[recipeIds.length-1];
  console.log(latestId);
  let recipe = {
    title: "",
    img_url: "",
    difficulty: "easy",
    preparation_min: undefined,
    baking_min: undefined,
    resting_min: undefined,
    ingredients: {}
  };
  if (ownProps.match.path === '/recipes/:recipeId/edit') {
    recipe = state.entities.recipes[`${ownProps.match.params.recipeId}`];
    if (recipe) recipe.ingredients = convertStringToIngre(recipe.ingredients);
  }
  return {
    errors: state.errors.recipe, //need to put this key before formType, idk why
    isLoggedIn: state.session.currentUser ? true : false,
    currentUser: state.session.currentUser,
    formType: ownProps.match.path === '/recipes/new' ? 'new' : 'edit',
    latestId: latestId,
    recipe: recipe,
  };
};

const mapDTP = (dispatch, ownProps) => {
  return {
    submit: ownProps.match.path === '/recipes/new' ?
      (recipe) => dispatch(createRecipe(recipe)) :
      (recipe) => dispatch(updateRecipe(ownProps.match.params.recipeId, recipe)),
    clearError: () => dispatch(receiveRecipeErrors([])) //empty arr
  };
};

export default connect(mapSTP, mapDTP)(RecipeForm);
