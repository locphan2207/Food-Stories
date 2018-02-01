import React from 'react';
import {Link} from 'react-router-dom';

const RecipeIndexItem = (props) => {
  const duration = props.recipe.preparation_min +
    props.recipe.baking_min + props.recipe.resting_min;
  return (
    <li className="recipe-item">
      <Link to={`/recipes/${props.recipe.id}`}>
        <div className="recipe-item-pic-container">
          <img className="recipe-item-pic"
            src={props.recipe.img_url}></img>
          <div className="recipe-white"></div>
          <div className="recipe-gradient"></div>
          <p className="recipe-time">{duration} min.</p>
        </div>
        <p className="recipe-title">{props.recipe.title}</p>
      </Link>
    </li>
  );
};

export default RecipeIndexItem;
