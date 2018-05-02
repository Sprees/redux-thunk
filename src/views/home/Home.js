import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doSomething } from '../../ducks/reducer'

class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    this.props.doSomething()
  }

  render() {
    console.log(this.props)
    return (
      <div>Home View</div>
    )
  }
}

export default connect(state => ({ state }), { doSomething })(Home)