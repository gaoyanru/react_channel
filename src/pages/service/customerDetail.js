import React from 'react'
import { Tabs } from 'antd'
import styles from '@/stylus/serviceCard'
import CusDetail1 from '@/containers/service/cusDetail1'
const TabPane = Tabs.TabPane
export default class CustomerDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      curKey: '1'
    }
    this.callback = this.callback.bind(this)
  }
  callback (key) {
    console.log(key)
    this.setState({
      curKey: key
    })
  }
  render () {
    const tabData1 = {
      CompanyName: '北京爱康鼎科技有限公司',
      CityName: '北京市',
      Contactor: '俞东浩',
      Mobile: '13386143761',
      SalesName: '何吉敏',
      Category: '小规模1',
      InfoSource: '天眼查1国家信息公示网2特殊公司3',
      RegNO: '911101053552537441',
      LegalPerson: '法人名',
      RegisterDate: '2015-08-20T00:00:00',
      PersonCardID: '65566566667767676',
      Address: '贵州省贵阳市云岩区浣沙路１号',
      RegisteredCapital: '100000万',
      BusnissDeadline: '2035-08-19T00:00:00',
      BusinessScope: '餐饮管理；企业管理咨询；经济贸易咨询；组织文化艺术交流活动（不含演出）；技术推广服务；销售日用品。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）'
    }
    return (
      <div className={styles['customer-detail']}>
        <h4 className={styles.title}>北京爱康鼎科技有限公司</h4>
        <div className={styles.con} style={{ margin: '24px 24px 0' }}>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="客户基本信息" key="1">
              <CusDetail1
                data={tabData1}
                curKey={this.state.curKey}
              />
            </TabPane>
            <TabPane tab="客户工商信息" key="2">
              <CusDetail1
                data={tabData1}
                key={this.state.curKey}
              />
            </TabPane>
            <TabPane tab="订单合同信息" key="3">Content of Tab Pane 3</TabPane>
            <TabPane tab="外勤任务信息" key="4">Content of Tab Pane 4</TabPane>
            <TabPane tab="会计做账信息" key="5">Content of Tab Pane 5</TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
