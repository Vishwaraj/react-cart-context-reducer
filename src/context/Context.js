
import { createContext, useContext, useEffect, useReducer } from "react";
import { faker } from '@faker-js/faker';
import cartReducer from "./Reducer";



const MyCart = createContext();

 const Context = ({children}) => {

    faker.seed(99);

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.product()	,
        price: faker.finance.amount(),
        image: faker.image.fashion(200, 200, true),
        fastDelivery: faker.datatype.boolean(),
    }));

// const initialState = {
//     loading: false,
//     products: [],
//     errors: ''
// }


   const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
   })

// const [state, dispatch] = useReducer(cartReducer, initialState);






return <MyCart.Provider value={{state, dispatch}} >{children}</MyCart.Provider>
    
    
}

export default Context

export const CartState = () => {
    return useContext(MyCart)
}