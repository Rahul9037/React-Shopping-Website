import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price*100;
    const publishableKey = "pk_test_eF0rxyBJ4LUFtEo8Ca6tqgy500iGKAzMvS";
    const onToken = token => {
        
        axios.post('/payment' , {
            amount : priceForStripe,
            token
        })
        .then( resp => {
            alert('Payment Success')
        })
        .catch( error => {
            console.log("Payment Error :" , JSON.parse(error))
            alert("Payment failed. Please use the given credi card details")
        })
    }
    return(
        <StripeCheckout 
        label='Pay Now'
        name='React Shopping Site'
        billingAddress
        shippingAddress
        stripeKey={publishableKey}
        amount={priceForStripe}
        currency="INR"
        image="https://www.svgrepo.com/show/217771/shopping-logo.svg"
        description={`Your Total is ${price} INR`}
        panelLabel='Pay Now'
        token={onToken}/>

    )
}

export default StripeCheckoutButton;