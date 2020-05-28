import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.css';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/cart/cart.action';


const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ?
                    (cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)) :
                    (<span className="empty-cart">Your Cart Is Empty</span>)
                }
            </div>
            <CustomButton onClick={() => 
            {
                history.push('/checkout');
                dispatch(toggleCartDropdown());
            }
            }>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
