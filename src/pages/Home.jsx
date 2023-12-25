import React from 'react'
import Shoppingarea from '../components/Shoppingarea'


function Home({addcart, products,productpage}) {
  return (
    <div>
        <Shoppingarea addcart = {addcart} products={products} productpage={productpage} />
    </div>
  )
}

export default Home