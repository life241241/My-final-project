
// import React, { useState, useEffect } from 'react';
// import { db } from './firebase-config';
// import { collection, getDocs } from "firebase/firestore";
// import Vector from './pic/chevron-right.png';
// import moreVertical from './pic/more-vertical.png';
// import SingleTest from './SingleTest';
// import Footer from './Footer';
// import SingleRestaurant from './components-meir/SingleRestaurant';

// // const SingleRestaurant = ({ restaurant }) => {
// //   return (
// //     <div>
// //       <h2>{restaurant.name}</h2>
// //       <h1>זה עובד</h1>
// //       <img src={restaurant.img} alt="" />
// //       {/* רנדר פרטים נוספים של המסעדה */}
// //     </div>
// //   );
// // };




// const AllRestaurants1 = ({ restaurants, onRestaurantClick }) => {
//   return (
//     <div>
//       {restaurants.map((item) => (
//         <button onClick={() => onRestaurantClick(item)} key={item.id}>
//             <div key={item.name} id="card-5" className='rounded-lg w-[143px] m-1 text-center bg-[#bddaf1] hover:blur-sm' >
//                 <img src={item.img} className=' border-[#0065b7] rounded-lg ' alt="" />
//                 <h3>{item.name}</h3>
//             </div>          
//         </button>
//       ))}
//     </div>
//   );
// };

// export default function AllRestaurants() {
//     const [rest, setRest] = useState([]);
//     const [selectedRestaurant, setSelectedRestaurant] = useState(null);

//     const handleRestaurantClick = (restaurant) => {
//       console.log(restaurant); // בדוק שיש את כל המידע הדרוש
//         setSelectedRestaurant(restaurant);
//     }

//     useEffect(() => {
//         const download = async () => {
//             const emptyList = [];
//             const querySnapshot = await getDocs(collection(db, "Restaurants"));
//             querySnapshot.forEach((doc) => {
//               console.log(doc.data());
//                 emptyList.push({ name: doc.data().name, img: doc.data().img, id:doc.data().id,distance:doc.data().distance, dishes:doc.data().dishes });
//                 // console.log(emptyList);
//             });
//             setRest(emptyList);
//         };

//         download();
//         console.log(rest);
//     }, []);

//     return (
//         <div>
//             {selectedRestaurant ? (
//                 <SingleRestaurant restaurant={selectedRestaurant} />
//             ) : (
//                 <AllRestaurants1 restaurants={rest} onRestaurantClick={handleRestaurantClick} />
//             )}
//         </div>
//     );
// }





import React, { useState, useEffect } from 'react';
import SingleRestaurant from './components-meir/SingleRestaurant';

const AllRestaurants1 = ({ restaurants, onRestaurantClick }) => {
  return (
    <div>
      {restaurants.map((item) => (
        <button onClick={() => onRestaurantClick(item)} key={item._id}>
            <div key={item.name} id="card-5" className='rounded-lg w-[143px] m-1 text-center bg-[#bddaf1] hover:blur-sm' >
                <img src={item.image} className='border-[#0065b7] rounded-lg' alt="" />
                <h3>{item.name}</h3>
            </div>          
        </button>
      ))}
    </div>
  );
};

export default function AllRestaurants() {
    const [rest, setRest] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const handleRestaurantClick = (restaurant) => {
      console.log(restaurant); // בדוק שיש את כל המידע הדרוש
      setSelectedRestaurant(restaurant);
    }

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/restaurants');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRest(data);
                console.log(data);
            } catch (error) {
                console.error("There was a problem fetching the restaurants:", error);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <div>
            {selectedRestaurant ? (
                <SingleRestaurant restaurant={selectedRestaurant} />
            ) : (
                <AllRestaurants1 restaurants={rest} onRestaurantClick={handleRestaurantClick} />
            )}
        </div>
    );
}