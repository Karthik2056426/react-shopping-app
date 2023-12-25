import React from 'react'
import { useNavigate } from 'react-router-dom'







function Shoppingarea({products,productpage}) {
  
 const navigate = useNavigate();
 
  return (
<div>
 
   <div className='flex gap-4 mt-4 flex-wrap justify-center'>
    
    {products.map((item)=>{return <div onClick={()=>{productpage(item.id) ;navigate('/product')}} key={item.id} className='cursor-pointer bg-slate-100 flex-col w-1/4 h-30 p-4 rounded-md transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 text hover:bg-slate-300 duration-200'>
        <div >
        <img className='h-[200px] w-[300px]' src ={item.image} alt='phone'/></div>
        <div className='font-bold text-xl mt-2'>{item.name}</div>
        <div className='font-bold text-xl mt-2'> Price: ₹{item.price}</div>
      
       
      
    </div>})}
    
    
    </div>
</div>
   
    
    
    
  )
}

export default Shoppingarea