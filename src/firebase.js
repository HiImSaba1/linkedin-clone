import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvimCwjDLaa24Fh3g3k4G3htVDhKrVVNk",
  authDomain: "linkedin-clone-e413e.firebaseapp.com",
  projectId: "linkedin-clone-e413e",
  storageBucket: "linkedin-clone-e413e.appspot.com",
  messagingSenderId: "762407641521",
  appId: "1:762407641521:web:bc215e0481877b7cf71d90"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
