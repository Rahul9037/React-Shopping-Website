import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
//import './SignUp.styles.css';

import { SignUpContainer, TitleContainer } from './SignUp.styles';

import { signUpStart } from '../../redux/user/user.action';


class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        const { signUpStart } = this.props
        if (password !== confirmPassword) {
            alert("password dont match")
            return;
        }
        signUpStart({ email, password, displayName })
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }
        handleChange = event => {
            const { name, value } = event.target;
            this.setState({ [name]: value })
        }

    

        render() {
            const { displayName, email, password, confirmPassword } = this.state;
            return (
                <SignUpContainer>
                    <TitleContainer>I dont have an account</TitleContainer>
                    <span>Sign Up with your email and password</span>
                    <form className="sign-up-form" onSubmit={this.handleSubmit}>
                        <FormInput
                            type="text"
                            name="displayName"
                            handleChange={this.handleChange}
                            value={displayName}
                            label="Display Name"
                            required
                        />
                        <FormInput
                            type="email"
                            name="email"
                            handleChange={this.handleChange}
                            value={email}
                            label="Email"
                            required
                        />
                        <FormInput
                            type="password"
                            name="password"
                            handleChange={this.handleChange}
                            value={password}
                            label="Password"
                            required
                        />
                        <FormInput
                            type="password"
                            name="confirmPassword"
                            handleChange={this.handleChange}
                            value={confirmPassword}
                            label="Confirm Password"
                            required
                        />
                        <CustomButton type="submit">SIGN UP</CustomButton>
                    </form>
                </SignUpContainer>
            );
        }
    }

    const mapDispatchToProps = dispatch => ({
        signUpStart: signUpDetails => dispatch(signUpStart(signUpDetails))
    })

    export default connect(null, mapDispatchToProps)(SignUp);