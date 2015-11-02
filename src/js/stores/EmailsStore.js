'use strict'
import Dispatcher from './../core/appDispatcher';
//import {EventEmitter} from 'events';
import BaseStore from './BaseStore';
import {EMAILS_CHANGE} from './../core/constants';

class EmailsStore extends BaseStore {
    constructor() {
        super();
        this._emails = [];
    }

    registerDispatcher() {
        Dispatcher.register((action) => {
            switch(action.type) {

                case EMAILS_CHANGE: {
                    this._emails = action.data;
                    this.emmitChange();
                    break;
                }

                default: {
                    break;
                }
            }
        });
    }

    getEmails() {
        return this._emails;
    }
}

EmailsStore.CHANGE_EVENT = 'ToolChange';

export default new EmailsStore();