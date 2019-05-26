import React, { Component } from 'react'
import App from './App'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import A from './component/A'
import B from './component/B'
export default class IRouter extends Component {
  render() {
    return (
      <div>
          <Router>
                <App>
                    <Route path="/a" component={A}></Route>
                    <Route path="/b" component={B}></Route>
                    <Route path="/c" component={C}></Route>
                </App>
          </Router>
      </div>
    )
  }
}
