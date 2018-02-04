import React from 'react';
import drawCanvas from '../../util/canvas';
import {Link} from 'react-router-dom';
import SuggestionBox from '../suggestion_box';

class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threeRecs: props.threeRecs,
      servingNum: 3,
      canvasLoaded: false
    };
    if (!this.state.threeRecs) {
      this.state.threeRecs =
      JSON.parse(localStorage.getItem("savedThreeRecs"));
    }
  }

  savePropsToLocalStorage() { //for when refreshing
    localStorage.setItem("savedThreeRecs", JSON.stringify(this.state.threeRecs));
  }



  componentDidMount() {
    // I want to save data when refreshing page, so:
    window.addEventListener("beforeunload", this.savePropsToLocalStorage());
    window.addEventListener("scroll", this.stickyHandling);
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }

  componentDidUpdate() {
    // We need canvasLoaded to only render canvas ONCE after first load
    if (this.props.recipe && !this.state.canvasLoaded) {
      const {preparation_min, baking_min, resting_min} = this.props.recipe;
      this.setState({canvasLoaded: true});
      this.onload = drawCanvas(preparation_min, baking_min, resting_min);
    }
    this.handleHeaderImg();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.recipeId !== nextProps.match.params.recipeId) {
      this.props.fetchRecipe(nextProps.match.params.recipeId);
    }
  }

  handleHeaderImg() {
    const headerImg = document.getElementsByClassName('post-header')[0];
    if (!headerImg) return;
    let w = headerImg.width;
    let h = headerImg.height;
    if (w === 0 || h === 0) return; // need this or it freezes
    if (w > 880 && h > 484) {
      while (w/1.01 > 880 && h/1.01 > 484) { //check result before doing
        w /= 1.01;
        h /= 1.01;
      }
    }
    if (w < 880 || h < 484) {
      while (w < 880 || h < 484) {
        w *= 1.01;
        h *= 1.01;
      }
    }
    //also move to center:
    headerImg.style =
      `height:${h}px;width:${w}px;transform: translate(-${(w-880)/2}px, -${(h-484)/2}px)`;
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

  stickyHandling() {
    const $header1 = $('#header1');
    if ($(window).scrollTop() >= 522.7272338867188) { // I got this by checking on window console
      $header1.addClass("hidden-header");
    } else {
      $header1.removeClass("hidden-header");
    }
    const $header2 = $('#header2');
    if ($(window).scrollTop() >= 585.4545288085938) { // I got this by checking on window console
      $header2.addClass("sticky-header");
    } else {
      $header2.removeClass("sticky-header");
    }
  }

  textHandling() {
    let textCopy = this.props.recipe.text; //copy text
    let textArray = [];
    // find "Step" and save to title:
    let startIndexOfStep = textCopy.indexOf('Step');

    while (startIndexOfStep !== -1) {
      const endIndexOfStep = startIndexOfStep + 8;
      const stepTitle = textCopy.slice(startIndexOfStep, endIndexOfStep); //save title
      textCopy = textCopy.slice(endIndexOfStep, textCopy.length); //remove saved title

      let stepBody;
      startIndexOfStep = textCopy.indexOf('Step'); //search for next "Step"
      if (startIndexOfStep < 0) {
        stepBody = textCopy.slice(0, textCopy.length);
      }
      else {
        stepBody = textCopy.slice(0, startIndexOfStep);
      }

      textArray.push( //save as react element
        <div className="step">
          <p className="step-title">{stepTitle}</p>
          <p className="step-body">{stepBody}</p>
        </div>
      );
    }
    return textArray;
  }

  jumpTo(id, e) {
    const dest = document.getElementById(id);
    dest.scrollIntoView({behavior: "smooth", block: "start"});
    const buttons = document.getElementsByClassName("detail-button");
    console.log(buttons);
    for (let i = 0; i < 2; i++) {
      buttons[i].className = "detail-button"; //reset className
    }
    switch(id) {
      case "ov": buttons[0].className += " button-active"; break;
      case "st": buttons[1].className += " button-active"; break;
      case "co": buttons[2].className += " button-active"; break;
    }
  }

  render() {
    const {recipe} = this.props;
    const {threeRecs} = this.state;
    console.log(recipe);
    console.log(threeRecs);
    //THIS IS WEIRD but it takes extra 1 react cycle to get params, so:
    if (!threeRecs || !recipe || !recipe.ingredients) {
      return (<div>Loading</div>);
    }

    //Setup:

    let ingredientRows = recipe.ingredients.split(", "); //split by comma
    ingredientRows = ingredientRows.map((row, idx) => {
      //We split the pair by colon, and show eacg in table
      const ingreName = row.split(": ")[0];
      const amount = parseInt(row.split(": ")[1].split(" ")[0]);
      const unit = row.split(": ")[1].split(" ")[1];
      return (
        <tr key={`${idx}`}>
          <td>{amount * this.state.servingNum} {unit}</td>
          <td>{ingreName}</td>
        </tr>
      );
    });

    //Rendering:
    return (
      <div>
        <div className="header-wrap">
          <div className="post-header-container">
            <img className="post-header" src={recipe.img_url}></img>
          </div>
          <div id="header2" className="sticky-header-container">
            <div className="detail-navbar-container">
              <div className="buttons">
                <button onClick={(e) => this.jumpTo('ov', e)}
                  className="detail-button">Overview</button>
                <button onClick={(e) => this.jumpTo('st', e)}
                  className="detail-button">Steps</button>
                <button onClick={(e) => this.jumpTo('st', e)}
                  className="detail-button">Comments</button>
              </div>
              <div className="sharing">
                <img src={window.imageUrls.iconFB}></img>
                <img src={window.imageUrls.iconTwitter}></img>
                <img src={window.imageUrls.iconPin}></img>
                <img src={window.imageUrls.iconMail}></img>
                <img src={window.imageUrls.iconPrint}></img>
              </div>
              <div className="right-col">
                <SuggestionBox threeItems={this.state.threeRecs}/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="left-col">
            <p id="ov" className="post-title">{recipe.title}</p>
            <p className="rating">
              <img src={window.imageUrls.iconStarEmpty}></img>
              <img src={window.imageUrls.iconStarEmpty}></img>
              <img src={window.imageUrls.iconStarEmpty}></img>
              <img src={window.imageUrls.iconStarEmpty}></img>
              <img src={window.imageUrls.iconStarEmpty}></img>
              <span>Too few ratings</span>
            </p>
            <div className="difficulty">
              <span className="sub-title">Difficulty</span>
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
              <p className="sub-title">Ingredients</p>
              <p className="serving">Servings:
                <button onClick={() => this.ingredientMultiply("minus")}>-</button>
                {this.state.servingNum}
                <button onClick={() => this.ingredientMultiply("add")}>+</button>
              </p>
              <table><tbody>
                {ingredientRows}
              </tbody></table>
            </div>
            <div id="st" className="text">
              {this.textHandling()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeShow;
