import React from 'react';

class BigImage extends React.Component {

  componentDidMount() {
    this.handleHeaderImg();
  }

  handleHeaderImg() {
    const headerImg = document.getElementsByClassName('post-header')[0];
    let w = headerImg.width;
    let h = headerImg.height;
    if (w === 0 || h === 0) return; // need this or it freezes
    if (w > 880 && h > 484) {
      while (w/1.01 > 880 && h/1.01 > 484) { //check result before doing
        w /= 1.01;
        h /= 1.01;
      }
    }
    if (w < 880 || h < 484) {
      while (w < 880 || h < 484) {
        w *= 1.01;
        h *= 1.01;
      }
    }
    //also move to center:
    headerImg.style =
      `height:${h}px;width:${w}px;transform: translate(-${(w-880)/2}px, -${(h-484)/2}px)`;
  }

  render() {
    if (!this.props.imgUrl) return (<h1>Loading...</h1>);
    return (
      <div className="post-header-container">
        <img className="post-header" src={this.props.imgUrl}></img>
      </div>
    );
  }
}

export default BigImage;
