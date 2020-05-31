import React from 'react';
import { connect } from 'react-redux';
//import './cart-dropdown.styles.css';
//import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/cart/cart.action';
import { CartDropdownButton , CartDropdownContainer , EmptyCartContainer , CartItemsContainer } from './cart-dropdown.styles';


const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ?
                    (cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)) :
                    (<EmptyCartContainer>Your Cart Is Empty</EmptyCartContainer>)
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => 
            {
                history.push('/checkout');
                dispatch(toggleCartDropdown());
            }
            }>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
