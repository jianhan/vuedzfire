import { MutationTree } from 'vuex';
import { AuthState, User } from './types';
import * as mutationTypes from '@/store/mutation-types'

const mutations: MutationTree<AuthState> = {
  [mutationTypes.USER_LOGGED_IN](state, payload: User) {
    state.authError = '';
    state.user = payload;
  },
  [mutationTypes.ERROR_ON_LOGIN](state, payload: string) {
    state.authError = payload;
    state.user = undefined;
  },
  [mutationTypes.USER_LOGGED_OUT](state) {
    state.authError = '';
    state.user = undefined;
  }
};

export default mutations;