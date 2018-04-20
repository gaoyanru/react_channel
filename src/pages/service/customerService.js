import React from 'react'
import { Card, Col, Row } from 'antd'
import { connect } from 'react-redux'
import styles from '@/stylus/serviceCard'
import Search from '@/containers/Search'
import { fetchListAction } from '@/actions/customerService'

class CustomerService extends React.Component {
  constructor (props) {
    super(props)
    this.detail = this.detail.bind(this)
    console.log(this.props, 'props')
    // this.props.dispatch(fetchListAction())
  }
  onSearch (res) {
    console.log(res)
  }
  detail () {
    console.log('详情')
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
          <Row gutter={16} style={{ marginLeft: '0', marginRight: '0' }}>
            {dataSource.map((item, index) => {
              return (
                <Col className={styles.card} key={item.Id} span={8}>
                  <div>{item.CompanyName}</div>
                  <div>{item.CityName}</div>
                  <div>{item.Belong}</div>
                  <div>{item.Contactor}</div>
                  <div>{item.Phone}</div>
                  <div>{item.Orders}</div>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>

    )
  }
}
export default connect()(CustomerService)
// export default UsersAccount
