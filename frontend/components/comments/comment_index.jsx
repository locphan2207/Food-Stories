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
          {replyForm}
          {this.generatePic(comment.img_url)}
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
        <form onSubmit={e => this.submitComment(e, parentCommentId)}>
          <input ref="commentBodyInput" type="text"/>
          <input onChange={e => this.updateFile(e)} type="file"/>
          <input type="submit" value="Send" />
          <img src={this.state.imgUrl}></img>
          <img id="review" width="200px" src={this.state.imgUrl} />
        </form>
      );
    }
    return commentForm;
  }

  updateFile(e) {
    let file = e.target.files[0];
    if (file) {
      let fileReader = new FileReader();
      fileReader.onload = (e2) => { //on LOANDED
        this.setState({ imageFile: file});
        document.getElementById('review').src = e2.target.result;
      };
      fileReader.readAsDataURL(file);
    }
  }

  submitComment(e, parentCommentId) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment[author_id]", this.props.currentUser.id);
    formData.append("comment[body]", this.refs.commentBodyInput.value);
    formData.append("comment[parent_comment_id]", parentCommentId);
    formData.append("comment[image]", this.state.imageFile);

    // const newComment = {
    //   author_id: this.props.currentUser.id,
    //   body: this.refs.commentBodyInput.value, //i dont want live update, so i use refs
    //   parent_comment_id: parentCommentId,
    //   file: this.state.imageFile
    // };
    this.props.postComment(formData);
  }

  render() {
    if (!this.props.comments) return (<div>Loading comments...</div>);
    console.log(this.state);
    return (
      <div>
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
