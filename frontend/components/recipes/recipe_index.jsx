import React from 'react';
import RecipeIndexItem from './recipe_index_item';

class RecipeIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    console.log(this.props);
    const {recipes} = this.props;
    return (
      <div className="main-section">
        <p className="index-title">Recipes</p>
        <ul className="recipe-index">
          {recipes.map(recipe => (
            <RecipeIndexItem key={recipe.id}
              recipe={recipe}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeIndex;
