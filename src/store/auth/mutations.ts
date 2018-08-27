import { MutationTree } from 'vuex';
import { AuthState, User } from './types';
import * as mutationTypes from '@/store/mutation-types'

const mutations: MutationTree<AuthState> = {
  [mutationTypes.USER_LOGGED_IN](state, payload: User) {
    state.authError = ''
    state.user = payload
    state.showAuthDialog = false
  },
  [mutationTypes.ERROR_ON_LOGIN](state, payload: string) {
    state.authError = payload
    state.user = undefined
    state.showAuthDialog = false
  },
  [mutationTypes.USER_LOGGED_OUT](state) {
    state.authError = ''
    state.user = undefined
    state.showAuthDialog = false
  },
  [mutationTypes.SHOW_AUTH_DIALOG](state) {
    state.showAuthDialog = true
  },
  [mutationTypes.HIDE_AUTH_DIALOG](state) {
    state.showAuthDialog = false
  },
};

export default mutations;