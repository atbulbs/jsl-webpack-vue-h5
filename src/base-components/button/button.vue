<template>
  <div
    class="button-root"
    :style="{
      backgroundColor: bgColor,
      fontSize: toVw(fontSize),
      color,
      width: toVw(width),
      height: toVw(height),
      lineHeight: toVw(height),
      borderRadius: toVw(radius)
    }"
  >
  {{text}}
  </div>
</template>


<script type="text/ecmascript-6">
import { toVw } from 'shared/util'

export default {
  props: {
    text: {
      default: '按钮'
    },
    radius: {
      default: 30
    },
    width: {
      default: 375
    },
    height: {
      default: 57
    },
    bgColor: {
      default: '#517DF7'
    },
    fontSize: {
      default: 16
    },
    color: {
      default: '#FCFCFC'
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

.button-root
  inline()
  tac()
</style>
