import React from 'react';
import { connect } from 'react-redux';
import { clearItem ,removeItem , addItem} from '../../redux/cart/cart.action';
//import './checkout-item.styles.css';
import {ArrowContainer,CheckoutItemContainer,CommonSpan,ImageContainer,QuantitySpan,RemoveButtonContainer,ValueContainer} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem ,removeItem ,addItem }) => {
  const { name, imageUrl, quantity, price } = cartItem
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <CommonSpan>{name}</CommonSpan>
      <QuantitySpan>
        <ArrowContainer onClick={ () => removeItem(cartItem)}>&#10094;</ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={ () => addItem(cartItem)}>&#10095;</ArrowContainer>
      </QuantitySpan>
      <CommonSpan>INR {price}</CommonSpan>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  removeItem : item => dispatch(removeItem(item)),
  addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);