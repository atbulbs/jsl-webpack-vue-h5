<template>
  <div class="video-root">
    <jsl-poster
      v-show="(data.status !== '直播中') && isShow"
      :data="data"
      @click.native="handlePosterClick"
    />
    <video class="video" controls autoplay loop>
      <source
        src="../mock/video/huiguorou.mp4"
        type="video/mp4"
      >
    </video>
  </div>
</template>


<script type="text/ecmascript-6">
import JslPoster from 'base-components/poster/poster'

export default {
  props: ['data'],
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    handlePosterClick () {
      this.isShow = !this.isShow
    }
  },
  components: {
    JslPoster
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"
.video-root
  position relative
  >.video
    object-fit fill
    full-width(210px)
</style>
