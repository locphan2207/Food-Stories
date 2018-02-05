import React from 'react';

class RecipeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", difficulty: "", maxCookingTime: ""};
  }

  handleChange(e, property) {
    this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchQuery = Object.assign({}, this.state);

  }

  render() {
    console.log(this.state);
    return (
      <form>
        <input onChange={e => this.handleChange(e, 'title')}
          type="text" name="title" value={this.state.title}/>
        <select value={this.state.difficulty}
            onChange={e => this.handleChange(e, 'difficulty')}>
          <option value="" disabled hidden>Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select value={this.state.maxCookingTime}
            onChange={e => this.handleChange(e, 'maxCookingTime')}>
          <option value="" disabled hidden>Cooking Time</option>
          <option value="20">Under 20</option>
          <option value="40">Under 40</option>
          <option value="60">Under 60</option>
        </select>
      </form>
    );
  }
}

export default RecipeSearch;
