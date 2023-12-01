//
import request from '@/utils/http/axios'
import {
  LoginForm,
  loginResponseData,
  userResponseData,
} from '@/types/axios/axios'
enum API {
  LOGIN_URL = '/user/login',
  LOGOUT_URL = '/logout',
  REGISTER_URL = '/register',
  USERINFO_URL = '/user/info',
}

// Login
export const login = (data: LoginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

//getUserInfo
export const getUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
