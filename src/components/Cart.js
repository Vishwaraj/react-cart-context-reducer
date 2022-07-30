import React from 'react'
import { CartState } from '../context/Context'
import CartPageProduct from './CartPageProduct';
import CartTotal from './CartTotal';

export function Cart() {

const {state: {cart}} = CartState();

  return (
<>
<div className='cart-page-with-total'>
<div className='cart-page'>
{cart.length === 0 ? <p>Cart is empty</p> : 
(
  cart.map((item) => {
    return <CartPageProduct key={item.id} item={item} />
  })
)
}
</div>
<CartTotal /> 
</div>


</>
)
}

