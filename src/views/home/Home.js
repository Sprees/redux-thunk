import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doSomething, getImage } from '../../ducks/reducer'

class Home extends Component {

  componentDidMount() {
    // this.props.doSomething()
    this.props.getImage()
  }

  render() {
    const { image, greeting } = this.props.state
    console.log(this.props.state)
    // console.log(this.state)
    return (
      <div>
        <div>
          { image ? <img src={ image } alt=""/> : null }
        </div>
        <div>
          { greeting }
        </div>
      </div>
    )
  }
}

export default connect(state => ({ state }), { doSomething, getImage })(Home)