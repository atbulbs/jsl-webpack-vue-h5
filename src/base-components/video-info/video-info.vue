<template>
  <div class="video-info-root">
    <p class="title">
      美容医师带你了解皮肤
    </p>
      <!-- {{data.title}} -->
    <p class="description">
      简介：位于皮肤的浅层，由复层鳞状上皮组成，表皮由两类
    </p>
      <!-- {{data.description}} -->
  </div>
</template>


<script type="text/ecmascript-6">
export default {
  props: ['data']
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"
.video-info-root
  full-width(66px)
  padding 12px 18px
  border-bottom 1px solid #666
  >.title
    font-size 15px
    font-weight bold
    margin-bottom 3px
  >.description
    font-size 13px
</style>
