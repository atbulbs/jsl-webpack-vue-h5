<template>
  <div class="card-modal-root">
    <jsl-close
      class="close"
      size="23"
      circle
      @click.native="handleClose"
    />
    <div class="card">
      <div class="info">
        <p class="content">
          医师帮助你了解皮肤的
          十个小秘密
        </p>
        <p class="time">
          2018.06.30 14:00-16:00
        </p>
        <p class="tip">
          <i class="dot"></i>直播即将开始
        </p>
      </div>
      <div class="title">
        观影劵
      </div>
    </div>
    <jsl-button
      class="use-it"
      text="使用观影券"
      width="240"
      hieght="44"
    />
  </div>
</template>


<script type="text/ecmascript-6">
import JslClose from 'base-components/close/close'
import JslButton from 'base-components/button/button'

export default {
  data () {
    return {

    }
  },
  methods: {
    handleClose () {
      this.$emit('onClose')
    }
  },
  components: {
    JslClose,
    JslButton
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.card-modal-root
  modal()
  >.close
    ab-rt(33px, 194px)
  >.use-it
    ab-t(395px)
  >.card
    with-bg(299px, 120px, './card.png')
    ab-t(228px)
    display flex
    >.info, .title
      inline()
      height 120px
    >.info
      width 179px
      padding 17px 0 17px 18px
      >.content, .time, .tip
        text-align left
        margin-bottom 6px
      >.time, .tip
        color  #4C5979
      >.content
        width 140px
        height 38px
        line-height 19px
        font-size 14px
        color  #1F2845
      >.time
        width 160px
        text-line(18px, 13px)
      >.tip
        width 140px
        height 38px
        >.dot
          dot(5px, #517DF7)
          transform translateY(-3px)
          margin-right 2px
    >.title
      width 120px
      font-size 30px
      color #fff
      line-height 120px
</style>
