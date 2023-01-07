

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDfmOK1uLPwoCNyQbyRp1PprGDGae-coaU",
  authDomain: "messaging-85eef.firebaseapp.com",
  projectId: "messaging-85eef",
  storageBucket: "messaging-85eef.appspot.com",
  messagingSenderId: "311024462473",
  appId: "1:311024462473:web:b99a702a6556754d30b458",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
  export {db, auth, storage}