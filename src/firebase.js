import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDsSqWhn_DRX64CjQYzmloqI17ygm_gRmU",
    authDomain: "click-it-f99d2.firebaseapp.com",
    projectId: "click-it-f99d2",
    storageBucket: "click-it-f99d2.appspot.com",
    messagingSenderId: "565865071673",
    appId: "1:565865071673:web:af324bf2cf8baedd2a39e8",
    measurementId: "G-2JHN4G47PZ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
