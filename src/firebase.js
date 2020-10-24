import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC42hwA2D6Fb67sKMkhRydVDa7-s2VB6Qc",
    authDomain: "clone-e2127.firebaseapp.com",
    databaseURL: "https://clone-e2127.firebaseio.com",
    projectId: "clone-e2127",
    storageBucket: "clone-e2127.appspot.com",
    messagingSenderId: "88864264629",
    appId: "1:88864264629:web:bcb4b2ad8af697894149fc",
    measurementId: "G-KH7BEZ2JZS"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig); 

const db=firebaseApp.firestore();

const auth=firebase.auth();

export {db,auth};