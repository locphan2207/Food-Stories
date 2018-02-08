import React from 'react';
import {Link} from 'react-router-dom';

import LikedRecipeIndexContainer from '../recipes/liked_recipe_index_container';

class UserDropdown extends React.Component {
  render() {
    return (
        <div className="user-dropdown">
          <div className="triangle"></div>
          <img id="close" onClick={() => this.props.close()}
            src={window.imageUrls.iconClose}></img>
          <div className="user-info">
            <img src={this.props.currentUser.pic_url}>
            </img>
            <div className="user-text">
              <p className="username2">{this.props.currentUser.username}</p>
              <p className="email">{this.props.currentUser.email}</p>
            </div>
            <div className="liked-recipes-link">
              <Link to="/liked_recipes">Likes</Link>
            </div>
          </div>
          <p className="logout" onClick={() => this.props.logout()}>Logout</p>
        </div>
    );
  }
}

export default UserDropdown;
