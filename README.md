# 8bulbs-project webpack-vue
> 模块化强迫症:joy:的webpack-vue配置,采用最新的webpack v-4.16和vue-loader v-15.3, 开箱:package:即用, 引入vw适配和wechat-js-sdk,二次封装axios,更高效:rocket:更激爽:kiss:的构建H5项目

## build with the latest dependencies version

``` bash
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

