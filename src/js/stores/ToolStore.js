'use strict'
import Dispatcher from './../core/appDispatcher';
//import {EventEmitter} from 'events';
import BaseStore from './BaseStore';
import {COMMENT_ADD,URL_ADD} from './../core/constants';

class ToolStore extends BaseStore {
    constructor(){
        super();
        this._comment = '';
        this._dropboxUrl = '';
        this.registerDispatcher();
    }

    registerDispatcher() {
        Dispatcher.register((action) => {
            switch(action.type) {

                case COMMENT_ADD: {
                    this._comment = action.text;
                    this.emmitChange();
                    break;
                }

                case URL_ADD: {
                    this._dropboxUrl = action.text;
                    this.emmitChange();
                    break;
                }

                default: {
                    break;
                }
            }
        });
    }

    getDropboxUrl() {
        return this._dropboxUrl;
    }

    getComment() {
        return this._comment;
    }

}

ToolStore.CHANGE_EVENT = 'ToolChange';

export default new ToolStore();