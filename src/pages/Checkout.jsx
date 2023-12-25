import React from 'react'
import { useNavigate } from 'react-router-dom'

function Checkout({cart, totalprice}) {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center gap-3 mt-20'>
      <div className=' bg-slate-300 p-4 rounded-lg w-1/2 h-auto'>
      <div>
        <div className='m-2 font-bold text-xl'>Enter your address details</div>
        <div className='m-2'>House name <input type='text' className='bg-slate-300  border border-slate-600' placeholder='house name'></input></div>
        <div className='m-2'>Street name <input type='text' className='bg-slate-300 border border-slate-600' placeholder='street name'></input></div>
        <div className='m-2'>
        District <input  className='bg-slate-300 border border-slate-600 ' type='text' placeholder='district name'></input></div>
       <div className='m-2'> State <input  className='bg-slate-300 border border-slate-600 ' type='text' placeholder='state name'></input>

        </div>
        <div className='m-2'>PINCODE <input  className='bg-slate-300 border border-slate-600 ' type='text' placeholder='PINCODE'></input></div>
      </div></div>
      <div className='bg-slate-400 w-[300px] p-4 rounded-lg self-start'>
        <div className='text-center font-bold text-xl'>Your items</div>
        <div className='text-center flex justify-between font-bold text-xl'><div>item name</div> <div>quantity</div></div>
        <div className='mt-4'>{cart.map((item)=>(
           <div className='flex gap-2 justify-between'>
      <div>{item.name}</div>
     
      <div >{item.quantity}</div>
      </div>
        ))}</div>
       
      <div className='font-bold text-xl my-4' >Total price : {totalprice}</div>
      <div onClick={()=>{navigate('/orderconfirm')}} className='cursor-pointer font-bold text-xl text-white bg-slate-600 p-2 rounded-full text-center'>Place order</div>
      </div>
     
    </div>
    
    
  )
}

export default Checkout