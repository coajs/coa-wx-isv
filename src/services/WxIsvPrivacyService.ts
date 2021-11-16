import { $ } from 'coa-helper'
import { WxIsvServiceBase } from '../libs/WxIsvServiceBase'
import { WxIsvPrivacySettingResponse } from '../types/privice'
import { WxIsv } from '../typings'

interface OwnerSetting {
  contact_phone: string
  contact_email: string
  contact_qq?: string
  contact_weixin?: string
  store_expire_timestamp?: string
  ext_file_media_id?: string
  notice_method: string
}

interface SettingItem {
  privacy_key: string
  privacy_text: string
}

type PrivacyVersion = 1 | 2

export class WxIsvPrivacyService extends WxIsvServiceBase {
  /**
   * 配置小程序用户隐私保护指引
   * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/privacy_config/set_privacy_setting.html
   * @param accessToken
   * @param privacy_ver
   * @param owner_setting
   * @param setting_list
   * @returns
   */
  async setPrivacySetting(
    accessToken: string,
    privacy_ver: PrivacyVersion = 2,
    owner_setting: OwnerSetting,
    setting_list: SettingItem[]
  ) {
    const res = await this.request(
      'POST',
      '/cgi-bin/component/setprivacysetting',
      $.snakeCaseKeys({ privacy_ver, owner_setting, setting_list }),
      { access_token: accessToken }
    )
    return res as WxIsv.WxIsvResponse
  }

  /**
   * 查询小程序用户隐私保护指引
   * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/privacy_config/get_privacy_setting.html
   * @param accessToken
   * @param privacy_ver
   * @returns
   */
  async getPrivacySetting(
    accessToken: string,
    privacy_ver: PrivacyVersion = 2
  ) {
    const res = await this.request(
      'POST',
      '/cgi-bin/component/getprivacysetting',
      { privacy_ver },
      { access_token: accessToken }
    )
    return res as WxIsvPrivacySettingResponse
  }
}
