import React from 'react';
import SmallImage from '../display/small_image';

class StoryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  componentWillUnmount() {
    document.getElementById('app').scrollIntoView({behavior: "smooth"});
  }
  
  render() {
    const {stories} = this.props;
    return (
      <div>
        <p className="item-title">Stories</p>
        <ul className="item-index">
          {stories.map(story => (
            <SmallImage key={story.id}
              isRecipe={false}
              item={story}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default StoryIndex;
