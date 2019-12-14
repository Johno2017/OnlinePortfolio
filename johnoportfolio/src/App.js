import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/About" component = {About}/>
        </Switch>
        
      </div>
    </Router>
   
  );
}

export default App;
