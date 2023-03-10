import { createContext, useState,useEffect } from 'react';

//to add to cart

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };


  //to remove to cart

  const removeCartItem = (cartItems,cartItemToRemove) => {
    //find the item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
      );

    //check if quantity is equal to 1,if it is remove that form cart
if (existingCartItem.quantity ===1){
    return cartItems.filter(cartItem=>cartItem.id !==cartItemToRemove.id)
}
    //return back cartItems with matching cart item with reduced quantity

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
  };

  const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
  



  //main Context
export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart:() => {},
  clearItemFromCart:() => {},
  cartCount: 0,
  cartTotal:0,
});

//provider

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount,  setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal]= useState (0);

  //Count
  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  //total
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

    const removeItemToCart = (cartToRemove) => {
        setCartItems(removeCartItem(cartItems, cartToRemove));
    };

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
      };
    
  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
 };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};