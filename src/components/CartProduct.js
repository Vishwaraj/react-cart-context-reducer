import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { CartState } from '../context/Context';


function CartProduct({item}) {

    const {dispatch} = CartState();

  return (
    <div className='cart-product'>
    <img src={item.image} alt={item.name}/>
    <p>{item.name}</p>
    <p>{item.price}</p>
    <IconButton onClick={()=>dispatch({type: 'REMOVE_FROM_CART', payload: item})} color="primary">
        <CloseIcon />
    </IconButton>
    </div>
  )
}

export default CartProduct