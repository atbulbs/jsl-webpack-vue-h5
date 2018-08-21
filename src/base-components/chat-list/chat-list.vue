<template>
  <div class="chat-list-root">
    <jsl-chat-item
      v-for="(item, index) in data"
      :key="index + 'chat-item'"
      :data="item"
    />
  </div>
</template>


<script type="text/ecmascript-6">
import JslChatItem from '../chat-item/chat-item'
export default {
  props: ['data'],
  components: {
    JslChatItem
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"
.chat-list-root
  width 375px
  padding 16px 39px 0 18px
</style>
