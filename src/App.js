import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orderconfirm from "./components/Orderconfirm";
import { useState } from "react";
import products from './components/products.json';
import Productpage from "./pages/Productpage";



function App() {
  // state of cart
  const [cart, setCart] = useState([]);
  // state of product page
  const [prdp,setPrdp] = useState([]);

  // calculating total cost based on the quantity
  const totalprice= cart.reduce(function getSum(total,num){return total+(num.price*num.quantity)},0)
console.log('totalprice',totalprice);
  console.log('cart',cart);

//  adding items to cart
  function addcart(item) {
    
    for (let prd of products) {
      if (prd.id === item) {
        setCart([...cart, prd]);
     
      
      }
    } return cart;
  }
  // incrementing and decrementing quantity
function handleDecrement(id){
  setCart(cart.map(item=> item.id === id && item.quantity > 1 ?{...item,quantity:item.quantity-1} : item))
}
function handleIncrement(id){
  setCart(cart.map(item=> item.id === id ?{...item,quantity:item.quantity+1} : item))
}

// product page loading
  function productpage(id){
    for(let prd of products){if(prd.id === id){setPrdp([prd])}}
    console.log(prdp);
  }
  // removing items from cart
  function removecart(id){
    setCart(cart.filter(item=> item.id !== id))
  }
  



  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} productpage={productpage}  />} />
        <Route path="product" element={<Productpage  addcart={addcart} cartItems={cart} prdp={prdp}/>}/>
        <Route path="cart" element={<Cart removecart={removecart} cartItems={cart} totalprice={totalprice} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />} />
        <Route path="checkout" element={<Checkout cart={cart} totalprice={totalprice} />} />
        <Route path="orderconfirm" element={<Orderconfirm />} />
      </Routes>
    </div>
  );
}

export default App;
