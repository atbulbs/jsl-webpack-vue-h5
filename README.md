# atbulbs-project webpack-vue-h5
> 模块化强迫症:joy:webpack配置工程师:sunglasses:的webpack-vue配置,采用最新的webpack v-4.25和vue-loader v-15.4, 开箱:package:即用, 引入vw适配(建议UI图为375px宽度, 写px单位会自动转为vw)和wechat-js-sdk(方便二次分享以及调用微信其他API),二次封装axios,更高效:rocket:更激爽:kiss:的构建H5项目

## 基于此配置构建的插件库, 自己撸的一些小轮子, welcome npm install :smile:

>npm package  [https://www.npmjs.com/package/jsl-vue-h5](https://www.npmjs.com/package/jsl-vue-h5)

>git仓库  [https://github.com/8bulbs/jsl-vue-h5](https://github.com/8bulbs/jsl-vue-h5)

>demo online [https://8bulbs.github.io/jsl-vue-h5-demo-online/]( https://8bulbs.github.io/jsl-vue-h5-demo-online/)

>demo仓库 [https://github.com/8bulbs/jsl-vue-h5-demo](https://github.com/8bulbs/jsl-vue-h5-demo)

## build with the latest version of dependencies

``` bash
# clone repository
$ git clone https://github.com/8bulbs/jsl-webpack-vue-h5.git

# change directory
$ cd jsl-webpack-vue-h5

# install ncu at global
$ npm install -g npm-check-updates

# use ncu
$ ncu -a

# install dependencies
$ npm install

# run the develop server
$ npm start

# build for production with minification
$ npm run build

```
## to deploy your project (proxy and history mode is surported)

```bash
# change directory
$ cd deploy-server

# install dependencies
$ npm install

# install pm2 at global to manager your production process
$ npm install pm2 -g

# run the deploy server with pm2
$ pm2 start server.js --watch

```

## directory path list

```bash
├─build
│  ├─commonConfig
│  └── ... # 开发和生产的通用配置, 模式, 目标, 别名解析
│  ├─commonPlugins
│  └── ... # 抽取出API请求
│  ├─commonRules
│  └── ... # 通用的编译规则
│  ├─devConfig
│  └── ... # 开发环境的配置, 入口, 出口, 开发服务器, 开发工具, 插件, 编译规则
│  ├─prodConfig
│  └── ... # 生产环境的配置, 入口, 出口, 插件, 编译规则, 优化
│  └─utils
│  └── ... # 工具类
├─deploy-server
│  └── ... # 部署服务器, 支持请求代理和路由的history模式
└─src
    ├─api
    │  └── ... # 抽取出API请求, axios的二次封装
    ├─shared
    │  └── ... # 工具类, 常量定义
    ├─assets
    │  ├─images
    │  └── ... # 图片资源
    │  ├─js
    │  └── ... # 常量定义, 微信js开发工具包的调用
    │  └─styles
    │  └── ... # css重置, 变量和mixin的设置
    ├─base-components
    │  └── ... # 基础组件
    ├─components
    │  └── ... # 业务组件
    ├─pages
    │  └── ... # 页面视图
    ├─router
    │  └── ... # 路由配置, 路由守卫, 滚动行为
    └─store
      └── ... # vuex状态管理

```

## H5开发经典风骚优雅爬坑姿势集锦之top n
### 1. 图片在某些ios端webview里为空白
> a方案: 给img加父级div, 设置父级div的高宽, 再给img设置宽度100%, a方法缺点, 增加了不必要的dom元素;
> b方案: 用div背景图取代img标签, 此方法虽简单粗暴, 不太好做懒加载, 而且在微信端用户无法保存图片或者识别图片中的二维码;
> 总结: 根据不同的图片展示用途选择方案

<!-- more -->

### 2. 模态框里的选择列表滑动时, 浮层下面的视图会跟随滚动
>方案: 模态框展示时, 让body固定定位, 模态框不展示时, 再取消body的固定定位
```javascript
// 定义方法-是否暂停body滚动
isStopBodyScroll (flag) {
  const bodyStyle = document.body.style
  const top = 0
  if (flag) {
    top = window.scrollY
    bodyStyle.position = 'fixed'
    // console.log('body is fixed')
    bodyStyle.top = -top + 'px'
  } else {
    bodyStyle.position = ''
    // console.log('body is not fixed')
    bodyStyle.top = ''
    window.scrollTo(0, top)
  }
}
```
### 3. 浏览器厂商安全策略, audio标签只能在用户交互后才能播放
>a. 在微信端: audio的play方法放在 wx.ready(callback) 回调里执行, 若用户在第三方浏览器比如UC打开, wx.ready 也会执行
>b. 在原生APP端: 可让原生同学提供模拟用户点击webview的方法, 调用此方法并传入播放音乐的回调, 或者用更简单的办法让原生修改webview设置
```java
// 设置媒体播放不需要用户的手势
webView.getSettings().setMediaPlaybackRequiresUserGesture(false)
```

```javascript
// src/assets/js/wechat-config.js
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
    callBack()
    wechatShareConfig()
  })
}

// src/components/jsl-player.vue
mounted () {
  this.setPlayerBg(playImg)
  this.startRotate()
  if (isInWechat()) {
    wechatConfig(this.audioPlay)
  } else {
    this.audioPlay()
  }
}
```
### 4. 开发时, 若从微信平台获取签名的接口, 与其他接口不在同一个服务器, 可在devServer里设置多个代理, 解决跨域, 测试与生产服务器必须有公网域名才能获取合法签名, 还需后端同学申请访问获取签名服务器的权限

### 5. 获取微信签名的接口, url应采用拼接的方式传入axios, 不然冒号和斜杠会被encodeURIComponent, 导致获取的签名不合法

```javascript
export function getSignature () {
  return $.get('/?appId=' + appId + '&url=' + url)
}
```

### 6. 注册微信分享的信息, 必须放在wx.ready(callback)回调里, 不然会出现用户分享后的文案与图片显示异常

### 7. 样式采用VW单位, 每个独立的小图尽量都切出来, 不然会在不同尺寸的终端变形

### 8. 一定要在微信端, 安卓原生APP端, 与iOS APP端都跑一跑, 安卓和iOS的webview不一样, 特别是iOS修改配置然后发版太蛋疼

### 9. 如果需要对ios和android的webview做区别处理, 可以让原生的同学设置用户代理的信息, 加入关键字
```javascript
// 微信端的ua关键字与原生自定义的ua关键字
export const uaKeyWordsMap = {
  isInWechat: 'micromessenger',
  isInAndroidApp: 'TSH-Android',
  isInIosApp: 'TSH-iOS'
}
// 获取H5的运行时环境
export function getH5RuntimeEnv () {
  let result = ''
  const ua = window.navigator.userAgent.toLowerCase()
  Object.keys(uaKeyWordsMap).forEach((runtimeEnv) => {
    const uaKeyWord = uaKeyWordsMap[runtimeEnv].toLowerCase()
    if (ua.indexOf(uaKeyWord) > -1) {
      result = runtimeEnv
    }
  })
  return result
}
```

### 10. 文字小于14px的处理, 注意要作用在块级元素
```css
span
  display inline-block
  transform scale(0.95)
```

### 11. input框在ios平台, 须点击多次才能出发文件选择框, 解决办法, 加上 cursor: pointer, 我只想说这个小手是黑科技, 比较科学的解释是, 微信浏览器会把有小手的元素解析为a标签, 而微信里的click事件只在a标签上有效

### 12. 失去焦点时的回调, 如果无法触发, 则在callbackfn里加入延迟定时器, 用来兼容webView的 keyboardDisplayRequiresUserAction设置

### 13. ios webView scroll 卡顿, -webkit-overflow-scrolling: touch 创建带有硬件加速的系统级控件，所以效率很高

### 14. 键盘唤起时,让输入框position: fixed, 如果iOS和Android的webView的键盘唤起时页面的行为不一样, 比如一个是键盘把页面顶上去, 一个是遮住页面, 注意遮住页面后页面的100vh是会变小的

### 15.  在https协议下, 动态的去加载http协议的js文件, 会报错, 解决方案如下
```javascript
<script src="//domin.com/js"></script>
```

### 16. 在template.html中引入js文件, 需设置webpack.config.devServer.contentBase [https://webpack.js.org/configuration/dev-server/#devserver-contentbase](https://webpack.js.org/configuration/dev-server/#devserver-contentbase)
