import React from 'react';

class RecipeShow extends React.Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }

  render() {
    const {recipe} = this.props;
    if (!recipe) return (<div></div>);  //THIS IS WEIRD but.. it takes
                                        //extra 1 react cycle to get params?
    return (
      <div>
        <div className="post-header-container">
          <img className="post-header"
             src={recipe.img_url}></img>
        </div>
        <div className="detail-navbar-container">
          <div className="buttons">
            <button className="detail-button">Overview</button>
            <button className="detail-button">Steps</button>
            <button className="detail-button">Comments</button>
          </div>
          <div className="sharing">
            <img src={window.imageUrls.iconFB}></img>
            <img src={window.imageUrls.iconTwitter}></img>
            <img src={window.imageUrls.iconPin}></img>
            <img src={window.imageUrls.iconMail}></img>
            <img src={window.imageUrls.iconPrint}></img>
          </div>
        </div>
        <div className="row">
          <div className="left-col">
            <p className="post-title">{recipe.title}</p>
            <p className="rating">
              <img src={window.imageUrls.iconStarEmpty}></img>
              <img src={window.imageUrls.iconStarEmpty}></img>
              <img src={window.imageUrls.iconStarEmpty}></img>
              <img src={window.imageUrls.iconStarEmpty}></img>
              <img src={window.imageUrls.iconStarEmpty}></img>
              <span>Too few ratings</span>
            </p>
            <div className="difficulty">
              <span className="dif-title">Difficulty</span>
              <span>{recipe.difficulty} 👌</span>
            </div>
            <div className="time">
              <div>
                <canvas id="canvas" width="85" height="85"></canvas>
                <p className="min">{recipe.preparation_min} <span>min.</span></p>
                <p>Preparation</p>
              </div>
              <div>
                <canvas id="canvas" width="85" height="85"></canvas>
                <p className="min">{recipe.baking_min} <span>min.</span></p>
                <p>Baking</p>
              </div>
              <div>
                <canvas id="canvas" width="85" height="85"></canvas>
                <p className="min">{recipe.resting_min} <span>min.</span></p>
                <p>Resting</p>
              </div>
            </div>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>{recipe.text}</p>
          </div>
          <div className="right-col">
        </div>
        </div>
      </div>
    );
  }
}

export default RecipeShow;
