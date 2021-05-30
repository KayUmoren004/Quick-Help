import React, { createContext } from "react";

//Dependencies
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import config from "../../Config/FirebaseConfig";

const FirebaseContext = createContext();

//Initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

//Firebase Database
const db = firebase.firestore();

const Firebase = {
  //Get Current User
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },

  //Create User
  createUser: async (user) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      const uid = Firebase.getCurrentUser().uid;

      await db.collection("users").doc(uid).set({
        name: user.name,
        email: user.email,
      });

      delete user.password;

      return { ...user, uid };
    } catch (error) {
      console.log("Error @createUser: ", error.message);
    }
  },

  //Get User Info
  getUserInfo: async (uid) => {
    try {
      const user = await db.collection("users").doc(uid).get();

      if (user.exists) {
        return user.data();
      }
    } catch (error) {
      console.log("Error @getUserInfo: ", error);
    }
  },

  //LogOut
  logOut: async () => {
    try {
      await firebase.auth().signOut();

      return true;
    } catch (error) {
      console.log("Error @logOut: ", error);
    }

    return false;
  },

  //SignIn
  signIn: async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  //Forgot Password
  forgotPassword: async (email) => {
    return firebase.auth().sendPasswordResetEmail(email);
  },
};

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
