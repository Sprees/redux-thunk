import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import { Provider } from 'react-redux'
import store from '../ducks/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <Router>
          { routes }
        </Router>
      </Provider>
    )
  }
}