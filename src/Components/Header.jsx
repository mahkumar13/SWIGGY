import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Header_logo_url } from '../utils/Constants'
const Header = () => {
  const [btnText,setBtnText]=useState("LogIn")
  return (
    <div  className='bg-cyan-300 flex justify-between border-teal-300'>
      <div>
        <img className='w-32'
        src={Header_logo_url}
        alt='logo '
        ></img>
      </div>
      <div className='flex items-center' >
        <ul className='flex font-bold mx-3 text-pink-900 text-4xl' >
            <li className='mx-2  '> <Link to="/">Home</Link></li>
            <li className='mx-2 '><Link to="/about">AboutUs</Link></li>
            <li className='mx-2'> <Link to="/contact">ContactUs</Link> </li>
            <li className='mx-2'></li>
            <button className='rounded-full bg-blue-600 px-2 py-1'
             onClick={()=>{
             btnText==="LogIn"? setBtnText("LogOut"):setBtnText("LogIn")
             }}
            >{btnText}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header
