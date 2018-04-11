import React from 'react'
import { Table, Icon } from 'antd'
class TableSum extends React.Component {
  render () {
    const data = [{
      name: '渠道1',
      channel: '渠道1',
      sum1: 20,
      sum2: 30,
      sum3: 50
    }, {
      name: '渠道2',
      channel: '渠道2',
      sum1: 10,
      sum2: 50,
      sum3: 50
    }, {
      name: '渠道3',
      channel: '渠道3',
      sum1: 30,
      sum2: 70,
      sum3: 10
    }]
    const columns = [{
      title: '渠道名字',
      dataIndex: 'name'
    }, {
      title: '渠道2名称',
      dataIndex: 'channel'
    }, {
      title: '求和1',
      dataIndex: 'sum1'
    }, {
      title: '求和2',
      dataIndex: 'sum2'
    }, {
      title: '求和3',
      dataIndex: 'sum3'
    }]
    data.push({
      name: '-',
      channel: '-',
      sum1: 30,
      sum2: 70,
      sum3: 10
    })
    const currentPageData = (data) => {
      console.log(data, 'data')
      return '底部'
    }
    return (
      <Table
        columns={columns}
        dataSource={data}
        rowKey={record => record.name}
        bordered={true}
        footer={currentPageData}
      />
    )
  }
}
export default TableSum
