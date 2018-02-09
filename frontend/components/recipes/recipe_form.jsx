import React from 'react';
import {Redirect} from 'react-router-dom';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img_url: "",
      difficulty: "",
      preparation_min: undefined,
      baking_min: undefined,
      resting_min: undefined,
      ingredients: undefined
    };
  }

  handleChange(e, property) {
    this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const recipe = Object.assign({}, this.state);
    recipe.author_id = this.props.currentUser.id;
    this.props.submit(recipe);
  }

  render() {
    console.log(this.state);
    if (!this.props.isLoggedIn) {
      return (
        <Redirect to="/login" />
      );
    }

    return (
      <div>
        <p>New Recipe</p>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Title:
            <input onChange={e => this.handleChange(e, 'title')}
              type="text" value={this.state.title} />
          </label>
          <label>Image URL:
            <input onChange={e => this.handleChange(e, 'img_url')}
              type="text" value={this.state.img_url} />
          </label>
          <label>Difficulty:
            <select onChange={e => this.handleChange(e, 'difficulty')}
              value={this.state.difficulty}>
              <option value="easy" default>Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          <label>Preparation Minute:
            <input onChange={e => this.handleChange(e, 'preparation_min')}
              type="number" value={this.state.preparation_min} />
          </label>
          <label>Baking Minute:
            <input onChange={e => this.handleChange(e, 'baking_min')}
              type="number" value={this.state.baking_min} />
          </label>
          <label>Resting Minute:
            <input onChange={e => this.handleChange(e, 'resting_min')}
              type="number" value={this.state.resting_min} />
          </label>
          <label>Ingredients: (name: quantity)
            <input onChange={e => this.handleChange(e, 'ingredients')}
              type="text" value={this.state.ingredients} />
          </label>
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default RecipeForm;
