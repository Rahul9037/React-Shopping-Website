import React , { Component } from 'react';

import { ErrorImageContainer,ErrorImageOverlay,ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends Component {

    constructor()
    {
        super()
        this.state = { 
            hasError : false
        }
    }

    static getDerivedStateFromError(error)
    {
        return { hasError : true};
    }

    componentDidCatch(error , info){
        console.log(error);
    }

    render ()
    { 
        if(this.state.hasError){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/DWO5Hzg.png"/>
                    <ErrorImageText>This Page is Broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;