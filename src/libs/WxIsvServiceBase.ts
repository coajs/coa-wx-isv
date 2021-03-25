import { die } from 'coa-error'
import { $, _, axios } from 'coa-helper'
import { WxIsvBin } from '../libs/WxIsvBin'
import { WxIsv } from '../typings'

const baseURL = 'https://api.weixin.qq.com'

export class WxIsvServiceBase {

  protected readonly bin: WxIsvBin
  protected readonly config: WxIsv.WxIsvConfig
  protected readonly errorMap: { [errorCode: string]: string } = {}

  constructor (bin: WxIsvBin) {
    this.bin = bin
    this.config = bin.config
  }

  async request (method: WxIsv.AxiosMethod, url: string, data: any, params?: any, config?: WxIsv.AxiosRequestConfig) {
    const res = await axios.request({ method, url, data, params, baseURL, ...config })
    const result = res.data || {}
    if (result.errcode) {
      this.bin.onResponseError(res)
      this.handleResponseError(res)
    }
    return _.isPlainObject(result) ? $.camelCaseKeys(result) : result
  }

  protected handleResponseError (res: WxIsv.AxiosResponse) {
    const data = res.data || {}
    const errorCode = _.toNumber(data.errcode) || 0
    const errorMsg = this.errorMap[errorCode.toString()] || _.toString(data.errmsg) || '微信服务返回错误'
    return die.error(errorMsg, 400, errorCode)
  }
}