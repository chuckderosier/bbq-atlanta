import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BackgroundImage } from './Styles/BackgroundImageStyle'
import HomePage from './components/HomePage'
import Login from './components/Login'
import UserPage from './components/UserPage'
import UpdateUserForm from './components/UpdateUserForm'
import OtherUsersPage from './components/OtherUsersPage'
import RestaurantPage from './components/RestaurantPage'
import RestaurantForm from './components/RestaurantForm'
import MainsPage from './components/MainsPage'
import SidesPage from './components/SidesPage'
import DessertsPage from './components/DessertsPage'

class App extends Component {
  render() {
    return (
      <BackgroundImage>
        <Router>
          <Switch>
            <Route exact path='/user/:userId/restaurant/:restaurantId/desserts' component={DessertsPage} />
            <Route exact path='/user/:userId/restaurant/:restaurantId/sides' component={SidesPage} />
            <Route exact path='/user/:userId/restaurant/:restaurantId/mains' component={MainsPage} />
            <Route exact path='/user/:userId/restaurantForm' component={RestaurantForm} />
            <Route exact path='/user/:userId/restaurant' component={RestaurantPage} />
            <Route exact path='/otheruserspage' component={OtherUsersPage} />
            <Route exact path='/user/updateUserForm' component={UpdateUserForm} />
            <Route exact path='/user' component={UserPage} />
            <Route exact path='/login' component={Login} />
            <Route path='/' component={HomePage} />
          </Switch>
        </Router>
      </BackgroundImage>
    )
  }
}

export default App
