import React from 'react';
import {Link} from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {replyTargetId: undefined};
  }

  returnReplies(parentCommentId) {
    const replies = [];
    this.props.comments.forEach(comment => {
      if (comment.parent_comment_id === parentCommentId) {
        replies.push(<div>
          <p>&#160;&#160;&#160;&#160;&#160;Author {comment.author_id}: {comment.body}</p>
          <img src={comment.img_url}></img>
        </div>);
      }
    });
    if (replies === []) return null;
    else return replies;
  }

  returnTopLvComment() {
    const topLevelComments = [];
    this.props.comments.forEach(comment => {
      let replyForm = null;
      if (this.state.replyTargetId === comment.id) {
        // pass the target id to let form know parent_comment_id
        replyForm = this.generateCommentForm(comment.id);
      }
      if (!comment.parent_comment_id) {
        topLevelComments.push(<div>
          <p>Author {comment.author_id}: {comment.body}</p>
          <button onClick={e => this.setState({replyTargetId: comment.id})}>
            Reply
          </button>
          {replyForm}
          <img src={comment.img_url}></img>
          {this.returnReplies(comment.id)}
        </div>);
      }
    });
    return topLevelComments;
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
          <input ref="commentInput" type="text"/>
          <input type="submit" value="Send" />
        </form>
      );
    }
    return commentForm;
  }

  submitComment(e, parentCommentId) {
    e.preventDefault();
    const newComment = {
      author_id: this.props.currentUser.id,
      body: this.refs.commentInput.value,
      parent_comment_id: parentCommentId
    };
    this.props.postComment(newComment);
  }

  render() {
    if (!this.props.comments) return (<div>Loading comments...</div>);

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
