import React from 'react';
import {Link} from 'react-router-dom';

class SuggestionBox extends React.Component {
  handleImg() {
    let suggestPics = document.getElementsByClassName("suggest-pic");
    if (!suggestPics) return;
    for (let i = 0; i < 3; i++) {
      if (suggestPics[i].width > 133) {
        const offset = suggestPics[i].width - 133;
        suggestPics[i].style = `transform: translateX(-${offset/2}px)`;
      }
    }
  }

  componentDidMount() {
    // this.props.fetchRecipes();
    // I want to save data when refreshing page, so:
    // window.addEventListener("beforeunload", this.savePropsToLocalStorage());
  }

  componentDidUpdate() {
    // this.handleImg();
  }

  // savePropsToLocalStorage() { //for when refreshing
  //   if (this.props.threeRecs && this.props.threeRecs[0] &&
  //     this.props.threeRecs[1] && this.props.threeRecs[2]) {
  //     localStorage.setItem("savedThreeRecs", JSON.stringify(this.props.threeRecs));
  //   }
  // }

  render() {
    if (!this.props.threeRecs) return (<div>Loading...</div>);
    // if (!threeRecs) threeRecs = JSON.parse(localStorage.getItem("savedThreeRecs")); // if refresh, get from local storage
    return (
      <div>
        <p className="suggest-sentence">More delicious ideas for you</p>
        {
          this.props.threeRecs.map(recipe => (

            <Link to={`/recipes/${recipe.id}`} className="suggest-item"
                key={recipe.id} >
              <div className="suggest-pic-container">
                <img className="suggest-pic" src={recipe.img_url}></img>
              </div>
              <p>{recipe.title}</p>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default SuggestionBox;
