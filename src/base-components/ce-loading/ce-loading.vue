<template>
  <div class="loading">
    <img :style="style" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在加载数据...'
    },
    size: {
      type: Number,
      default: 25
    }
  },
  data () {
    return {
      style: {
        width: '',
        height: ''
      }
    }
  },
  mounted () {
    this.style.width = parseInt(this.size * this.clientRatio) + 'px'
    this.style.height = parseInt(this.size * this.clientRatio) + 'px'
    console.log('this.style', this.style)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/variable"
.loading
  width 100%
  text-align center
  position absolute
  top 50%
  transform translateY(-50%)
  .desc
    line-height 20px
    font-size 14px
    color #333
</style>
