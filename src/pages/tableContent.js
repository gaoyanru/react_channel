import React from 'react'
// import SearchForm from '@/components/common/searchForm'
import { Card, Row, Col, Form, Input, Select, Icon, Button, Dropdown, InputNumber } from 'antd'
import styles from '@/stylus/tableContent'
const FormItem = Form.Item
class TableCon extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expandForm: false
    }
  }
  handleSearch (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('提交查询')
      }
    })
  }
  handleFormReset () {
    this.props.form.resetFields()
  }
  toggleForm () {
    this.setState({
      expandForm: !this.state.expandForm
    })
  }
  renderSimpleForm () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSearch.bind(this)} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="规则编号">
              {getFieldDecorator('no')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="使用状态">
              {getFieldDecorator('status')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="0">关闭</Option>
                  <Option value="1">运行中</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset.bind(this)}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm.bind(this)}>
                展开 <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    )
  }
  renderAdvancedForm () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="规则编号">
              {getFieldDecorator('no')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="使用状态">
              {getFieldDecorator('status')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="0">关闭</Option>
                  <Option value="1">运行中</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="调用次数">
              {getFieldDecorator('number')(<InputNumber style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
        </Row>
        <div style={{ overflow: 'hidden' }}>
          <span style={{ float: 'right', marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset.bind(this)}>
              重置
            </Button>
            <a style={{ marginLeft: 8 }} onClick={this.toggleForm.bind(this)}>
              收起 <Icon type="up" />
            </a>
          </span>
        </div>
      </Form>
    )
  }
  renderForm () {
    return this.state.expandForm ? this.renderAdvancedForm() : this.renderSimpleForm()
  }
  render () {
    return (
      <Card bordered={false}>
        <div className={styles.tableList}>
          <div className={styles.tableListForm}>{this.renderForm()}</div>
          <div style={{ height: '500px' }}>qq</div>
        </div>
      </Card>
    )
  }
}
export default Form.create()(TableCon)
