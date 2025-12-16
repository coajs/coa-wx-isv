import { _ } from 'coa-helper'
import { WxIsvServiceBase } from '../libs/WxIsvServiceBase'

interface WxStoreAccessToken {
  token: string
  expireOn: number
}

export class WxIsvStoreServiceBase extends WxIsvServiceBase {
  // 获取accessToken
  async getAccessToken() {
    const cacheName = `WxStoreAccessToken:${this.bin.config.wxStoreConfig.appId}`

    const result = (await this.bin.storage.get<WxStoreAccessToken>(cacheName)) ?? { token: '', expireOn: 0 }
    if (!result.token) {
      const { appId, secret } = this.bin.config.wxStoreConfig
      const data = await this.request('POST', '/cgi-bin/stable_token', { grant_type: 'client_credential', appid: appId, secret }, {})

      const ms = _.toInteger(data.expiresIn) * 1e3 - 10 * 1e3
      result.expireOn = _.now() + ms
      result.token = data.accessToken || ''

      await this.bin.storage.set(cacheName, result, ms)
    }

    return result.token
  }
}
