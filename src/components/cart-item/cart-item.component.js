import React from 'react';

import './cart-item.styles.css';

const CartItem = ({cartItem}) => {
    const { imageUrl,quantity,price,name} = cartItem
    return (
        <div className="cart-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="quantity">
                <span>{name}</span>
                <span>{quantity} × INR {price}</span>
                
            </div>
        </div>
    )
}

export default CartItem;