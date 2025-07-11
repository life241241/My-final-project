// import React from 'react'
// // import sandwich from './images_meir/sandewich.jpg'
// export default function FoodComponent(props) {
//     return (
//         <div style={{ width: '328px', height: '119px', display: 'flex', flexDirection: 'row', marginBottom:'12px', border:'2px solid #EEEEEE', borderRadius:'8px'}}>
//             <div style={{width: '119px', height:'119px', marginRight:'20px'}}>
//                 <img src={props.img} alt="" style={{ width: '100%',height:'100%', borderRadius:'8px 0px 0px 8px'}} />
//             </div>
//             <div style={{ width: '185px', height: '110px' }}>
//                 <p style={{ fontWeight: 'bold', margin:'0px'}}>{props.name}</p>
//                 <p style={{fontSize: '0.75',  gap:'8px', color: '#666666', margin:'0px'}}>{props.description}.</p>
//                 <p style={{fontSize: '0.50',  color: 'red', margin:'0px'}}>${props.price}</p>
//             </div>
//         </div>
//     )
// }


import React from 'react'

export default function FoodComponent(props) {
    const handleClick = () => {
        if (window.confirm('האם להוסיף לסל?')) {
            // שליחת בקשת POST לשרת
            fetch('http://localhost:3000/api/add-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: JSON.parse(localStorage.getItem('userObj'))._id, 
                    restaurantId: props.restaurantId,
                    dishesObj: props
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('המנה נוספה לסל בהצלחה!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('אירעה שגיאה בהוספת המנה לסל');
            });
        }
    }

    return (
        <div 
            onClick={handleClick}
            style={{ 
                width: '328px', 
                height: '119px', 
                display: 'flex', 
                flexDirection: 'row', 
                marginBottom:'12px', 
                border:'2px solid #EEEEEE', 
                borderRadius:'8px',
                cursor: 'pointer' // להוסיף סמן שמראה שהאלמנט לחיץ
            }}
        >
            <div style={{width: '119px', height:'119px', marginRight:'20px'}}>
                <img src={props.img} alt="" style={{ width: '100%',height:'100%', borderRadius:'8px 0px 0px 8px'}} />
            </div>
            <div style={{ width: '185px', height: '110px' }}>
                <p style={{ fontWeight: 'bold', margin:'0px'}}>{props.name}</p>
                <p style={{fontSize: '0.75',  gap:'8px', color: '#666666', margin:'0px'}}>{props.description}.</p>
                <p style={{fontSize: '0.50',  color: 'red', margin:'0px'}}>${props.price}</p>
            </div>
        </div>
    )
}