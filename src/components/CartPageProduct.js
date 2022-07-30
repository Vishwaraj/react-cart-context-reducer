import React from 'react'
import { IconButton, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { CartState } from '../context/Context';


function CartPageProduct({item}) {

 const {dispatch} = CartState()

  return (
    <div className='cart-page-product'>
     <img src={item.image} alt={item.name} />
     <h3>{item.name}</h3>
     <h3>{item.price}</h3>
     <TextField sx={{width: '5vw'}} type='number' label='Quantity' />
     <IconButton onClick={()=>dispatch({type: 'REMOVE_FROM_CART', payload: item})} color="primary">
        <CloseIcon />
    </IconButton>
    </div>

  )
}

export default CartPageProduct