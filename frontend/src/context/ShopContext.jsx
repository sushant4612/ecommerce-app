import { createContext, useState } from "react";
import { products } from '../assets/frontend_assets/assets'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    
    const currency = '$';
    const delivery_fee = 10;
    const [search , setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({});

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItem);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1
        }

        setCartItem(cartData)
    }

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItem, addToCart
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;