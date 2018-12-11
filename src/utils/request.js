import Taro from '@tarojs/taro'
import sysConfig from '../config'
import {
  handleCommonError,
  handleNoCommontError,
  errorMsg
} from './errorHandle'

const { baseUrl, host, authKey } = sysConfig
export default async function request(url, options = {}) {
  const Authorization = Taro.getStorageSync(authKey)
  const defaultOptions = {
    header: {
      [authKey]: Authorization
    }
  }
  const newOptions = { ...defaultOptions, ...options }
  newOptions.data = newOptions.body
  delete newOptions.body
  if (!newOptions.noLoading) {
    // store.commit('showLoading')
  }
  return Taro.request({
    url: host + baseUrl + url,
    ...newOptions
  })
    .then(response => {
      const { statusCode, data } = response
      if (statusCode >= 200 && statusCode < 300) {
        return data
      } else {
        errorHandle(response, options)
      }
    })
    .catch(error => {
      throw error
    })
}

const errorHandle = (response, options) => {
  // 请求有响应
  if (response) {
    const { statusCode, data } = response
    data.message = data.message || errorMsg
    const { code, message } = data
    if (statusCode === 400) {
      handleCommonError(data, options)
      throw { code, message }
    }
    // 404 502 ..
    const msg = errorMsg
    handleNoCommontError(msg)
    throw msg
    // throw message;
  }
}
