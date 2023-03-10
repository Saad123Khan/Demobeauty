import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import { Login } from './components/pages/Login';
import { Signup } from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
        
          <Route path='/products' component={Products} />
        
          <Route path='/sign-in' component={Login} />
        
          <Route path='/sign-up' component={Signup} />
        
        
        </Switch>
      </Router>
    </>
  );
}

export default App;
