import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import {ProductCartContainer, Footer, Name, Price} from "./ProductCard.styles"

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

const ProductCard = ({product}) => {
    const {name,price,imageUrl}=product;

    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = ()=>addItemToCart(product);

  return (
    <ProductCartContainer>
    <img src={imageUrl} alt={`${name}`} />
    <Footer>
    <Name>{name}</Name>
    <Price>{price}</Price>
    </Footer>
    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
    </ProductCartContainer>
  )
}

export default ProductCard