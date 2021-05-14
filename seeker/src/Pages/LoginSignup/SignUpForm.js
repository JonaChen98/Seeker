import React from 'react'
import {Link} from 'react-router-dom'

class SignUpForm extends React.Component {
    constructor(){
        super();
        this.state={
            firstName: "",
            lastName: "",
            gender: "",
            password: "",
            email:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }

    handleSubmit(e){
        alert('Successfully signed up', 2000);
    }

    render() {
        return (
            <div className="login-signup-form">
                <form style={{textAlign:"left"}}>
                    <label className="signup_labels">
                        email
                    </label>
                    <br />
                    <input className="signup_text_field" type="text" value={this.state.email} name="email" onChange={this.handleChange} required />

                    <br />

                    <label className="signup_labels">
                        first name
                    </label>
                    <br />
                    <input className="signup_text_field" type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} required />
                    
                    <br />


                    <label className="signup_labels">
                        last name
                    </label>
                    <br />
                    <input className="signup_text_field" type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} placeholder="optional" />

                    <br />

                    <label className="signup_labels">gender
                        <br/ >
                        <select id="gender_selection_signup" name="gender" value={this.state.gender} onChange={this.handleChange}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="non-binary">non-binary</option>
                            <option value="other">other</option>
                        </select>
                    </label>

                    <br/>

                    <label>
                        set password
                    </label>
                    <br />
                    <input class="signup_text_field"  type="password" value={this.state.password} name="password" onChange={this.handleChange} />

                    <br /><br />
                    <Link to="/user_profile"><button id="start_seeking" type="submit" value="start seeking">start seeking</button></Link>
                    

                </form>
            </div>
        )
    }
}

export default SignUpForm