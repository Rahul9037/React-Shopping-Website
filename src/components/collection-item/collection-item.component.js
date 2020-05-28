import React from 'react';
import { connect } from 'react-redux';
import './collection-item.styles.css';
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({ item ,  addItem}) => {
    const {name, imageUrl, price} = item
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage : `url(${imageUrl})`}}/>
            {/* <div className="button">ADD TO CART</div> */}
            <CustomButton onClick={ () => addItem(item)}>ADD TO CART</CustomButton>
            <div className="collection-footer">
                <div className="name">
                    {name}
                </div>
                <div className="price">
                    INR{price}
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null , mapDispatchToProps)(CollectionItem);