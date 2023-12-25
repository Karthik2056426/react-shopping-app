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
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState([]);
  const [prdp,setPrdp] = useState([]);
  const totalprice= cart.reduce(function getSum(total,num){return total+(num.price*num.quantity)},0)
console.log('totalprice',totalprice);
  console.log('cart',cart);

 
  function addcart(item) {
    
    for (let prd of products) {
      if (prd.id === item) {
        setCart([...cart, prd]);
     
      
      }
    } return cart;
  }
function handleDecrement(id){
  setCart(cart.map(item=> item.id === id && item.quantity > 1 ?{...item,quantity:item.quantity-1} : item))
}
function handleIncrement(id){
  setCart(cart.map(item=> item.id === id ?{...item,quantity:item.quantity+1} : item))
}


  function productpage(id){
    for(let prd of products){if(prd.id === id){setPrdp([prd])}}
    console.log(prdp);
  }
  function removecart(id){
    setCart(cart.filter(item=> item.id !== id))
  }
  

  console.log(prdp);

  console.log(cart);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} productpage={productpage}  />} />
        <Route path="product" element={<Productpage  addcart={addcart} cartItems={cart} prdp={prdp}/>}/>
        <Route path="cart" element={<Cart removecart={removecart} cartItems={cart} totalprice={totalprice} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />} />
        <Route path="/checkout" element={<Checkout cart={cart} totalprice={totalprice} />} />
        <Route path="/orderconfirm" element={<Orderconfirm />} />
      </Routes>
    </div>
  );
}

export default App;
