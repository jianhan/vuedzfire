import { GetterTree } from 'vuex';
import { AuthState } from './types';

const getters: GetterTree<AuthState, any> = {
  isUserLoggedIn(state): boolean {
    const { user, authError } = state;
    if (user !== null && authError == '') {
        return true;
    }

    return false;
  }
};

export default getters;