'use strict'
import React, {Component} from 'react';
import Auth from '../core/AuthService';
import LoginActions from './../actions/LoginActions';

class AuthPage extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            password: ''
        };
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
        <div className="login panel-body center-block">
            <h1>Login</h1>
            <form role="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                        className="form-control" 
                        id="username" 
                        ref="username" 
                        placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        ref="password" 
                        placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
            </form>
        </div>
        </div>
        </div>)
    }

    getRefValue(refName) {
        return this.refs[refName].getDOMNode().value;
    }

    login(e) {
        e.preventDefault();
        LoginActions.loginUser( this.getRefValue('username'), this.getRefValue('password') );
    }
}

export default AuthPage;