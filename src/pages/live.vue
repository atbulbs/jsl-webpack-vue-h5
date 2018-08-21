<template>
 <div class="live-root">
    <live-header />
    <jsl-video :data="liveInfo" />
    <video-info />
    <jsl-chat-list
      :data="chatInfoList"
    />
    <jsl-chat-input />
 </div>
</template>


<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import { chatInfoList } from 'mock/data'
import LiveHeader from 'components/live-header'
import JslVideo from 'components/video'
import JslChatInput from 'components/chat-input'
import VideoInfo from 'base-components/video-info/video-info'
import JslChatList from 'base-components/chat-list/chat-list'

export default {
  data () {
    return {
      chatInfoList
    }
  },
  computed: mapState(['liveInfo']),
  components: {
    LiveHeader,
    JslVideo,
    VideoInfo,
    JslChatList,
    JslChatInput
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"
.live-root
  live-bg()
</style>
