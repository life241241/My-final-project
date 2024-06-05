import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useCallback, useState } from 'react'
import { Auth } from "./firebase-config";
import Footer from "./Footer";
import { MdOutlineMail } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { PiLockKey } from "react-icons/pi";






// import ReactDOM from "react-dom/client";

// export default function UserSignUp() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }






// יצירת משתמש חדש
export default function UserSignUp() {

    const [email,setEmail] = useState('')
    const   emailInput = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }
    const [password,setPassword] = useState('')
    const passwordInput = (e) => {
        setPassword(e.target.value)
        console.log(password);
    }
    const signUP  = async function () {
        // const [count, setCount] = useState(0)
        await createUserWithEmailAndPassword(Auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
    }
    return (
        <div>
            <div className="containerSign-in w-[360px] h-[530px] bg-[#bddaf17f] text-center p-6">
                <h1 className='text-3xl'>Sign up</h1>
                <p className='mt-10'>!Create your account here</p>
                <button className='bg-[#bddaffff] rounded-sm w-40 mt-6'>?Need help</button>


                <div id='creditCard'>
                    <div className="flex mt-20 flex-col place-content-center">
                        <div className="flex place-items-end">
                            {/* <MdOutlineMail /> */}
                            <input onInput={emailInput} id='inputname' className='w-[87%] pr-2 rounded-md  bg-[#bddaf11a]' type="text" placeholder='Username/Email' />
                            {/* <MdAlternateEmail /> */}
                        </div>
                            <hr className='h-[2px] bg-black'/>


                        <div className="flex place-items-end mt-10">
                            {/* <MdOutlineMail /> */}
                            <input onInput={passwordInput} id='inputpassword' className='w-[87%] pr-2 rounded-md  bg-[#bddaf11a]' type="password" placeholder='Password' />
                            {/* <PiLockKey /> */}
                            
                        </div>
                            <hr className='h-[2px] bg-black'/>
                        <div className="flex mt-10">


                            {/* <MdOutlineMail /> */}
                            {/* <input onInput={passwordInput} id='inputpassword'className='w-[80%]' type="text" placeholder='Password' /> */}
                        </div>
                    </div>
                </div>
                <button onClick={signUP} className="add-btn bg-blue-500 hover:bg-blue-400 text-black py-3 px-6 text-base font-medium rounded-md cursor-pointer transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg w-[280px] mr-[0px] mt-16 text-center x animate-bounce ">- Create my account -</button>
            </div>
            <Footer/>
        </div>

    //     <div>
    //         <h1 className="text-center">User Sign Up</h1>
    //         <div id='creditCard' className="mt-24">
    //             <input onInput = {emailInput} id='inputname' type="text" placeholder='Username' />
    //             <input onInput = {passwordInput} id='inputpassword' type="text" placeholder='Password' />
    //         </div>
    //         <button onDoubleClick = {signUP} > click</button>
    //     </div>
    // )
)}