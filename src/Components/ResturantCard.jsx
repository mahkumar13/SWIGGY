import React from 'react'
import { CDN_URL } from '../utils/Constants'

const ResturantCard = ({resturant}) => {
  // console.log(resturant.info)
  const data= resturant.info
    //  {destructure on fly }
  return (
    <div className="m-4 p-4 w-[280px] h-[475px]  border border-red-900 rounded-lg bg-slate-200transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 duration-300 ">
        <img className="rounded-lg w-[250px] h-[200px]" 
        src={CDN_URL +
        data.cloudinaryImageId}
        alt="logo"> 
        </img>
        <h3 className='font-bold py-4 text-lg'>{data.name}</h3>
        <p className=''>{data.cuisines.slice(0,3).join(", ")}</p>
        <h3  className='font-bold  text-lg'>  {data.costForTwo}</h3>
        <h3>{data.avgRating} ⭐</h3>
  
      </div>
  )
}

export default ResturantCard
