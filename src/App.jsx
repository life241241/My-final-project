import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components-chaim/HomePage'
import MenuTopping from './components-chaim/MenuTopping'
import AddOnList from './components-chaim/MenuTopping'
import YourOrders from './components-chaim/YourOrders'
import UserSignUp from './components-chaim/UserSignUp'
// import FireStore from './components-chaim/FireStore'
import DataBase from './components-chaim/DataBase'
import Routerv from './components-chaim/Router'
import AppRouter from './components-chaim/Router'
// import React,{useState, useEffect}  from 'react'
// import db from './components-chaim/firebase-config.js'
// import DataBase from './components-chaim/DataBase'
import { db } from './components-chaim/firebase-config.js'
import { collection, getDocs } from "firebase/firestore";
import AllRestaurants from './components-chaim/Allresturants.jsx'
import TestAi from './components-chaim/TestAi.jsx'
import {ReactFloatingBalloons} from 'react-floating-balloons'


function App() {


  return (
    <>
    {/* <AllRestaurants/> */}
    {/* <button onClick={omer}>aaa</button> */}
    {/* <FireStore/> */}
    {/* <DataBase/>
    <YourOrders/>
    <UserSignUp/>
    <HomePage/>
    <MenuTopping/>
    <AddOnList/> */}
    <AppRouter />
    {/* <ReactFloatingBalloons count={2} msgText='ברכיה המלך' 	/> */}

     {/* <div>
      <h1>אפליקציית תיאור תמונה</h1>
      <TestAi />
    </div> */}

  </>
  )
}

export default App






// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

//  export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/users/*" element={<Users />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// // function Users() {
// //   return (
// //     <div>
// //       {/* <nav>
// //         <Link to="me">My Profile</Link>
// //       </nav> */}

// //       <Routes>
// //         <Route path="/" element={<UserProfile />} />
// //         <Route path="/ser" element={<OwnUserProfile />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// function Home() {
//   return (
//     <div
//     ><h1>My home</h1></div>);
// }

// function Users() {
//   return (
//     <div
//     ><h1>My U</h1></div>);
// }

// function UserProfile() {
//   return (
//     <div
//     ><h1>My home</h1></div>);
// }

// function OwnUserProfile() {
//   return (
//     <div
//     ><h1>My home</h1></div>);
// }