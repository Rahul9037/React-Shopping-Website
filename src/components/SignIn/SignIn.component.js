import React, { Component } from 'react';
import './SignIn.styles.css';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle , auth  } from '../../firebase/firebase.utils';

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
        if(!email || ! password)
        {
            alert("Email or Password missing")
            return
        }
        try
        {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({ email: '', password: '' })
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
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
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
                    <div className="signIn-button">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleButton>{' '}Sign In With Google{' '}</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;