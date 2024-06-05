import React from 'react'

import home from './pic/home_FILL0_wght400_GRAD0_opsz24.png'
import search from './pic/search_FILL0_wght400_GRAD0_opsz24.png'
import orders from './pic/grading_FILL0_wght400_GRAD0_opsz24.png'
import account from './pic/person_FILL0_wght400_GRAD0_opsz24.png'
// import './footer.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Footer() {
  return (
    // <div style={{position:'absolute', /* ,bottom:-1300 */}}>
    <div /* ,bottom:-1300 */>
      {/* <div className='flex flex-col text-center  w-6 h-6'>
      <img src={home} alt="" className='mr-2'/>
      <p>Home</p>
      </div> */}
        <ul id='ulFooter' className='flex   place-content-between flex-row-reverse mr-3 w-[340px] ' >
        <Link to="/"><li id='liHover' ><li><img src={home} className='mr-3' alt="" /></li><li>Home</li></li></Link>
        <Link to="/AllRestuarants"><li id='liHover' className=''><li><img  className='mr-3' src={search} alt="" /></li><li>Search</li></li></Link>
        <Link to="/Your_orderd"><li id='liHover'><li><img className='mr-3' src={orders} alt="" /></li><li>Orders</li></li></Link>
        <Link to="/UserSignUp"><li id='liHover'><li><img className='mr-3' src={account} alt="" /></li><li>Account</li></li></Link>
            
            
        </ul>
    </div>
  )
}
