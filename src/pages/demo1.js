import React from 'react'
import { findDOMNode } from 'react-dom'
import { Alert } from 'antd'
import echarts from 'echarts'
import { connect } from 'react-redux'
class Demo1 extends React.Component {
  handleClick () {
    const { dispatch } = this.props
    dispatch({type: 'USER_FETCH_REQUESTED', payload: 1})
  }
  handleClick2 () {
    console.log(findDOMNode(this.refs.alert))
    console.log($(this.refs.alert))
  }
  handleRef (res) {
    console.log($(res).html(), 'ref')
  }
  render () {
    const { userInfo, loading } = this.props
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this)}> demo 1</button>{loading !== undefined ? (loading ? '请求中...' : '请求成功') : ''}
        <div ref='xxx'>name: {userInfo.name}</div>
        <button className="btn btn-primary" onClick={this.handleClick2.bind(this)}>viewer</button>
        <Alert message="Warning text" type="warning" closable onClose={this.handleClick.bind(this)} ref="alert"/>
      </div>
    )
  }
}
export default connect(({demo1, common}) => {
  console.log(demo1, common)
  return {
    ...demo1,
    ...common
  }
})(Demo1)
