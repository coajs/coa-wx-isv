import { WxIsvBin } from '../libs/WxIsvBin'
import { WxIsv } from '../typings'

export class WxIsvServiceBase {
  protected readonly bin: WxIsvBin
  protected readonly config: WxIsv.WxIsvConfig
  protected readonly customErrorMessage: WxIsv.customErrorMessage = {}

  constructor(bin: WxIsvBin) {
    this.bin = bin
    this.config = bin.config
  }

  async request(method: WxIsv.AxiosMethod, url: string, data: {}, params: {}, ignoreError: WxIsv.IgnoreError = []) {
    return await this.bin.request({ method, url, params, data }, this.customErrorMessage, this.customErrorHandler, ignoreError)
  }

  async requestStream(method: WxIsv.AxiosMethod, url: string, data: {}, params: {}, ignoreError: WxIsv.IgnoreError = []) {
    return await this.bin.request({ method, url, params, data, responseType: 'stream' }, this.customErrorMessage, this.customErrorHandler, ignoreError)
  }

  protected customErrorHandler(res: WxIsv.AxiosResponse) {}
}
