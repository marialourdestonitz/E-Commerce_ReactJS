import { useContext } from "react";

import {CartContext} from "../../context/CartContext"

import "./CheckOutItems.styles.scss"


const CheckOutItems = ({cartItem}) => {
    const {name, imageUrl, price,quantity}=cartItem;

    const {clearItemFromCart, addItemToCart, removeItemToCart} =useContext(CartContext);

    const clearItemHandle = () => clearItemFromCart(cartItem);

    const addItemHandler= () => addItemToCart(cartItem);
    const removeItemHandler= () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
        <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className="arrow" onClick={addItemHandler}>
            &#10094;
        </div>

        <span className="value">{quantity}</span>

        <div className="arrow" onClick={removeItemHandler}>
        &#10095;
        </div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={clearItemHandle}>&#10005;</div>
    </div>
  )
}

export default CheckOutItems