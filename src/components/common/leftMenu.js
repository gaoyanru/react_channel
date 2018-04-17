import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu
export default class LeftMenu extends React.Component {
  render () {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户</span></span>}>
          <Menu.Item key="3">
            <Link to="/usersAccount">
              <span>账号</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">部门</Menu.Item>
          <Menu.Item key="5">角色</Menu.Item>
          <Menu.Item key="6">权限策略</Menu.Item>
          <Menu.Item key="7">新增策略</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}
