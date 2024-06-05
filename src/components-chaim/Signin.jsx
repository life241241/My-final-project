import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from './firebase-config';
import { MdOutlineMail } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { PiLockKey } from "react-icons/pi";
import Footer from './Footer';

// import { database } from './firebase-config';
// import { getDatabase, ref,push,onValue,remove } from 'https://gstatic.com/firebasejs/10.11.1/firebase-database.js';
// import { getDatabase, ref, set,push } from "firebase/database";




const auth = getAuth();
export default function Signin() {

    const [email, setEmail] = useState('')
    const emailInput = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }

    const [password, setPassword] = useState('')
    const passwordInput = (e) => {
        setPassword(e.target.value)
        console.log(password);
    }


    const UserSignIn = async function () {

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                console.log("The user is loged in");
                console.log(Auth.currentUser.uid);


                const inputValue = '2'
                const userShopingInDb = ref(database, `users/${Auth.currentUser.uid}/list`)
                push(userShopingInDb, inputValue)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div>
            <div className="containerSign-in w-[360px] h-[530px] bg-[#bddaf17f] text-center p-6">
                <h1 className='text-3xl'>sign in</h1>
                <p className='mt-10'>Don't have an account</p>
                <button className='bg-[#bddaffff] rounded-sm w-40 mt-6 '>Sign up</button>


                <div id='creditCard'>
                    <div className="flex mt-20 flex-col place-content-center">
                        <div className="flex place-items-end">
                            <MdOutlineMail />
                            <input onInput={emailInput} id='inputname' className='w-[87%] pr-2 rounded-md  bg-[#bddaf11a]' type="text" placeholder='Username/Email' />
                            <MdAlternateEmail />
                        </div>
                            <hr className='h-[2px] bg-black'/>


                        <div className="flex place-items-end mt-10">
                            <MdOutlineMail />
                            <input onInput={passwordInput} id='inputpassword' className='w-[87%] pr-2 rounded-md  bg-[#bddaf11a]' type="password" placeholder='Password' />
                            <PiLockKey />
                            
                        </div>
                            <hr className='h-[2px] bg-black'/>
                        <div className="flex mt-10">


                            {/* <MdOutlineMail /> */}
                            {/* <input onInput={passwordInput} id='inputpassword'className='w-[80%]' type="text" placeholder='Password' /> */}
                        </div>
                    </div>
                </div>
                <button onClick={UserSignIn} className="add-btn bg-blue-500 hover:bg-blue-400 text-black py-3 px-6 text-base font-medium rounded-md cursor-pointer transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg w-[280px] mr-[0px] mt-16 text-center x  ">- Sign in -</button>
            </div>
            <Footer/>
        </div>
    )
}
