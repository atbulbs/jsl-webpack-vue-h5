import * as types from './mutation-types'

const mutations = {
  [types.SET_AUTO_JUMP] (state, payload) {
    state.autoJump = payload
  },
  [types.SET_LIVE_INFO] (state, payload) {
    state.liveInfo = payload
  }
}

export default mutations
