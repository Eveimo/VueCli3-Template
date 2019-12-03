import request from '../utils/request'

export function login(data) {
  return request({
    method: 'post',
    url: '/user/12345',
    data
  })
}
export function getUserInfo(token) {
  return request({
    method: 'get',
    url: '/user/12345',
    param: { token }
  })
}
export function logOut() {
  return request({
    method: 'post',
    url: '/user/12345'
  })
}
