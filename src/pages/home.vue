<template>
 <div class="home-root">
   <div class="avatar">
   </div>
   <p class="welcome">
    welcome to jsl-webpack-vue-h5
   </p>
   <div @click="handleClick">
     <button>to list page</button>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      this.$router.push({
        name: 'list',
        params: {
          id: 9527
        }
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    // console.log('home to', to)
    // console.log('home from', from)
    const answer = window.confirm('请保存更改再离开主页')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/mixin'
.home-root
  text-align center
  padding-top 50px
  .avatar
    with-bg('../assets/images/avatar.jpg', 150px, 170px)
    margin 0 auto
  .welcome
    margin 10px auto
</style>
