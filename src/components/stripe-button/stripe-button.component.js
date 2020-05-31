import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price*100;
    const publishableKey = "pk_test_eF0rxyBJ4LUFtEo8Ca6tqgy500iGKAzMvS";
    const onToken = token => {
        alert("paymet Successfull")
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