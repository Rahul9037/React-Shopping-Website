import React from 'react';
import { connect } from 'react-redux';
//import './collection-item.styles.css';
//import CustomButton from "../custom-button/custom-button.component";
import { addItem } from '../../redux/cart/cart.action';

import { AddToCartButton,CollectionFooter,CollectionItemContainer,ImageContainer,NameContainer,PriceContainer } from './collection-item.styles';

const CollectionItem = ({ item ,  addItem}) => {
    const {name, imageUrl, price} = item
    return (
        <CollectionItemContainer>
            <ImageContainer className="image" style={{backgroundImage : `url(${imageUrl})`}}/>
            <CollectionFooter>
                <NameContainer>
                    {name}
                </NameContainer>
                <PriceContainer>
                    INR{price}
                </PriceContainer>
            </CollectionFooter>
            <AddToCartButton onClick={ () => addItem(item)} inverted>ADD TO CART</AddToCartButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null , mapDispatchToProps)(CollectionItem);