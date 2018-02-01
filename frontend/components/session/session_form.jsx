import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "Username", email: "E-mail", password: "Password", exit: false};
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
    if (user.username === "Username") user.username = "";
    if (user.email === "E-mail") user.email = "";
    if (user.password === "Password") user.password = "";
    this.props.submit(user);
  }

  render() {
    console.log(this.props);
    //Redirect if logged in:
    if (this.props.isLoggedIn || this.state.exit) {
      window.history.go(-1); // go back to previous page!!! LOVE IT
    }

    //If not logged in, start setting up form:
    let buttonText = 'Sign Up';
    let usernameField = (
        <input className="session-input"
          onFocus={e => this.handleFocus(e, "Username")}
          onBlur={e => this.handleFocusOut(e, "Username")}
          onChange={e =>this.setState({username: e.target.value})}
          type="text" value={this.state.username}/>
    );
    let welcomeText = 'Welcome to Food Stories';
    let subWelcomeText = 'Create your account';
    let welcomeImg = (<img className="two-hand"
      src={window.imageUrls.iconHand}></img>);
    let changeForm = (
      <p className="change-form">I already have an <Link to="/login">account</Link></p>
    );
    if (this.props.formType === 'login') {
      buttonText = 'Log In';
      usernameField = null;
      welcomeText = 'Welcome back!';
      subWelcomeText = 'Log in to your account';
      welcomeImg = (<img className="one-hand"
        src={window.imageUrls.peaceHands}></img>
      );
      changeForm = (
        <p className="change-form">I don’t have an account. <Link to="/signup">Sign-up!</Link></p>
      );
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
          <img id="close" onClick={() => this.setState({exit: true})}
            src={window.imageUrls.iconClose}></img>
          {welcomeImg}
          <p className="welcome1">{welcomeText}</p>
          <p className="welcome2">{subWelcomeText}</p>
          {usernameField}
          <input className="session-input"
            onFocus={e => this.handleFocus(e, "E-mail")}
            onBlur={e => this.handleFocusOut(e, "E-mail")}
            onChange={e =>this.setState({email: e.target.value})}
            type="text" value={this.state.email}/>
          <input className="session-input"
            onFocus={e => this.handleFocus(e, "Password")}
            onBlur={e => this.handleFocusOut(e, "Password")}
            onChange={e => this.setState({password: e.target.value})}
            type="text" value={this.state.password}/>
          <ul>{errorIndex}</ul>
          <input className="session-button" type="submit" value={buttonText} />
          {changeForm}
        </form>
      </div>
    );
  }
}

export default SessionForm;
