import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { Link } from "react-router-dom";

class SignUp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            verificationPassword: '',
            name: '',
            lastname:'',
            flash: '',
            submitted: false
        }
    }

    updateField = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    flashColor = () => {
        this.state.flash === "User has been signed up!" ? this.setState({
            backgroundColor: 'green'
        }) : this.setState({
            backgroundColor: 'red'
            }) 
        }
    handleChange = (event) => {
        this.setState({ 
            [event.target.name] : event.target.value 
        });
    }

    handleSubmit = (event) => {
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
            res  =>  this.setState({ 
                flash:  res.flash,
                submitted: true
            }),
            err  =>  this.setState({ 
                flash:  err.flash,
                submitted: true
            })
            )
            console.log(`form submited: ${JSON.stringify(this.state)}`);
            event.preventDefault();
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({submitted: false});
    };

    render () {
        return (
            <div>
                <h1>Sign Up</h1>
                <div className={this.state.flash === "User has been signed up!" ? 'green' : 'red'}></div>
                <Snackbar 
                    open={this.state.submitted}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message={<p>{this.state.flash}</p>}
                />
                <form action="POST" onSubmit={this.handleSubmit}>
                    <TextField type="email" name="email" placeholder="Email" onChange={this.handleChange} />
                    <TextField type="password" name="password" placeholder="Your Password" onChange={this.handleChange} />
                    <TextField type="password" name="password" placeholder="Verify Password" onChange={this.handleChange} />
                    <TextField type="name" name="name" placeholder="First Name" onChange={this.handleChange} />
                    <TextField type="lastname" name="lastname" placeholder="Last Name" onChange={this.handleChange}/>
                   <Link to="/">
                    <Button type="submit" value="submit" variant="contained" color="secondary">Submit</Button>
                   </Link>
                </form>
                <Link to="/signin">Sign In</Link>
            </div>
        );
    }
}

export default SignUp;
