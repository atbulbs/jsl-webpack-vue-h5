<template>
  <div class="live-header-root">
    <jsl-avatar
      class="avatar"
      :img="liveInfo.avatarImg"
    />
    <div class="emcee">
      {{liveInfo.emcee}}
    </div>
    <jsl-close
      class="close"
      @click.native="handleClose"
    />
  </div>
</template>


<script type="text/ecmascript-6">
import JslAvatar from 'base-components/avatar/avatar'
import JslClose from 'base-components/close/close'
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: mapState(['liveInfo']),
  methods: {
    handleClose () {
      this.$router.go(-1)
    }
  },
  mounted () {
  },
  components: {
    JslAvatar,
    JslClose
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.live-header-root
  i-nav()
  position relative
  >.avatar
    ab-l(18px)
  >.emcee
    ab-l(56px)
    color #fff
  >.close
    ab-r(18.6px)
</style>
