import * as types from './mutation-types'

export const setAutoJumpDelay = function ({commit}, payload) {
  commit(types.SET_AUTO_JUMP, setTimeout(() => {
    return payload
  }, 5000))
}
