import { WxIsv } from '../typings'
import { WxIsvStorage } from './WxIsvStorage'

export class WxIsvBin {

  readonly config: WxIsv.WxIsvConfig
  readonly storage: WxIsvStorage

  constructor (config: WxIsv.WxIsvConfig, storage?: WxIsvStorage) {
    this.config = config
    this.storage = storage || new WxIsvStorage()
  }

  onResponseError (res: WxIsv.AxiosResponse): void {

  }

}