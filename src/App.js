import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import User from './pages/User'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/user" component={User} />
        </Switch>
      </div>
    )
  }
}
