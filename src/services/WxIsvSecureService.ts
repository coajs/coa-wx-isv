import { $ } from 'coa-helper'
import { WxIsvServiceBase } from '../libs/WxIsvServiceBase'
import { WxIsv } from '../typings'

// 小程序音视频内容安全识别
// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/mediaCheckAsync.html
export class WxIsvSecureService extends WxIsvServiceBase {
    async mediaCheckAsync(accessToken: string, data: { mediaUrl: string, mediaType: number, version: number, scene: 1 | 2 | 3 | 4, openid: string }) {
        const param = $.snakeCaseKeys(data)
        return (await this.request(
            'POST',
            '/wxa/media_check_async',
            param,
            { access_token: accessToken }
        )) as WxIsv.WxIsvMediaCheckAsyncResponse
    }
    async msgSecCheck(accessToken: string, data: { content: string, version: number, scene: 1 | 2 | 3 | 4, openid: string, title: string, nickname?: string, signature?: string }) {
        const param = $.snakeCaseKeys(data)
        return (await this.request(
            'POST',
            '/wxa/msg_sec_check',
            param,
            { access_token: accessToken }
        )) as WxIsv.WxIsvMsgSecCheckResponse
    }
}
