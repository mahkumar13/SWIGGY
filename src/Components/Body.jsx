import React, { useEffect, useState } from 'react'
import ResturantCard from './ResturantCard'

const Body = () => {
  const [listOfResturant,setListOfResturant]= useState([])
  const [filterList,setFilterList]=useState([])
  useEffect(()=>{
        fetchData()
  },[])

  const fetchData= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6058005&lng=77.3877076&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json =  await data.json()
     console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setListOfResturant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilterList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  return (
    <>
    <div className=''>
    <button className='rounded-lg m-2 p-2 cursor-pointer bg-blue-400'
    onClick={()=>{
      const filteredList= listOfResturant.filter((res)=>res.info.avgRating>4.3)
      setFilterList(filteredList)
    }}
    >
      Top Rated Resturant</button>
  </div>
    <div className=' flex m-2 justify-between mx-3 flex-wrap rounded-lg bg-neutral-200'>
     
      {/* sending data through props  */}
      {filterList.map((res)=>(
        <ResturantCard key={res.info.id} resturant={res}></ResturantCard>
      ))}
     
    </div>
    </>
  )
}
export default Body
