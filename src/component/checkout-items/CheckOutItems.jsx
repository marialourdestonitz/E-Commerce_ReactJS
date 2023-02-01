import { useContext } from "react";

import {CartContext} from "../../context/CartContext"

import {CheckOutItemContainer,ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from"./CheckOutItems.styles"


const CheckOutItems = ({cartItem}) => {
    const {name, imageUrl, price,quantity}=cartItem;

    const {clearItemFromCart, addItemToCart, removeItemToCart} =useContext(CartContext);

    const clearItemHandle = () => clearItemFromCart(cartItem);

    const addItemHandler= () => addItemToCart(cartItem);
    const removeItemHandler= () => removeItemToCart(cartItem);

  return (
    <CheckOutItemContainer>
        <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>

        <BaseSpan>{name}</BaseSpan>

        <Quantity>
        <Arrow 
          onClick={addItemHandler}>
              &#10094;
        </Arrow>

        <Value>{quantity}</Value>

        <Arrow 
          onClick={removeItemHandler}>
              &#10095;
        </Arrow>

        </Quantity>

        <BaseSpan>{price}</BaseSpan>

        <RemoveButton
           onClick={clearItemHandle}>
            &#10005;
        </RemoveButton>
        
    </CheckOutItemContainer>
  )
}

export default CheckOutItems