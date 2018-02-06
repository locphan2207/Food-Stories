import React from 'react';

class RecipeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", difficulty: "", maxCookingTime: ""};
  }

  generateActiveFilters() {
    // Dodge condition:
    if (this.state.title === "" &&
      this.state.difficulty === "" && this.state.maxCookingTime === "") {
        return null;
    }

    const timeDisplayText = { // for display
      20: "under 20 min.",
      40: "under 40 min.",
      60: "under 60 min."
    };

    let filters = [null, null, null];
    const properties = ['title', 'difficulty', 'maxCookingTime'];
    properties.forEach((property, i) => {
      if (this.state[property] !== "") {
        if (i === 2) { // to display cooking time, its a lil different than others
          filters[i] = (<p key={i} onClick={e => this.removeFilter(e, property)}>
            {timeDisplayText[this.state[property]]}</p>);
        } else {
          filters[i] = (<p key={i} onClick={e => this.removeFilter(e, property)}>
            {this.state[property]}</p>);
        }
      }
    });
    return (
      <div className="search-info">Searching with: (click each to remove search query):
        {filters}</div>
    );
  }

  removeFilter(e, property) {
    this.setState({[property]: ""});
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
      <div className="search-container">
        <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
          <input className="search-title"
            onChange={e => this.handleChange(e, 'title')}
            placeholder="Search for ..." type="text" name="title" value={this.state.title}/>
          <div className="filters-container">
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
            <input className="search-button" type="submit" value="Search" />
          </div>
          
          {this.generateActiveFilters()}
        </form>
      </div>
    );
  }
}

export default RecipeSearch;
