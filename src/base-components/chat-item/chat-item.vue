<template>
  <div class="chat-item-root">
    <p class="info">
      <span class="name">
        {{ data.name + (data.type === ':' ? ' : ' : '') }}
      </span>
      <span v-show="data.type === '进入直播间'" class="enter">
        进入直播间
      </span>
      <span v-show="data.type === '送'" class="enter">
        {{ '送' + data.gift }}
      </span>
      <span class="word">
        {{ data.word }}
      </span>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['data']
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"
.chat-item-root
  padding-bottom 7px
  >.info
    >.name, .enter
      text-line(20px, 14px)
      display inline-block
      color #517DF7
    >.word, .enter
      margin-left 10px
</style>
