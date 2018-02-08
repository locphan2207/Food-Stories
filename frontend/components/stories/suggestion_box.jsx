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
    this.props.fetchStories();
  }

  componentDidUpdate() {
    this.handleImg();
  }

  render() {
    console.log('suggest loading');
    if (!this.props.threeStos) return (<div>Loading...</div>);
    console.log('suggestiong rendering');
    return (
      <div>
        <p className="suggest-sentence">More delicious ideas for you</p>
        {
          this.props.threeStos.map(story => (

            <Link to={`/stories/${story.id}`} className="suggest-item"
                key={story.id} >
              <div className="suggest-pic-container">
                <img className="suggest-pic" src={story.img_url}></img>
              </div>
              <p>{story.title}</p>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default SuggestionBox;
