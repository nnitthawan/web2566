import { Card, Button } from 'react-bootstrap';

const firebaseConfig = {
    apiKey: "AIzaSyByFd3uWmRGXUsmEoDDUSVOajwyGLoNoJA",
    authDomain: "web2566-nitthawan.firebaseapp.com",
    projectId: "web2566-nitthawan",
    storageBucket: "web2566-nitthawan.appspot.com",
    messagingSenderId: "368434335830",
    appId: "1:368434335830:web:a2e126c35e1576be306bf7",
    measurementId: "G-LW8LLBEY8W"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function logFirestoreData() {
    db.collection("students").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} =>`, doc.data());
        });
    });
}

logFirestoreData();
