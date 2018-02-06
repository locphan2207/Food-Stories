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
          <img src={comment.img_url}></img>
          {this.returnReplies(comment.id)}
        </div>);
      }
    });
    return topLevelComments;
  }

  render() {
    if (!this.props.comments) return (<div>Loading comments...</div>);

    return (
      <ul>
        {
          this.returnTopLvComment()
        }
      </ul>
    );
  }
}

export default CommentIndex;
