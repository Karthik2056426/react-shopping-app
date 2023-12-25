import React from 'react'
import { useNavigate } from 'react-router-dom'

function Orderconfirm() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center m-[200px]'>
    <div> 
    <div className='font-bold text-5xl'>Order Confirmed</div>
    <div  className=" text-white cursor-pointer font-bold text-xl rounded-full text-center px-4 py-2  mt-[100px] bg-slate-500" onClick={()=>{navigate('/')}}>Continue shopping</div>
    </div>
   
    </div>
   
  )
}

export default Orderconfirm