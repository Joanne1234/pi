import * as firebase from "firebase";
import "@firebase/firestore";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBnnN7Gh0JqKpOtk6dDkGsJJuRfTSaKrHo",
  authDomain: "todo-1f478.firebaseapp.com",
  projectId: "todo-1f478",
  storageBucket: "todo-1f478.appspot.com",
  messagingSenderId: "384658812933",
  appId: "1:384658812933:web:116448fed08a30b9762c6c",
  measurementId: "G-MG95Z7BXP1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
