import React, { useEffect, useState } from 'react'
import './detail.css'
import { BsFillPlayFill } from 'react-icons/bs'
import {LiaPlusSolid} from 'react-icons/lia'
import {HiUserGroup} from   'react-icons/hi'
import { Link, useParams } from 'react-router-dom'

export const Detail = () => {

    const[poster,setPoster]=useState([])
    const[data,setData]=useState([])


    const {name}=useParams();



useEffect(()=>{

fetch("https://www.omdbapi.com/?i=tt3896198&apikey=bf92ba28")
 .then(response=>response.json())
 .then(json=>setPoster(json))



},[])


console.log(poster)
    return (

<div className="detailContainer">
<img src={poster?.Poster} width={1000} height={1000} />


     
        </div>
    )
 } 
