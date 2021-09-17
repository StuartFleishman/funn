// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyC2KxD54pdEIW9n4TeLLSaO_dIf6gLe9L8",
  authDomain: "instafly-a23e2.firebaseapp.com",
  projectId: "instafly-a23e2",
  storageBucket: "instafly-a23e2.appspot.com",
  messagingSenderId: "42216399898",
  appId: "1:42216399898:web:d52de033becfe459751da3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, firebaseApp, storage};