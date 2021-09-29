import React from 'react'

export const mockPokemonData = {
  name: "Charizard",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
  },
  video:
    "https://www.youtube.com/watch?v=evvO5Gcl-mo&ab_channel=TheOfficialPok%C3%A9monYouTubechannel"
};
;
// const vale = Object.values(mockPokemonData).forEach(val => {
//   return (
//     <div>{console.log(val['name']}</div>
//   )
// })
 

//  const arrayOfObj = Object.entries(mockPokemonData).map((e) => ( { [e[0]]: e[1] } ));
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
