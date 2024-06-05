// import React from 'react'

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore"; 
// // import { collection, getDocs } from "firebase/firestore"; 


// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }


// // Add a second document with a generated ID.
// // import { addDoc, collection } from "firebase/firestore"; 

// async function testFireStore(){
//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//           first: "Alan",
//           middle: "Mathison",
//           last: "Turing",
//           born: 1912
//         });
      
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
      
// }




// // const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://support.google.com/firebase/answer/7015592
// const firebaseConfig = {
//     apiKey: "AIzaSyDmnVqynGu_wMlTE8_UNvswHRYTl4It0WE",
//     authDomain: "project-4cfa9.firebaseapp.com",
//     projectId: "project-4cfa9",
//     storageBucket: "project-4cfa9.appspot.com",
//     messagingSenderId: "286864268800",
//     appId: "1:286864268800:web:683278d2e47a41d3ea42e5"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);



// export default function FireStore() {
//   return (
//     <div>
//         <button onClick={testFireStore()}>click</button>
//     </div>
//   )
// }
