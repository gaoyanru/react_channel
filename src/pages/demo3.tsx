import { Button } from 'antd'
import echarts from 'echarts'
import { DropDown } from 'pilipa'
import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/common'
declare module 'react' {
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    s?: string,
    x?: number
  }
}

interface Prop {
  x?: number
}
const taxesType: CustomOption[] = [
  {
    title: '--国地税--',
    key: -1
  }, {
    title: '国税',
    key: 1
  }, {
    title: '地税',
    key: 2
  }, {
    key: 3,
    title: 'sssst'
  }
]
// declare module 'antd' {
//   interface Button.ButtonProps {
//
//   }
// }

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       CustomButton: { cb: () => void }
//     }
//   }
// }
interface MyState {
  loading: boolean
  taxesType: CustomOption[]
  filter?: boolean
}

function identity<T> (arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
// 类型推断
identity([1, 2])
// 指定类型
// identity<string>('s' + 2)
// let i = identity

interface CustomButtonProp {
  cb?: (s: string) => void
  onClick?: React.FormEventHandler<any>
}

const CustomButton = (p: CustomButtonProp) => {
  const toClick = () => {
    if (p.cb) {
      p.cb('x')
    }
  }
  return (
    <button onClick={toClick}>点我</button>
  )
}

class Demo3 extends React.Component<any, MyState> {
  public state = {
    loading: false,
    taxesType,
    filter: true
  }
  public render () {
    console.log('render')
    return (
      <div>
        {
          <DropDown
            style={{float: 'left'}}
            data={this.props.accountantList}
            filter={this.state.filter}
            setFields={{key: 'ID', title: 'Name'}}
          >
          </DropDown>
        }
      </div>
    )
  }
}
// export default Demo3
export default connect(
  ({common}: any) => {
    return {
      ...common
    }
  }
)(Demo3)
