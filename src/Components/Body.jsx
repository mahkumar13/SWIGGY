import React, { useEffect, useState } from 'react'
import ResturantCard, { WithOpenLabel } from './ResturantCard'
import Shimmer from './Shimmer'
import { RESTURANT_LIST_URL } from '../utils/Constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../Hooks/useOnlineStatus'

const Body = () => {
  const [listOfResturant,setListOfResturant]= useState([])
  const [filterList,setFilterList]=useState([])
  const [searchText,setSearchText]=useState("")
  const onlineStatus= useOnlineStatus();
  const WithTopRatedResturant= WithOpenLabel(ResturantCard)
  useEffect(()=>{
        fetchData()
  },[])

  const fetchData= async()=>{
    const data = await fetch(RESTURANT_LIST_URL);
    const json =  await data.json()
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  if(onlineStatus===false){
    return <h1>Looks Like You are OffLine</h1>
  }
  if(listOfResturant.length===0){
    return(
      <div className='flex flex-wrap justify-between'>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
      </div>
    )
  }
  if(filterList.length===0){
    return(
     <div className='flex m-2 p-2 '>
     <Shimmer></Shimmer>
     <div>
      <img className='w-[1000px] h-[500px] mx-5 p-10'
      alt=''
       src='https://www.authenticlifeelc.com/fbm-data/images/menu-unavailable.jpg'>
      </img>
     </div>
     </div>
    )
  }
  return (
    <>
    <div className='flex'>
      <div className='m-2'>
       <input className='m-2 p-2 rounded-lg border-2 border-yellow-400' type='text ' placeholder='search'
       value={searchText} onChange={(e)=>{
        setSearchText(e.target.value)
       }}
       ></input>
      </div>
      <div>
        <button className='rounded-lg  mx-5 px-10 my-2 p-4 cursor-pointer bg-blue-400'
        onClick={()=>{
          const filteredResturant= listOfResturant.filter((res)=>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          )
          setFilterList(filteredResturant)
        }}
        
        >Search</button>
      </div>
    <button className='rounded-lg m-2 p-2 cursor-pointer bg-blue-400'
    onClick={()=>{
      const filteredList= listOfResturant.filter((res)=>res.info.avgRating>4.3)
      setFilterList(filteredList)
    }}
    >
      Top Rated Resturant</button>
      <button className='rounded-lg m-2 p-2 cursor-pointer bg-blue-400'
       onClick={()=>{}}
      >Go </button>
  </div>
    <div className=' flex m-2 justify-between mx-3 flex-wrap rounded-lg bg-neutral-200'>
      {
      filterList?.map((res)=>(
        <Link to={'/resturant/'+res.info.id} key={res.info.id}>
          {res.info.isOpen ?(<WithTopRatedResturant resList={res}></WithTopRatedResturant>):
          (<ResturantCard resList={res}></ResturantCard>)
          }
        </Link>
      ))}

    </div>
    </>
  )
}
export default Body
