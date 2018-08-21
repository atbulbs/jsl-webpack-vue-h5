<template>
  <div
    class="poster-root"
    :style="{ backgroundImage: `url(${ data.status === '即将开始' ? posterWaitImg : posterEndImg })` }"
    @click="handleClick"
  >
    <div
      class="wait-info"
      v-show="data.status === '即将开始'"
    >
      直播未开始  敬请期待
      <div class="time">
        {{data.time}}
      </div>
    </div>
    <div
      class="end-info"
      v-show="data.status === '回放'"
    >
      您观看的直播已结束
      <br />
      谢谢观看
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
import posterWaitImg from './poster-wait.png'
import posterEndImg from './poster-End.png'

export default {
  props: ['data'],
  data () {
    return {
      posterWaitImg,
      posterEndImg
    }
  },
  methods: {
    handleClick () {}
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.poster-root
  has-bg(375px, 210px)
  ab-lt(0, 0)
  z-index 1000
  >.end-info, .wait-info
    font-size 26px
    font-weight 600
    text-align center
    height 70px
  >.end-info
    width 235px
    ab-lt(71px, 70px)
  >.wait-info
    width 252px
    ab-lt(62px, 73px)
    >.time
      display inline-block
      text-line(22px, 22px)
      font-size 22px
</style>
