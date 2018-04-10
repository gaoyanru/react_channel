import http from './http'

// demo
export const fetchWechatUserInfo = () => {
  return http('/api/uaa/user.ashx')
}
