import React from 'react';
import SmallImage from './small_image';


class ListHighlight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {items, isRecipe} = this.props;
    return (
      <div className="list-highlight-container">
        <div className="list-highlight-window">
          <div className="list-highlight">
            {items.map(item => (
              <SmallImage key={item.id} item={item} isRecipe={isRecipe} />))
            }
          </div>
        </div>
        <img className="left" src={window.imageUrls.iconArrowLeft}></img>
        <img className="right" src={window.imageUrls.iconArrowRight}></img>
      </div>
    );
  }
}

export default ListHighlight;
