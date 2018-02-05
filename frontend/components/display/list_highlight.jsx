import React from 'react';
import SmallImage from './small_image';


class ListHighlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {leftCount: 0};
  }

  handleArrow(direction) {
    let leftCount;
    if (direction === 'right') leftCount = this.state.leftCount + 1;
    else leftCount = this.state.leftCount -1;
    // const slider = document.getElementsByClassName('list-highlight')[0];
    const slider = this.refs.slider;
    // base on the current count of left, we can calculate margin left like so:
    slider.style.marginLeft = `${-220 * leftCount}px`;
    this.setState({leftCount});
  }

  render() {
    const {items, isRecipe} = this.props;

    let leftArrow = (<img onClick={() => this.handleArrow('left')}
      className="left" src={window.imageUrls.iconArrowLeft}></img>);

    let rightArrow = (<img onClick={() => this.handleArrow('right')}
      className="right" src={window.imageUrls.iconArrowRight}></img>);

    //if there are 4 items outter left, right arrow should be hidden, to not slide left anymore:
    if (this.state.leftCount > 3) rightArrow = null;
    //if there is 0 item outter left, left arrow should be hidden, to not slide right anymore:
    if (this.state.leftCount < 1) leftArrow = null;

    return (
      <div className="list-highlight-container">
        <div className="list-highlight-window">
          <div ref="slider" className="list-highlight">
            {items.map(item => (
              <SmallImage key={item.id} item={item} isRecipe={isRecipe} />))
            }
          </div>
        </div>
        {leftArrow}
        {rightArrow}
      </div>
    );
  }
}

export default ListHighlight;
