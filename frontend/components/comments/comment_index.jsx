import React from 'react';
import {Link} from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replyTargetId: undefined,
      imgUrl: null,
      imageFile: null
    };
  }

  returnReplies(parentCommentId) {
    const {users} = this.props;
    const replies = [];
    this.props.comments.forEach(comment => {
      if (comment.parent_comment_id === parentCommentId) {
        replies.push(
        <div>
          <img className="comment-avatar"
            src={users[comment.author_id].pic_url}></img>
          <p>{users[comment.author_id].username}: {comment.body}</p>
          {this.generatePic(comment.img_url)}
        </div>);
      }
    });
    if (replies === []) return null;
    else return replies;
  }

  returnTopLvComment() {
    const {users} = this.props;
    const topLevelComments = [];
    this.props.comments.reverse().forEach(comment => {
      let replyForm = null;
      if (this.state.replyTargetId === comment.id) {
        // pass the target id to let form know parent_comment_id
        replyForm = this.generateCommentForm(comment.id);
      }
      if (!comment.parent_comment_id) {
        topLevelComments.push(
          <div className="comment-box">
            <div className="comment-container">
              <img className="comment-avatar"
                src={users[comment.author_id].pic_url}></img>
              <div className="comment-body">
                <p>{users[comment.author_id].username} </p>
                <p>{comment.body}</p>
                <div className="reply" onClick={e => this.toggleReplyForm(comment.id)}>
                  Reply
                </div>
              </div>
            </div>
            {this.generatePic(comment.img_url)}
            {replyForm}
            {this.returnReplies(comment.id)}
          </div>
        );
      }
    });
    return topLevelComments;
  }

  generatePic(imgUrl) {
    if (imgUrl === 'missing.png') return (<div></div>);
    return (<img width="200px" src={imgUrl}></img>);
  }

  generateCommentForm(parentCommentId) {
    let commentForm = (
      <div className="comment-container">
        <div className="comment-blank-avatar"></div>
        <div className="comment-form">
          <Link to="/signup">Sign Up</Link>
          <i>&#160;or&#160; </i>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    );
    // If dont pass parentCommentId arg, we can understand this is top LV comment
    // If it has arg, it is a reply comment
    if (this.props.currentUser) {
      commentForm = (
        <div className="comment-container">
          <img className="comment-avatar" src={this.props.currentUser.pic_url}></img>
          <form className="comment-form"
            onSubmit={e => this.submitComment(e, parentCommentId)}>
            <input ref="commentBodyInput" className="comment-body-input"
              contenteditable="true" type="text" placeholder="Your reply..."/>

            <label><img onMouseEnter={(e) => {e.target.src = window.imageUrls.imgIconHv;}}
              onMouseLeave={(e) => {e.target.src = window.imageUrls.imgIcon;}}
              className="img-icon" src={window.imageUrls.imgIcon} />
              <input ref="commentImgInput" className="hidden-input"
                onChange={e => this.reviewFile(e)} type="file"/>
            </label>

            <label><img onMouseEnter={(e) => {e.target.src = window.imageUrls.sendIconHv;}}
              onMouseLeave={(e) => {e.target.src = window.imageUrls.sendIcon;}}
              className="send-icon" src={window.imageUrls.sendIcon} />
              <input className="hidden-input" type="submit" value="Send" />
            </label>
            <img src={this.state.imgUrl}></img>
          </form>
        </div>
      );
    }
    return commentForm;
  }

  iconHover(e, imgUrl) {
    console.log("hovering");
    e.target.src = imgUrl;
  }

  generatePicCount() {
    let count = 0;
    this.props.comments.forEach(comment => {
      if (comment.img_url !== "missing.png") count++;
    });
    return count;
  }

  toggleReplyForm(commentId) {
    if (!this.state.replyTargetId) {
      this.setState({replyTargetId: commentId});
    } else {
      this.setState({replyTargetId: undefined});
    }
  }

  //Use built in FileReader
  reviewFile(e) {
    let file = e.target.files[0];
    if (file) {
      let fileReader = new FileReader();
      fileReader.onload = (e2) => {
        // document.getElementById('review').src = e2.target.result;
      };
      fileReader.readAsDataURL(file);
    }
  }

  //Use built-in FormData
  submitComment(e, parentCommentId) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment[author_id]", this.props.currentUser.id);
    formData.append("comment[body]", this.refs.commentBodyInput.value);
    formData.append("comment[parent_comment_id]", parentCommentId);
    if (this.refs.commentImgInput.files[0]) {
      formData.append("comment[image]", this.refs.commentImgInput.files[0]);
    }
    this.props.postComment(formData);
    this.setState({replyTargetId: undefined});
  }

  render() {
    const {comments} = this.props;
    if (!comments) return (<div>Loading comments...</div>);

    return (
      <div className="comment-index">
        <div><span>Comments ({comments.length})</span>
          <span>Gallery ({this.generatePicCount()})</span>
        </div>
        <div id="co"></div>

        {this.generateCommentForm()}
        <ul>
          {
            this.returnTopLvComment()
          }
        </ul>
      </div>
    );
  }
}

export default CommentIndex;
