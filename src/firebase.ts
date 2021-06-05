import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
};

firebase.initializeApp(config);
firebase.analytics();

// utils
const db = firebase.firestore();

// collection references
const menuCollection = db.collection("menu");

// export utils/refs
export { db, firebase, menuCollection };
