import { CoaError } from 'coa-error'
import { _ } from 'coa-helper'
import { WxIsvServiceBase } from '../libs/WxIsvServiceBase'

interface UrllinkGenerateResult {
  urlLink: string
}

export class WxIsvUrllinkService extends WxIsvServiceBase {
  /**
   * 生成永久的URL LINK
   * 详见 https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-link/urllink.generate.html
   */
  async generateForever(accessToken: string, path: string, query: string): Promise<UrllinkGenerateResult> {
    return await this.request('POST', '/wxa/generate_urllink', _.pickBy({ path, query }), { access_token: accessToken })
  }

  /**
   * 生成30天内的URL LINK
   * 详见 https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-link/urllink.generate.html
   */
  async generateUnlimited(accessToken: string, path: string, query: string, expireDay: number = 31): Promise<UrllinkGenerateResult> {
    if (expireDay > 31) CoaError.message('WxISvUrllinkService.ExpireDayError', '有效期不能超过31天')
    const data = _.pickBy({ path, query, is_expire: true, expire_type: 1, expire_interval: expireDay })
    return await this.request('POST', '/wxa/generate_urllink', data, { access_token: accessToken })
  }
}
