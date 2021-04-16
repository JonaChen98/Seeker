import React from 'react'
import './login_signup.css'

class Login extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <>
                <div className="login">
                    <p id="seeker_landing">Seeker</p>
                    <div id="forms">
                        <div id="login_form" className="form"></div>
                        <div id="signup_form" className="form"></div>
                    </div>
                </div>
            </>
        )
    }
}

class LoginForm extends React.Component
{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        };

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e)
    {
        const {name, password} = e.target
        this.setState({ [name]: value })
    }

    render() {
        return(
            <>
                <div>
                    <div>
                        <div>
                            <label><input type="text" name="username" />Username</label>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

class SignUpForm extends React.Component {
    constructor(){
        super();
        this.state={}
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Login;