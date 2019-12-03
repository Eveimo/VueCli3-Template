import { getToken, setToken, removeToken } from '@/utils/cookie'
import { login, getUserInfo, logOut } from '@/api/user'

const user = {
  state: {
    token: getToken(),
    userInfo: {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    login({ commit, userInfo }) {
      const { userName, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: userName.trim(), password: password }).then(res => {
          commit('SET_TOKEN', res.data.token)
          setToken(res.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(res => {
          if (!res.data) {
            reject('Verification failed, please Login again.')
          }
          commit('SET_USER_INFO', res.data.userInfo)
          resolve(res.data)
        }).catch(error => { reject(error) })
      })
    },
    logOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logOut(state.token).then(res => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => { reject(error) })
      })
    }
  }

}
export default user
