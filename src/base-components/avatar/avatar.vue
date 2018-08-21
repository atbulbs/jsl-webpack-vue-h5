<template>
  <div
    class="avatar-root"
    ref="root"
    :style="{ backgroundImage: `url(${img})` }">
  </div>
</template>


<script type="text/ecmascript-6">
import defaultImg from './avatar.jpg'

export default {
  props: {
    img: {
      type: String,
      default: defaultImg
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"
.avatar-root
  display inline-block
  avatar(30px)
</style>
