import React from 'react'
import  { useState } from 'react';


// export default function TestAi() {
//   return (
//     <div>TestAi</div>
//   )
// }



const TestAi = () => {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageDescribe = async () => {
    setIsLoading(true);
    setError(null);

    const url = 'https://image2text1.p.rapidapi.com/image2text';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'cc73568c9bmsh2a8a321983dacbap16d3fajsnd656812ef4e8',
        'X-RapidAPI-Host': 'image2text1.p.rapidapi.com',
      },
      body: JSON.stringify({
        text: 'Describe what you see in this image in one word in hebrew',
        imageUrl: 'https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg',
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setResult(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleImageDescribe} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Describe Image'}
      </button>
      {error && <p>Error: {error}</p>}
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default TestAi;