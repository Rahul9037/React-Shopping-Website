import React from 'react';
//import './form-input.styles.css';
import { FormInputContainer,FormInputLabel,GroupContainer } from './form-input.styles';


const FormInput = ({ handleChange, label, ...otherFormProps }) => {
    
    return (
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...otherFormProps}/>
                {
                label ?
                    (<FormInputLabel {...otherFormProps}>
                        {label}
                      </FormInputLabel>)
                    : null
                }
        </GroupContainer>
    )
}

export default FormInput;