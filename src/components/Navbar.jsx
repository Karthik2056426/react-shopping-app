import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between h-20 bg-slate-500 items-center'>
        <div className=' ml-4 font-bold text-4xl text-white'><p>Shopping App</p></div>
        <div className='flex'>
        <div className=' cursor-pointer mr-4 rounded-full px-4 py-2  bg-slate-200' onClick={()=>{navigate('/')}}>Home</div>
        <div onClick={()=>{navigate('/cart')}}className='cursor-pointer mr-4 rounded-full px-4 py-2  bg-slate-200 hover:rounded-full'>Go to cart</div>
        </div>
        
    </div>
  )
}

export default Navbar