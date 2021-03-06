import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOTMm6IYhs0Kl6D_S82SoWTH9obbFYqvI",
  authDomain: "drive-clone-3bd99.firebaseapp.com",
  projectId: "drive-clone-3bd99",
  storageBucket: "drive-clone-3bd99.appspot.com",
  messagingSenderId: "683790028007",
  appId: "1:683790028007:web:b78936ddfb165c84fca642",
  measurementId: "G-C1CH3PLN2V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebase.firestore();

export { auth, firebaseApp, storage, db, provider };
