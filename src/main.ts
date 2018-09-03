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
import { mapMutations } from 'vuex'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    this.setAuthLoading(true)
    auth.onAuthStateChanged(user => {
      this.setAuthLoading(false)
      if(user) {
        user.getIdToken().then(r => {
          const loggedInUser:User = {
            uid: user.uid,
            displayName: user.displayName === null ? '' : user.displayName,
            email: user.email === null ? '' : user.email,
            photoURL: user.photoURL === null ? '' : user.photoURL,
            refreshToken: user.refreshToken,
            idToken: r
          }
          this.userLoggedIn(loggedInUser)
        }).catch(e => {
          this.$store.commit(`auth/${mutationTypes.USER_LOGGED_OUT}`)
          this.userLoggedOut()
        })
      } else {
        this.userLoggedOut()
      }
     });
    },
  methods: {
    ...mapMutations({
      'userLoggedIn': `auth/${mutationTypes.USER_LOGGED_IN}`,
      'userLoggedOut': `auth/${mutationTypes.USER_LOGGED_OUT}`,
      'setAuthLoading': `auth/${mutationTypes.SET_AUTH_LOADING}`
    })
  },
  render: h => h(App),
}).$mount('#app');
