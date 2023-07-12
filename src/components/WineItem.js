import React from 'react'

function WineItem({image, name, price}) {
  return (
    <div className='wineItem'>
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}

export default WineItem