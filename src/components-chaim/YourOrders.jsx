import React from 'react'
// import Vector from './pic/Vector.png'
import Vector from './pic/chevron-right.png'
import moreVertical from './pic/more-vertical.png'
// import './YourOrders.css'
import Footer from './Footer'
import AppRouter from './Router'
import data from './testOrders.json'

// let element1 = 3
// for (let index = 0; index < data.length; index++) {
//     const element1  = index += data[0].price;
//     console.log(element1);
// }

// console.log(element);
let total = 0
let  a = 4 + total  
console.log(a);

// let ac  = a += total

export default function YourOrders() {
    return (
        <div className="containerOrders bg-[#bddaf17f] w-[360px] " >
            <div id='hederPayment' className='flex place-content-between p-6' >
                <img id='return' src={moreVertical} alt="" />
                <h3 id='textHeader'>Your orders</h3>
                <a href="/Menu_topping" rel="noopener noreferrer" >
                    <img id='return' src={Vector} style={{ width: 24 }} alt="" /></a>
            </div>
            <div id="ordersSection" className='p-8 mt-20'>
                <hr />
                
                {data.map(function (item) {
                    return (
                        <div>
                            <div id="ordersProduts" className='mt-5'>
                                <div id='TotalPrice' className='flex place-content-between flex-row-reverse w-64 '>
                                    <div className=' bg-slate-500' >
                                        <p className='absolute'>{item.price} ₪ </p>
                                    </div>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <h5 className='mt-5'>{item.options}</h5>
                                        {/* <h5>וכן קינוח פירות  טרופי.</h5> */}
                                    </div>
                                </div>
                            </div>
                            <hr className='bg-black h-[2px] mt-6' />
                        </div>)

                })}





                <div id='totalSection' className='rounded animate-pulse' >
                    <div id='totalSection_t' className='flex place-content-between mt-5'>
                        <h4>סכום משנה</h4>
                        <h4>9.90</h4>
                    </div>
                    <div id='totalSection_t' className='flex place-content-between  mt-3'>
                        <h4>משלוח</h4>
                        <h4>8.50</h4>
                    </div>
                    <div id='totalSection_t' className='flex place-content-between mt-3'>
                        <h4>סה'כ סופי</h4>
                        <h4>17.40</h4>
                    </div>
                    {/* <button class="add-btn1">Add more items +</button> */}

                </div>
                <button id="checkout-btn" className="bg-[#2196f3] w-[270px] h-10 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-14 mb-8 mr-2  hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] hover:text-white hover:bg-blue-700 transition-colors hover:transition-shadow duration-500 ease ">Add more items +</button>

                <a href="/Payment" rel="noopener noreferrer" >
                    <button id="checkout-btn" className="bg-[#2196f3] w-[270px] h-10 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-8 mr-2  hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] hover:text-white hover:bg-blue-700 transition-colors hover:transition-shadow duration-500 ease ">Checkout</button></a>

            </div>
            {/* <div style={{ position: 'absolute', but: 0 }}> */}
            <div id='footer_orders'>
                <Footer />
            </div>
            {/* <AppRouter/> */}

        </div>

    )
}
