  
import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyDqqRmTHXhy48Vu2lj67L5GX5SBq4uiZV8",
  authDomain: "project-f9a9c.firebaseapp.com",
  projectId: "project-f9a9c",
  storageBucket: "project-f9a9c.appspot.com",
  messagingSenderId: "473860755149",
  appId: "1:473860755149:web:36a0c791173ff80fde6384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  export default  firebase.firestore();