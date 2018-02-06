import React from 'react';

const CommentIndex = ({comments}) => {
  if (!comments) return (<div>Loading comments...</div>);
  console.log(comments);
  return (
    <ul>
      {comments.map(comment => (<li>
        <p>{comment.body}</p>
      </li>))}
    </ul>
  );
};

export default CommentIndex;
