import React from 'react';

//import './cart-item.styles.css';

import { CartItemContainer,ImageContainer,QuantityContainer} from './cart-item.styles';

const CartItem = ({cartItem}) => {
    const { imageUrl,quantity,price,name} = cartItem
    return (
        <CartItemContainer>
            <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
            <QuantityContainer>
                <span>{name}</span>
                <span>{quantity} × INR {price}</span>
                
            </QuantityContainer>
        </CartItemContainer>
    )
}

export default React.memo(CartItem);