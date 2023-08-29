import React from 'react'
import { Carousel } from './components/Carousel'
import { Marvel } from './components/Marvel'
import { Bao} from './components/Bao'
import { cartoons, image, images } from './data/disney'

const Home = () => {
  return (
    <div className='main'>
        <Carousel/>
        <Marvel/>
        


        <Bao images={cartoons} title="Recommended for You"/>

        <Bao images={images} title="New to Disney"/>
           


        <Bao images={image} title="Originals"/>

    </div>
  )
}

export default Home