import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";




import HomePage from "./HomePage";
import MenuTopping from './MenuTopping'
import Payment from "./Payment";
import YourOrders from './YourOrders'
import UserSignUp from './UserSignUp'
// import SignUp from "./SignUp";
import OrderEnd from "./OrderEnd";
import Signin from "./Signin";
import SignInGoogle from "./SignInGoogle";
import Footer from "./Footer";
import SingleRestaurant from './components-meir/SingleRestaurant'
import AllRestuarants from "./Allresturants";
import TestAiGemini from "./TestAiGemini"; 
import SignUp from "./SignUp"

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <Link to="/AllRestuarants">All restuarants</Link>
            </li>
            <li>
                <Link to="/UserSignUp">UserSignUp</Link>
              </li>
              <li>
                <Link to="/Signin">SignIn</Link>
              </li>
              <li>
                <Link to="/Menu_topping">Menu topping</Link>
              </li>
              <li>
                <Link to="/Your_orderd">Your orderd</Link>
              </li>
              <li>
                <Link to="/Payment">Payment</Link>
              </li>
              <li>
                <Link to="/OrderEnd">OrderEnd</Link>
              </li>
              <li>
                <Link to="/SignInGoogle">SignInGoogle</Link>
              </li>
              <li>
                <Link to="/SingleRestaurant">SingleRestaurant</Link>
              </li>
              <li>
                <Link to="/TestAiGemini">Test ai gemini</Link>
              </li>
              <li>
                <Link to="/SignUp">SignUp</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Your_orderd">
              <YourOrders />
            </Route>
            <Route path="/UserSignUp">
              <UserSignUp />
            </Route>
            <Route path="/AllRestuarants">
              <AllRestuarants />
            </Route>
            <Route path="/Signin">
              <Signin />
            </Route>
            <Route path="/Menu_topping">
              <MenuTopping />
            </Route>
            <Route path="/Payment">
              <Payment/>
            </Route>
            <Route path="/OrderEnd">
              <OrderEnd/>
            </Route>
            <Route path="/SignInGoogle">
              <SignInGoogle/>
            </Route>
            <Route path="/SingleRestaurant">
              <SingleRestaurant/>
            </Route>
            <Route path="SignUp">
              <SignUp/>
            </Route>
            <Route path="/TestAiGemini">
              <TestAiGemini/>
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        
        {/* <div id='footer_home'>
                  <Footer/>
              </div> */}
      </Router>
    );
  }




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