import firebase from "firebase";
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyBlnPvDt58PAZXwAVBWyPrJ9YhNNTuIFlI",
  authDomain: "story-hub-6bb12.firebaseapp.com",
  databaseURL: "https://story-hub-6bb12-default-rtdb.firebaseio.com",
  projectId: "story-hub-6bb12",
  storageBucket: "story-hub-6bb12.appspot.com",
  messagingSenderId: "45461212243",
  appId: "1:45461212243:web:c2e04715a701bb20e3caa6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();