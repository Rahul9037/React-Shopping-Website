import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({children , isGoogleButton , ...otherProps}) => {
    return(
        <button className={`${isGoogleButton ? 'google-button' : ''} custom-button`} {...otherProps}>
            {children}
            </button>
    )
}

export default CustomButton;