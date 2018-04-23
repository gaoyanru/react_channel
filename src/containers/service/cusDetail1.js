import React from 'react'
import { Row, Col } from 'antd'
import styles from '@/stylus/serviceCard'
export default class CusDetail1 extends React.Component {
  render () {
    const item = this.props.data
    return (
      <div className={styles['basic-info']}>
        {
          (+this.props.curKey === 1) &&
          <div>
            <Row className={styles['mt20']}>
              <Col span={8}>
                <label>公司名称：</label>
                <span>{item.CompanyName}</span>
              </Col>
              <Col span={8}>
                <label>地区：</label>
                <span>{item.CityName}</span>
              </Col>
            </Row>
            <Row className={styles['mt20']}>
              <Col span={8}>
                <label>联系人：</label>
                <span>{item.Contactor}</span>
              </Col>
              <Col span={8}>
                <label>联系方式：</label>
                <span>{item.Mobile}</span>
              </Col>
              <Col span={8}>
                <label>销售负责人：</label>
                <span>{item.SalesName}</span>
              </Col>
            </Row>
            <Row className={styles['mt20']}>
              <Col span={8}>
                <label>纳税人类别：</label>
                <span>{item.Category}</span>
              </Col>
              <Col span={8}>
                <label>信息来源：</label>
                <span>{item.InfoSource}</span>
              </Col>
            </Row>
          </div>
        }
        {
          (+this.props.curKey === 2) &&
          <div className={styles['basic-info']}>
            <Row className={styles['mt20']}>
              <Col span={8}>
                <label>统一社会信息代码：</label>
                <span>{item.RegNO}</span>
              </Col>
              <Col span={8}>
                <label>法人姓名：</label>
                <span>{item.LegalPerson}</span>
              </Col>
              <Col span={8}>
                <label>成立日期：</label>
                <span>{item.RegisterDate}</span>
              </Col>
            </Row>
            <Row className={styles['mt20']}>
              <Col span={8}>
                <label>法人身份证：</label>
                <span>{item.PersonCardID}</span>
              </Col>
              <Col span={8}>
                <label>公司住所：</label>
                <span>{item.Address}</span>
              </Col>
              <Col span={8}>
                <label>注册资金：</label>
                <span>{item.RegisteredCapital}</span>
              </Col>
            </Row>
            <Row className={styles['mt20']}>
              <Col span={8}>
                <label>营业期限：</label>
                <span>{item.RegisterDate}到</span>
                <span>{item.BusnissDeadline}</span>
              </Col>
              <Col span={16}>
                <label>经营范围：</label>
                <span>{item.BusinessScope}</span>
              </Col>
            </Row>
          </div>
        }
      </div>
    )
  }
}
