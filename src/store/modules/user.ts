import { defineStore } from 'pinia'
import { LoginForm, loginResponseData } from '@/types/axios/axios'
import { login, getUserInfo } from '@/api/user'
import { SET_TOKEN, GET_TOKEN } from '@/utils/auth'
import { routes } from '@/router/routes'
import { userStoreState, UserInfo } from '@/types/user/user'

export const useUserStore = defineStore('user', {
  state: (): userStoreState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: routes,
      userInfo: null as UserInfo | null,
    }
  },
  actions: {
    async userLogin(data: LoginForm) {
      const result: loginResponseData = await login(data)
      if (result.code === 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        console.log(result)
        return Promise.reject(new Error(result.data.message))
      }
    },

    async userInfo() {
      const result = await getUserInfo()
      console.log(result)
      if (result) {
        this.userInfo.username = result.data.username
        this.userInfo.avatar = result.data.avatar
      }
      return 'ok'
    },
  },
  getters: {
    // 获取用户信息
  },
})
