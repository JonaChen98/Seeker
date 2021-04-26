import React from 'react'
import './login_signup.css'

import auth from '../services/auth';

class LoginForm extends React.Component
{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    login = (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        auth.authenticate(email, password)
          .catch((err) => {
            this.setState({ failed: true });
            console.log(err);
          });
      }
    
    

    handleChange(e)
    {
        const {email, value} = e.target
        this.setState({ [email]: value })
    }

    //  handleSubmit(e){
    //     //  alert('Successfully logged in', 2000);
    //  }

    render() {
        return(
            <>
                <div className="login-container" className="login-signup-form">
                    <form onSubmit={this.login}>
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
                        <button id="loginbutton" type="submit" value="login">login</button>
                    </form>
                </div>
            </>
        )
    }
}

export default LoginForm