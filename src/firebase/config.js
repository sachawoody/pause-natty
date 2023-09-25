import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF4HEVE4Om8LTonSGKZSg8vOKkuZwmk14",
  authDomain: "pause-natty.firebaseapp.com",
  projectId: "pause-natty",
  storageBucket: "pause-natty.appspot.com",
  messagingSenderId: "468798142306",
  appId: "1:468798142306:web:31b964e3eb0b040c7f5e3b",
  measurementId: "G-E37XQ2CJXT"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()

export { projectAuth, projectFirestore, projectStorage }