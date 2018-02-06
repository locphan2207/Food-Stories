import React from 'react';

class RecipeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", difficulty: "", maxCookingTime: ""};
  }

  generateActiveFilters() {
    if (this.state.difficulty === "" && this.state.maxCookingTime === "") {
      return null;
    }
    let difficultyFilter = null;
    let timeFilter = null;
    if (this.state.difficulty !== "") {
      difficultyFilter = (<p onClick={e => this.setState({difficulty: ""})}>
      {this.state.difficulty}</p>);
    }
    if (this.state.maxCookingTime !== "") {
      timeFilter = (<p onClick={e => this.setState({maxCookingTime: ""})}>
      {this.state.maxCookingTime}</p>);
    }

    return (
      <div>Active Filters: (click on it to remove filter):
        {[difficultyFilter, timeFilter]}</div>
    );
  }

  handleChange(e, property) {
    this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchQuery = Object.assign({}, this.state);
    this.props.searchRecipe(searchQuery);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input onChange={e => this.handleChange(e, 'title')}
            type="text" name="title" value={this.state.title}/>
          <select value={this.state.difficulty}
              onChange={e => this.handleChange(e, 'difficulty')}>
            <option value="" disabled>Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select value={this.state.maxCookingTime}
              onChange={e => this.handleChange(e, 'maxCookingTime')}>
            <option value="" disabled>Cooking Time</option>
            <option value="20">Under 20</option>
            <option value="40">Under 40</option>
            <option value="60">Under 60</option>
          </select>
          <input type="submit" value="Search" />
        </form>
        {this.generateActiveFilters()}
      </div>
    );
  }
}

export default RecipeSearch;
