import React from 'react';

class SuggestionBox extends React.Component {
  handleImg() {
    let suggestPics = document.getElementsByClassName("suggest-pic");
    // if (!suggestPics) return;
    for (let i = 0; i < 3; i++) {
      if (suggestPics[i].width > 133) {
        const offset = suggestPics[i].width - 133;
        suggestPics[i].style = `transform: translateX(-${offset/2}px)`;
      }
    }
  }

  componentDidUpdate() {
    this.handleImg();
  }

  render() {
    if (!this.props.threeItems) return (<div>Loading...</div>);
    return (
      <div>
        <p>More delicious ideas for you</p>
        {
          this.props.threeItems.map(recipe => (
            <div key={recipe.id} className="suggest-item">
              <p>{recipe.title}</p>
              <div className="suggest-pic-container">
                <img className="suggest-pic" src={recipe.img_url}></img>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default SuggestionBox;
