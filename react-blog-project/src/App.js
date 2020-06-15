import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import Home from './App/Home/Home.js'
import Posts from './App/Posts/Posts'
import About from './App/About/About'
import Authors from './App/Authors/Authors'
import AboutPost from './App/AboutPost/AboutPost'
import { Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/AbouthPost' component={AboutPost}/>
      <Route path='/Posts' component={Posts}/>
      <Route path='/About' component={About}/>
      <Route path='/Authors' component={Authors}/>
    </Switch>
  );
}

export default App;
