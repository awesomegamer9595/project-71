import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyC86y2-7r6lT-aSFpOymZfJEH0XpkXdEOE",
  authDomain: "project-70-d06d1.firebaseapp.com",
  projectId: "project-70-d06d1",
  storageBucket: "project-70-d06d1.appspot.com",
  messagingSenderId: "599809462028",
  appId: "1:599809462028:web:5d5f76f5f51b36865fc329"
};





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


