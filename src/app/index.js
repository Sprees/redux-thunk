import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'

export default class App extends Component {
  render() {
    return (
      <Router>
        { routes }
      </Router>
    )
  }
}