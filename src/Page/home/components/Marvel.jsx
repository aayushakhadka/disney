import React from 'react'
import './marvel.css'

export const Marvel = () => {

  const marvel = [{ src: 'http://localhost:3001/images/viewers-disney.png', alt: 'disney' }, { src: 'http://localhost:3001/images/viewers-pixar.png', alt: 'pixar' },

  
  { src: 'http://localhost:3001/images/viewers-marvel.png', alt: 'marvel' }, { src: 'http://localhost:3001/images/viewers-starwars.png', alt: 'starwars' },
  { src: 'http://localhost:3001/images/viewers-national.png', alt: 'national' }]

  


  return (

    <div className="marvelContainer">


      {marvel.map((link, index) => <img width={'150px'} className="disnep" key={index} src={link.src} />)}



    </div>
  )
}
