import { Button, Col, Form, Icon, Input, Select, Row } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '@/stylus/search'
const FormItem = Form.Item
class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expandForm: false
    }
    this.nodes = []
  }
  handleSearch (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.props.onSearch) {
          const res = this.handleSearchRes(values.filed)
          this.props.onSearch(res)
        }
      }
    })
  }
  addNew () {
    this.props.addNew()
  }
  handleFormReset () {
    this.props.form.resetFields()
  }
  toggleForm () {
    const { paramKeys } = this.props
    this.setState({
      expandForm: !this.state.expandForm
    })
  }
  handleSearchRes (values) {
    const { paramKeys } = this.props
    const res = []
    console.log(values)
    paramKeys.map((item) => {
      console.log(values[item], item)
      res.push(values[item])
    })
    console.log(res, 'res')
    return res
  }
  getParamNodes () {
    const { getFieldDecorator } = this.props.form
    const { paramKeys } = this.props
    const { expandForm } = this.state
    const Rows = [
      <FormItem label="">
        {getFieldDecorator('filed[0]')(<Input placeholder="搜索用户名" />)}
      </FormItem>,
      <FormItem label="状态">
        {getFieldDecorator('filed[1]')(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            <Select.Option value="0">关闭</Select.Option>
            <Select.Option value="1">运行中</Select.Option>
          </Select>
        )}
      </FormItem>,
      <FormItem label="状态">
        {getFieldDecorator('filed[2]')(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            <Select.Option value="0">关闭</Select.Option>
            <Select.Option value="1">运行中</Select.Option>
          </Select>
        )}
      </FormItem>,
      <FormItem label="规则编号">
        {getFieldDecorator('filed[3]')(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem label="使用状态">
        {getFieldDecorator('filed[4]')(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            <Select.Option value="0">关闭</Select.Option>
            <Select.Option value="1">运行中</Select.Option>
          </Select>
        )}
      </FormItem>,
      <FormItem label="年龄">
        {getFieldDecorator('filed[5]')(<Input style={{ width: '100%' }} />)}
      </FormItem>,
      <FormItem label="地址">
        {getFieldDecorator('filed[6]')(<Input placeholder="请输入" />)}
      </FormItem>
    ]
    this.nodes = []
    paramKeys.map((item, index) => {
      this.nodes.push(
        <Col key={`search-param-${index}`} md={8} sm={24}>
          {Rows[item]}
        </Col>
      )
    })
    return !expandForm ? this.nodes.slice(0, 2) : this.nodes
  }
  render () {
    return (
      <Form onSubmit={this.handleSearch.bind(this)} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          {this.getParamNodes()}
          <Col md={8} sm={24} className={styles['submit-buttons']}>
            <FormItem>
              <span>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset.bind(this)}>
                  重置
                </Button>
                <Button type="primary" style={{ marginLeft: 8 }} onClick={this.addNew.bind(this)}>
                  添加员工
                </Button>
                {
                  this.nodes.length > 2 && (
                    !this.state.expandForm ? (
                      <a style={{ marginLeft: 8 }} onClick={this.toggleForm.bind(this)}>
                        展开 <Icon type="down" />
                      </a>
                    ) : (
                      <a style={{ marginLeft: 8 }} onClick={this.toggleForm.bind(this)}>
                        收起 <Icon type="up" />
                      </a>
                    )
                  )
                }
              </span>
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
}
Search.propTypes = {
  paramKeys: PropTypes.array.isRequired,
  onSearch: PropTypes.func
}
export default Form.create()(Search)
