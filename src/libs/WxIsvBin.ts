import { CoaError } from 'coa-error'
import { $, _, axios } from 'coa-helper'
import { WxIsv } from '../typings'
import { WxIsvStorage } from './WxIsvStorage'

const baseURL = 'https://api.weixin.qq.com'

const DefaultCustomErrorMessage: WxIsv.customErrorMessage = { '-1': '微信系统繁忙，请重试' }

const RetryErrorCodes = [-1]

export class WxIsvBin {

  readonly config: WxIsv.WxIsvConfig
  readonly storage: WxIsvStorage

  constructor (config: WxIsv.WxIsvConfig, storage?: WxIsvStorage) {
    this.config = config
    this.storage = storage || new WxIsvStorage()
  }

  // 请求并处理错误
  async request (request: WxIsv.AxiosRequestConfig, customErrorMessage: WxIsv.customErrorMessage, customErrorHandler: WxIsv.customErrorHandler, ignoreError: WxIsv.IgnoreError) {

    let retryTimes = 0
    let res = {} as any
    let errorCode = 0

    // 处理返回结果
    try {

      do {
        res = await axios.request({ baseURL, ...request }).catch(e => e)
        errorCode = _.toNumber(res.errcode) || 0
        retryTimes++
      } while (RetryErrorCodes.includes(errorCode) && retryTimes < 3)
      {
        await $.timeout(500)
      }

      return this.handleResponse(res, customErrorMessage, customErrorHandler, ignoreError)
    }
      // 触发错误事件
    catch (e) {
      this.onRequestError(e, res)
      throw e
    }
  }

  // 当错误时触发
  protected onRequestError (error: Error, res: WxIsv.AxiosResponse): void {

  }

  private handleResponse (res: WxIsv.AxiosResponse, customErrorMessage: WxIsv.customErrorMessage, customErrorHandler: WxIsv.customErrorHandler, ignoreError: WxIsv.IgnoreError) {

    const data = res.data || {}
    const errorCode = _.toNumber(data.errcode) || 0

    if (errorCode) {
      // 如果忽略某个错误，则直接返回
      if (ignoreError.includes(errorCode)) {
        return { ignore: errorCode }
      }
      // 自定义错误处理
      customErrorHandler(res)
      // 默认错误处理
      const errorMessage = customErrorMessage[errorCode] || DefaultCustomErrorMessage[errorCode] || _.toString(data.errmsg) || '微信服务返回错误'
      CoaError.throw('CoaWxIsv.WxReturnError', errorMessage)
    }

    // 返回结果
    return _.isPlainObject(data) ? $.camelCaseKeys(data) : data
  }

}
