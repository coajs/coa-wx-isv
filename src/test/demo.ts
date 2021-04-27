// @ts-nocheck

import { WxIsvAuthService, WxIsvBin } from '..'

const config = {
  appId: 'wxe4fe827fc87f0000',
  appSecret: '04277da11000000000000000ddc25c063',
  appToken: 'B0D791C6AAAAAAAAAAAAAAAA874DFEDEC8',
}

const bin = new WxIsvBin(config)

const authService = new WxIsvAuthService(bin)

await authService.getAuthInfoByCode('code')