import { $ } from 'coa-helper'
import { WxIsvServiceBase } from '../libs/WxIsvServiceBase'
import { WxIsv } from '../typings'


export class WxIsvPhoneNumberService extends WxIsvServiceBase {
  // 手机号快速验证 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html
  async getPhoneNumber(
    accessToken: string,
    code: string
  ) {
    return (await this.request(
      'POST',
      '/wxa/business/getuserphonenumber',
      { code },
      { access_token: accessToken }
    )) as WxIsv.WxIsvNormalResponse
  }
}