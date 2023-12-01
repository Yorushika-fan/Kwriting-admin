interface dataType {
  token?: string
  message?: string
}

interface userType {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: Array<string>
  buttons: Array<string>
  routes: Array<string>
  token: string
}
export interface LoginForm {
  username: string
  password: string
}

export interface loginResponseData {
  code: number
  data: dataType
}
export interface userResponseData {
  code: number
  data: userType
}
