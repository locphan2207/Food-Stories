import React from 'react';

const BigImage = (props) => {
  if (!props.imgUrl) return (<h1>Loading...</h1>);
  return (
    <div className="post-header-container">
      <img className="post-header" src={props.imgUrl}></img>
      <div className="index-gradient"></div>
    </div>
  );
};

export default BigImage;
