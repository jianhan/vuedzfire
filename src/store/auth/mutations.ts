import { MutationTree } from 'vuex';
import { AuthState, User } from './types';
import * as mutationTypes from '@/store/mutation-types'
import Vue from 'vue'

const mutations: MutationTree<AuthState> = {
  [mutationTypes.USER_LOGGED_IN](state, payload: User) {
    state.user = payload

    state.authError = ''
    state.showAuthDialog = false
    state.isLoading = false
  },
  [mutationTypes.ERROR_ON_LOGIN](state, payload: string) {
    Vue.set(state, 'authError', payload)
    Vue.set(state, 'user', undefined)
    Vue.set(state, 'showAuthDialog', false)
    Vue.set(state, 'isLoading', false)
  },
  [mutationTypes.USER_LOGGED_OUT](state) {
    Vue.set(state, 'authError', '')
    Vue.set(state, 'user', undefined)
    Vue.set(state, 'showAuthDialog', false)
    Vue.set(state, 'isLoading', false)
  },
  [mutationTypes.SHOW_AUTH_DIALOG](state) {
    Vue.set(state, 'showAuthDialog', true)
  },
  [mutationTypes.HIDE_AUTH_DIALOG](state) {
    Vue.set(state, 'showAuthDialog', false)
  },
  [mutationTypes.SET_AUTH_ERROR](state, payload: string) {
    Vue.set(state, 'authError', payload)
  },
  [mutationTypes.CLEAR_AUTH_ERROR](state) {
    Vue.set(state, 'authError', '')
  },
  [mutationTypes.SET_AUTH_LOADING](state, payload: boolean) {
    Vue.set(state, 'isLoading', payload)
  }
};

export default mutations;