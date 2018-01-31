import React from 'react';

const RecipeIndexItem = (props) => {
  const duration = props.recipe.preparation_min +
    props.recipe.baking_min + props.recipe.resting_min;
  return (
  <li className="recipe-item">
    <div className="recipe-item-pic-container">
      <img className="recipe-item-pic"
        src={props.recipe.img_url}></img>
      <div className="recipe-white"></div>
      <div className="recipe-gradient"></div>
      <p className="recipe-time">{duration} min.</p>
    </div>
    <p>{props.recipe.title}</p>
  </li>
  );
};

export default RecipeIndexItem;
