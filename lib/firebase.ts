import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFxQWdibZ_xCSFtH6ZIdqD2Mi6crW6sV4",
  authDomain: "nextjsblog-a9494.firebaseapp.com",
  projectId: "nextjsblog-a9494",
  storageBucket: "nextjsblog-a9494.appspot.com",
  messagingSenderId: "127593820636",
  appId: "1:127593820636:web:acbde122ba3bc895341f19",
  measurementId: "G-Y5VL7YMMFS",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
