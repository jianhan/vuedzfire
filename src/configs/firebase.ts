import firebase from "firebase";

export const firebaseConfigs = {
  apiKey: "AIzaSyBhb6tIr2sYjcsPBRpa1LIkoWH6y-tcqf4",
  authDomain: "vuedz-f4390.firebaseapp.com",
  databaseURL: "https://vuedz-f4390.firebaseio.com",
  projectId: "vuedz-f4390",
  storageBucket: "vuedz-f4390.appspot.com",
  messagingSenderId: "1061500863546"
};

export const firebaseUILoginConfigs = {
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};
