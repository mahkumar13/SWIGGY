import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {
 // try to check online status  it will return boolean value 
 const[onlineStatus,setOnlineStatus]= useState(true)
 useEffect(()=>{
  window.addEventListener("online",()=>{
    setOnlineStatus(true)
  });
  window.addEventListener("offline",()=>{
    setOnlineStatus(false );

  })
 },[])
   return onlineStatus
}

export default useOnlineStatus
