import React from 'react';
import * as Canvas from '../../util/canvas';
import {Link} from 'react-router-dom';
import SuggestionBoxContainer from './suggestion_box_container';
import BigImage from '../display/big_image';
import CommentIndex from '../comments/comment_index';

class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {servingNum: 3};
    this.canvasLoaded = false;
  }

  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
    window.addEventListener("scroll", this.stickyHandling);
  }

  componentWillReceiveProps(nextProps) {
    console.log('props changing');
    if (this.props.match.params.recipeId !== nextProps.match.params.recipeId) {
      document.getElementById('app').scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      console.log('set to false');
      this.canvasLoaded =  false;
      this.props.fetchRecipe(nextProps.match.params.recipeId);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.recipe && this.props.recipe.ingredients) {
      const {preparation_min, baking_min, resting_min} = this.props.recipe;
      // We need canvasLoaded to only render canvas ONCE after first load
      console.log('show did update');
      if (!this.canvasLoaded) {
        Canvas.drawCanvas(preparation_min, baking_min, resting_min);
        this.canvasLoaded =  true;
        console.log('canvas drawing');
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.stickyHandling);  //make top navbar stable again
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

  // textHandling() {
  //   let textCopy = this.props.recipe.text; //copy text
  //   let textArray = [];
  //   // find "Step" and save to title:
  //   let startIndexOfStep = textCopy.indexOf('Step');
  //
  //   while (startIndexOfStep !== -1) {
  //     const endIndexOfStep = startIndexOfStep + 8;
  //     const stepTitle = textCopy.slice(startIndexOfStep, endIndexOfStep); //save title
  //     textCopy = textCopy.slice(endIndexOfStep, textCopy.length); //remove saved title
  //
  //     let stepBody;
  //     startIndexOfStep = textCopy.indexOf('Step'); //search for next "Step"
  //     if (startIndexOfStep < 0) {
  //       stepBody = textCopy.slice(0, textCopy.length);
  //     }
  //     else {
  //       stepBody = textCopy.slice(0, startIndexOfStep);
  //     }
  //
  //     textArray.push( //save as react element
  //       <div className="step">
  //         <p className="step-title">{stepTitle}</p>
  //         <p className="step-body">{stepBody}</p>
  //       </div>
  //     );
  //   }
  //   return textArray;
  // }

  jumpTo(id, e) {
    const dest = document.getElementById(id);
    dest.scrollIntoView({behavior: "smooth", block: "start"});
    const buttons = document.getElementsByClassName("detail-button");
    for (let i = 0; i < 2; i++) {
      buttons[i].className = "detail-button"; //reset className
    }
    switch(id) {
      case "ov": buttons[0].className += " button-active"; break;
      case "st": buttons[1].className += " button-active"; break;
      case "co": buttons[2].className += " button-active"; break;
    }
  }

  //The idea: Take the item object, look through likeIds, check if the current user
  // is in the list (if he or she already liked the item or not)
  // then show the heart icon according to the status
  generateLike(itemObject) {
    const {likes} = this.props;
    const {currentUser} = this.props;
    let imgSrc = window.imageUrls.heartIcon;
    if (currentUser) {
      itemObject.likeIds.forEach(likeId => {
        if (likes[`${likeId}`].author_id === currentUser.id) {
          imgSrc = window.imageUrls.heartIconLiked;
          return imgSrc;
        }
      });
    }
    return imgSrc;
  }

  toggleLike(itemType, itemObject) {
    const {currentUser} = this.props;
    const {likes} = this.props;
    let quit = false;
    if (currentUser) {
      itemObject.likeIds.forEach(likeId => {
        if (likes[`${likeId}`].author_id === currentUser.id) {
          this.props.deleteLike(itemType, likeId);
          quit = true; //cant use break on forEach
        }
      });
      if (quit === true) return;
      this.props.postLike( itemType, itemObject.id, {author_id: currentUser.id});
    }
  }

  generatePic(imgUrl) {
    if (imgUrl === 'missing.png') return null;
    return (<img width="200px" src={imgUrl}></img>);
  }

  generateSteps() {
    const {steps} = this.props;
    const maximum = steps.length;
    let result = [];
    for (let i = 1; i <= maximum; i++) {
      steps.forEach(step => {
        if (step.step_order === i) {
          result.push(
            <div className="step">
              <div className="step-title">Step {i}/{maximum}</div>
              <p className="step-body">{step.body}</p>
            </div>
          );
        }
      });
    }
    return result;
  }

  generateEditButton() {
    if (!this.props.currentUser || this.props.currentUser.id !== this.props.recipe.author_id) {
      return null;
    }
    return (
      <Link to={`/recipes/${this.props.recipe.id}/edit`}>Edit</Link>
    );
  }

  generateStepForm() {
    if (!this.props.currentUser || this.props.currentUser.id !== this.props.recipe.author_id) {
      return null;
    }
    return (
      <form onSubmit={e => this.submitStep(e)}>
        <input ref="stepOrderInput" type="number" placeholder="order"/>
        <input ref="stepBodyInput" type="text" placeholder="body"/>
        <input ref="stepImgInput" type="file" />
        <input type="submit" />
      </form>
    );
  }

  submitStep(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("step[body]", this.refs.stepBodyInput.value);
    formData.append("step[step_order]", this.refs.stepOrderInput.value);
    formData.append("step[recipe_id]", this.props.recipe.id);
    if (this.refs.stepImgInput.files[0]) {
      formData.append("step[image]", this.refs.stepImgInput.files[0]);
    }
    this.props.postStep(formData);
  }

  render() {
    let {recipe} = this.props;
    let {likes} = this.props;
    let {comments} = this.props;
    //THIS IS WEIRD but it takes extra 1 react cycle to get params, so:
    // while (!recipe && !recipe.ingredients);
    if (!recipe || !recipe.ingredients || typeof recipe.ingredients !== "string"
      || !comments) {//check if it finishes loading all info after fetchRecipe
      return (<div>Loading...</div>);
    }

    //another dodge render case:
    let quit = false;
    recipe.likeIds.forEach(likeId => {
      if (!likes[`${likeId}`] || !likes[`${likeId}`].author_id) quit = true;
    });

    comments.forEach(comment => {
      comment.likeIds.forEach(likeId => {
        if (!likes[`${likeId}`] || !likes[`${likeId}`].author_id) quit = true;
      });
    });

    if (quit === true) return (<div>Loading</div>);

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
          <BigImage imgUrl={recipe.img_url} />
          <div id="header2" className="sticky-header-container">
            <div className="detail-navbar-container">
              <div className="buttons">
                <button onClick={(e) => this.jumpTo('ov', e)}
                  className="detail-button">Overview</button>
                <button onClick={(e) => this.jumpTo('st', e)}
                  className="detail-button">Steps</button>
                <button onClick={(e) => this.jumpTo('co', e)}
                  className="detail-button">Comments ({this.props.comments.length})</button>
                <div className="like-area">
                  <img className="like" src={this.generateLike(recipe)}
                    onClick={e => this.toggleLike("recipes", recipe, e)}/>
                  <div className="like-count">{recipe.likeIds.length}</div>
                </div>
              </div>
              <div className="sharing">
                <img src={window.imageUrls.iconFB}></img>
                <img src={window.imageUrls.iconTwitter}></img>
                <img src={window.imageUrls.iconPin}></img>
                <img src={window.imageUrls.iconMail}></img>
                <img src={window.imageUrls.iconPrint}></img>
              </div>
              <div className="right-col">
                <SuggestionBoxContainer />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="left-col">
            <p className="post-title">
              <div id="ov"></div>
              {recipe.title}
            </p>
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
            <div className="text">
              <div id="st"></div>
              {this.generateSteps()}
              {this.generateStepForm()}
              {this.generateEditButton()}
            </div>
            <CommentIndex comments={this.props.comments}
              users={this.props.users}
              postComment={this.props.postComment}
              currentUser={this.props.currentUser}
              generateLike={this.generateLike.bind(this)}
              toggleLike={this.toggleLike.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeShow;
