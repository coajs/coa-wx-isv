import { Axios } from 'coa-helper'

const wxIsvTemplateDraft = {
  createTime: 1574520305,
  userVersion: 'company1.0.0.2.d1',
  userDesc: 'undefined 在 2019年11月23日晚上10点44分 提交上传',
  templateId: 0,
  sourceMiniprogramAppid: 'wx37c6dc8f6c4f36d8',
  sourceMiniprogram: 'wuhaodes',
  developer: '游翼行空',
  createAt: 1574520305000,
}

const wxIsvTemplateItem = {
  createTime: 1574521537,
  userVersion: 'company1.v0.0.3.d0',
  userDesc: 'undefined 在 2019年11月23日晚上11点05分 提交上传',
  draftId: 3,
  sourceMiniprogramAppid: 'wx37c6dc8f6c4f36d8',
  sourceMiniprogram: 'wuhaodes',
  developer: '游翼行空',
  createAt: 1574521537000,
}

const wxIsvAuthAppInfo = {
  nickName: 'GlobalOnline',
  nickname: 'GlobalOnline', // tricky code for nickname
  headImg:
    'http://wx.qlogo.cn/mmopen/wJibWkqN1bUOFG4jM2iagmicaSrtPx6hSzC6y18BLlkXKGTujpO9uvombpB93036Iqxucewm4uNAIQbmfMtgL3cHIbmJGYj4BDa/0',
  serviceTypeInfo: { id: 0 },
  verifyTypeInfo: { id: -1 },
  userName: 'gh_6bcdd8bb8979',
  alias: '',
  qrcodeUrl:
    'http://mmbiz.qpic.cn/mmbiz_jpg/Cb87DbpM22ShERPmncaEWlEnOujXaH55nkbc6ia2z2UN5ekq8rclaSiaZwcribicRXpZ1NZmRBPhNBjILSbtD2Otgw/0',
  businessInfo: {
    openPay: 0,
    openShake: 0,
    openScan: 0,
    openCard: 0,
    openStore: 0,
  },
  idc: 1,
  principalName: '个人',
  signature: 'RPG game. Create your charactor, Then keep growing up.',
  miniProgramInfo: {
    network: {
      requestDomain: [],
      wsRequestDomain: [],
      uploadDomain: [],
      downloadDomain: [],
      bizDomain: [],
      udpDomain: [],
    },
    categories: [[Object]],
    visitStatus: 0,
  },
}

const wxIsvStatVisitTrend = {
  list: [
    {
      refDate: '20191214',
      sessionCnt: 4,
      visitPv: 18,
      visitUv: 3,
      visitUvNew: 0,
      stayTimeUv: 102.6667,
      stayTimeSession: 77,
      visitDepth: 2.25,
    },
  ],
}

const wxIsvStatDailySummary = {
  list: [
    {
      refDate: '20170313',
      visitTotal: 391,
      sharePv: 572,
      shareUv: 383,
    },
  ],
}

const wxIsvStatDailyRetain = {
  ref_date: '20170313',
  visit_uv_new: [{ key: 0, value: 5464 }],
  visit_uv: [{ key: 0, value: 55500 }],
}

const wxIsvConfig = {
  appId: '',
  appSecret: '',
  appToken: '',
}

const wxIsvNormalResponse = {
  errcode: 0,
  errmsg: 'ok',
}

const wxIsvReleasePageList = {
  errcode: 0,
  errmsg: 'ok',
  pageList: ['index', 'page/list', 'page/detail'],
}

const wxIsvReleaseAuditSubmit = {
  errcode: 0,
  errmsg: 'ok',
  auditid: 1234567,
}

const wxIsvReleaseLatestAudit = {
  errcode: 0,
  errmsg: 'ok',
  auditid: '1234567',
  status: 1,
  reason: '帐号信息不合规范',
  screenShot: 'xx|yy|zz',
}

const wxIsvReleaseSupportVersion = {
  errcode: 0,
  errmsg: 'ok',
  nowVersion: '1.0.0',
  uvInfo: {
    items: [
      {
        percentage: 0,
        version: '1.0.0',
      },
      {
        percentage: 0,
        version: '1.0.1',
      },
      {
        percentage: 0,
        version: '1.1.0',
      },
    ],
  },
}

const wxIsvReleaseQuota = {
  errcode: 0,
  errmsg: 'ok',
  rest: 0,
  limit: 0,
  speedupRest: 0,
  speedupLimit: 0,
}

const wxIsvTesterBind = {
  errcode: 0,
  errmsg: 'ok',
  userstr: 'xxxxxxxxx',
}

const wxIsvTesterList = {
  errcode: 0,
  errmsg: 'ok',
  members: [
    {
      userstr: 'xxxxxxxx',
    },
    {
      userstr: 'yyyyyyyy',
    },
  ],
}

const wxIsvCategoryAudit = {
  errcode: 0,
  errmsg: 'ok',
  categoryList: [
    {
      firstClass: '工具',
      secondClass: '备忘录',
      firstId: 1,
      secondId: 2,
    },
    {
      firstClass: '教育',
      secondClass: '学历教育',
      thirdClass: '高等',
      firstId: 3,
      secondId: 4,
      thirdId: 5,
    },
  ],
}

const wxIsvDomainModify = {
  errcode: 0,
  errmsg: 'ok',
  requestdomain: ['https://www.qq.com', 'https://www.qq.com'],
  wsrequestdomain: ['wss://www.qq.com', 'wss://www.qq.com'],
  uploaddomain: ['https://www.qq.com', 'https://www.qq.com'],
  downloaddomain: ['https://www.qq.com', 'https://www.qq.com'],
}

const wxIsvAuthInfo = {
  authorizerAppid: 'wxf8b4f85f3a794e77',
  authorizerAccessToken:
    'QXjUqNqfYVH0yBE1iI_7vuN_9gQbpjfK7hYwJ3P7xOa88a89-Aga5x1NMYJyB8G2yKt1KCl0nPC3W9GJzw0Zzq_dBxc8pxIGUNi_bFes0qM',
  expiresIn: 7200,
  authorizerRefreshToken: 'dTo-YCXPL4llX-u1W1pPpnp8Hgm4wpJtlR6iV0doKdY',
  funcInfo: [
    {
      funcscopeCategory: {
        id: 1,
      },
    },
    {
      funcscopeCategory: {
        id: 2,
      },
    },
    {
      funcscopeCategory: {
        id: 3,
      },
    },
  ],
}

const wxIsvAuthAccountInfo = {
  errcode: 0,
  errmsg: 'ok',
  appid: 'wxdc685123d955453',
  accountType: 2,
  principalType: 1,
  principalName: '深圳市腾讯计算机系统有限公司',
  realnameStatus: 1,
  wxVerifyInfo: {
    qualificationVerify: true,
    namingVerify: true,
    annualReview: true,
    annualReviewBeginTime: 1550490981,
    annualReviewEndTime: 1558266981,
  },
  signatureInfo: {
    signature: '功能介绍',
    modifyUsedCount: 1,
    modifyQuota: 5,
  },
  headImageInfo: {
    headImageUrl:
      'http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0',
    modifyUsedCount: 3,
    modifyQuota: 5,
  },
}

const wxIsvAuthRefreshInfo = {
  authorizerAccessToken: 'some-access-token',
  expiresIn: 7200,
  authorizerRefreshToken: 'refresh_token_value',
}

const wxIsvExpressBatchGetOrder = [
  {
    orderId: '01234567890123456789',
    deliveryId: 'SF',
    waybillId: '123456789',
  },
  {
    orderId: '01234567890123456789',
    deliveryId: 'SF',
    waybillId: '123456789',
  },
]

const wxIsvExpressBatchGetOrderResponse = {
  order_list: [
    {
      errcode: 0,
      errmsg: 'ok',
      orderId: '01234567890123456789',
      deliveryId: 'SF',
      waybillId: '123456789',
      printHtml:
        'jh7DjipP4ul4CQYUh69cniskrQZuOPwa1inAbXIqKbU0t71c0s65Au54cdWBZW0QJY4LYeofdM',
      waybillData: [
        {
          key: 'SF_bagAddr',
          value: '广州',
        },
        {
          key: 'SF_mark',
          value: '101- 07-03 509',
        },
      ],
      orderStatus: 0,
    },
  ],
}

const wxIsvAddOrderParam = {
  addSource: 0,
  orderId: '01234567890123456789',
  openid: 'oABC123456',
  deliveryId: 'SF',
  bizId: 'xyz',
  customRemark: '易碎物品',
  sender: {
    name: '张三',
    tel: '020-88888888',
    mobile: '18666666666',
    company: '公司名',
    postCode: '123456',
    country: '中国',
    province: '广东省',
    city: '广州市',
    area: '海珠区',
    address: 'XX路XX号XX大厦XX栋XX',
  },
  receiver: {
    name: '王小蒙',
    tel: '020-77777777',
    mobile: '18610000000',
    company: '公司名',
    postCode: '654321',
    country: '中国',
    province: '广东省',
    city: '广州市',
    area: '天河区',
    address: 'XX路XX号XX大厦XX栋XX',
  },
  shop: {
    wxaPath: '/index/index?from=waybill&id=01234567890123456789',
    imgUrl:
      'https://mmbiz.qpic.cn/mmbiz_png/OiaFLUqewuIDNQnTiaCInIG8ibdosYHhQHPbXJUrqYSNIcBL60vo4LIjlcoNG1QPkeH5GWWEB41Ny895CokeAah8A/640',
    goodsName: '微信气泡狗抱枕&微信气泡狗钥匙扣',
    goodsCount: 2,
  },
  cargo: {
    count: 2,
    weight: 5.5,
    spaceX: 30.5,
    spaceY: 20,
    spaceZ: 20,
    detailList: [
      {
        name: '微信气泡狗抱枕',
        count: 1,
      },
      {
        name: '微信气泡狗钥匙扣',
        count: 1,
      },
    ],
  },
  insured: {
    useInsured: 1,
    insuredValue: 10000,
  },
  service: {
    serviceType: 0,
    serviceName: '标准快递',
  },
}

const wxIsvCancelOrderResponse = {
  errcode: 0,
  errmsg: 'ok',
  deliveryResultcode: 0,
  deliveryResultmsg: '',
}

const wxIsvGetAllAccountResponse = {
  count: 1,
  list: [
    {
      bizId: '123456789',
      deliveryId: 'YUNDA',
      createTime: 1555482786,
      updateTime: 1556594799,
      statusCode: 0,
      alias: '',
      remarkWrongMsg: '',
      remarkContent: '',
      quotaNum: 55,
      quotaUpdateTime: 1556594799,
      serviceType: [{ serviceType: 0, serviceName: '标准快递' }],
    },
  ],
}

const wxIsvGetAllAccountDelivery = {
  count: 7,
  data: [
    {
      deliveryId: 'BEST',
      deliveryName: '百世快递',
      canUseCash: 1,
      canGetQuota: 1,
      cashBizId: '',
      serviceType: [{ serviceType: 0, serviceName: '' }],
    },
  ],
}

const wxIsvGetOrderResponse = {
  printHtml:
    'jh7DjipP4ul4CQYUh69cniskrQZuOPwa1inAbXIqKbU0t71c0s65Au54cdWBZW0QJY4LYeofdM',
  waybillData: [
    {
      key: 'SF_bagAddr',
      value: '广州',
    },
    {
      key: 'SF_mark',
      value: '101- 07-03 509',
    },
  ],
  deliveryId: 'SF',
  waybillId: '123456',
  orderId: '123456',
  orderStatus: 0,
}

const wxIsvGetPathResponse = {
  openid: 'OPENID',
  deliveryId: 'SF',
  waybillId: '12345678901234567890',
  pathItemNum: 3,
  pathItemList: [
    {
      actionTime: 1533052800,
      actionType: 100001,
      actionMsg: '快递员已成功取件',
    },
  ],
}

const wxIsvGetAllPrinterResponse = {
  count: 2,
  openid: ['oABC', 'oXYZ'],
  tagidList: ['123', '456'],
}

const wxIsvGetQuoatResponse = {
  quota_num: 210,
}

const wxIsvAddOrderResponse = {
  orderId: '01234567890123456789',
  waybillId: '123456789',
  waybillData: [
    {
      key: 'SF_bagAddr',
      value: '广州',
    },
    {
      key: 'SF_mark',
      value: '101- 07-03 509',
    },
  ],
}

const wxIsvRawDeliveryErrorResponse = {
  errcode: 9300501,
  errmsg: 'delivery logic fail',
  delivery_resultcode: 10002,
  delivery_resultmsg: '客户密码不正确',
}

const wxIsvAddTemplateResponse = {
  errmsg: 'ok',
  errcode: 0,
  priTmplId: '9Aw5ZV1j9xdWTFEkqCpZ7jWySL7aGN6rQom4gXINfJs',
}

const wxIsvTmplKeywordResponse = {
  errcode: 0,
  errmsg: 'ok',
  data: [
    {
      kid: 1,
      name: '物品名称',
      example: '名称',
      rule: 'thing',
    },
  ],
}

const wxIsvTicketResponse = {
  errcode: 0,
  errmsg: 'ok',
  ticket:
    'bxLdikRXVbTPdHSM05e5u5sUoXNKd8-41ZO3MhKoyN5OfkWITDGgnr2fwJ0m9E8NYzWKVZvdVtaUgWvsdshFKA',
  expiresIn: 7200,
}

const wxIsvMpShowItem = {
  errcode: 0,
  errmsg: 'ok',
  can_open: 1,
  is_open: 1,
  appid: '展示的公众号appid',
  nickname: '展示的公众号nickname',
  headimg: '展示的公众号头像',
}

const wxIsvMpShowItemList = {
  errcode: 0,
  errmsg: 'ok',
  total_num: 10,
  biz_info_list: [
    {
      nickname: '公众号昵称',
      appid: '公众号appid',
      headimg: '公众号头像',
    },
  ],
}

export declare namespace WxIsv {
  type AxiosMethod = Axios.Method
  type AxiosResponse = Axios.AxiosResponse
  type AxiosRequestConfig = Axios.AxiosRequestConfig

  interface WxIsvAuthItem {
    id: number
    name: string
    alias: string
    desc: string
    mutex: boolean
    required?: boolean
  }

  interface customErrorMessage {
    [errorNo: number]: string
  }

  type customErrorHandler = (res: Axios.AxiosResponse) => void

  type IgnoreError = number[]

  interface Dic<T = any> {
    [index: string]: T
  }
  interface WxIsvResponse {
    errcode: number
    errmsg: string
    audit_id?: number
  }

  type WxIsvConfig = typeof wxIsvConfig
  type WxIsvTemplateItem = typeof wxIsvTemplateItem
  type WxIsvTemplateDraft = typeof wxIsvTemplateDraft
  type WxIsvAuthAppInfo = typeof wxIsvAuthAppInfo
  type WxIsvStatVisitTrend = typeof wxIsvStatVisitTrend
  type WxIsvStatDailySummary = typeof wxIsvStatDailySummary
  type WxIsvStatDailyRetain = typeof wxIsvStatDailyRetain
  type WxIsvNormalResponse = typeof wxIsvNormalResponse
  type WxIsvReleasePageList = typeof wxIsvReleasePageList
  type WxIsvReleaseAuditSubmit = typeof wxIsvReleaseAuditSubmit
  type WxIsvReleaseLatestAudit = typeof wxIsvReleaseLatestAudit
  type WxIsvReleaseSupportVersion = typeof wxIsvReleaseSupportVersion
  type WxIsvReleaseQuota = typeof wxIsvReleaseQuota
  type WxIsvCategoryAudit = typeof wxIsvCategoryAudit
  type WxIsvTesterBind = typeof wxIsvTesterBind
  type WxIsvTesterList = typeof wxIsvTesterList
  type WxIsvDomainModify = typeof wxIsvDomainModify
  type WxIsvAuthInfo = typeof wxIsvAuthInfo
  type WxIsvAuthAccountInfo = typeof wxIsvAuthAccountInfo
  type WxIsvAuthRefreshInfo = typeof wxIsvAuthRefreshInfo
  type WxIsvExpressBatchGetOrder = typeof wxIsvExpressBatchGetOrder
  type WxIsvExpressBatchGetOrderResponse =
    typeof wxIsvExpressBatchGetOrderResponse
  type WxIsvAddOrderParam = typeof wxIsvAddOrderParam
  type WxIsvCancelOrderResponse = typeof wxIsvCancelOrderResponse
  type WxIsvGetAllAccountResponse = typeof wxIsvGetAllAccountResponse
  type WxIsvGetAllAccountDelivery = typeof wxIsvGetAllAccountDelivery
  type WxIsvGetOrderResponse = typeof wxIsvGetOrderResponse
  type WxIsvGetPathResponse = typeof wxIsvGetPathResponse
  type WxIsvGetAllPrinterResponse = typeof wxIsvGetAllPrinterResponse
  type WxIsvGetQuoatResponse = typeof wxIsvGetQuoatResponse
  type WxIsvAddOrderResponse = typeof wxIsvAddOrderResponse
  type WxIsvRawDeliveryErrorResponse = typeof wxIsvRawDeliveryErrorResponse
  type WxIsvAddTemplateResponse = typeof wxIsvAddTemplateResponse
  type WxIsvTmplKeywordResponse = typeof wxIsvTmplKeywordResponse
  type WxIsvTicket = typeof wxIsvTicketResponse
  type WxIsvMpShowItem = typeof wxIsvMpShowItem
  type WxIsvMpShowItemList = typeof wxIsvMpShowItemList
}
