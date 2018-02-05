import React from 'react';
import {Link} from 'react-router-dom';

const SmallImage = (props) => {
  let time = null;
  if (props.isRecipe) {
    const duration = props.item.preparation_min +
      props.item.baking_min + props.item.resting_min;
    time = (<p className="index-time">{duration} min.</p>);
  }
  const path = props.isRecipe ?
    `/recipes/${props.item.id}` :
    `/stories/${props.item.id}`;

  return (
    <li className="index-item">
      <Link to={path}>
        <div className="index-item-pic-container">
          <img className="index-item-pic"
            src={props.item.img_url}></img>
          <div className="index-white"></div>
          <div className="index-gradient"></div>
          {time}
        </div>
        <p className="index-title">{props.item.title}</p>
      </Link>
    </li>
  );
};

export default SmallImage;
