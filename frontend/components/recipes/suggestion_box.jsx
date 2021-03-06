import React from 'react';
import {Link} from 'react-router-dom';

class SuggestionBox extends React.Component {
  constructor(props) {
    super(props);
  }

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
    this.props.fetchRecipes();
  }

  componentDidUpdate() {
    this.handleImg();
  }

  render() {
    if (this.props.threeRecs.length < 3) return (<div>Loading...</div>);
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
