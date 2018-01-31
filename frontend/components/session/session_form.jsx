import React from 'react';
import {Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "Username", email: "Email", password: "Password", exit: false};
    console.log(this.props);
  }

  handleFocus(e, label) {
    if (e.target.value === "Password") e.target.type = "password";
    if (e.target.value === label) e.target.value = "";
  }

  handleFocusOut(e, label) {
    if (e.target.value === "") {
      e.target.value=label;
      e.target.type = "text";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state); //Need this, idk why
    this.props.submit(user);
  }

  render() {
    //Redirect if logged in:
    if (this.props.isLoggedIn || this.state.exit) {
      return (
        <Redirect to="/" />
      );
    }

    //If not logged in, start setting up form:
    let buttonText = 'Sign Up';
    let usernameField = (
        <input
          onFocus={e => this.handleFocus(e, "Username")}
          onBlur={e => this.handleFocusOut(e, "Username")}
          onChange={e =>this.setState({username: e.target.value})}
          type="text" value={this.state.username}/>
    );
    let welcomeText = 'Welcome to Kitchen Stories';
    let subWelcomeText = 'Create your account';

    if (this.props.formType === 'login') {
      buttonText = 'Log In';
      usernameField = null;
      welcomeText = 'Welcome back!';
      subWelcomeText = 'Log in to your account';
    }
    let errorIndex = null;
    if (this.props.errors.length > 0) {
      errorIndex = (this.props.errors.map(error => (<li>{error}</li>)));
    }

    //onClick={() => this.setState({exit: true})}
    //Render form based on type:
    return (
      <div className="modal-screen">
        <form
          className="modal-form"
          onSubmit={e => this.handleSubmit(e)}>
          <p className="welcome1">{welcomeText}</p>
          <p className="welcome2">{subWelcomeText}</p>
          <ul>{errorIndex}</ul>
          {usernameField}
          <input
            onFocus={e => this.handleFocus(e, "Email")}
            onBlur={e => this.handleFocusOut(e, "Email")}
            onChange={e =>this.setState({email: e.target.value})}
            type="text" value={this.state.email}/>
          <input
            onFocus={e => this.handleFocus(e, "Password")}
            onBlur={e => this.handleFocusOut(e, "Password")}
            onChange={e => this.setState({password: e.target.value})}
            type="text" value={this.state.password}/>
          <input type="submit" value={buttonText} />
        </form>
      </div>
    );
  }
}

export default SessionForm;
