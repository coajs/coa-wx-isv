# coa-wx-isv

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/coa-wx-isv.svg?style=flat-square)](https://www.npmjs.org/package/coa-wx-isv)
[![npm downloads](https://img.shields.io/npm/dm/coa-wx-isv.svg?style=flat-square)](http://npm-stat.com/charts.html?package=coa-wx-isv)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/coajs/coa-wx-isv/pulls)

一个轻量的微信 SDK 服务商版 for Node.js

## 特点

根据日常实际项目使用情况：

- 覆盖了绝大多数使用场景
- 统一了异步表现形式，全部返回 Promise
- 内置类型引用，无需额外查看文档，开箱即用，IDE 友好

## 快速开始

### 安装

```shell
yarn add coa-wx-isv
```

### 直接使用

```typescript
import { WxIsvAuthService, WxIsvBin } from 'coa-wx-isv'

// 服务商配置
const config = {
  appId: 'wxe4fe827fc87f0000',
  appSecret: '04277da11000000000000000ddc25c063',
  appToken: 'B0D791C6AAAAAAAAAAAAAAAA874DFEDEC8',
}

// 初始化Bin实例
const bin = new WxIsvBin(config)

// 根据bin初始化一个授权类的服务
const authService = new WxIsvAuthService(bin)

// 调用服务
await authService.getAuthInfoByCode('code')
```

### 记录错误信息

```typescript
import { WxIsvDomainService, WxIsvBin } from 'coa-wx-isv'

// 自定义bin实例
class MyWxIsvBin extends WxIsvBin {
  // 自定义请求异常的事件
  onRequestError(error, res) {
    // 在这里记录错误
    console.log(error)
    console.log(res)
  }
}

// 初始化自定义的Bin实例
const myBin = new MyWxIsvBin(config)

// 根据自定义的Bin实例，创建一个域名服务
const domainService = new WxIsvDomainService(myBin)

// 调用服务
await domainService.setBiz('accessToken', 'domian')

// 错误地调用服务
await domainService.setBiz('', '') // onRequestError 会记录这条错误信息
```
