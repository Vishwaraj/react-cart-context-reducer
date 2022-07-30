import React, { useState } from 'react'
import { AppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputBase from '@mui/material/InputBase'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Badge from '@mui/material/Badge';
import { CartState } from '../context/Context'
import CartProduct from './CartProduct'
import {useNavigate} from 'react-router-dom';





function Header() {

  const searchStyle = {
    color: 'white',
  }

const [anchorEl, setAnchorEl] = useState(null);

const open = Boolean(anchorEl);

  const handleClick = (event) => {
  setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }

const {state: {cart}} = CartState();

const navigate = useNavigate();

  return (
    <div>
    <AppBar>
    <div className='header'>
    <h1>React Cart</h1>
    <InputBase type='text' style={searchStyle} placeholder='SEARCH PRODUCTS' size='medium' />
        <Toolbar>
        
            <Button variant='text' color='inherit' onClick={()=>navigate('/')} >Home</Button>
            <div>
            <Badge badgeContent={cart.length} color="secondary">
            <Button id='cart-button' onClick={(event)=>handleClick(event)} variant='text' color='inherit' 
            aria-controls={open ? 'cart-items' : undefined} 
            aria-haspopup='true'
            aria-expanded={open ? true : undefined}
            >Cart</Button>
            </Badge>
            <Menu
            id='cart-items'
            anchorEl={anchorEl}
            open={open}
            menuListProps={{
                'aria-labelledby': 'cart-button'
            }}
            onClose={handleClose}
            // sx={{width: "30vw"}}
            
            >
            {
              cart.length === 0 ? (<MenuItem>Cart is empty</MenuItem>) : ( cart.map((item) => {
              return <CartProduct key={item.id} item={item} />
            }))
              
             }
           
           <MenuItem ><Button onClick={()=>navigate('/cart')}  variant='contained' >Go to Cart</Button></MenuItem>
            </Menu>

            </div>
        </Toolbar>
    </div>

    </AppBar>
    </div>
  )
}

export default Header


