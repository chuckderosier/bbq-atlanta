import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login'
import UserPage from './components/UserPage'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/userpage' component={UserPage} />
          <Route exact path='/login' component={Login} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
