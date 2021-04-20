import React, {useState} from 'react'
import './login_signup.css'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import ImageGrid from './ImageGrid'

class LoginSignup extends React.Component
{
    constructor(props) {
        super(props);
        this.state= {
            showLogin: null
        }

        this.changeForm = this.changeForm.bind(this)
    }

    forceUpdateHandler(){
        this.forceUpdate();
      };

    componentDidMount() {
        const fromLogin  = this.props.location.state.fromLogin
        this.setState({showLogin: fromLogin})
    }

    changeForm(e){
        if(this.state.showLogin)
        {
            this.setState({showLogin: true ? false : true})
        }
    }

    // componentDidUpdate() {
    //     if(this.state.showLogin) {
    //         console.log("wants login")
    //     }
    //     else {
    //         console.log("wants signup")
    //     }
    // }

    render(){
        if(this.state.showLogin === false) {
            return (
                <>
                    <div id="login-signup-container" style={{display:"flex", flexDirection:"row"}}>
                        <ImageGrid />
                        <div id="forms_container">
                            <div id="form">
                                {/* <div> */}
                                <h3 id="formtitle">Seeker</h3>
                                {/* </div> */}
                                <div id="two_buttons">
                                    <button onClick={() => this.setState({showLogin : true})} class="login_signup_button" style={{color:"black",backgroundColor:"transparent"}}>login</button>
                                    <button onClick={() => this.setState({showLogin : false})} onClick={this.onChange}  class="login_signup_button" style={{backgroundColor:"#5e6472", color:"white"}}>signup</button>
                                </div>
                                    <br />
                                    <div> 
                                        <SignUpForm /> 
                                        <button id="start_seeking" type="submit" value="start seeking">start seeking</button>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div id="login-signup-container" style={{display:"flex", flexDirection:"row"}}>
                        <ImageGrid />
                        <div id="forms_container">
                            <div id="form">
                                {/* <div> */}
                                <h3 id="formtitle">Seeker</h3>
                                {/* </div> */}
                                <div id="two_buttons">
                                    <button onClick={() => this.setState({showLogin : true})} class="login_signup_button" style={{color:"white",backgroundColor:"#5e6472"}}>login</button>
                                    <button onClick={() => this.setState({showLogin : false})}  class="login_signup_button" style={{backgroundColor:"transparent", color:"black"}}>signup</button>
                                </div>
                                    <br />
                                    <div> 
                                        <LoginForm /> 
                                        <button id="loginbutton" type="submit" value="login">login</button>
                                    </div>
                                    
                                
                            </div>
                        </div>
                        
                    </div>
                </>
            )
        }
    }
}

export default LoginSignup