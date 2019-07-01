import React, { Component } from 'react';

class SignUp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            lastname:'',
            flash: '',
        };
    }

    handleChange = (event) => {
        this.setState({ 
            [event.target.name] : event.target.value 
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("/auth/signup",
        {
            method:  'POST',
            headers:  new Headers({
                'Content-Type':  'application/json'
            }),
            body:  JSON.stringify(this.state),
        })
        .then(res  =>  res.json())
        .then(
            res  =>  this.setState({ flash:  res.flash}),
            err  =>  this.setState({ flash:  err.flash})
            )
            console.log(`form submited: ${JSON.stringify(this.state)}`);
    }

    render () {
        return (
            <div>
                <p>{this.state.flash}</p>
                <h1>SignUp</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Your Password" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Verify Password" onChange={this.handleChange} />
                    <input type="name" name="name" placeholder="First Name" onChange={this.handleChange} />
                    <input type="lastname" name="lastname" placeholder="Last Name" onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SignUp;
