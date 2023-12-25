import React from "react";

function Productpage({ prdp, addcart, cartItems }) {

  const isProductInCart = cartItems.some((item) => item.id === prdp[0].id);
  console.log("cartitems", cartItems);
  return (
    <div className="flex justify-center">
     
      <div className="flex w-3/4 rounded-lg mt-[20px] gap-8 bg-slate-300 p-6">
<div> <img className="h-[400px] w-[600px]" src={prdp[0].image} alt="phone" /></div>
<div>
<div className="flex-col justify-between"> 
<div  className='font-bold text-3xl mt-2'>{prdp[0].name}</div>
  <div className="mt-[10px]">{prdp[0].details}</div>
  <div  className='font-bold text-3xl mt-2'> ₹ {prdp[0].price}</div>
  </div>
 
  <div >  {isProductInCart ? (
          <div className=' cursor-pointer font-bold text-xl rounded-full text-center px-4 py-2 mt-[210px] bg-slate-200'>Added to cart</div>
        ) : (
          <div
            onClick={(e) => {
              addcart(prdp[0].id);
              alert("added to cart");
              e.stopPropagation();
            }}
            className="cursor-pointer font-bold text-xl rounded-full text-center px-4 py-2 mt-[210px] bg-slate-500"
          >
            Add to cart
          </div>
        )}</div>
</div>
    </div>
    </div>
   
  );
}

export default Productpage;
