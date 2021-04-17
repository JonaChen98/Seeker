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
                <SignUpForm />
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
        const {name, value} = e.target
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
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }

    handleSubmit(e){
        alert('Successfully signed up', 2000);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    first fame
                </label>
                <br />
                <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} required />
                
                <br /><br />

                <label>
                    last name
                </label>
                <br />
                <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} placeholder="optional" />

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
                <input type="text" value={this.state.password} name="password" onChange={this.handleChange} />

                <br /><br />

                <button>Start Seeking</button>

            </form>
        )
    }
}

export default Login;