import firebase from "firebase";

const firebaseConfig = {
  apiKey: "YOUR KEY GOES HERE",
  authDomain: "YOUR KEY GOES HERE",
  projectId: "YOUR KEY GOES HERE",
  storageBucket: "YOUR KEY GOES HERE",
  messagingSenderId: "YOUR KEY GOES HERE",
  appId: "YOUR KEY GOES HERE"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
