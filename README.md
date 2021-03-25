# coa-wx-isv

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/coa-wx-isv.svg?style=flat-square)](https://www.npmjs.org/package/coa-wx-isv)
[![npm downloads](https://img.shields.io/npm/dm/coa-wx-isv.svg?style=flat-square)](http://npm-stat.com/charts.html?package=coa-wx-isv)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/coajs/coa-wx-isv/pulls)

一个超简单的微信SDK服务商版 for Node.js

## 特点

根据日常实际项目使用情况：

- 覆盖了绝大多数使用场景
- 统一了异步表现形式，全部返回 Promise
- 内置类型引用，无需额外查看文档，开箱即用，IDE友好

## 快速开始

### 安装

```shell
yarn add coa-wx-isv
```

### 直接使用

```typescript
import { WxIsvAuthService, WxIsvBin } from 'coa-wx-isv'

const config = {
  appId: 'wxe4fe827fc87f0000',
  appSecret: '04277da11000000000000000ddc25c063',
  appToken: 'B0D791C6AAAAAAAAAAAAAAAA874DFEDEC8',
}

const bin = new WxIsvBin(config)

const authService = new WxIsvAuthService(bin)

await authService.getAuthInfoByCode('code')
```