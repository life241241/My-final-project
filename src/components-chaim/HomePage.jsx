import React from 'react'
// import Elipse from 'C:\Users\LIFE2\Desktop\mego\project mego\mego_project\quick_bite\src\components-chaim\pic\Ellipse 21.jpg'
// import picture from "mego_proje  ct\\quick_bite\src\\components-chaim\\pic\\pic_eate.png"
import picture from "./pic/pic_eate.png"
import picture1 from "./pic/pic_eate_2.jpg"
import picture2 from "./pic/Frame 1287.png"
import mapIcon from "./pic/map-pin.png"
import shopingBasket from "./pic/shopping-basket.png"
import UncontrolledExample from './carousel.jsx'
import Footer from './Footer.jsx'
import data from './testHomePage.json'
// import './Home.css'




export default function HomePage() {
    return (
        <>
            <div className="containerHome w-[360px] bg-[#bddaf17f]  rtl:mr-3 p-4 ">
                <div className="sistem_bar w-80 h-6 text-center">
                    <p>•</p>
                </div>
                <div className="app_bar  h-20 bg-[#bddaf17f] ">
                    <div id="row_top" className='flex h-7 justify-center space-x-16 items-center '>
                        <img src={mapIcon} className='mt-10'/* id='row_right' */ alt="" />
                        {/* <li>Bet shemesh</li> */}
                        <select className="selectUser mt-10 bg-[#bddaf1cf] rounded-lg border-slate-400 h-5 ">
                            <option value="Bet shemesh">Bet shemesh</option>
                            <option value="Jerusalem">Jerusalem</option>
                            <option value="Bnei brak">Bnei brak</option>
                            <option value="Ashdod">Ashdod</option>
                        </select>
                        <img src={shopingBasket} id='row_right' className='mt-10 mr-50' alt="" />
                    </div>
                </div>
                <div id='Offer_card' className='bg-[#f0f8ff] h-[180px] rounded-lg mt-10 p-6 text-center '>
                    <h3 className='mt-3 p-3 text-lg '>מבצע לכבוד ספירת העומר 15% הנחה למזרזים להזמין</h3>
                    <button id='BtnDiscount' className='mt-3  bg-[#bddaf17f] rounded-md p-2 w-32 mr-20 hover:bg-[#a0caec] animate-pulse'>להזמנה עכשיו !</button>
                </div>
                <h2 className='text-2xl mt-5'>מסעדות מומלצות</h2>
                {/* <div id="carousel">
                <img src={picture} alt="" />
                <img src={picture} alt="" />
                <img src={picture} alt="" />
              
            </div> */}
                <div>
                    {/* <UncontrolledExample/> */}

                </div>
                <div id='row_pic' className='  h-[285px]   overflow-x-scroll '>
                    <div className="w-[735px] flex flex-row overflow-hidden ">
                        <div id='' className='p-3   h-[240px] bg-slate-500 m-1 rounded-lg  w-[245px] overflow-y-hidden overflow-x-auto'>
                            <img src={picture} id='row_pic1' alt="" />
                            <h3>67 Athi hotel</h3>
                            <p className='p-3'>summer house, athi river Free delivery • 32 mins</p>
                        </div>
                        <div id='' className='p-3  h-[240px] bg-slate-500 m-1 rounded-lg overflow-hidden w-[245px]'>
                            <img src={picture} id='row_pic1' alt="" />
                            <h3>67 Athi hotel</h3>
                            <p className='p-3'>summer house, athi river Free delivery • 32 mins</p>
                        </div>
                        <div id='' className='p-3  h-[240px] bg-slate-500 m-1 rounded-lg overflow-hidden w-[245px]'>
                            <img src={picture} id='row_pic1' alt="" />
                            <h3>67 Athi hotel</h3>
                            <p className='p-3'>summer house, athi river Free delivery • 32 mins</p>
                        </div>
                    </div>
                </div>
                <div className="flex ">
                    <h2 className='text-2xl mt-5'>קטגוריות</h2>
                    <button className='p-3 mr-28 text-xl rounded-md mt-5 bg-[#67aee9]'>כל הקטגוריות</button>
                </div>
                <div id='catagories' className='w-80 h-36 bg-[#f0f8f] flex flex-wrap flex-col'>
                    <div id='catagoti-30 ' className='p-[2px]'>
                        <img src={picture1} alt="" className='w-24 h-24 rounded-lg' />
                        <p>Pizza</p>
                    </div>
                    <div id='catagoti-30 ' className='p-[2px]'>
                        <img src={picture1} alt="" className='w-24 h-24 rounded-lg' />
                        <p>Burgers</p>
                    </div>
                    <div id='catagoti-30 ' className='p-[2px]'>
                        <img src={picture1} alt="" className='w-24 h-24 rounded-lg' />
                        <p>Greens</p>
                    </div>

                </div>
                <h2 className='text-2xl mt-5'>מלונות פופולריים</h2>
                {data.map(function (value) {
                    return (
                        <div id='pic-100' className='bg-[#f0f8ff] h-72  mt-4 p-1 rounded-lg'>
                            <img src={value.image}  className='rounded-lg h-[200px] w-[100%]' alt="" />
                            <p>{value.name}</p>
                            <p >{value.address}</p>
                            <p>Free delivery • 32 mins</p>
                        </div>)
                })}


            </div >
            <div id='footer_home'>
                <Footer />
            </div>

        </>



        // <div id='sistem_bar'></div>

    )
}
