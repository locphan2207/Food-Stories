import React from 'react';
import GreetingContainer from './session/greeting_container';
import SessionFormContainer from './session/session_form_container';
import RecipeIndexContainer from './recipes/recipe_index_container';
import {Route, Link} from 'react-router-dom';

const App = () => (
  <div>
    <header className="header-row">
      <h2 className="logo">Food Stories</h2>
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

    <Route path='/recipes' component={RecipeIndexContainer} />
  </div>
);

export default App;
