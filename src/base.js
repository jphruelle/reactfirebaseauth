import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCFYeM36adCXU4CA1nfwzSmfZf0l27Bq3s",
  authDomain: "webapp-b516c.firebaseapp.com",
  databaseURL: "https://webapp-b516c.firebaseio.com",
  projectId: "webapp-b516c",
  storageBucket: "webapp-b516c.appspot.com",
  messagingSenderId: "172433649451",
  appId: "1:172433649451:web:84dc05c93d8b34dab6df6e"
});

export default app;
