import { WxIsvServiceBase } from '../libs/WxIsvServiceBase'
import { WxIsv } from '../typings'

export class WxIsvStatService extends WxIsvServiceBase {

  // 获取用户访问小程序每日数据概况
  async getDailySummary (accessToken: string, begin_date: string, end_date: string, ignoreError: WxIsv.IgnoreError = []) {
    return await this.request('POST', '/datacube/getweanalysisappiddailysummarytrend', { begin_date, end_date }, { access_token: accessToken }, ignoreError) as WxIsv.WxIsvStatDailySummary
  }

  // 获取用户访问小程序数据日趋势
  async getDailyVisitTrend (accessToken: string, begin_date: string, end_date: string, ignoreError: WxIsv.IgnoreError = []) {
    return await this.request('POST', '/datacube/getweanalysisappiddailyvisittrend', { begin_date, end_date }, { access_token: accessToken }, ignoreError) as WxIsv.WxIsvStatVisitTrend
  }

  // 获取用户访问小程序日留存
  async getDailyRetain (accessToken: string, begin_date: string, end_date: string, ignoreError: WxIsv.IgnoreError = []) {
    return await this.request('POST', '/datacube/getweanalysisappiddailyretaininfo', { begin_date, end_date }, { access_token: accessToken }, ignoreError) as WxIsv.WxIsvStatDailyRetain
  }

  // 获取用户画像
  async userPortrait (accessToken: string, granularity: 'day' | 'week' | 'month', begin_date: string, end_date: string, ignoreError: WxIsv.IgnoreError = []) {
    return await this.request('POST', '/datacube/getweanalysisappiduserportrait', { begin_date, end_date }, { access_token: accessToken }, ignoreError)
  }

  // 获取访问分布
  async visitDistribution (accessToken: string, begin_date: string, end_date: string, ignoreError: WxIsv.IgnoreError = []) {
    return await this.request('POST', '/datacube/getweanalysisappidvisitdistribution', { begin_date, end_date }, { access_token: accessToken }, ignoreError)

  }

}
