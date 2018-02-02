import React from 'react';
import {Link} from 'react-router-dom';

const RecipeIndexItem = (props) => {
  const duration = props.recipe.preparation_min +
    props.recipe.baking_min + props.recipe.resting_min;
  return (
    <li className="index-item">
      <Link to={`/recipes/${props.recipe.id}`}>
        <div className="index-item-pic-container">
          <img className="index-item-pic"
            src={props.recipe.img_url}></img>
          <div className="index-white"></div>
          <div className="index-gradient"></div>
          <p className="index-time">{duration} min.</p>
        </div>
        <p className="index-title">{props.recipe.title}</p>
      </Link>
    </li>
  );
};

export default RecipeIndexItem;
