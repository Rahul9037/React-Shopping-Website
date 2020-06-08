import React from 'react';
import { connect } from 'react-redux';
//import './cart-icon.styles.css';
//import { ReactComponent as ShoppingIcon } from '../assets/bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { CartIconContainer ,ItemCountContainer ,ShoppingIconContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
    <CartIconContainer onClick={toggleCartDropdown}>
        <ShoppingIconContainer/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
