import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDAi5_Y_6gwtLS6HtSHwua-oeWsoT7kf94",
  authDomain: "crwn-db-5867f.firebaseapp.com",
  projectId: "crwn-db-5867f",
  storageBucket: "crwn-db-5867f.appspot.com",
  messagingSenderId: "539123305291",
  appId: "1:539123305291:web:2ca686e4224da6290ab6ce",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
