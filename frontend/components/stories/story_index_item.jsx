import React from 'react';
import {Link} from 'react-router-dom';

const StoryIndexItem = (props) => {
  return (
    <li className="index-item">
      <Link to={`/stories/${props.story.id}`}>
        <div className="index-item-pic-container">
          <img className="index-item-pic"
            src={props.story.img_url}></img>
          <div className="index-white"></div>
          <div className="index-gradient"></div>
        </div>
        <p className="index-title">{props.story.title}</p>
      </Link>
    </li>
  );
};

export default StoryIndexItem;
