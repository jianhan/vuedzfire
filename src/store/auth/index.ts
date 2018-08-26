import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { AuthState } from './types';

export const state: AuthState = {
  user: undefined,
  authError: ''
};

const namespaced: boolean = true;

const auth: Module<AuthState, any> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default auth