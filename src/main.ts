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

// firebase

import firebase from 'firebase'
import '../node_modules/firebaseui/dist/firebaseui.css'
import { firebaseConfigs } from './configs/firebase'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    firebase.initializeApp(firebaseConfigs);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/')
      } else {
        this.$router.push('/auth')
      }
     });
    },
  render: h => h(App),
}).$mount('#app');
