import React, { useEffect, useState } from 'react'
import { RESTURANT_LIST_URL } from '../utils/Constants'

const useResturantList = () => {
    const [listOfResturant,setListOfResturant]= useState([])
    const [filterList,setFilterList]=useState([])
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
    return [listOfResturant,filterList,setFilterList]
}

export default useResturantList
