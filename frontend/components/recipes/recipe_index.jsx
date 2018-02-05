import React from 'react';
import RecipeIndexItem from './recipe_index_item';

class RecipeIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const {recipes} = this.props;
    return (
      <div>
        <p className="item-title">Recipes</p>
        <ul className="item-index">
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
