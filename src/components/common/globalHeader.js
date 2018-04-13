import React from 'react'
import styles from '@/stylus/main'
import { Menu, Icon, Dropdown, Avatar } from 'antd'
import { Link } from 'react-router-dom'
export default class GlobalHeader extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }
  toggle () {
    const { collapsed, onCollapse } = this.props
    onCollapse(!collapsed)
  }
  render () {
    const {
      currentUser,
      collapsed
    } = this.props
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} trigger={['click']}>
        <Menu.Item>
          <Link to="/main/user_my">
            <Icon type="user" />
            个人中心
          </Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    )
    return (
      <div className={styles.header}>
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <div className={styles.right}>
          <span className={`${styles.action} ${styles.top}`}><Icon type="search" /></span>
          <span className={`${styles.action} ${styles.top}`}><Icon type="bell" /></span>
          {currentUser.RealName && (
            <Dropdown overlay={menu}>
              <span className={styles.action}>
                <Avatar size="small" className={styles.avatar} icon="user"/>
                {currentUser.RealName}
              </span>
            </Dropdown>
          )}
        </div>
      </div>
    )
  }
}
