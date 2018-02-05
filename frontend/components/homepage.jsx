import React from 'react';
import {Link} from 'react-router-dom';

import BigImage from './display/big_image';
import ListHighlight from './display/list_highlight';

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
    this.props.fetchStories();
  }

  getEightItems(items) {
    const result = [];
    for (let i = 0; i < 8; i++) {
      result.push(items[`${i}`]);
    }
    return result;
  }

  render() {
    const {stories, recipes} = this.props;
    // console.log(stories);
    // console.log(recipes);
    if (stories.length < 1 || recipes.length < 1) return (<h1>Loading...</h1>);
    console.log(stories[stories.length-1]);
    return (
      <div>
        <p className="homepage-title">Today's Story</p>
        <Link to={`/stories/${stories[stories.length-1].id}`} className="big-highlight">
            <BigImage imgUrl={stories[stories.length-1].img_url} />
            <p className="caption1">{stories[stories.length-1].title}</p>
            <p className="caption2">
              {stories[stories.length-1].sub_title}</p>
        </Link>

        <p className="homepage-title">Latest Recipes</p>
        <ListHighlight items={recipes} isRecipe={true}/>
      </div>
    );
  }
}

export default Homepage;
