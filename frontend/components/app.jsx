import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import GreetingContainer from './session/greeting_container';
import SessionFormContainer from './session/session_form_container';

import RecipeIndexContainer from './recipes/recipe_index_container';
import RecipeShowContainer from './recipes/recipe_show_container';
import RecipeFormContainer from './recipes/recipe_form_container';

import StoryIndexContainer from './stories/story_index_container';
import StoryShowContainer from './stories/story_show_container';

import RecipeSearchContainer from './recipes/recipe_search_container';

import LikedItemIndexContainer from './users_stuff/liked_item_index_container';

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
        <li><Link to="/recipes/new">Make your own recipe!</Link></li>
      </ul>
      <Route path='/' component={GreetingContainer} />
    </header>

    <Route path='/signup' component={SessionFormContainer} />
    <Route path='/login' component={SessionFormContainer} />

    <section className="main-section">
      <Route exact path='/' component={HomepageContainer} />
      <Route path='/liked_items' component={LikedItemIndexContainer} />

      <Route exact path='/recipes' component={RecipeSearchContainer} />
      <Route exact path='/recipes' component={RecipeIndexContainer} />
      <Switch>
        <Route path='/recipes/new' component={RecipeFormContainer} />
        <Route exact path='/recipes/:recipeId' component={RecipeShowContainer} />
        <Route path='/recipes/:recipeId/edit' component={RecipeFormContainer} />
      </Switch>

      <Route exact path='/stories' component={StoryIndexContainer} />
      <Route path='/stories/:storyId' component={StoryShowContainer} />
    </section>

    <footer>
      <p className="my-messages">This website is a clone of &nbsp;
        <a href="https://kitchenstories.io/en" target="_blank">
          <img height="20px" src="https://kitchenstories.io//images/logo_kitchen_stories.svg"></img>
        </a>
        &#160; for academic project
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
