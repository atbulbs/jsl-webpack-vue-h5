<template>
  <div class="list-root">
    <jsl-navbar
      @click.native="goBack"
      title="FE-live"
    />
    <list-item
      v-for="(item, index) in dataList"
      :key="index + 'liveList'"
      :data="item"
      @click.native="toLiveRoom(index)"
    />
    <jsl-footer-line />
    <jsl-card-modal
      v-show="isModalShow"
      @onClose="handleMoalClose"
    />
 </div>
</template>

<script type="text/ecmascript-6">
import JslNavbar from 'base-components/navbar/navbar'
import JslFooterLine from 'base-components/nomore-tip/nomore-tip'
import JslCardModal from 'base-components/card-modal/card-modal'
import listItem from 'components/list-item'
import { liveList } from 'mock/data'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      dataList: liveList,
      isModalShow: false
    }
  },
  methods: {
    ...mapMutations(['SET_LIVE_INFO']),
    toLiveRoom (index) {
      this.SET_LIVE_INFO(this.dataList[index])
      this.$router.push({
        name: 'live'
      })
    },
    handleMoalClose () {
      this.isModalShow = false
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  components: {
    JslNavbar,
    listItem,
    JslFooterLine,
    JslCardModal
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.list-root
  position relative
  color #333
  text-align center
  padding-bottom 32px
</style>
