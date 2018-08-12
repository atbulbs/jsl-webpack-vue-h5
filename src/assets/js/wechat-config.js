import { appId, jsApiList, wxShareInfo } from './constants-define'
import { getSignature } from 'api/wechat'
const wx = require('weixin-js-sdk')

export async function wechatConfig (callBack) {
  const res = await getSignature()
  const data = res.data
  const configObj = {
    debug: false,
    appId,
    timestamp: data.timestamp,
    nonceStr: data.noncestr,
    signature: data.signature,
    jsApiList
  }
  wx.config(configObj)
  wx.ready(() => {
    if (callBack) {
      callBack()
    }
    wechatShareConfig()
  })
}

function wechatShareConfig () {
  // 分享给朋友
  wx.onMenuShareAppMessage({
    title: wxShareInfo.title,
    desc: wxShareInfo.desc,
    link: wxShareInfo.link,
    imgUrl: wxShareInfo.imgUrl,
    type: wxShareInfo.type,
    dataUrl: wxShareInfo.dataUrl,
    success: function () {
    }
  })
  // 分享到朋友圈
  wx.onMenuShareTimeline({
    title: wxShareInfo.title,
    link: wxShareInfo.link,
    imgUrl: wxShareInfo.imgUrl,
    success: function () {
    }
  })
}
