import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { SignInButtonContainer,SignInContainer,TitleContainer } from './SignIn.styles';
import { googleSigninStart,emailSigninStart } from '../../redux/user/user.action';


class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email , password} = this.state
        const { emailSigninStart } = this.props
        if(!email || ! password)
        {
            alert("Email or Password missing")
            return
        }
        try
        {
            emailSigninStart(email , password)
        }
        catch(err)
        {
            console.error("error---",err.message)
        }
        

    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const { email ,password} = this.state;
        const { signInWithGoogle } = this.props;
        return (
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Login with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        handleChange={this.handleChange}
                        label="Email"
                        value={email}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
    signInWithGoogle : () => dispatch(googleSigninStart()),
    emailSigninStart : ( email , password) => dispatch(emailSigninStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);