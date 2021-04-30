import { WxIsvBin } from '../libs/WxIsvBin'
import { WxIsv } from '../typings'

export class WxIsvServiceBase {

  protected readonly bin: WxIsvBin
  protected readonly config: WxIsv.WxIsvConfig
  protected readonly customErrorMessage: WxIsv.customErrorMessage = {}

  constructor (bin: WxIsvBin) {
    this.bin = bin
    this.config = bin.config
  }

  async request (method: WxIsv.AxiosMethod, url: string, data: {}, params: {}, config: WxIsv.AxiosRequestConfig = {}) {
    return await this.bin.request({ method, url, params, data, ...config }, this.customErrorMessage, this.customErrorHandler)
  }

  protected customErrorHandler (res: WxIsv.AxiosResponse) {

  }
}