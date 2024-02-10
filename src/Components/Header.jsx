import React from 'react'
import { Header_logo_url } from '../utils/Constants'
const Header = () => {
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
            <li className='mx-2  '> Home</li>
            <li className='mx-2 '>About</li>
            <li className='mx-2'> Contact </li>
            <li className='mx-2'></li>
        </ul>
      </div>
    </div>
  )
}

export default Header