import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDfY8YKD4_vGW5FJdXk6O2NrZGMt_gRtkA",
    authDomain: "book-archive-react.firebaseapp.com",
    databaseURL: "https://book-archive-react.firebaseio.com",
    projectId: "book-archive-react",
    storageBucket: "book-archive-react.appspot.com",
    messagingSenderId: "266672949239"
  };

const fire = firebase.initializeApp(config)
export default fire