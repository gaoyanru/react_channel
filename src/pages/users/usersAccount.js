import React from 'react'
import { Card, Row, Col, Form, Input, Button, Table, Divider } from 'antd'
import styles from '@/stylus/tableContent'
import Modal from '@/components/common/modal'
import UserInfo from '@/containers/users/userInfo'
const FormItem = Form.Item
class UsersAccount extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    // this.editUser = this.editUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.accreditUser = this.accreditUser.bind(this)
    this.addNew = this.addNew.bind(this)
  }
  handleSearch (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('提交查询')
      }
    })
  }
  editUser (record) {
    console.log(record, 'record')
  }
  deleteUser (record) {
    console.log(record, 'record')
  }
  accreditUser (record) {
    console.log(record, 'record')
  }
  addNew () {
    const modal = Modal.show({
      content: <UserInfo wrappedComponentRef={userform => { this.userform = userform }} user={{}} isNew={true} isModal={true}/>,
      title: '新增员工',
      onOk: () => {
        console.log('确定')
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const dataSource = [{
      UserId: 1,
      UserName: 'liubing',
      RealName: '刘娜',
      Phone: '13521677472',
      Email: 'liuna@i-counting.cn',
      RoleStrs: '管理员',
      DepartmentName: '渠道部'
    }, {
      UserId: 2,
      UserName: 'liubing',
      RealName: '刘娜',
      Phone: '13521677472',
      Email: 'liuna@i-counting.cn',
      RoleStrs: '管理员',
      DepartmentName: '渠道部'
    }]
    const columns = [{
      title: '用户名',
      dataIndex: 'UserName'
    }, {
      title: '姓名',
      dataIndex: 'RealName'
    }, {
      title: '手机',
      dataIndex: 'Phone'
    }, {
      title: '邮箱',
      dataIndex: 'Email'
    }, {
      title: '角色',
      dataIndex: 'RoleStrs'
    }, {
      title: '部门',
      dataIndex: 'DepartmentName'
    }, {
      title: '操作',
      render: (text, record) => {
        return (
          <span>
            <a onClick={e => { this.editUser(record) }}>修改</a>
            <Divider type="vertical" />
            <a onClick={e => { this.deleteUser(record) }}>删除</a>
            <Divider type="vertical" />
            <a onClick={e => { this.accreditUser(record) }}>授权</a>
          </span>
        )
      }
    }]
    return (
      <Card bordered={false}>
        <div className={styles.tableList}>
          <div className={styles.tableListForm}>
            <Form onSubmit={this.handleSearch} layout="inline">
              <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={4} sm={24}>
                  <FormItem>
                    {getFieldDecorator('UserName')(<Input placeholder="搜索用户名" />)}
                  </FormItem>
                </Col>
                <Col md={20} sm={24}>
                  <Button type="primary" htmlType="submit">
                    查询
                  </Button>
                  <Button style={{ float: 'right' }} type="primary" onClick={this.addNew}>
                    添加员工
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
          <div style={{ height: '500px' }}>
            <Table
              rowKey={record => (record.UserId)}
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
            <div className={styles.total_item}>共400条记录</div>
          </div>
        </div>
      </Card>
    )
  }
}
export default Form.create()(UsersAccount)
