import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
//import './SignUp.styles.css';

import { SignUpContainer, TitleContainer } from './SignUp.styles';

import { signUpStart } from '../../redux/user/user.action';


const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password dont match")
            return;
        }
        signUpStart({ email, password, displayName })
    
    }
    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }



    return (
        <SignUpContainer>
            <TitleContainer>I dont have an account</TitleContainer>
            <span>Sign Up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    handleChange={handleChange}
                    value={displayName}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    handleChange={handleChange}
                    value={email}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    handleChange={handleChange}
                    value={password}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    handleChange={handleChange}
                    value={confirmPassword}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
}


const mapDispatchToProps = dispatch => ({
    signUpStart: signUpDetails => dispatch(signUpStart(signUpDetails))
})

export default connect(null, mapDispatchToProps)(SignUp);