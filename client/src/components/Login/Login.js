import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';
import './login.css';

class Login extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      username: '',
      password: '',
      loading: false
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = (e) => {
    this.setState({
      loading: true
    });
    e.preventDefault();
    const { username, password } = this.state;

    if (username === 'admin' && password === 'admin') {
      window.location.replace('/');
    }
  };
  render() {
    return (
      <div className='login-box'>
        <div className='lb-header'>
          <p>Đăng nhập</p>
        </div>
        <div className='social-login'>
          <a href='https://facebook.com'>
            <img id='social-icon' src={require('../../assets/img/facebook.png')} />
            Login in with facebook
          </a>
          <a href='https://accounts.google.com'>
            <img id='social-icon' src={require('../../assets/img/search.png')} />
            log in with Google
          </a>
        </div>
        <Form className='login-form'>
          <div className='u-form-group'>
            <Input
              type='email'
              placeholder='ID'
              value={this.state.username}
              onChange={this.onChange}
              name='username'
              required
            />
          </div>
          <div className='u-form-group'>
            <Input
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.onChange}
              name='password'
              required
            />
          </div>
          {!this.state.loading ? (
            <div className='u-form-group'>
              <Button color='success' onClick={this.submitForm}>
                Login
              </Button>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div className='spinner-border text-success'></div>
            </div>
          )}
          <div className='u-form-group'>
            <a href='#' className='forgot-password'>
              Forgot password?
            </a>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
