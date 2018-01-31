import React from 'react';

class UserDropdown extends React.Component {
  render() {
    return (
      <div className="user-dropdown">
        <div className="user-info">
          <img src="https://support.plymouth.edu/kb_images/Yammer/default.jpeg">
          </img>
          <div className="user-text">
            <p className="username">{this.props.currentUser.username}</p>
            <p className="email">{this.props.currentUser.email}</p>
          </div>
        </div>
        <p className="logout" onClick={() => this.props.logout()}>Logout</p>
      </div>
    );
  }
}

export default UserDropdown;
