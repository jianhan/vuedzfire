import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from '@/routes';
import store from '@/store';
import './registerServiceWorker';
import firebase from 'firebase'
import firebaseConfigs from './configs/firebase'

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
