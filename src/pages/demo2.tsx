import { Button } from 'antd'
import echarts from 'echarts'
import { DropDown } from 'pilipa'
import React from 'react'
import getCapital from '../utils/getCapital'
console.log(getCapital('佛山无影脚'), 'getCapital')
const taxesType = [
  {
    title: '--国地税--',
    key: -1
  }, {
    title: '国税',
    key: 1
  }, {
    title: '地税',
    key: 2
  }
]
type S = any[]
const a: S = []
console.log(a)
declare module 'react' {
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    s?: string,
    x?: number
  }
}

interface Prop {
  x?: number
}

enum A {
  Up = 1,
  Down,
  Red = 100,
  Green,
  Yy
}

const s: any[] = []

interface MyProps {
  className?: any
  history: object
}
interface MyState {
  loading: boolean
}

export default class Login extends React.Component<MyProps, MyState> {
  public state = {
    loading: false
  }
  public componentWillMount () {
    console.log(this.props.history)
  }
  public componentDidMount () {
    const el: any = document.getElementById('test')
    const myChart = echarts.init(el)
    const img = $('img').viewer<any>({})

       // 指定图表的配置项和数据
    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
    myChart.setOption(option)
  }
  public handleClick () {
    this.setState({
      loading: !this.state.loading
    })
    setTimeout(() => {
      this.setState({
        loading: !this.state.loading
      })
    }, 1000)
  }
  public cb (x: string) {
    alert(x)
    console.log(this, 'this')
  }
  public toClick () {
    console.log(this)
  }
  public render () {
    return (
      <div>
        <img src='https://img.pilipa.cn/imgTest/72/3260/0001-01-01/6jrEkQGaJc.png' width='200px'/>
        <div id='test' style={{width: '600px', height: '400px'}}></div>

        <div id='main' ref='main'></div>
        <Button type='primary' onClick={this.handleClick.bind(this)} loading={this.state.loading}>
          Loading
        </Button>
        <i className='fa fa-camera-retro fa-lg'></i>
        <button type='button' className='btn btn-default' data-toggle='modal' data-target='#myModal'>
          Launch demo modal
        </button>
        <hr />
        <div className='modal fade' id='myModal' role='dialog' aria-labelledby='myModalLabel'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span></button>
                <h4 className='modal-title' id='myModalLabel'>Modal title</h4>
              </div>
              <div className='modal-body'>
                ...
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                <button type='button' className='btn btn-primary'>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// export default Login
