import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { PiLockKey } from "react-icons/pi";
import Footer from './Footer';

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const emailInput = (e) => {
        setEmail(e.target.value)
    }

    const passwordInput = (e) => {
        setPassword(e.target.value)
    }

    const UserSignIn = async function () {
        try {
            const response = await fetch('http://localhost:3000/api/check-username', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: email, password: password })
            });

            const result = await response.json();
            console.log(result);

            if (!result.exists) {
                console.log('Login failed');
                setErrorMessage('Username does not exist');
                resetInputs();
            } else if (!result.correctPassword) {
                console.log('Login failed');
                setErrorMessage('Incorrect password');
                setPassword('');
            } else {
                console.log(result);
                const userObj = result.useerObj;
                localStorage.setItem('userObj', JSON.stringify(userObj));
                console.log(localStorage);
                localStorage.setItem('signedIn', "true");
                window.alert("התחברת בהצלחה, הנך מועבר לדף הבית")
                window.location ="./"
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred during login');
        }
    }

    const resetInputs = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <div className="containerSign-in w-[360px] h-[530px] bg-[#bddaf17f] text-center p-6">
                <h1 className='text-3xl'>sign in</h1>
                <p className='mt-10'>Don't have an account</p>
                <a href="/UserSignUp"><button className='bg-[#bddaffff] rounded-sm w-40 mt-6 '>Sign up</button></a>

                <div id='creditCard'>
                    <div className="flex mt-20 flex-col place-content-center">
                        <div className="flex place-items-end">
                            <MdOutlineMail />
                            <input value={email} onChange={emailInput} id='inputname' className='w-[87%] pr-2 rounded-md  bg-[#bddaf11a]' type="text" placeholder='Username/Email' />
                            <MdAlternateEmail />
                        </div>
                        <hr className='h-[2px] bg-black' />

                        <div className="flex place-items-end mt-10">
                            <MdOutlineMail />
                            <input value={password} onChange={passwordInput} id='inputpassword' className='w-[87%] pr-2 rounded-md  bg-[#bddaf11a]' type="password" placeholder='Password' />
                            <PiLockKey />
                        </div>
                        <hr className='h-[2px] bg-black' />
                    </div>
                </div>

                {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

                <button onClick={UserSignIn} className="add-btn bg-blue-500 hover:bg-blue-400 text-black py-3 px-6 text-base font-medium rounded-md cursor-pointer transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg w-[280px] mr-[0px] mt-16 text-center x">- Sign in -</button>
            </div>
            <Footer />
        </div>
    )
}