import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAnSfeF02nqwBaHs-fwflwLJ5oJC01Mkr8",
    authDomain: "fireblogsys.firebaseapp.com",
    projectId: "fireblogsys",
    storageBucket: "fireblogsys.appspot.com",
    messagingSenderId: "447748915790",
    appId: "1:447748915790:web:70441c9b66b3e9b121391f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();