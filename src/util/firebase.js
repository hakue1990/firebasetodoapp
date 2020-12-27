import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSoNaNOGJgztghDCPuU2Tzidqkgs9hmmw",
  authDomain: "todo-react-app-21d0a.firebaseapp.com",
  databaseURL:
    "https://todo-react-app-21d0a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-react-app-21d0a",
  storageBucket: "todo-react-app-21d0a.appspot.com",
  messagingSenderId: "402667911887",
  appId: "1:402667911887:web:dcfaa22350183ab41815ba",
  measurementId: "G-7ZF55RLEVF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
