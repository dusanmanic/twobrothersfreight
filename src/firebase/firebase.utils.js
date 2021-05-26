import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const config = {
    apiKey: "AIzaSyB6s9sxm_n1MFsmc4gXjIHovDtIw5RKve0",
    authDomain: "twobrothersfreight-7877e.firebaseapp.com",
    projectId: "twobrothersfreight-7877e",
    storageBucket: "twobrothersfreight-7877e.appspot.com",
    messagingSenderId: "393326345307",
    appId: "1:393326345307:web:423ec44482ca14204b937e",
    measurementId: "G-M2M0RT1N90"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore()