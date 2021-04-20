import React from 'react'
import './login_signup.css'

class LoginForm extends React.Component
{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e)
    {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e){
        alert('Successfully logged in', 2000);
    }

    render() {
        return(
            <>
                <div className="login-container" className="login-signup-form">
                    <form onSubmit={this.handleSubmit}>
                        <label className="login-item">username</label>
                        <br />
                        <input class="login_text_field login-item" type="text" name="username" />
                        <br />
                        <br />

                        <label className="login-item">password</label>
                        <br />
                        <input class="login_text_field login-item" type="password" name="password" />

                        <br />
                        <br />

                    </form>
                </div>
            </>
        )
    }
}

export default LoginForm