import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context'

function CartTotal() {

  const {state: {cart}} = CartState()

 const [total, setTotal] = useState(0);

 useEffect(() => {
  setTotal(cart.reduce((acc, curr) => acc += +curr.price, 0));
 }, [cart])


  return (
    <div className='cart-total'>
        <h3>Subtotal: ({cart.length}) Items</h3>
        <h2>Total: Rs {total}</h2>
        <Button>Confirm Order</Button>
    </div>
  )
}

export default CartTotal