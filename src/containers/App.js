import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
class App extends Component {
  render () {
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(connect(({common}) => {
  return common
})(App))
