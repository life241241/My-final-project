import React from 'react'
import TopeCard from './TopeCard'
import FoodList from './foods.json'
import FoodComponent from './FoodComponent'
// import {db} from "../firebase-config/"
// import { doc, getDoc } from 'firebase/firestore'
// import { useEffect, useState } from 'react'

export default function SingleRestaurant({ restaurant }) {
    console.log(restaurant); // בדוק את הקונסול לראות מה מתקבל
  
    // אם restaurant הוא undefined, נחזיר הודעה או רכיב טעינה
    if (!restaurant) {
      return <div>Loading...</div>;
    }
  
    return (
      <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <TopeCard
          name={restaurant.name}
          img={restaurant.image}
          description={restaurant.description}
          distance={restaurant.distance}
          id={restaurant.id} />
  
        {restaurant.dishes && restaurant.dishes.map((item) =>
          <FoodComponent
            key={item.id}
            img={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            restaurantId={restaurant._id}
            dishesObj={item} />)}
      </div>
    )
  }