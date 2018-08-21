<template>
  <div
    :style="{ backgroundImage: `url(${data.bgImg})` }"
    class="list-item-root"
  >
    <div
      class="avatar"
      :style="{ backgroundImage: `url(${data.avatarImg})` }"
    >
    </div>
    <div class="emcee">
      {{ data.emcee }}
    </div>
    <div class="title">
      {{ data.title }}
    </div>
    <div
      class="status"
      :style="{ backgroundColor: colorMap[data.status] }"
    >
      <i class="dot">
      </i>
      {{data.status}}
    </div>
    <div class="detail">
      <span v-show="data.timeCount" class="text">
        距离直播
      </span>
      <span class="number">
        {{ data.viewerCount || data.playCount || data.time || data.timeCount}}
      </span>
      <span v-show="data.viewerCount" class="text">
        人观看
      </span>
      <span v-show="data.playCount" class="text">
        次播放
      </span>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
export default {
  props: ['data'],
  data () {
    return {
      colorMap: {
        '直播中': '#FF595D',
        '回放': '#0FD9A5',
        '即将开始': '#4D76E3',
        '倒计时': '#4D76E3'
      }
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"
.list-item-root
  has-bg(351px, 280px)
  margin 12px auto 0
  border-radius 7px
  position relative
  color #fff
  >.avatar
    has-bg(31px, 31px)
    ab-lt(12px, 10px)
    border-radius 50%
  >.emcee
    ab-lt(49px, 15px)
    font-size 15px
  >.title
    ab-lt(12.5px, 223px)
    font-size 17px
  >.status
    ab-lt(12px, 252px)
    text-line(18px, 11px)
    line-height 16px
    border-radius 3px
    padding 2px 5px
    >.dot
      dot(5px, #fff)
      transform translateY(-3px)
  >.detail
    ab-rb(12px, 10px)
    >.text
      display inline-block
      text-line(16px, 11px)
      color #E9EBF0
      transform scale(0.95) translateY(-1px)
    >.number
      text-line(17px, 15px)
</style>
