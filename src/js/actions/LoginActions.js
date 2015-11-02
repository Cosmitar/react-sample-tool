'use strict'
import Dispatcher from './../core/appDispatcher';
import constants from './../core/loginConstants';
import Auth from './../core/AuthService';

let LoginActions = {
    loginUser( usr, pass ) {
        Auth.login( usr, pass ).then((user) => {
            Dispatcher.dispatch({
                type: constants.LOGIN_USER,
                data: user
            });
        },(err) => {
            alert('Wrong user name or password');
            console.log(err);
        });
    }
}

export default LoginActions;