import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmv2ggHpNJiZBeRX5SzRelMq1aZ2Azxb8",
  authDomain: "click-it-f99d2.firebaseapp.com",
  databaseURL: "https://recess-it.firebaseio.com",
  projectId: "recess-it",
  storageBucket: "recess-it.appspot.com",
  messagingSenderId: "352303707187",
  appId: "1:565865071673:web:af324bf2cf8baedd2a39e8",
  measurementId: "G-B3QL0CLZX9",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
