import React from 'react'

export default function SingleTest(props) {
  return (
    <div style={{width : 45 }}>
        <img src= {props.img} alt="" />
        <h2>{props.name}</h2>

    </div>
  )
}
