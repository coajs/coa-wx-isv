import { echo } from 'coa-echo'
import { die } from 'coa-error'
import { xml } from 'coa-xml'
import * as crypto from 'crypto'
import { WxIsvServiceBase } from '../libs/WxIsvServiceBase'

export class WxIsvSecurityService extends WxIsvServiceBase {

  // 解密
  async decrypt (encryptedData: string) {

    const key = this.config.appToken
    const iv = key.substr(0, 16)
    let result = {} as any

    try {
      const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
      // 设置自动 padding 为 true，删除填充补位
      decipher.setAutoPadding(true)
      let decoded = decipher.update(encryptedData, 'base64', 'utf8')
      try {decoded += decipher.final('utf8')} catch (e) {}
      decoded = decoded.replace(/[\s\S]*(<xml>[\s\S]*<\/xml>)[\s\S]*/, '$1')
      result = await xml.decode(decoded)
    } catch (e) {
      die.error('微信解密失败')
    }
    return result
  }

  // 解密
  decryptData (encryptedData: string, iv: string, sessionKey: string): any {

    // base64 decode
    const bSessionKey = Buffer.from(sessionKey, 'base64')
    const bEncryptedData = Buffer.from(encryptedData, 'base64')
    const bIv = Buffer.from(iv, 'base64')

    try {
      const decipher = crypto.createDecipheriv('aes-128-cbc', bSessionKey, bIv)
      // 设置自动 padding 为 true，删除填充补位
      decipher.setAutoPadding(true)
      let decoded = decipher.update(bEncryptedData, undefined, 'utf8')
      decoded += decipher.final('utf8')
      decoded = JSON.parse(decoded)

      return decoded

    } catch (err) {
      echo.error(err)
      die.hint('解密错误')
    }

  }

}