export interface UserInfo {
  username: string
  avatar: string
}
export interface userStoreState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
  userInfo: UserInfo | null
}
