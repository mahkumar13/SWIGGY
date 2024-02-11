import React, { useEffect, useState } from 'react'
import { menu_api } from '../utils/Constants';

const useResturantMenu = (resId) => {
    const [resInfo,setResinfo]= useState(null);
    useEffect(()=>{
        fetchMenu()
    },[]);
    const fetchMenu= async ()=>{
        const data = await fetch(menu_api+resId);
        const json = await data.json()
        setResinfo(json.data)
        console.log(json.data)
    };
    return resInfo;
}

export default useResturantMenu
