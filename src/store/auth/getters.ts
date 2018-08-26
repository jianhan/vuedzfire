import { GetterTree } from 'vuex';
import { AuthState } from './types';

const getters: GetterTree<AuthState, any> = {

  fullName(state): string {
    const { user } = state;
    const firstName = (user && user.firstName) || '';
    const lastName = (user && user.lastName) || '';
    return `${firstName} ${lastName}`;
  },

  isUserLoggedIn(state): boolean {
    const { user, authError } = state;
    if (user !== null && authError == '') {
        return true;
    }

    return false;
  }
};

export default getters;