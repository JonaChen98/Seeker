import React from 'react'

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
                        <label className="login-item">Username</label>
                        <br />
                        <input className="login-item" type="text" name="username" />
                        <br />
                        <br />

                        <label className="login-item">Password</label>
                        <br />
                        <input className="login-item" type="password" name="password" />

                        <input type="submit" value="Login" />
                    </form>
                </div>
            </>
        )
    }
}

export default LoginForm