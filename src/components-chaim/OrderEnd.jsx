import React from 'react'
import Vector from './pic/chevron-right.png'
import moreVertical from './pic/more-vertical.png'
// import './OrderEnd.css'
import packageCheck from './pic/package-check.png'
import Footer from './Footer'


export default function OrderEnd() {
    return (
        <div>
            <div className="container_payment w-[360px] bg-[#bddaf17f] text-center p-6">
                <div id='hederPayment' className='flex place-content-between '>
                    <img id='return' src={moreVertical} alt="" />
                    {/* <h3>Add card</h3> */}
                    <a href="/Payment" rel="noopener noreferrer" >
                        <img id='return' src={Vector} style={{ width: 24 }} alt="" /></a>
                </div>
                <div id="mainOrder" className='mt-20'>
                    <h1>Order placed!</h1>
                    < p className='mt-4'>ההזמנה שלך התבצעה בהצלחה, כבר עכשיו אנחנו מכינים את ההזמנה שלך, תיכף נמצא את השליח שימסור לך את ההזמנה!!</p>
                </div>
                <div className="flex place-content-center mt-5">
                    <img id="imgPackage" src={packageCheck} className='w-[150px]' alt="" />
                </div>
                <a href="/HomePage" rel="noopener noreferrer" >
                    <button className='hover:animate-pulse w-[280px]  mt-14 shadow-lg cursor-pointer rounded-md text-base h-12 bg-slate-400 border-none text-black text-center inline-block;' >Add more orders </button></a>

            </div>
            <div id='' className=''>
                <Footer />
            </div>
        </div>
    )
}
