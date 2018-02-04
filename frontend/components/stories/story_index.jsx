import React from 'react';
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const {stories} = this.props;
    return (
      <div>
        <p className="index-title">Stories</p>
        <ul className="index-index">
          {stories.map(story => (
            <StoryIndexItem key={story.id}
              story={story}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default StoryIndex;