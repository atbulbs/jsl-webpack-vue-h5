<template>
  <div class="grid-item-root">
    <div
      class="gift-img"
      :style="{ backgroundImage: `url(${data.img})` }"
    >
    </div>
    <div class="gift-name">
      {{ data.name }}
    </div>
    <div
      class="gift-price"
      :class="{ 'free': !data.price }"
    >
      {{ data.price ? data.price + '泰币' : '免费'}}
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
export default {
  props: ['data']
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"
.grid-item-root
  width 68px
  height 97px
  >.gift-img, .gift-name, .gift-price
    margin 0 auto
    text-align center
  >.gift-img
    has-bg(46.7px, 49px)
  >.gift-name
    text-line(15px, 12px)
    display block
    color $color-gift-name
  >.gift-price
    text-line(11px, 10px)
    display block
    color $color-gift-price
  >.free
    color $color-gift-price-free
</style>
