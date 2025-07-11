import React from 'react'
// import {useNavigate} from 'react-router-dom';   
// import Vector from './pic/Vector.png'
import Vector from './pic/chevron-right.png'
import moreVertical from './pic/more-vertical.png'
// import './Payment.css'
import chevronRight from './pic/chevron-right.png'
import Footer from './Footer'
import loading from './pic/loading-spinner.png'
import loading2 from './pic/OurAIJourney.gif'
import { useState } from 'react'



export default function Payment() {
    const [showOverlay, setShowOverlay] = useState(false);
    // const navigate = useNavigate()

    // פונקציה שתופעל כשהמשתמש לוחץ על הכפתור
    const handleButtonClick = () => {
        setShowOverlay(true); // הפעלת הסגנון

        // הסרת הסגנון לאחר 10 שניות
        setTimeout(() => {
            setShowOverlay(false);
            // navigate("/OrderEnd")
        }, 5000);
    };

    return (

        <div className="container_payment bg-[#bddaf17f]  w-[360px] h-[640px] text-center  ">
            {showOverlay && (
                <div id="btnSpiner" className='  absolute bg-[#7e92a17f] w-[360px] h-[640px] flex items-center justify-center' >
                    {/* תוכן שאתה רוצה להציג בתוך הסגנון */}
                    <img id="loading" className='animate-spin' src={loading} alt="" />
                </div>
            )}
            <div id='hederPayment' className='flex place-content-between p-6'>
                <img id='return' src={moreVertical} alt="" />
                <h3 id='textHeader'>Payment </h3>
                <a href="/Your_orderd" rel="noopener noreferrer" >
                    <img id='return' src={Vector} style={{ width: 24 }} alt="" /></a>

            </div>
            <div className="flex place-content-center ">
                <a href="/Your_orderd" rel="noopener noreferrer" >
                    <button className="add-btn bg-blue-500 hover:bg-blue-400 text-black py-3 px-6 text-base font-medium rounded-md cursor-pointer transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg flex justify-between mb-10 h-16 items-center  w-[280px] mt-8 ">
                        <img id='imagePayment' src={chevronRight} alt="" />
                        <h4>Total: 40.00$</h4>
                    </button></a>
            </div>
            <div id='creditCard' className='flex flex-col items-center'>
                <input id='inputCards' className='bg-blue-200 text-black py-3 px-6 text-base flex justify-between rounded-md shadow-md w-[220px] mt-5  transition-colors duration-300 ease' type="text" placeholder='Name on card' />
                <input id='inputCards' className='bg-blue-200 text-black py-3 px-6 text-base flex justify-between rounded-md shadow-md w-[220px] mt-5  transition-colors duration-300 ease' type="text" placeholder='Card number' />
                <input id='inputCards' className='bg-blue-200 text-black py-3 px-6 text-base flex justify-between rounded-md shadow-md w-[220px] mt-5  transition-colors duration-300 ease' type="text" placeholder='CVV' />
                <input id='inputCards' className='bg-blue-200 text-black py-3 px-6 text-base flex justify-between rounded-md shadow-md w-[220px] mt-5  transition-colors duration-300 ease' type="text" placeholder='Expiry' />
            </div>
            {/* <button class="pay-btn">Complete purchase </button> */}
            <button onClick={handleButtonClick} className="add-btn bg-blue-500 hover:bg-blue-400 text-black py-3 px-6 text-base font-medium rounded-md cursor-pointer transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg w-[280px] mr-[0px] mt-16 text-center animate-pulse">Complete purchase</button>
            {/* <button onClick={handleButtonClick}>click</button> */}

            {/* <img id="loading" src={loading} alt="" /> */}
            <div id='PayFooter' className='mt-10'>
                <Footer />
            </div>


        </div>
    );
};
