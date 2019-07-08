import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class SignIn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    updateField = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleChange = (event) => {
        this.setState({ 
            [event.target.name] : event.target.value 
        });
    }

    handleSubmit = (event) => {
        fetch("/auth/signin",
        {
            method:  'POST',
            headers:  new Headers({
                'Content-Type':  'application/json'
            }),
            body:  JSON.stringify(this.state),
        })
        .then(res  =>  res.json())
        .then(
            res  =>  this.setState({ 
                flash:  res.flash,
                submitted: true
            }),
            err  =>  this.setState({ 
                flash:  err.flash,
                submitted: true
            })
            )
            console.log(`user signed in: ${JSON.stringify(this.state)}`);
            event.preventDefault();
    }

    render () {
        return (
            <div>
                <h1>Sign In</h1>
                <div className={this.state.flash === "User has been signed in!" ? 'green' : 'red'}></div>
                {/* <Snackbar 
                    open={this.state.submitted}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message={<p>{this.state.flash}</p>}
                /> */}
                <form action="POST" onSubmit={this.handleSubmit}>
                    <TextField type="email" name="email" placeholder="Email" onChange={this.handleChange} />
                    <TextField type="password" name="password" placeholder="Your Password" onChange={this.handleChange} />
                    <Link to="/profile">
                        <Button type="submit" value="submit" variant="contained" color="secondary">Sign In</Button>
                    </Link>
                </form>
                <Link to="/signup">Sign Up</Link>
            </div>
        );
    }
}

export default SignIn;
