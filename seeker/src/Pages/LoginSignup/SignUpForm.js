import React from 'react'

class SignUpForm extends React.Component {
    constructor(){
        super();
        this.state={
            firstName: "",
            lastName: "",
            gender: "",
            password: ""
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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        first name
                    </label>
                    <br />
                    <input class="signup_text_field" type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} required />
                    
                    <br />

                    <label>
                        last name
                    </label>
                    <br />
                    <input class="signup_text_field" type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} placeholder="optional" />

                    <br /><br />

                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                            required
                        /> male
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                            required
                        /> female
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "Non-Binary"}
                            onChange={this.handleChange}
                            required
                        /> non-binary
                    </label>

                    <br /><br />

                    <label>
                        set password
                    </label>
                    <br />
                    <input class="signup_text_field"  type="text" value={this.state.password} name="password" onChange={this.handleChange} />

                    <br /><br />
                    

                </form>
            </div>
        )
    }
}

export default SignUpForm