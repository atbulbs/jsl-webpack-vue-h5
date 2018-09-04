<template>
  <div
    class="close-root"
    :style="{
        backgroundImage: `url(${ circle ? circleImg : defaultImg})`,
        width: toVw(size),
        height: toVw(size)
      }"
  >
  </div>
</template>


<script type="text/ecmascript-6">
import { toVw } from 'shared/util'
import defaultImg from './cross.png'
import circleImg from './cross-circle.png'

export default {
  props: {
    size: {
      default: 14.8
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      defaultImg,
      circleImg
    }
  },
  methods: {
    toVw (num) {
      return toVw(num)
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"
.close-root
  has-bg(14.8px, 14.8px)
  background-size cover
</style>
