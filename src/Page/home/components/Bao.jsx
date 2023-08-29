import React from 'react'
import './bao.css'
import { Link } from 'react-router-dom'

export const Bao = (props) => {
  

  const list = props.images.map((link, index) => <Link to="/detail/nzme"><img width="250px" className='bao' key={index} src={link.src} /></Link>)


  return (


    <div>

      <h3 className="new">{props.title}</h3>


      <div className='baoContainer'>

        {list}

      </div>

    </div>
  )
}
