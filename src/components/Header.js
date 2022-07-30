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




  return (
    <div>
    <AppBar>
    <div className='header'>
    <h1>React Cart</h1>
    <InputBase type='text' style={searchStyle} placeholder='SEARCH PRODUCTS' size='medium' />
        <Toolbar>
        
            <Button variant='text' color='inherit'>Home</Button>
            <div>
            <Badge badgeContent={cart.length} color="primary">
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
            >
           <MenuItem >Profile</MenuItem>
           <MenuItem >My account</MenuItem>
           <MenuItem >Logout</MenuItem>
            </Menu>

            </div>
        </Toolbar>
    </div>

    </AppBar>
    </div>
  )
}

export default Header