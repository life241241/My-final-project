import React from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
// import { collection, getDocs } from 'firebase/firestore';




// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDmnVqynGu_wMlTE8_UNvswHRYTl4It0WE",
    authDomain: "project-4cfa9.firebaseapp.com",
    projectId: "project-4cfa9",
    storageBucket: "project-4cfa9.appspot.com",
    messagingSenderId: "286864268800",
    appId: "1:286864268800:web:683278d2e47a41d3ea42e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function database() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 2222
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


async function read() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });

}



export default function DataBase() {
    return (

        <div>
            <button onClick={database}>Click Data Base</button>
        </div>
    )
}
