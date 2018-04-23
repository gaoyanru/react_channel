import React from 'react'
import { Card, List, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import styles from '@/stylus/serviceCard'
import Search from '@/containers/Search'
import CustomerDetail from '@/pages/service/customerDetail'
import { fetchListAction } from '@/actions/customerService'

class CustomerService extends React.Component {
  constructor (props) {
    super(props)
    this.goCustomerInfo = this.goCustomerInfo.bind(this)
    console.log(this.props, 'props')
    // this.props.dispatch(fetchListAction())
  }
  onSearch (res) {
    console.log(res)
  }
  goCustomerInfo () {
    console.log('详情')
    this.props.history.push('/customer/detail')
  }
  render () {
    const dataSource = [{
      Id: 1,
      CompanyName: '北京爱康鼎科技有限公司',
      CityName: '北京市',
      Belong: '直营',
      Contactor: '噼里啪',
      Phone: '13521677472',
      Orders: '5'
    }, {
      Id: 2,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 3,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 4,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 5,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 6,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 7,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 8,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 9,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 10,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 11,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 12,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 13,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 14,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }, {
      Id: 15,
      CompanyName: '南京全时科技有限公司',
      CityName: '南京市',
      Belong: '渠道',
      Contactor: '全时',
      Phone: '13521677472',
      Orders: '3'
    }]
    return (
      <div>
        <div className={styles.searchList}>
          <Search
            paramKeys={[1, 2, 3]}
            onSearch={this.onSearch.bind(this)}
            isAddUser={false}
          />
        </div>
        <div className={styles.cardList}>
          <List
            grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
            dataSource={dataSource}
            renderItem={item => (
              <List.Item key={item.Id}>
                <Card title={item.CompanyName} className={styles['card-head']} onClick={this.goCustomerInfo}>
                  <Row>
                    <Col span={12}>
                      <label>联系人：</label>
                      <span>{item.Contactor}</span>
                    </Col>
                    <Col span={12}>
                      <label>联系方式：</label>
                      <span>{item.Phone}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <label>所属城市：</label>
                      <span>{item.CityName}</span>
                    </Col>
                    <Col span={12}>
                      <label>直营/渠道：</label>
                      <span>{item.Belong}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <label>订单数量：</label>
                      <span>{item.Orders}</span>
                    </Col>
                  </Row>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>

    )
  }
}
export default connect()(CustomerService)
// export default UsersAccount
