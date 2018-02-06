import React from 'react';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
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
      if (!comment.parent_comment_id) {
        topLevelComments.push(<div>
          <p>Author {comment.author_id}: {comment.body}</p>
          <button>Reply</button>
          <img src={comment.img_url}></img>
          {this.returnReplies(comment.id)}
        </div>);
      }
    });
    return topLevelComments;
  }

  submitComment(e) {
    e.preventDefault();
    const newComment = {
      author_id: this.props.currentUser.id,
      body: this.refs.commentInput.value,
    };
    this.props.postComment(newComment);
  }

  render() {
    if (!this.props.comments) return (<div>Loading comments...</div>);

    return (
      <div>
        <form onSubmit={e => this.submitComment(e)}>
          <input ref="commentInput" type="text"/>
          <input type="submit" value="Send" />
        </form>
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
