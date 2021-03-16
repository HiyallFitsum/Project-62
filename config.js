import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDtb3kdxULlZgXWkDJid9jLzwVgu6OHa1A",
  authDomain: "hiyallattendanceapp.firebaseapp.com",
  databaseURL: "https://hiyallattendanceapp-default-rtdb.firebaseio.com",
  projectId: "hiyallattendanceapp",
  storageBucket: "hiyallattendanceapp.appspot.com",
  messagingSenderId: "690061835904",
  appId: "1:690061835904:web:da75e3dc42d43c9d34b065",
  measurementId: "G-SYPYCEX0VQ"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()