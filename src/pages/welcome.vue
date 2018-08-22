<template>
  <div class="welcome-root">
    <div class="avatar">
    </div>
    <div class="title">
      welcome to jsl-vue-webpack-h5
    </div>
    <div class="description">
      a webpack-vue project build for h5 develop more efficient
    </div>
    <jsl-button
      text="click to demo"
      @click.native="$router.push({ name: 'list' })"
    />
  </div>
</template>


<script type="text/ecmascript-6">
import JslButton from 'base-components/button/button'

export default {
  components: {
    JslButton
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.welcome-root
  color #007ACC
  >.avatar
    with-bg(157px, 173px, '../mock/images/avatar1.jpg')
    margin 50px auto 10px
  >.title, .description
    tac()
  >.title
    fs(25px)
    bold()
  >.description
    fs(25px)
    margin 10px auto
</style>
