import React from "react";
import { useNavigate } from "react-router-dom";

function Cartlist({
  cartItems,
  handleDecrement,
  handleIncrement,
  totalprice,
  removecart,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3 justify-center mt-6">
      <div className="bg-slate-500 h-auto p-3 rounded-lg">
        {cartItems.map((items) => (
          <div
            key={items.id}
            className="flex gap-5 p-3 bg-slate-100 m-2 rounded-lg"
          >
            <div>
              <img
                className="h-[100px] w-[150px]"
                src={items.image}
                alt="phone"
              />
            </div>
            <div className="w-[500px]">
              <div className="font-bold text-xl">{items.name}</div>
              <div>{items.details}</div>
              <div className="font-bold text-xl mt-2">₹ {items.price}</div>
              <div className="flex mt-4 justify-between">
                <div className="flex">
                  <div className="font-bold text-xl">Qty:</div>
                  <div
                    className="bg-slate-500 rounded-l-lg font-bold text-2xl text-center w-6 cursor-pointer"
                    onClick={() => handleDecrement(items.id)}
                  >
                    -
                  </div>
                  <div className=" text-center font-bold text-xl border border-slate-500 w-8">
                    {items.quantity}
                  </div>
                  <div
                    className="bg-slate-500 rounded-r-lg font-bold text-2xl text-center w-6 cursor-pointer"
                    onClick={() => handleIncrement(items.id)}
                  >
                    +
                  </div>
                </div>
                <div
                  className="bg-slate-500 font-bold text-xl px-2 rounded-lg cursor-pointer"
                  onClick={() => removecart(items.id)}
                >
                  remove
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-col self-start justify-between bg-slate-300 p-3 rounded-lg">
        {cartItems.map((item) => (
          <div className="flex justify-around">
            <div className="w-[120px]">{item.name}</div>
            <div className="w-[90px] text-center">{item.price}</div>
            <div className="w-[90px]">{item.quantity}</div>
          </div>
        ))}
        <div className="font-bold mt-3 text-xl ">Total price: {totalprice}</div>
        <div
          className="text-white cursor-pointer mt-5 bg-slate-500 font-bold p-2 text-center rounded-full transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 text hover:bg-slate-500 duration-200"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Checkout
        </div>
      </div>
    </div>

   
  );
}

export default Cartlist;
