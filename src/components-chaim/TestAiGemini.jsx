
import picture3 from './pic/—Pngtree—avatar man is holding handphone_7965998.png'
import React, { useState } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import Footer from './Footer';

const MODEL_NAME = 'gemini-1.5-flash';
const API_KEY = "AIzaSyD0F2pin_e_7cToXrCOmJnCuuAjFwL2IQY";

const App = () => {
    const [response, setResponse] = useState('');
    const [quest, setQuest] = useState('');
    const [image, setImage] = useState('');


    // Converts a File object to a GoogleGenerativeAI.Part object.
    const fileToGenerativePart = async (file) => {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });
        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    };

    const generateContent = async () => {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // const prompt = quest
        const prompt = "what you see here in one word only."

        const fileInputEl = image;
        const imageParts = await Promise.all(
            [...fileInputEl.files].map(fileToGenerativePart)
        );

        try {
            const result = await model.generateContent([prompt, ...imageParts]);
            const generatedResponse = await result.response;
            const text = generatedResponse.text();
            console.log(text)
            setResponse(text);
        } catch (error) {
            console.error('Error generating content:', error);
        }
    };

    return (
        <div>
            <div>
                <div dir='rtl' className="container bg-slate-200 w-[360px] h-[700px] content-center text-center pt-8">
                    <p>כאן המקום להעלות תמונה, של האוכל שאתה מעוניין בו, ואנחנו כבר נדאג לשאר...</p>

                    <img src={picture3} alt="" />
                    {/* <input type="text" className='border-2' value={quest} onChange={(e) => { setQuest(e.target.value) }} /> */}
                    <input className=' bg-blue-300 hover:bg-blue-400 text-black py-3 px-6 text-base font-medium rounded-md cursor-pointer transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg w-[280px] mr-[0px]  text-center' type="file" onChange={(e) => { setImage(e.target) }} />
                    {/* <button onClick={generateContent}>Generate Content</button> */}
                    <button onClick={generateContent} className="add-btn bg-blue-500 hover:bg-blue-400 text-black py-3 px-6 text-base font-medium rounded-md cursor-pointer transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg w-[280px] mr-[0px] mt-16 text-center animate-bounce">תכין לי משהו כזה ..</button>


                    {/* <pre className=''>{response}</pre> */}
                    <h1 className='mt-4 text-blue-600 underline cursor-pointer text-lg underline-offset-auto	py-3 px-6  w-[280px]  mr-5  bg-slate-300 rounded-md'>{response}</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default App