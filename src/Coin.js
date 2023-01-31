import React from 'react'

export default function Coin(props) {
  return (
    <div className='flex-container' >
      <div className='card' >
        <h1 className='card-header'>{props.name}</h1>
        <img  src={props.image} alt="/"  />
        <h2 className='card-body'>Card symbol : {props.symbol}</h2>
        <h3 className='card-text'>Current Price : {props.current_price}</h3>
        <h4>Total Volume : {props.total_volume}</h4>
      </div>
    </div>
  )
}
