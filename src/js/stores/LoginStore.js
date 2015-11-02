'use strict'
import Dispatcher from './../core/appDispatcher';
import BaseStore from './BaseStore';
import {LOGIN_USER} from './../core/loginConstants';

class LoginStore extends BaseStore {
    constructor() {
        super();
        this._isLoggedIn = false;
        this._user = null;
        this.registerDispatcher();
    }

    registerDispatcher() {
        Dispatcher.register((action) => {
            switch(action.type) {

                case LOGIN_USER: {
                    this._isLoggedIn = true;
                    this._user = action.data;
                    this.emmitChange();
                    break;
                }

                default: {
                    break;
                }
            }
        });
    }

    get isLoggedIn() {
        return this._isLoggedIn;
    }
}
LoginStore.CHANGE_EVENT = 'LoginChange';

export default new LoginStore();