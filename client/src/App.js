import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BackgroundImage } from './Styles/BackgroundImageStyle'
import HomePage from './components/HomePage'
import Login from './components/Login'
import UserPage from './components/UserPage'
import OtherUsersPage from './components/OtherUsersPage'
import RestaurantPage from './components/RestaurantPage'

class App extends Component {
  render() {
    return (
      <BackgroundImage>
        <Router>
          <Switch>
            <Route exact path='/userpage/:userId/restaurant' component={RestaurantPage} />
            <Route exact path='/otheruserspage' component={OtherUsersPage} />
            <Route exact path='/userpage' component={UserPage} />
            <Route exact path='/login' component={Login} />
            <Route path='/' component={HomePage} />
          </Switch>
        </Router>
      </BackgroundImage>
    )
  }
}

export default App
