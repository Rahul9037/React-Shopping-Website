import React from 'react';
//import './custom-button.styles.css';
import {CustomButtonContainer} from './custom-button.styles';

// const CustomButton = ({children , isGoogleButton , inverted , ...otherProps}) => {
//     return(
//         <button className={`${inverted ? 'inverted' : ''} ${isGoogleButton ? 'google-button' : ''} custom-button`} {...otherProps}>
//             {children}
//             </button>
//     )
// }

const CustomButton = ({children , ...props}) => {
    return(
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton;