import React from 'react';
//import './SignIn-SignUp.styles.css';
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';
import {SigInSignUpComponent } from './SignIn-SignUp.styles';

const SignInSignUp = () => {
    return(
        <SigInSignUpComponent>
            <SignIn/>
            <SignUp/>
        </SigInSignUpComponent>
    )
}

export default SignInSignUp;