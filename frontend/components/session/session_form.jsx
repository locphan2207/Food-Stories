import React from 'react';
import {Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", email: "", password: ""};
    console.log(this.props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state); //Need this, idk why
    this.props.submit(user);
  }

  render() {
    //Redirect if logged in:
    if (this.props.isLoggedIn) {
      return (
        <Redirect to="/" />
      );
    }

    //If not logged in, start setting up form:
    let buttonText = 'Sign Up';
    let emailField = (
      <label>Email
        <input onChange={(e)=>this.setState({email: e.target.value})}
          type="text"/>
      </label>
    );
    if (this.props.formType === 'login') {
      buttonText = 'Log In';
      emailField = null;
    }
    let errorIndex = null;
    if (this.props.errors.length > 0) {
      errorIndex = (this.props.errors.map(error => (<li>{error}</li>)));
    }

    //Render form based on type:
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <ul>{errorIndex}</ul>
        <label>Username
          <input onChange={(e)=>this.setState({username: e.target.value})}
            type="text"/>
        </label>
        {emailField}
        <label>Password
          <input onChange={(e)=>this.setState({password: e.target.value})}
            type="password"/>
        </label>
        <input type="submit" value={buttonText} />
      </form>
    );
  }
}

export default SessionForm;
