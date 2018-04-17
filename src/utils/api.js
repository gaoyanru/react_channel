import http from './http'

// demo
export const fetchWechatUserInfo = () => {
  return http('/api/security/login')
}
// login
export const requestLogin = (params) => {
  return http('/api/security/login', 'post', params)
}
// logout
export const logout = (params) => {
  return http('/api/security/logout', 'delete')
}
