import React from 'react'

import mockPokemonData from '../mock/PokeData';

const arrayOfObj = Object.fromEntries(
  Object.entries(mockPokemonData)
  .map(([ key, val ]) => [ key, val ])
);
console.log(arrayOfObj)
const  PokeData =  () => {
  return (
    <div className='App'>
      <h1>poke</h1>
      <h1>{arrayOfObj.name} </h1>
      <div className='image'>
        <img src={arrayOfObj.sprites.front_default} />
        <img src={arrayOfObj.sprites.front_shiny} />
      </div>
      <div>
        <a src={arrayOfObj.video} href={arrayOfObj.video} target='_blank'>
          Pokeman Video
          </a>
      </div>
    </div>
  )
}

export default PokeData
