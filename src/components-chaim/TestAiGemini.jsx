

import React, { useState } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

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

        const prompt = "מה התמונה הזו מכילה מתוך זה : עוף. דגים. פיצה";

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
                <div className="container bg-slate-200 w-[360px] h-[500px] "></div>
                <input type="text" className='border-2' value={quest} onChange={(e) => { setQuest(e.target.value) }} />
                <input type="file"  onChange={(e) => { setImage(e.target) }} />
            <button onClick={generateContent}>Generate Content</button>

                <pre>{response}</pre>
            </div>
        </div>
    );
};
export default App