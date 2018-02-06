import React from 'react';
import {Route, Link} from 'react-router-dom';
import UserDropdown from './user_dropdown';

class Greeting extends React.Component {
  constructor(props) {
    super();
    this.state = {isOpen: false};
  }

  toggleDropdown() {
    if (this.state.isOpen === true) this.setState({isOpen: false});
    else this.setState({isOpen: true});
  }

  render() {
    let userDropdown = null;
    if (this.state.isOpen === true) userDropdown = (
      <UserDropdown logout={this.props.logout}
        currentUser={this.props.currentUser}
        close={this.setState.bind(this, {isOpen: false})}/>
    );
    if (this.props.currentUser) {
      return (
        <div className="right-menu">
          <Link to="/recipes">
            <img className="searchIcon"
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png">
            </img>
          </Link>
          <img className="profile-pic"
            src={window.imageUrls.userDefault}>
          </img>
          <p onClick={() => this.toggleDropdown()}
            className="username1">{this.props.currentUser.username}</p>
          {userDropdown}
        </div>
      );
    } else {
      return (
        <div className="right-menu">
          <Link to="/recipes">
            <img className="searchIcon"
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png">
            </img>
          </Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  }

}

export default Greeting;
