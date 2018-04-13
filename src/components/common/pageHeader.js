import React from 'react'
import { Breadcrumb } from 'antd'
import styles from '@/stylus/main'
class PageHeader extends React.Component {
  render () {
    return (
      <div className={styles.header_page}>
        <Breadcrumb className={styles.mt_16}>
          <Breadcrumb.Item>我的客户</Breadcrumb.Item>
          <Breadcrumb.Item>客户</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}
export default PageHeader
