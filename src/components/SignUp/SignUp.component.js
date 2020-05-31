import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
//import './SignUp.styles.css';

import {SignUpContainer,TitleContainer} from './SignUp.styles';


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
        if (password !== confirmPassword) {
            alert("password dont match")
            return;
        }
        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        }
        catch (err) {
            //console.log("erro occured on sign up", err.message)
            console.error(err);
        }

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

export default SignUp;