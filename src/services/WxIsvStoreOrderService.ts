import { WxIsvStoreServiceBase } from './WxIsvStoreServiceBase'

export class WxIsvStoreOrderService extends WxIsvStoreServiceBase {
  /**
   * 获取订单详情
   * 详见 https://developers.weixin.qq.com/doc/store/shop/API/channels-shop-order/api_getorder.html
   * @param order_id 订单ID
   */
  async getOrder(order_id: string): Promise<any> {
    return await this.request('POST', '/channels/ec/order/get', { order_id }, { access_token: await this.getAccessToken() })
  }
}
