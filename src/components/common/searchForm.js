import React from 'react'
import { Form, Input, Button } from 'antd'
import styles from '@/stylus/search'
const FormItem = Form.Item
class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('aa')
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline" onSubmit={this.onSubmit} className={styles.search_form}>
        <div className={styles.search_container}>
          <div className={styles.search_content}>
          </div>
          <div className={styles.search_btns}>
            <FormItem>
              <Button type="primary" htmlType="submit">查询</Button>
            </FormItem>
          </div>
        </div>
      </Form>
    )
  }
}
export default Form.create()(SearchForm)
