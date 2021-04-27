import React, {useState} from 'react'
import './login_signup.css'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import ImageGrid from './ImageGrid'
import './index.css'

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
        if((this.props.location.state.fromLogin === true) || (this.props.location.state.fromLogin === false)) {
            const fromLogin  = this.props.location.state.fromLogin
            this.setState({showLogin: fromLogin})
        }
        else {
            this.setState({showLogin: true})
        }
    }

    changeForm(e){
        if(this.state.showLogin)
        {
            this.setState({showLogin: true ? false : true})
        }
    }

    render(){
        if(this.state.showLogin === false) {
            return (
                <>
                    <div id="login-signup-container" style={{display:"flex", flexDirection:"row"}}>
                        <ImageGrid />
                        <div id="forms_container">
                            <div id="form">
                                <h3 id="formtitle">Seeker</h3>
                                <div  id="two_buttons">
                                    <button onClick={() => this.setState({showLogin : true})} class="login_signup_button" style={{color:"black",backgroundColor:"transparent"}}>login</button>
                                    <button onClick={() => this.setState({showLogin : false})} onClick={this.onChange}  class="login_signup_button" style={{backgroundColor:"#5e6472", color:"white"}}>signup</button>
                                </div>
                                    <br />
                                    <div> 
                                        <SignUpForm /> 
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