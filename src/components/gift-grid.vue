<template>
  <div class="gift-grid-root">
    <jsl-grid :data="giftList" />
    <div class="account">
      现有{{account}}泰币
    </div>
    <div class="to-make-money">
      去赚泰币>
    </div>
    <div class="grant">
      <div class="cost">
        <span class="pay">花费</span>
        <span class="total-cost">{{totalCost}}泰币</span>
      </div>
      <div class="to-grant">
        赠送
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import JslGrid from 'base-components/grid/grid'
import { giftList } from 'mock/data'

export default {
  data () {
    return {
      giftList,
      account: 500,
      totalCost: 0
    }
  },
  methods: {
  },
  components: {
    JslGrid
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"
.gift-grid-root
  full-width(267px)
  position fixed
  bottom 0
  background-color #fff
  padding-top 14px
  >.account
    ab-lb(18px, 16px)
    text-line(18px, 13px)
    color #1F2845
  >.to-make-money
    ab-lb(104px, 16px)
    text-line(18px, 13px)
    color #517DF7
  >.grant
    text-line(32px, 13px)
    ab-rb(18px, 9px)
    border 1px solid #FFA524
    border-radius 20px
    overflow hidden
    display flex
    flex 1
    >.cost
      width 88px
      display flex
      justify-content space-around
      >.pay
        color #1F2845
        padding-left 5px
      >.total-cost
        color #FFA524
    >.to-grant
      width 51px
      background-color #FFA524
      text-align center
</style>
