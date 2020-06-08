import React, { useState } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { SignInButtonContainer, SignInContainer, TitleContainer } from './SignIn.styles';
import { googleSigninStart, emailSigninStart } from '../../redux/user/user.action';


const SignIn = ({signInWithGoogle,emailSigninStart}) => {
    
    const [ userCredentials , setUserCredentials ] = useState({ email : '' , password : ''})

    const { email, password } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Email or Password missing")
            return
        }
        try {
            emailSigninStart(email, password)
        }
        catch (err) {
            console.error("error---", err.message)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserCredentials({ ...userCredentials , [name]: value })
    }
    
    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Login with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    handleChange={handleChange}
                    label="Email"
                    value={email}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    handleChange={handleChange}
                    label="Password"
                    value={password}
                    required
                />
                <SignInButtonContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleButton>{' '}Sign In With Google{' '}</CustomButton>
                </SignInButtonContainer>

            </form>
        </SignInContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(googleSigninStart()),
    emailSigninStart: (email, password) => dispatch(emailSigninStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);