import React from 'react';
import SmallImage from '../display/small_image';

class LikedItemIndex extends React.Component {
  componentDidMount() {
    this.props.fetchLikedRecipes(this.props.likedRecipeIds)
      .then(() => this.props.fetchLikedStories(this.props.likedStoryIds));
  }

  render() {
    console.log(this.props);
    const {recipes} = this.props;
    const {stories} = this.props;
    return (
      <div>
        <p className="item-title">Your favorite recipes</p>
        <ul className="item-index">
          {recipes.map(recipe => (
            <SmallImage key={recipe.id}
              isRecipe={true}
              item={recipe}
            />
          ))}
        </ul>
        <p className="item-title">Your favorite stories</p>
        <ul className="item-index">
          {stories.map(story => (
            <SmallImage key={story.id}
              isRecipe={true}
              item={story}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default LikedItemIndex;
