import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../Config/FirebaseConfig";

// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();

export const registerWithEmail = (email, password, name) => {
  try {
    auth.createUserWithEmailAndPassword(email, password);
    const uid = auth.currentUser.uid;
    db.collection("users").doc(uid).set({
      name: name,
      email: email,
      uid: uid,
    });

    return { ...email, ...password, ...name, uid };
  } catch (error) {
    console.log("Error @createUser: ", error.message);
  }
};
