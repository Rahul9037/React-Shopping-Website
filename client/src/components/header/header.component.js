import React from 'react';
import { ReactComponent as Logo } from '../assets/shoppinglogo.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';

import { HeaderContainer ,LogoContainer ,OptionsContainer ,OptionDiv ,OptionLink  } from './header.styles';

import { signOutStart } from '../../redux/user/user.action';



const Header = ({ currentUser, hidden , signOutStart }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
                        :
                        <OptionLink to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? 
                null : 
                <CartDropdown />
            }

        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);