import http from './http'

// demo
export const fetchWechatUserInfo = () => {
  return http('/api/security/login')
}
// login
export const requestLogin = (params) => {
  return http('/api/security/login', 'post', params)
}
