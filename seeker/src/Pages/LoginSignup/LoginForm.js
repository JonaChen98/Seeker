import React from 'react'
import './login_signup.css'
import {Link} from 'react-router-dom'
import auth from '../../Services/auth';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component
{
    constructor(){
        super();
        this.state= {
            redirectToProfile: false,
            email:"",
            password:"",
            failed: false,

        };

        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleChange(e)
    // {
    //     const {name, value} = e.target
    //     this.setState({ [name]: value })
    // }
    fieldChanged = (name) => {
        return (event) => {
          let { value } = event.target;
          this.setState({ [name]: value });
        }
      }
    // handleSubmit(e){
    //     alert('Successfully logged in', 2000);
    // }

    login = (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        auth.authenticate(email, password)
          // .then((user) => {
          //   this.setState({ redirectToProfile: true });
          // })
          // .catch((err) => {
          //   this.setState({ failed: true });
          // });
      }
    

    render() {
        // const { redirectToProfile, failed } = this.state;
        // if (redirectToProfile) {
        //   return <Redirect to= '/user_profile'/>;
        // }
    
        // let err = "";
        // if (failed) {
        //  err = <div className="alert alert-danger" role="alert">Login Failed</div>;
        // }
        return(
            <>
                <div className="login-container" className="login-signup-form">
                    <form onSubmit = {this.login} style={{textAlign:"left"}}> 
                        <label className="login-item">username</label>
                        <br />
                        <input class="login_text_field login-item" type="text" name="username"  onChange={this.fieldChanged('email')} />
                        <br />
                        <br />

                        <label className="login-item">password</label>
                        <br />
                        <input class="login_text_field login-item" type="password" name="password" onChange={this.fieldChanged('password')} />

                        <br />
                        <br />
                        {/* <Link to="/user_profile"> */}
                            <button id="loginbutton" type="submit" value="login">login</button>
                            {/* </Link> */}
                        
                    </form>
                </div>
            </>
        )
    }
}

export default LoginForm