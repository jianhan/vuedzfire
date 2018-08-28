import firebase from "firebase";
import 'firebase/firestore'
import * as env from '@/.env.js'

const firebaseConfigs = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DATABASE_URL,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(firebaseConfigs)

const firebaseUILoginConfigs = {
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
}

// firebase utils
const fb = firebase.firestore()
const auth = firebase.auth()

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}

fb.settings(settings)

export {
  firebase,
  fb,
  auth,
  firebaseUILoginConfigs 
}