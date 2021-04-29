import { CoaError } from 'coa-error'
import { $, Axios, axios, _ } from 'coa-helper'
import { WxIsv } from '../typings'
import { WxIsvStorage } from './WxIsvStorage'

const baseURL = 'https://api.weixin.qq.com'

export class WxIsvBin {

  readonly config: WxIsv.WxIsvConfig
  readonly storage: WxIsvStorage

  constructor (config: WxIsv.WxIsvConfig, storage?: WxIsvStorage) {
    this.config = config
    this.storage = storage || new WxIsvStorage()
  }

  // 当错误时触发
  protected onRequestError (error: Error, res: WxIsv.AxiosResponse): void {

  }

  // 请求并处理错误
  async request (request: WxIsv.AxiosRequestConfig, errorMap: WxIsv.ErrorMap, handleCustomError: (res: Axios.AxiosResponse) => void) {

    // 错误配置
    const res = await axios.request({ baseURL, ...request }).catch(e => e)

    // 处理错误
    try {
      return this.handleResponse(res, errorMap)
    } catch (e) {
      // 触发错误事件
      this.onRequestError(e, res)
      // 处理自定义错误
      handleCustomError(res)
      throw e
    }
  }

  // 处理返回结果
  private handleResponse (res: WxIsv.AxiosResponse, errorMap: WxIsv.ErrorMap) {
    const data = res.data || {}
    const errorCode = _.toNumber(data.errcode) || 0

    if (errorCode) {
      const errorMessage = errorMap[errorCode] || _.toString(data.errmsg) || '微信服务返回错误'
      CoaError.throw('CoaWxIsv.WxReturnError', errorMessage)
    }

    return _.isPlainObject(data) ? $.camelCaseKeys(data) : data
  }

}