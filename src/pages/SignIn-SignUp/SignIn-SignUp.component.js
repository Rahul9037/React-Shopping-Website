import React from 'react';
import './SignIn-SignUp.styles.css';
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';

const SignInSignUp = () => {
    return(
        <div className="sign-in-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInSignUp;