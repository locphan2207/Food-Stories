import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", email: "", password: "", exit: false};
    this.interval;
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
    this.props.clearError(); //perfect time to clear errors
  }

  //I didnt know about placeholder, that's why I did this:
  // handleFocus(e, label) {
  //   if (e.target.value === "Password") e.target.type = "password";
  //   if (e.target.value === label) e.target.value = "";
  //   e.target.style = "color: black";
  // }
  //
  // handleFocusOut(e, label) {
  //   if (e.target.value === "") {
  //     e.target.value=label;
  //     e.target.type = "text";
  //     e.target.style = "color: #d8d8d8";
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state); //Need this, idk why
    if (user.username === "Username") user.username = "";
    if (user.email === "E-mail") user.email = "";
    if (user.password === "Password") user.password = "";
    this.props.submit(user);
  }

  demoLogin() {
    const guest = {username: "beautiful_guest", email: "guest@gmail.com", password: "secret"};
    $('.session-input').val("");
    $('.session-input').attr("placeholder", "");
    if (this.props.formType === 'signup') {
      let $username = $('#virtual-username');
      $username.css('display', 'block');
      $username.addClass('animated fadeInRight');
    }

    let $email = $('#virtual-email');
    $email.css({'display':'block'});
    $email.addClass('animated fadeInRight');


    let $password = $('#virtual-password');
    $password.css('display', 'block');
    $password.addClass('animated fadeInRight');


    this.interval = window.setInterval(() => this.props.guestLogin(guest), 1500);
  }

  render() {
    //Redirect if logged in:
    if (this.props.isLoggedIn || this.state.exit) {
      window.history.go(-1); // keep going back until not login/signup!
    }

    //If not logged in, start setting up form:
    let buttonText = 'Sign Up';
    let usernameField = (
        <input className="session-input"
          placeholder="Username"
          onChange={e =>this.setState({username: e.target.value})}
          type="text" value={this.state.username}/>);
    let welcomeText = 'Welcome to Food Stories';
    let subWelcomeText = 'Create your account';
    let welcomeImg = (<img className="two-hand"
      src={window.imageUrls.iconHand}></img>);
    let changeForm = (
      <p className="change-form">I already have an <Link to="/login">account</Link></p>);
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
          <p className="welcome1 ">{welcomeText}</p>
          <p className="welcome2">{subWelcomeText}</p>
          <div className="session-input-container">
            {usernameField}
            <input className="session-input"
              placeholder="E-mail"
              onChange={e =>this.setState({email: e.target.value})}
              type="text" value={this.state.email}/>
            <input className="session-input"
              placeholder="Password"
              onChange={e => this.setState({password: e.target.value})}
              type="password" value={this.state.password}/>
            <input id="virtual-username" value="beautiful_guest" />
            <input id="virtual-email" value="guest@gmail.com" />
            <input id="virtual-password" value="secret" type="password"/>
          </div>
          <ul>{errorIndex}</ul>
          <input className="session-button" type="submit" value={buttonText} />
          {changeForm}
          <p className="demo">Are you a recruiter?
            Use the <span onClick={() => this.demoLogin()}>Guest login</span>.
          </p>
        </form>
      </div>
    );
  }
}

export default SessionForm;
