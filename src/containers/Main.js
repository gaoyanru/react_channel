import React from 'react'
import styles from '@/stylus/main'
import { Layout, Menu, Icon, Dropdown, Avatar, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import ClassNames from 'classnames'
import PageHeader from '@/components/common/PageHeader'
import GlobalHeader from '@/components/common/globalHeader'
import LeftMenu from '@/components/common/leftMenu'
const { Header, Sider, Content } = Layout

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
    this.handleMenuCollapse = this.handleMenuCollapse.bind(this)
  }
  handleMenuCollapse () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} trigger={['click']}>
        <Menu.Item><Link to="/main/user_my"><Icon type="user" />个人中心</Link></Menu.Item>
        <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
      </Menu>
    )
    const currentUser = {
      RealName: 'momo.zxy'
    }
    const menuList = {
      menuParent: '客服',
      children: '客户'
    }
    console.log(this.props.children, 'children')
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={243}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <Link to="/">
            </Link>
          </div>
          <LeftMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <GlobalHeader
              currentUser={currentUser}
              collapsed={this.state.collapsed}
              onCollapse={this.handleMenuCollapse}
            />
          </Header>
          <PageHeader menu={menuList}/>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default Main
