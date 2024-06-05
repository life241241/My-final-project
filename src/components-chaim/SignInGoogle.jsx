import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
import { Auth } from "./firebase-config";


const provider = new GoogleAuthProvider();

export default function SignInGoogle() {

// const auth = getAuth();
signInWithPopup(Auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(Auth.currentUser);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  console.log(Auth.currentUser);

  return (

    <div className='bg-slate-400 flex w-60 h-60 place-content-center'>
      <button onClick={SignInGoogle}> click</button>
    </div>
  )
}
