// import React from 'react'

// export default function MenuTopping() {

//     return (


//     )
// }

import picture1 from "./pic/pic_eate_2.jpg"
import picture2 from "./pic/Frame 1287.png"
import group10 from "./pic/Group 10.png"
import group9 from "./pic/Group 9.png"
// import './MenuTopping.css'
import Footer from './Footer.jsx'
import React, { useState } from 'react';

const AddOnList = () => {
    const [addOns, setAddOns] = useState([
        { id: 1, name: 'Extra Cheese', selected: false },
        { id: 2, name: 'Mushrooms', selected: false },
        { id: 3, name: 'Pepperoni', selected: false },
        { id: 4, name: 'Onions', selected: false },
    ]);

    const toggleAddOn = (id) => {
        setAddOns(
            addOns.map((addOn) =>
                addOn.id === id ? { ...addOn, selected: !addOn.selected } : addOn
            )
        );
    };

    return (
        // return (
        // <div id="container1">
        //     <div >
        //         <img src={picture2} id="image" style={{width:360}} alt="" />
        //         <div id="textSection">
        //             <h3>עוגיית לחמניה</h3>
        //             <h4>לחמניה קצרה, עוגיות שוקולד צ'יפס.</h4>
        //             <h4> וכן שוקולד קטן לטעימות.</h4>
        //         </div>
        //         </div>
        //         <h3>Add-Ons</h3>
        //         <ul>
        //             {addOns.map((addOn) => (
        //                 <li key={addOn.id} style={{ paddingTop: 10, fontSize: 23 }}>
        //                     <label >
        //                     <input
        //                         type="checkbox" style={{ color: "red" }}
        //                         checked={addOn.selected}
        //                         onChange={() => toggleAddOn(addOn.id)}
        //                     />
        //                     {addOn.name}
        //                     </label>
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        <>
            <div id="container1 " className="w-[360] bg-[#bddaf17f]">
                <img src={picture2} id="image" style={{ width: 360 }} alt="" />
                <div id="textSection " className="p-4">
                    <h3>עוגיית לחמניה</h3>
                    <p>לחמניה קצרה, עוגיות שוקולד צ'יפס.</p>
                    <p> וכן שוקולד קטן לטעימות.</p>
                    <ul  className='pr-10' style={{ marginTop: 45 }}>

                        <fieldset>
                            <li>
                                <input id="published" class="peer/published" type="radio" name="status" />
                                <label for="published" class="peer-checked/published:text-sky-500">Published</label>

                            </li>
                            <li>
                                <input id="published" class="peer/published" type="radio" name="status" />
                                <label for="published" class="peer-checked/published:text-sky-500">Published</label>

                            </li>
                            <li>
                                <input id="published" class="peer/published" type="radio" name="status" />
                                <label for="published" class="peer-checked/published:text-sky-500">Published</label>

                            </li>
                            <li>
                                <input id="published" class="peer/published" type="radio" name="status" />
                                <label for="published" class="peer-checked/published:text-sky-500">Published</label>

                            </li>
                            <li>
                                <input id="published" class="peer/published" type="radio" name="status" />
                                <label for="published" class="peer-checked/published:text-sky-500">Published</label>

                            </li>
                            <li>
                                <input id="published" class="peer/published" type="radio" name="status" />
                                <label for="published" class="peer-checked/published:text-sky-500">Published</label>

                            </li>
                        </fieldset>


                    </ul>
                    {/* <div id="specialInsructions" style={{ marginTop: 69 }}>
                        <label for="special-instructions">הוראות מיוחדות:</label>
                        <textarea id="special-instructions" name="special-instructions" rows="3" placeholder="הזן כאן את ההוראות המיוחדות שלך"></textarea>
                    </div> */}
                    <div class="m-4">
                        <label class="block text-gray-700 font-bold mb-2" for="special-instructions">
                            הוראות מיוחדות:
                        </label>
                        <textarea
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="special-instructions"
                            name="special-instructions"
                            rows="3"
                            placeholder="הזן כאן את ההוראות המיוחדות שלך"
                        ></textarea>
                    </div>
                    <div id="totalMenu " className="flex flex-row place-content-around">
                        <img  className=' rounded-full shadow-xl hover:bg-black ' src={group10} alt="" />
                        <h3 style={{ fontWeight: 500 }}>3</h3>
                        <img  className=' rounded-full shadow-xl hover:bg-black ' src={group9} alt="" />
                    </div>
                    <div className="flex place-content-center" >
                    <button id="checkout-btn" className="bg-[#2196f3] w-[270px] h-10 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-10 mb-8  hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] hover:text-white hover:bg-blue-700 transition-colors hover:transition-shadow duration-500 ease ">Checkout</button>
                    </div>
                    {/* <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button> */}

                </div>
            </div>

            <Footer />

        </>

    );
};

export default AddOnList;


