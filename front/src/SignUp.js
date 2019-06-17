import React, { Component } from 'react';

class SignUp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname:'',
        };
    }

    handleChange = (event) => {
        this.setState({ 
            [event.target.name] : event.target.value 
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
    }

    render () {
        return (
            <div>
                <h1>{JSON.stringify(this.state)}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Your Password" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Verify Password" onChange={this.handleChange} />
                    <input type="firstname" name="firstname" placeholder="First Name" onChange={this.handleChange} />
                    <input type="lastname" name="lastname" placeholder="Last Name" onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SignUp;
