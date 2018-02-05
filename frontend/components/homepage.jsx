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
    const randomedIds = [];
    //Let's random it:
    for (let i = 0; i < 8; i++) {
      let random = Math.floor(Math.random() * items.length);
      while (randomedIds.includes(random)) {
        random = Math.floor(Math.random() * items.length);
      }
      result.push(items[`${random}`]);
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
        <div className="big-highlight">
          <Link to={`/stories/${stories[stories.length-1].id}`}>
              <BigImage imgUrl={stories[stories.length-1].img_url} />
              <p className="caption1">{stories[stories.length-1].title}</p>
              <p className="caption2">
                {stories[stories.length-1].sub_title}</p>
          </Link>
        </div>
        <div className="homepage-title-container">
          <p className="homepage-title">Latest Recipes</p>
          <Link to="/recipes">See all</Link>
        </div>
        <ListHighlight items={this.getEightItems(recipes)} isRecipe={true}/>
      </div>
    );
  }
}

export default Homepage;
