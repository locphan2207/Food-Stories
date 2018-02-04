import React from 'react';
import drawCanvas from '../../util/canvas';
import {Link} from 'react-router-dom';

class StoryShow extends React.Component {
  constructor(props) {
    super(props);
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

  componentWillMount() {
    this.props.fetchStory(this.props.match.params.storyId);
    window.addEventListener("scroll", this.stickyHandling);
  }

  componentDidUpdate() {
    this.handleHeaderImg();
  }

  stickyHandling() {
    // console.log($(window).scrollTop());
    const $header1 = $('#header1');
    if ($(window).scrollTop() >= 522.7272338867188) { // I got this by checking on window console
      $header1.addClass("hidden-header");
    } else {
      $header1.removeClass("hidden-header");
    }
    const $header2 = $('#header2');
    if ($(window).scrollTop() >= 585.4545288085938) { // I got this by checking on window console
      $header2.addClass("sticky-header");
    } else {
      $header2.removeClass("sticky-header");
    }
  }

  textHandling() {
  }

  jumpTo(id, e) {
    const dest = document.getElementById(id);
    dest.scrollIntoView({behavior: "smooth", block: "start"});
    const buttons = document.getElementsByClassName("detail-button");
    console.log(buttons);
    for (let i = 0; i < 2; i++) {
      buttons[i].className = "detail-button"; //reset className
    }
    switch(id) {
      case "ov": buttons[0].className += " button-active"; break;
      case "co": buttons[2].className += " button-active"; break;
    }
  }

  render() {
    const {story} = this.props;
    //THIS IS WEIRD but it takes extra 1 react cycle to get params, so:
    if (!story || !story.text) return (<div></div>);

    //Setup:

    //Rendering:
    return (
      <div>
        <div className="header-wrap">
          <div className="post-header-container">
            <img className="post-header" src={story.img_url}></img>
          </div>
          <div id="header2" className="sticky-header-container">
            <div className="detail-navbar-container">
              <div className="buttons">
                <button onClick={(e) => this.jumpTo('ov', e)}
                  className="detail-button">Article</button>
                <button onClick={(e) => this.jumpTo('ov', e)}
                  className="detail-button">Comments</button>
              </div>
              <div className="sharing">
                <img src={window.imageUrls.iconFB}></img>
                <img src={window.imageUrls.iconTwitter}></img>
                <img src={window.imageUrls.iconPin}></img>
                <img src={window.imageUrls.iconMail}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="left-col">
            <p className="post-title">
              <div id="ov"></div>
              {story.title}
            </p>
            <div className="text">
              {story.text}
            </div>
          </div>
          <div className="right-col">
        </div>
        </div>
      </div>
    );
  }
}

export default StoryShow;
