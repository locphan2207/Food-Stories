import React from 'react';
import {Link} from 'react-router-dom';
import SuggestionBoxContainer from './suggestion_box_container';
import BigImage from '../display/big_image';
import CommentIndex from '../comments/comment_index';

class StoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId);
    window.addEventListener("scroll", this.stickyHandling);
  }

  componentWillReceiveProps(nextProps) {
    console.log('props changing');
    if (this.props.match.params.storyId !== nextProps.match.params.storyId) {
      document.getElementById('app').scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      this.props.fetchStory(nextProps.match.params.storyId);
    }
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

  jumpTo(id, e) {
    const dest = document.getElementById(id);
    dest.scrollIntoView({behavior: "smooth", block: "start"});
    const buttons = document.getElementsByClassName("detail-button");
    for (let i = 0; i < 2; i++) {
      buttons[i].className = "detail-button"; //reset className
    }
    switch(id) {
      case "ov": buttons[0].className += " button-active"; break;
      case "co": buttons[1].className += " button-active"; break;
    }
  }

  generateLike(itemObject) {
    const {likes} = this.props;
    const {currentUser} = this.props;
    let imgSrc = window.imageUrls.heartIcon;
    if (currentUser) {
      itemObject.likeIds.forEach(likeId => {
        if (likes[`${likeId}`].author_id === currentUser.id) {
          imgSrc = window.imageUrls.heartIconLiked;
          return imgSrc;
        }
      });
    }
    return imgSrc;
  }

  toggleLike(itemType, itemObject) {
    const {currentUser} = this.props;
    const {likes} = this.props;
    let quit = false;
    if (currentUser) {
      itemObject.likeIds.forEach(likeId => {
        if (likes[`${likeId}`].author_id === currentUser.id) {
          this.props.deleteLike(likeId);
          quit = true; //cant use break on forEach
        }
      });
      if (quit === true) return;
      this.props.postLike( itemType, itemObject.id, {author_id: currentUser.id});
    }
  }

  render() {
    const {story} = this.props;
    //THIS IS WEIRD but it takes extra 1 react cycle to get params, so:
    if (!story || !story.text || !this.props.comments) return (<div>Loading...</div>);

    //Setup:

    //Rendering:
    return (
      <div>
        <div className="header-wrap">
          <BigImage imgUrl={story.img_url} />
          <div id="header2" className="sticky-header-container">
            <div className="detail-navbar-container">
              <div className="buttons">
                <button onClick={(e) => this.jumpTo('ov', e)}
                  className="detail-button">Article</button>
                <button onClick={(e) => this.jumpTo('co', e)}
                  className="detail-button">Comments ({this.props.comments.length})</button>
              </div>
              <div className="like-area">
                <img className="like" src={this.generateLike(story)}
                  onClick={e => this.toggleLike("stories", story, e)}/>
                <div className="like-count">{story.likeIds.length}</div>
              </div>
              <div className="sharing">
                <img src={window.imageUrls.iconFB}></img>
                <img src={window.imageUrls.iconTwitter}></img>
                <img src={window.imageUrls.iconPin}></img>
                <img src={window.imageUrls.iconMail}></img>
              </div>
              <div className="right-col">
                <SuggestionBoxContainer />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="left-col">
            <p className="post-title">
              <span id="ov"></span>
              {story.title}
            </p>
            <p className="post-sub-title">{story.sub_title}</p>
            <div className="post-author">
              <img className="post-author-pic"
                src={window.imageUrls.userDefault}></img>
              <div>
                <p className="post-author-username">Tan Loc</p>
                <p className="post-author-role">Master Admin</p>
              </div>
            </div>
            <div className="text">
              {story.text}
            </div>
            <CommentIndex comments={this.props.comments}
              users={this.props.users}
              postComment={this.props.postComment}
              currentUser={this.props.currentUser}
              generateLike={this.generateLike.bind(this)}
              toggleLike={this.toggleLike.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StoryShow;
