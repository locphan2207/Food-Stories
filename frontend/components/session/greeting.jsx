import React from 'react';
import {Route, Link} from 'react-router-dom';

const Greeting = (props) => {
  if (props.currentUser) {
    return (
      <div className="right-menu">
        <img className="profile-pic"
          src="https://support.plymouth.edu/kb_images/Yammer/default.jpeg">
        </img>
        <p className="username">{props.currentUser.username}
          <div className="user-dropdown">
            <div className="user-info">
              <img src="https://support.plymouth.edu/kb_images/Yammer/default.jpeg">
              </img>
              <div className="user-text">
                <p className="username">{props.currentUser.username}</p>
                <p className="email">{props.currentUser.email}</p>
              </div>
            </div>
            <p className="logout" onClick={() => props.logout()}>Logout</p>
          </div>

        </p>
      </div>
    );
  } else {
    return (
      <div className="right-menu">
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
};

export default Greeting;
