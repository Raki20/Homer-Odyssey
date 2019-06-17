import React, { Component } from 'react';

class SignUp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.email });
    }

    render () {
        return (
            <div>
                <h1>{this.state.email}</h1>
                <input type="email" name="email" onChange={this.handleChange} />
            </div>
        );
    }
}

export default SignUp;
