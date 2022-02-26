import * as firebase from "firebase";
import "@firebase/firestore";
import { firebaseConfig } from "../config";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
