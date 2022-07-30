function cartReducer (state, action) {
  switch (action.type) {
   case 'ADD_TO_CART':
    return ({
        ...state,
        cart: [...state.cart, {...action.payload, qty: 1}]
    });

   case 'REMOVE_FROM_CART':
    return ({
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id)
    })


    default:
        return state
  }
}

export default cartReducer


//   case 'FETCH_SUCCESS' :
//     return (
//       {  
//         ...state,
//         loading: false,
//         products: action.payload
//     }

//     ); 

//   case 'FETCH_FAILURE' : 
//    return (
//     {
//         ...state,
//         loading: false,
//         products: [],
//         errors: 'request failed'
//     }
//    );