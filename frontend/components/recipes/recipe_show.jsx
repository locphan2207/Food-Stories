import React from 'react';

class RecipeShow extends React.Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.recipeId);
  }

  render() {
    const {recipe} = this.props;
    return (
      <h1>THIS IS THE RECIPE SHOW PAGE for {recipe.title}</h1>
    );
  }
}

export default RecipeShow;
