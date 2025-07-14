import React,{createContext,use,useState,useEffect} from "react";
// import all_product from "../Components/Assets/Frontend_Assets/all_product";
 export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart ={};
    for(let index=0;index<300+1;index++){
        cart[index]=0;

    }
    return cart;
}


 const ShopContextProvider = (props) => {

    const [all_product,setAllProduct] = useState([]);
    const [cartItems,setcartItems] = useState(getDefaultCart());

useEffect(() => {
    
          fetch("https://ecommerce-backend-m0wm.onrender.com/allproducts")
        .then((response) => response.json())
        .then((data) => {
            setAllProduct(data);
        })
}, []);




    const addToCart = (itemId) => {
        setcartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1}));
        console.log(cartItems);
    };
    const removeFromCart = (itemId) => {
        setcartItems((prev) => ({...prev,[itemId]: prev[itemId] - 1}));
    };
const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        try {
          let itemInfo = all_product.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.new_price;
        } catch (error) {}
      }
    }
    return totalAmount;
  };
   const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        try {
          let itemInfo = all_product.find((product) => product.id === Number(item));
          totalItem += itemInfo ? cartItems[item] : 0 ;
        } catch (error) {}
      }
    }
    return totalItem;
  };

    const contextValue={all_product,cartItems,addToCart,removeFromCart, getTotalCartAmount, getTotalCartItems};

    console.log(cartItems);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
 }
export default ShopContextProvider;
