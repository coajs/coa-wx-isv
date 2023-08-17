import { _ } from 'coa-helper'
import { WxIsvServiceBase } from '../libs/WxIsvServiceBase'

export class WxIsvWxOpenService extends WxIsvServiceBase {
  /**
   * 获取公众号关联的小程序
   * 该接口用于获取公众号关联的小程序
   * 详见 https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/officalaccount-management/link-miniprogram/getLinkMiniprogram.html
   * @param accessToken 接口调用凭证
   */
  async getLinkMiniprogram(accessToken: string) {
    return await this.request(
      'POST',
      '/cgi-bin/wxopen/wxamplinkget',
      {},
      { access_token: accessToken }
    )
  }

  /**
   * 公众号关联小程序
   * 该接口用于关联小程序
   * 详见 https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/officalaccount-management/link-miniprogram/linkMiniprogram.html
   * @param accessToken 接口调用凭证
   * @param appWxaId 小程序appid
   */
  async linkMiniprogram(accessToken: string, appWxaId: string) {
    return await this.request(
      'POST',
      '/cgi-bin/wxopen/wxamplink',
      { appid: appWxaId, notify_users: 0, show_profile: 0 },
      { access_token: accessToken }
    )
  }

  /**
   * 公众号解除关联小程序
   * 解除已关联的小程序
   * 详见 https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/officalaccount-management/link-miniprogram/unlinkMiniprogram.html
   * @param accessToken 接口调用凭证
   * @param appWxaId 小程序appid
   */
  async unlinkMiniprogram(accessToken: string, appWxaId: string) {
    return await this.request(
      'POST',
      '/cgi-bin/wxopen/wxampunlink',
      { appid: appWxaId },
      { access_token: accessToken }
    )
  }
}
