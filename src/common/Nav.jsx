import React from 'react'
import './nav.css';
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import { BiSolidStar } from 'react-icons/bi'
import { RiMovie2Fill } from 'react-icons/ri'
import {PiTelevisionFill} from 'react-icons/pi'
import { Link } from 'react-router-dom';
export const Nav = () => {




  return (

<>

    <div className="navContainer">

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "20px", alignItems: "center" }}>






        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>


          <img className="image" src="https://cdn.worldvectorlogo.com/logos/disney-wbackground.svg"/>


        </div>




        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap:"40px", backgroundColor:"#040714" }}>




        <Link className="route" to="/">
          
          <AiFillHome />
          
          <span>HOME</span>
          
          </Link>
           






             <Link className="route" to="/search">
              
              <AiOutlineSearch />
              
              <span>SEARCH</span>
              
              </Link>








             <Link className="route" to="/watchlist">
              
              <BsPlusLg />
             
             <span>WATCHLIST</span>
             
             </Link>






             <Link className="route" to="/originals">
              
              <BiSolidStar />
              
              <span>ORIGINALS</span>
              
              </Link>










             <Link className="route" to="/movies">
              
              <RiMovie2Fill />
              
              <span>MOVIES</span>
              
              </Link>




             

              
                
             <Link className="route" to="/series" >
              
              <PiTelevisionFill />

             <span>SERIES</span>
             
             </Link>








        </div>








      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>

        <img className="profile" src="https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&w=300" />



      </div>


        
   


    </div>

   

    






























     </>










  )
}
