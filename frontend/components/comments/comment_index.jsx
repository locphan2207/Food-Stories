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
        console.log(comment.img_url);
        replies.push(<div>
          <p>&#160;&#160;&#160;&#160;&#160;{users[comment.author_id].username}: {comment.body}</p>
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
    this.props.comments.forEach(comment => {
      let replyForm = null;
      if (this.state.replyTargetId === comment.id) {
        // pass the target id to let form know parent_comment_id
        replyForm = this.generateCommentForm(comment.id);
      }
      if (!comment.parent_comment_id) {
        topLevelComments.push(<div>
          <p>{users[comment.author_id].username}: {comment.body}</p>
          <button onClick={e => this.setState({replyTargetId: comment.id})}>
            Reply
          </button>
          {this.generatePic(comment.img_url)}
          {replyForm}
          {this.returnReplies(comment.id)}
        </div>);
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
      <div>
        <Link to="/signup">Sign Up</Link>
        <p>or</p>
        <Link to="/login">Log In</Link>
        <p>To comment and share your experience</p>
      </div>
    );
    // If dont pass parentCommentId arg, we can understand this is top LV comment
    // If it has arg, it is a reply comment
    if (this.props.currentUser) {
      commentForm = (
        <form className="comment-form"
          onSubmit={e => this.submitComment(e, parentCommentId)}>
          <img width="50px" src={this.props.currentUser.pic_url}></img>
          <input ref="commentBodyInput" type="text"/>
          <input ref="commentImgInput" onChange={e => this.reviewFile(e)} type="file"/>
          <input type="submit" value="Send" />
          <img src={this.state.imgUrl}></img>
          <img id="review" width="200px" src={this.state.imgUrl} />
        </form>
      );
    }
    return commentForm;
  }

  generatePicCount() {
    let count = 0;
    this.props.comments.forEach(comment => {
      if (comment.img_url !== "missing.png") count++;
    });
    return count;
  }

  //Use built in FileReader
  reviewFile(e) {
    let file = e.target.files[0];
    if (file) {
      let fileReader = new FileReader();
      fileReader.onload = (e2) => {
        document.getElementById('review').src = e2.target.result;
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

        {this.generateCommentForm(false)}
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
