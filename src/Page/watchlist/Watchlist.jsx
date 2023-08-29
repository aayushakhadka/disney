import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BsFillPlayFill } from 'react-icons/bs'
import {LiaPlusSolid} from 'react-icons/lia'
import {HiUserGroup} from   'react-icons/hi'
import { image } from '../home/data/disney' 
import './watchlist.css'




 export const Watchlist =()=>{

  const image=[{src:'http://localhost:3002/images/bao_logo.png'}]



{image.map((link, index) => <img width="250px" className='Bao' key={index} src={link.src} />)} 

return(

<div className='watchlistContainer'>



 <div className='button'>

         


           <button className='play'>

               <BsFillPlayFill style={{height:"40px",width:"40px"}}/>

               <span>PLAY</span>

            </button>


           <button className='trailer'>


              <BsFillPlayFill style={{height:"40px",width:"40px"}}  />

                 <span>TRAILER</span>

            </button>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>

             <LiaPlusSolid className='icons'/>
            <HiUserGroup className='icons'/>
            </div>

           </div>



              <div className='describecontainer'>
        <h3 className='description'> 2018 . 7m .Family, Fantasy, Kids, Animation</h3>


           <h3 className='description'>A Chinese mom who's
                 sad when her grown son
                  leaves home gets
                  another chance at
                  motherhood when one 
                  of her dumplings 
                 springs to life. But she 
                  finds that nothing stays 
                  cute and small forever.</h3>                
                  
                  
                   </div> 

           

         

</div>
 )

}

