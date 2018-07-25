<template>
 <div class="root">
    <H2>it is list page, id : {{id}}, metaData : {{metaData}}</H2>
    <div @click="$router.push({ name: 'home'})">
      <button>to home page</button>
    </div>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      id: '',
      metaData: '',
      transitionName: 'slide-left'
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.metaData = this.$router.currentRoute.meta.metaData
  },
  watch: {
    '$route' (to, from) {
      console.log('to.path', to.path)
      console.log('from.path', from.path)
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('list from', from)
    next((vm) => {
      console.log('vm', vm)
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.root
  height 2000px
  color #333
</style>
