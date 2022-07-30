import React, { useEffect } from 'react'
import { CartState } from '../context/Context'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'
import axios from 'axios';



export function Home() {

  // const {state: {products}} = CartState();
  // console.log(products);

  const {state: {products}, dispatch} = CartState();

  // console.log(state)

  // useEffect(() => {
  //  axios.get('https://6278eaca6ac99a91065f4bbb.mockapi.io/products')
  // .then(
  //   result => {
  //     dispatch({type: 'FETCH_SUCCESS', payload: result.data})
  //   }
  // )
  // .catch(
  //   error => {
  //     dispatch({type: 'FETCH_FAILURE'})
  //   }
  // )


  // }, [])


  return (
    <div className='home'>
    {/* filters */}

    <div className='products-list' >
    {products.map((item) => {
      return <SingleProduct key={item.id} item={item}/>
    })}
    </div>

    </div>
  )
}


function SingleProduct({item}) {

const {state: {cart}, dispatch} = CartState();

console.log(cart);

  return (
    <div className='single-product'>
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
       />
       <CardContent>
        <h3>{item.name}</h3>
        <h4>{item.price}</h4>
       </CardContent>
       <CardActions>
        {cart.some((product) => product.id === item.id)? (
          <Button onClick={()=>dispatch({type: 'REMOVE_FROM_CART', payload: item})} variant='contained' color='error' size="small">Remove from cart</Button>
        ) : (
          <Button onClick={()=>dispatch({type: 'ADD_TO_CART', payload: item})} variant='contained' size="small">Add to Cart</Button>
        )}
        
      
      </CardActions>
    </Card>
    </div>
  );

}