import React, { useEffect, useState } from 'react'
import { CDN_URL, menu_api } from '../utils/Constants'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'

const ResturantMenu = () => {
    const{resId}= useParams()
    const [resInfo,setResinfo]= useState(null)
    useEffect(()=>{
      fetchMenu()
    },[])
    const fetchMenu= async ()=>{
        const data = await fetch(menu_api+resId);
        const json = await data.json()
        setResinfo(json.data)
        console.log(json.data)
    }
    if(resInfo===null){
        return <Shimmer></Shimmer>
    }
    const {name,cuisines,costForTwoMessage,avgRating,cloudinaryImageId}= resInfo?.cards[0]?.card?.card?.info
    const {itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
   console.log(itemCards)
  return (
    <div className='text-center border-2 text-red-500'>
        <img className='w-[400px] h-[300px] mx-auto my-2 rounded-lg border' 
        src={CDN_URL+cloudinaryImageId} alt=''></img>
      <h1 className='font-serif   '>{name}</h1>
      <h3 className='font-serif'>{cuisines.join(" ,")}</h3>
      <h3  className='font-serif '>{costForTwoMessage}</h3>
      <h3  className='font-serif '>{avgRating}⭐</h3>
    </div>
  )
}

export default ResturantMenu
