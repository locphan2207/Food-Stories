import React from 'react';
import drawCanvas from '../../util/canvas';

class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {servingNum: 3, canvasLoaded: false};
  }

  componentWillMount() {
    console.log("will mount");
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }

  componentDidUpdate() {
    console.log("did update");
    // console.log(nextProp.recipe);
    const {preparation_min, baking_min, resting_min} = this.props.recipe;
    // We need canvasLoaded to only render canvas ONCE after first load
    if (!this.state.canvasLoaded) {
      this.setState({canvasLoaded: true});
      this.onload = drawCanvas(preparation_min, baking_min, resting_min);
    }
  }

  ingredientMultiply(type) {
    if (type === "minus") {
      if (this.state.servingNum > 1) {
        this.setState({servingNum: this.state.servingNum - 1});
      } else if (this.state.servingNum === 1) {
        this.setState({servingNum: this.state.servingNum - 0.5});
      }
    } else {
      this.setState({servingNum: this.state.servingNum + 1});
    }
  }

  render() {
    console.log("rendering");
    console.log(this.props);
    const {recipe} = this.props;
    //THIS IS WEIRD but it takes extra 1 react cycle to get params, so:
    if (!recipe || !recipe.ingredients) return (<div></div>);

    //Setup:
    let ingredientRows = recipe.ingredients.split(", "); //split by comma
    ingredientRows = ingredientRows.map(row => {
      //We split the pair by colon, and show eacg in table
      const ingreName = row.split(": ")[0];
      const amount = parseInt(row.split(": ")[1].split(" ")[0]);
      const unit = row.split(": ")[1].split(" ")[1];
      return (
        <tr>
          <td>{amount * this.state.servingNum} {unit}</td>
          <td>{ingreName}</td>
        </tr>
      );
    });

    //Rendering:
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
                <canvas id="canvas1" width="85" height="85"></canvas>
                <p className="min">{recipe.preparation_min} <span>min.</span></p>
                <p>Preparation</p>
              </div>
              <div>
                <canvas id="canvas2" width="85" height="85"></canvas>
                <p className="min">{recipe.baking_min} <span>min.</span></p>
                <p>Baking</p>
              </div>
              <div>
                <canvas id="canvas3" width="85" height="85"></canvas>
                <p className="min">{recipe.resting_min} <span>min.</span></p>
                <p>Resting</p>
              </div>
            </div>
            <div className="ingredients">
              <p className="dif-title">Ingredients</p>
              <p className="serving">Servings:
                <button onClick={() => this.ingredientMultiply("minus")}>-</button>
                {this.state.servingNum}
                <button onClick={() => this.ingredientMultiply("add")}>+</button>
              </p>
              <table><tbody>
                {ingredientRows}
              </tbody></table>
            </div>
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
