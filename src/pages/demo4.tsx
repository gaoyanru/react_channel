import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class Demo4 extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {}
  }

  public render () {
    return (
      <div>
        demo4
      </div>
    )
  }
}

export default connect(({demo4}: any) => {
  return {...demo4}
})(withRouter(Demo4))
