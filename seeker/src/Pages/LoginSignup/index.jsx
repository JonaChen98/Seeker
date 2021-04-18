import React from 'react'
import './login_signup.css'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import ImageGrid from './ImageGrid'

class LoginSignup extends React.Component
{
    constructor()
    {
        super();
        this.state={}
    }

    render(){
        return (
            <>
                <div className="login-signup-container" style={{display:"flex", flexDirection:"row"}}>
                    <ImageGrid className="login-signup-item" />
                    <LoginForm className="login-signup-item" />
                    {/* CONDITIONAL RENDERING HERE; SHOW EITHER LOGIN OR SIGNUP PAGE */}
                </div>
            </>
        )
    }
}

export default LoginSignup