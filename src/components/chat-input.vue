<template>
  <div class="chat-input-root">
    <input
      class="input"
      type="text"
      placeholder="我来说两句..."
    >
    <div
      class="gift"
      @click="changeGiftGridShow"
    >
    </div>
    <gift-grid
      v-show="isGiftGridShow"
      @click.native="changeGiftGridShow"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import GiftGrid from './gift-grid'
export default {
  data () {
    return {
      isGiftGridShow: false
    }
  },
  methods: {
    changeGiftGridShow () {
      this.isGiftGridShow = !this.isGiftGridShow
    }
  },
  components: {
    GiftGrid
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/variable"
@import "~styles/mixin"
.chat-input-root
  full-width(51px)
  position relative
  background-color $color-live-bg-d
  >.input
    width 293px
    height 37px
    ab-l(15px)
    border-radius 20px
    outline none
    border none
    padding-left 20px
    color #29292B
    background-color $color-live-bg
    cursor pointer
  >.gift
    display inline
    with-bg(30px, 30px, '../assets/images/gift.png')
    ab-r(10px)
</style>
