import React from 'react';
import { WinesList } from '../helpers/winesList';
import WineItem from '../components/WineItem';

function Wines() {
  return (
    <div className='wines'>
        <h1 className='winesTitle'>The Wines</h1>
        <div className='winesList'>
          {WinesList.map((wineItem, key) => {
            return 
            <WineItem 
            key={key}
            image={wineItem.image} 
            name={wineItem.name} 
            price={wineItem.price}/>
          })}
        </div>
    </div>
  )
}

export default Wines