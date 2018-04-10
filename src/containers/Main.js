import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '@/actions/common'
const styles = {
  container: {
    width: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0'
  },
  main: {
    width: '100%',
    position: 'absolute',
    top: '60px',
    bottom: 0,
    overflow: 'scroll'
  }
}
class Main extends React.Component {
  render () {
    const { online } = this.props
    return (
      <div style={styles.container}>
        { online && <div>
          <Top />
          <div style={styles.main}>
            {this.props.children}
          </div>
        </div> }
      </div>
    )
  }
}
export default withRouter(connect(({common}) => common)(Main))
