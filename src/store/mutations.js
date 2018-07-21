import * as types from './mutation-types'

const mutations = {
  [types.SET_AUTO_JUMP] (state, payload) {
    state.autoJump = payload
  }
}

export default mutations
