const getPrivacySettingResult = {
  errcode: 0,
  errmsg: 'ok',
  code_exist: 1,
  privacy_list: [
    'UserInfo',
    'Location',
    'Address',
    'Invoice',
    'RunData',
    'Record',
    'Album',
    'Camera',
    'Contact',
    'AlbumWriteOnly',
    'BlueTooth',
    'CalendarWriteOnly',
    'MessageFile',
  ],
  setting_list: [
    {
      privacy_key: 'EXIDNumber',
      privacy_text: '登记会员信息',
      privacy_label: '',
    },
    {
      privacy_key: 'UserInfo',
      privacy_text: '展示你的美貌',
      privacy_label: '',
    },
    {
      privacy_key: 'Location',
      privacy_text: '',
      privacy_label: '',
    },
    {
      privacy_key: 'Address',
      privacy_text: '',
      privacy_label: '',
    },
    {
      privacy_key: 'Invoice',
      privacy_text: '',
      privacy_label: '',
    },
    {
      privacy_key: 'RunData',
      privacy_text: '',
      privacy_label: '',
    },
    {
      privacy_key: 'Record',
      privacy_text: '',
      privacy_label: '',
    },
    {
      privacy_key: 'Album',
      privacy_text: '',
      privacy_label: '',
    },
    {
      privacy_key: 'Camera',
      privacy_text: '',
      privacy_label: '',
    },
    {
      privacy_key: 'Contact',
      privacy_text: '',
      privacy_label: '',
    },
    {
      privacy_key: 'AlbumWriteOnly',
      privacy_text: '',
      privacy_label: '',
    },
    {
      privacy_key: 'BlueTooth',
      privacy_text: '',
      privacy_label: '',
    },
    {
      privacy_key: 'CalendarWriteOnly',
      privacy_text: '',
      privacy_label: '',
    },
    {
      privacy_key: 'MessageFile',
      privacy_text: '',
      privacy_label: '',
    },
  ],
  update_time: 1635690987,
  owner_setting: {
    contact_phone: '',
    contact_email: 'melodytu@qq.com',
    contact_qq: '',
    contact_weixin: '',
    store_expire_timestamp: '',
    ext_file_media_id: '2115480798219862023',
    notice_method: '',
  },
  privacy_desc: {
    privacy_desc_list: [
      {
        privacy_key: 'UserInfo',
        privacy_desc: '用户信息（微信昵称、头像）',
      },
      {
        privacy_key: 'Location',
        privacy_desc: '位置信息',
      },
      {
        privacy_key: 'Address',
        privacy_desc: '地址',
      },
      {
        privacy_key: 'Invoice',
        privacy_desc: '发票信息',
      },
      {
        privacy_key: 'RunData',
        privacy_desc: '微信运动数据',
      },
      {
        privacy_key: 'Record',
        privacy_desc: '麦克风',
      },
      {
        privacy_key: 'Album',
        privacy_desc: '选中的照片或视频信息',
      },
      {
        privacy_key: 'Camera',
        privacy_desc: '摄像头',
      },
      {
        privacy_key: 'PhoneNumber',
        privacy_desc: '手机号',
      },
      {
        privacy_key: 'Contact',
        privacy_desc: '通讯录（仅写入）权限',
      },
      {
        privacy_key: 'DeviceInfo',
        privacy_desc: '设备信息',
      },
      {
        privacy_key: 'EXIDNumber',
        privacy_desc: '身份证号码',
      },
      {
        privacy_key: 'EXOrderInfo',
        privacy_desc: '订单信息',
      },
      {
        privacy_key: 'EXUserPublishContent',
        privacy_desc: '发布内容',
      },
      {
        privacy_key: 'EXUserFollowAcct',
        privacy_desc: '所关注账号',
      },
      {
        privacy_key: 'EXUserOpLog',
        privacy_desc: '操作日志',
      },
      {
        privacy_key: 'AlbumWriteOnly',
        privacy_desc: '相册（仅写入）权限',
      },
      {
        privacy_key: 'LicensePlate',
        privacy_desc: '车牌号',
      },
      {
        privacy_key: 'BlueTooth',
        privacy_desc: '蓝牙',
      },
      {
        privacy_key: 'CalendarWriteOnly',
        privacy_desc: '日历（仅写入）权限',
      },
      {
        privacy_key: 'Email',
        privacy_desc: '邮箱',
      },
      {
        privacy_key: 'MessageFile',
        privacy_desc: '选中的文件',
      },
    ],
  },
}

const getPrivacyInterfaceResult = {
  errcode: 0,
  errmsg: 'ok',
  interface_list: [
    {
      api_name: 'wx.getLocation',
      api_ch_name: '获取当前的地理位置、速度',
      api_desc: '获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。',
      status: 1,
      api_link: 'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html',
      group_name: '地理位置'
    },
    {
      api_name: 'wx.onLocationChange',
      api_ch_name: '监听实时地理位置变化事件',
      api_desc: '监听实时地理位置变化事件。当用户离开小程序后，此接口无法调用。',
      status: 2,
      api_link: 'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html',
      group_name: '地理位置'
    },
    {
      api_name: 'wx.chooseAddress',
      api_ch_name: '获取用户收货地址',
      api_desc: '调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。',
      apply_time: 1652668405,
      status: 3,
      audit_id: 421643311,
      fail_reason: '',
      api_link: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html',
      group_name: '地理位置'
    },
    {
      api_name: 'wx.choosePoi',
      api_ch_name: '选择位置，支持模糊定位（精确到市）和精确定位混选',
      api_desc: '选择位置，支持模糊定位和精确定位混选',
      apply_time: 1652668405,
      status: 4,
      audit_id: 421610267,
      fail_reason: '小程序内未含有相应使用场景',
      api_link: 'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.choosePoi.html',
      group_name: '地理位置'
    },
    {
      api_name: 'wx.chooseLocation',
      api_ch_name: '打开地图选择位置',
      api_desc: '打开地图选择位置。',
      apply_time: 1652668405,
      status: 5,
      audit_id: 421643311,
      fail_reason: '',
      api_link: 'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html',
      group_name: '地理位置'
    }
  ],
}

export type WxIsvPrivacySettingResponse = typeof getPrivacySettingResult
export type WxIsvPrivacyInterfaceResponse = typeof getPrivacyInterfaceResult
