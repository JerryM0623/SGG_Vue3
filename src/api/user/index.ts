import request from '@/utils/request'
import userUrls from './urls.ts'
import type {
  UserLoginReqDataModel,
  UserLoginResModel,
  UserInfoResModel,
} from './types.ts'

/**
 * @description 用户登录的请求API
 * @param {UserLoginReqDataModel} data 请求参数
 * @returns {UserLoginResModel}
 */
export const userLogin = (
  data: UserLoginReqDataModel,
): Promise<UserLoginResModel> => {
  return request({
    url: userUrls.login,
    method: 'POST',
    data,
  })
}

/**
 * @description 获取用户信息的请求API
 * @returns {UserInfoResModel}
 */
export const userInfo = (): Promise<UserInfoResModel> => {
  return request({
    url: userUrls.login,
    method: 'GET',
  })
}
