// 用户登录的请求参数模型
export interface UserLoginReqDataModel {
  username: string
  password: string
}

interface UserLoginResDataModel {
  token: string
}

// 用户登录的返回模型
export interface UserLoginResModel {
  code: number
  data: UserLoginResDataModel
}

interface CheckUserType {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface UserInfoResDataModel {
  checkUser: CheckUserType
}

// 获取用户详细信息的返回模型
export interface UserInfoResModel {
  code: number
  data: UserInfoResDataModel
}
