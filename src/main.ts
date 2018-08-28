import '@babel/polyfill'
import Vue from 'vue';
import App from './App.vue';

// vuetify
import './plugins/vuetify'


// router
import router from '@/routes';

// vuex
import store from '@/store';

// service workder
import './registerServiceWorker';

// load dot env
require('dotenv').config()

// firebase
import '../node_modules/firebaseui/dist/firebaseui.css'
import { auth } from './configs/firebase'
import * as mutationTypes from './store/mutation-types'
import { User } from './store/auth/types'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        const loggedInUser:User = {
          displayName: user.displayName === null ? '' : user.displayName,
          email: user.email === null ? '' : user.email,
          photoURL: user.photoURL === null ? '' : user.photoURL,
        }
        this.$store.commit(`auth/${mutationTypes.USER_LOGGED_IN}`, loggedInUser)
      } else {
        this.$store.commit(`auth/${mutationTypes.USER_LOGGED_OUT}`)
      }
     });
    },
  render: h => h(App),
}).$mount('#app');
