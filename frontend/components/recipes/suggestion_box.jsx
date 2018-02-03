import React from 'react';

class SuggestionBox extends React.Component {
  componentDidUpdate() {
    this.props.fetchItems();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>More delicious ideas for you</p>
        <div>
          <img src={this.props.img_url}></img>
        </div>
      </div>
    );
  }
}

export default SuggestionBox;
