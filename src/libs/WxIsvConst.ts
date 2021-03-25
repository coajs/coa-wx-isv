import { WxIsv } from '../typings'

interface Dic<T> {
  [index: string]: T
}

export const AuthScopes = <Dic<WxIsv.WxIsvAuthItem>>{
  17: {
    id: 17,
    name: '帐号管理权限',
    alias: 'account',
    desc: '帮助小程序获取二维码，进行帐号管理',
    mutex: false,
    required: true
  },
  18: {
    id: 18,
    name: '开发管理与数据分析权限',
    alias: 'developAndAnalysis',
    desc: '帮助小程序进行功能开发与数据分析',
    mutex: true,
    required: true
  },
  19: {
    id: 19,
    name: '客服消息管理权限',
    alias: 'customerService',
    desc: '帮助小程序接收和发送客服消息',
    mutex: false
  },
  25: {
    id: 25,
    name: '开放平台帐号管理权限',
    alias: 'openAccount',
    desc: '帮助小程序绑定开放平台帐号，实现用户身份打通',
    mutex: true,
    required: true
  },
  30: {
    id: 30,
    name: '小程序基本信息设置权限',
    alias: 'basicInfo',
    desc: '帮助小程序设置名称、头像、简介、类目等基本信息',
    mutex: false,
    required: true
  },
  31: {
    id: 31,
    name: '小程序认证权限',
    alias: 'wxVerify',
    desc: '帮助小程序申请认证',
    mutex: false,
    required: true
  },
  36: {
    id: 36,
    name: '微信卡路里权限',
    alias: 'calories',
    desc: '为小程序提供用户卡路里同步、授权查询、兑换功能',
    mutex: false
  },
  37: {
    id: 37,
    name: '附近地点权限',
    alias: 'nearbyPoi',
    desc: '帮助小程序创建附近地点，可设置小程序展示在“附近的小程序”入口中',
    mutex: false
  },
  40: {
    id: 40,
    name: '插件管理权限',
    alias: 'plugins',
    desc: '用于代小程序管理插件的添加和使用',
    mutex: true,
    required: true
  },
  41: {
    id: 41,
    name: '好物圈权限',
    alias: 'goodSphere',
    desc: '帮助小程序将物品、订单、收藏等信息同步至好物圈，方便用户进行推荐',
    mutex: true
  },
  45: {
    id: 45,
    name: '快递配送权限',
    alias: 'logistics',
    desc: '帮助有快递配送需求的开发者，快速高效对接多家快递公司。对接后用户可通过微信服务通知接收实时快递配送状态，提升用户体验',
    mutex: true
  },
  48: {
    id: 48,
    name: '微信财政电子票据权限',
    alias: 'electronicTicket',
    desc: '帮助小程序完成授权、插卡及报销',
    mutex: false
  },
  49: {
    id: 49,
    name: '云开发管理权限',
    alias: 'cloudDevelopment',
    desc: '帮助小程序管理小程序·云开发资源',
    mutex: true
  },
  51: {
    id: 51,
    name: '即时配送权限',
    alias: 'immediateDelivery',
    desc: '旨在解决餐饮、生鲜、超市等小程序的外卖配送需求，接入后小程序商家可通过统一的接口获得多家配送公司的配送服务，提高经营效率',
    mutex: true
  },
  52: {
    id: 52,
    name: '小程序直播权限',
    alias: 'broadcast',
    desc: '帮助有直播需求的小程序实现在小程序上直播边看边买的能力',
    mutex: false
  },
  57: {
    id: 57,
    name: '页面推送权限',
    alias: 'submitPages',
    desc: '帮助小程序推送小程序页面给搜索引擎，增加小程序页面在搜索的收录与曝光机会',
    mutex: false
  },
  65: {
    id: 65,
    name: '广告管理权限',
    alias: 'advertising',
    desc: '帮助广告主进行微信广告的投放和管理',
    mutex: false
  },
  67: {
    id: 67,
    name: '服务平台管理权限',
    alias: 'serviceMarket',
    desc: '帮助小程序管理服务平台上购买的资源',
    mutex: false
  },
  70: {
    id: 70,
    name: '商品管理权限',
    alias: 'merchant',
    desc: '支持对小商店商品及库存信息进行管理',
    mutex: false
  },
  71: {
    id: 71,
    name: '订单与物流管理权限',
    alias: 'orderAndLogistics',
    desc: '支持对小商店订单及物流信息进行管理',
    mutex: false,
  },
}