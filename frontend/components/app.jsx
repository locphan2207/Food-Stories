import React from 'react';
import {Route, Link} from 'react-router-dom';

import GreetingContainer from './session/greeting_container';
import SessionFormContainer from './session/session_form_container';

import RecipeIndexContainer from './recipes/recipe_index_container';
import RecipeShowContainer from './recipes/recipe_show_container';

import StoryIndexContainer from './stories/story_index_container';
import StoryShowContainer from './stories/story_show_container';

import RecipeSearchContainer from './recipes/recipe_search_container';

import HomepageContainer from './homepage_container';

// import {handleBigImg} from '../util/display_util';

const App = () => (
  <div id="app">
    <header id="header1" className="header-row">
      <Link to="/" className="logo"><img src={window.imageUrls.logo}></img></Link>
      <ul className="navigation">
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/how-tos">How-tos</Link></li>
        <li><Link to="/videos">Videos</Link></li>
      </ul>
      <Route path='/' component={GreetingContainer} />
    </header>

    <Route path='/signup' component={SessionFormContainer} />
    <Route path='/login' component={SessionFormContainer} />

    <section className="main-section">
      <Route exact path='/' component={HomepageContainer} />
      <Route exact path='/recipes' component={RecipeSearchContainer} />
      <Route exact path='/recipes' component={RecipeIndexContainer} />
      <Route exact path='/stories' component={StoryIndexContainer} />
      <Route path='/recipes/:recipeId' component={RecipeShowContainer} />
      <Route path='/stories/:storyId' component={StoryShowContainer} />
    </section>

    <footer>
      <p className="my-messages">This website is a clone of &nbsp;
        <a href="https://kitchenstories.io/en" target="_blank">
          <img height="20px" src="https://kitchenstories.io//images/logo_kitchen_stories.svg"></img>
        </a>
        for academic project
        <br></br>
      </p>
      <p className="thank-you">Thank you Kitchen Stories for the awesome website!</p>
      <div className="social-links">
        <a href="https://github.com/locphan2207/Food-Stories" target="_blank">
          <img className="social-icon" src={window.imageUrls.github}></img>
        </a>
      </div>
    </footer>
  </div>
);

export default App;
