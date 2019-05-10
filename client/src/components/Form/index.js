import React, { Component } from "react";
import "./style.css";
import Axios from "axios";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import FormControl from "react-bootstrap/FormControl";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "react-bootstrap/Button";


class Form extends Component {
  state = {
    signInEmail: '',
    signInPassword: '',
    signUpEmail: '',
    signUpPassword: ''
  }


  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;


    this.setState({
      [name]: value

    });

    console.log(value);
    // console.log(this.state.signUpEmail)
    console.log(this.state)
  };

  onSignUp = event => {
    event.preventDefault()
    console.log('sign-up-form, email: ');
   


    Axios.post('/api/signup', {
      email: this.state.signUpEmail,
      password: this.state.signUpPassword
    })
      .then(response => {
        console.log(response)
        if (response.data) {
          console.log('successful signup')
          this.setState({
            redirectTo: '/login'
          })
        } else {
          console.log('Sign-up error');
        }
      }).catch(error => {
        console.log('Sign up error: ')
        console.log(error);
      })

  }

  onSignIn = event => {
    event.preventDefault()
    console.log('sign-in, email: ');
    console.log(event);
    console.log(this.state);

    Axios.post('/api/login', {
      email: this.state.signInEmail,
      password: this.state.signInPassword
    })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          })
          this.setState({
            redirectTo: '/'
          })
        }
      }).catch(error => {
        console.log('Login error: ')
        console.log(error);
      })

  }


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <div className="jumbotron">
  <div className="container">
    <p className="lead"></p>
  </div>
      <div id="signin">
        <h1>Let's Get Started!</h1>
        <p>Sign In</p>
        <input type='email'
          name='signInEmail'
          placeholder="email"
          value={this.state.signInEmail}
          onChange={this.handleChange}
        />
        <br />
        <input type='password'
          name='signInPassword'
          placeholder="password"
          value={this.state.signInPassword}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.onSignIn} className="btn-success">Sign In</button>
        <br />
        <br />
        <p>Sign Up</p>
        <input type='Email'
          placeholder="Email"
          name='signUpEmail'
          value={this.state.signUpEmail}
          onChange={this.handleChange}
        />
        <br />
        <input type='Password'
          placeholder='Password'
          name='signUpPassword'
          value={this.state.signUpPassword}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.onSignUp} className="btn-info">Sign Up</button>
        </div>
        </div>
      </div>

    )
  }
}

export default Form;
