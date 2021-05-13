import React, {useState} from 'react'
import './login_signup.css'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import ImageGrid from './ImageGrid'
import friends1 from './friends1.jpeg'
import presentation from '../../images/presentation.jpeg'
import friends2 from './friends2.jpeg'
import friendgroup from '../../images/friend_group.jpeg'
import friends3 from './friends3.jpeg'
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
                        {/* <ImageGrid /> */}
                        <div id="forms_container">
                            <div id="form">
                                <h3 id="formtitle">Seeker</h3>
                                <div  id="two_buttons">
                                    <button onClick={() => this.setState({showLogin : true})} class="login_signup_button" style={{color:"black",backgroundColor:"transparent"}}>login</button>
                                    <button onClick={() => this.setState({showLogin : false})} onClick={this.onChange}  class="login_signup_button" style={{backgroundColor:"black", color:"white"}}>signup</button>
                                </div>
                                    <br />
                                    <div> 
                                        <SignUpForm /> 
                                    </div>
                            </div>
                        </div>
                        <img style={{position:"relative",zIndex:"1",marginLeft:"400px",width:"37.3vw",height:"100vh",objectFit:"cover"}} src={friends3} />
                        <img style={{position:"relative",zIndex:"1",width:"35vw",height:"100vh",objectFit:"cover"}} src={presentation} />
                        
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div id="login-signup-container" style={{display:"flex", flexDirection:"row"}}>
                        <div style={{zIndex:"10"}} id="forms_container">
                            <div id="form">
                                {/* <div> */}
                                <h3 id="formtitle">Seeker</h3>
                                {/* </div> */}
                                <div id="two_buttons">
                                    <button onClick={() => this.setState({showLogin : true})} class="login_signup_button" style={{color:"white",backgroundColor:"black"}}>login</button>
                                    <button onClick={() => this.setState({showLogin : false})}  class="login_signup_button" style={{backgroundColor:"transparent", color:"black"}}>signup</button>
                                </div>
                                    <br />
                                    <div> 
                                        <LoginForm /> 
                                        
                                    </div>
                            </div>
                            {/* <ImageGrid /> */}
                        </div>
                        {/* <img src={friendgroup} style={{position:"relative",zIndex:"1",marginLeft:"400px",objectFit:"cover",height:"100vh",width:"72.1vw"}} /> */}
                        <img style={{position:"relative",zIndex:"1",marginLeft:"400px",width:"37.3vw",height:"100vh",objectFit:"cover"}} src={friends3} />
                        <img style={{position:"relative",zIndex:"1",width:"35vw",height:"100vh",objectFit:"cover"}} src={presentation} />
                        
                    </div>
                </>
            )
        }
    }
}

export default LoginSignup