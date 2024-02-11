import React from 'react'
import { CDN_URL } from '../utils/Constants'

const ResturantCard = (props) => {
   
   const data= props.resList.info
    //  {destructure on fly }
  return (
    <div className="m-4 p-4 w-[280px] h-[450px]  border border-red-900 rounded-lg bg-slate-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 duration-300 ">
        <img className="rounded-lg w-[250px] h-[200px]" 
        src={CDN_URL +
        data.cloudinaryImageId}
        alt="logo"> 
        </img>
        <h3 className='font-bold py-4 text-lg '>{data.name}</h3>
        <p className=''>{data.cuisines.slice(0,2).join(", ")}</p>
        <h3  className='font-bold  text-lg'>  {data.costForTwo}</h3>
        <h3>{data.avgRating} ⭐</h3>
        <p className='font-normal '>{data.sla.slaString}</p>
  
      </div>
  )
}

//Higher order component 
export const WithOpenLabel = (ResturantCard)=>{
  return(props)=>{
    return(
      <div>
         <label className='absolute m-1 p-1 rounded-lg bg-black text-white fixed' > Top Rated  </label>
         <ResturantCard {...props} ></ResturantCard>
      </div>
    )
  }
}

export default ResturantCard
