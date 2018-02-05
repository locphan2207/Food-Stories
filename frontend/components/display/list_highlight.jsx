import React from 'react';
import SmallImage from './small_image';


class ListHighlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {leftCount: 0};
  }

  handleArrow(direction) {
    let leftCount;
    if (direction === 'left') leftCount = this.state.leftCount + 1;
    else leftCount = this.state.leftCount -1;
    const slider = document.getElementsByClassName('list-highlight')[0];
    // base on the current count of left, we can calculate margin left like so:
    slider.style.marginLeft = `${-220 * leftCount}px`;
    this.setState({leftCount});
  }

  render() {
    const {items, isRecipe} = this.props;
    return (
      <div className="list-highlight-container">
        <div className="list-highlight-window">
          <div ref="slider" className="list-highlight">
            {items.map(item => (
              <SmallImage key={item.id} item={item} isRecipe={isRecipe} />))
            }
          </div>
        </div>
        <img onClick={() => this.handleArrow('left')}
          className="left" src={window.imageUrls.iconArrowLeft}></img>
        <img onClick={() => this.handleArrow('right')}
          className="right" src={window.imageUrls.iconArrowRight}></img>
      </div>
    );
  }
}

export default ListHighlight;
