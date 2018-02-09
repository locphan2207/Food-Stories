import React from 'react';
import {Redirect} from 'react-router-dom';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img_url: "",
      difficulty: "easy",
      preparation_min: undefined,
      baking_min: undefined,
      resting_min: undefined,
      ingredients: {}
    };
  }

  //Add ingredient pair as key-value into state
  addIngre(e) {
    e.preventDefault();
    let ingredients = this.state.ingredients;
    ingredients[`${this.refs.ingreName.value}`] = `${this.refs.ingreQuan.value}`;
    this.setState({ingredients});
  }

  handleChange(e, property) {
    e.preventDefault();
    this.setState({[property]: e.target.value});
  }

  convertIngreToString() {
    let ingredients = this.state.ingredients;
    let result = "";
    Object.keys(ingredients).forEach(key => {
      result += `, ${key}: ${ingredients[`${key}`]}`;
    });
    return result.slice(2); //cut the first ", "
  }

  handleSubmit(e) {
    e.preventDefault();
    const recipe = Object.assign({}, this.state);
    recipe.author_id = this.props.currentUser.id;
    recipe.ingredients = this.convertIngreToString();
    this.props.submit(recipe);
  }

  componentWillReceiveProps(nextProps) {
    this.props.history.push(`/recipes/${nextProps.latestId}`); //this works
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
              <option value="easy" selected="selected">Easy</option>
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

          <p>Ingredients</p>
          <input ref="ingreName" type="text" placeholder="Ingredient"/>
          <input ref="ingreQuan" type="text" placeholder="Quantity"/>
          <button onClick={e => this.addIngre(e)}>Add ingredient</button>

          <input type="submit" value="Create" />
        </form>

        <ul>
          {this.props.errors}
        </ul>

        {
          Object.keys(this.state.ingredients).map(key => (
            <p>{key} - {this.state.ingredients[`${key}`]}</p>
          ))
        }
      </div>
    );
  }
}

export default RecipeForm;
